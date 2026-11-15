/**
 * Sabrina Von Arx — reviews backend (Google Apps Script)
 *
 * The website POSTs new reviews here; they are added to the sheet unapproved.
 * Ticking the "Aprobado" checkbox publishes a review on the site (GET).
 * Setup steps: see README.md in this folder.
 */

const SHEET_NAME = 'Reseñas';
const HEADERS = ['Fecha', 'Nombre', 'Categoría', 'Estrellas', 'Detalle', 'Reseña', 'Idioma', 'Aprobado'];
const CATEGORIES = { lessons: 'Clases', events: 'Eventos' };
const NOTIFY_EMAIL = 'sabrinadbenedicto@gmail.com';   // who gets an email for each new review ('' = none)
const MAX_PER_HOUR = 30;           // simple flood guard

/** Run once from the editor: creates the tab, headers, dropdown and checkboxes. */
function setup() {
  const sh = getSheet_();
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sh.setFrozenRows(1);
  sh.getRange('C2:C').setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(Object.values(CATEGORIES), true).build());
  sh.getRange('D2:D').setDataValidation(
    SpreadsheetApp.newDataValidation().requireNumberBetween(1, 5).build());
  sh.getRange('H2:H').setDataValidation(
    SpreadsheetApp.newDataValidation().requireCheckbox().build());
  sh.setColumnWidth(6, 420);
  sh.getRange('F:F').setWrap(true);
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Public list of approved reviews, newest first. */
function doGet() {
  const rows = getSheet_().getDataRange().getValues().slice(1);
  const reviews = rows
    .filter((r) => r[7] === true && r[1] && r[5])
    .map((r) => ({
      date: r[0] instanceof Date ? r[0].toISOString().slice(0, 10) : '',
      name: String(r[1]),
      category: String(r[2]).trim().toLowerCase().startsWith('clase') ? 'lessons' : 'events',
      rating: Math.min(5, Math.max(1, Number(r[3]) || 5)),
      detail: String(r[4] || ''),
      text: String(r[5]),
    }))
    .reverse();
  return json_({ ok: true, reviews });
}

/** New review from the website — stored unapproved. */
function doPost(e) {
  let d;
  try {
    d = JSON.parse(e.postData.contents);
  } catch (_) {
    return json_({ ok: false, error: 'bad-request' });
  }
  if (d.website) return json_({ ok: true });   // honeypot filled → bot; pretend success

  const name = clean_(d.name, 60);
  const text = clean_(d.text, 1000, true);
  const detail = clean_(d.detail, 80);
  const category = CATEGORIES[d.category];
  const rating = Math.round(Number(d.rating));
  const lang = ['en', 'es', 'ar'].includes(d.lang) ? d.lang : '';

  if (!name || text.length < 5 || !category || !(rating >= 1 && rating <= 5)) {
    return json_({ ok: false, error: 'invalid' });
  }

  const cache = CacheService.getScriptCache();
  const count = Number(cache.get('posts') || 0);
  if (count >= MAX_PER_HOUR) return json_({ ok: false, error: 'busy' });
  cache.put('posts', String(count + 1), 3600);

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    getSheet_().appendRow([new Date(), name, category, rating, detail, text, lang, false]);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    try {
      MailApp.sendEmail({
        to: NOTIFY_EMAIL,
        subject: `Nueva reseña (${category}) de ${name}`,
        body: `${'★'.repeat(rating)}  ${detail}\n\n${text}\n\n` +
          `Para publicarla, marcá "Aprobado" en la planilla:\n${SpreadsheetApp.getActiveSpreadsheet().getUrl()}`,
      });
    } catch (_) { /* the review is saved even if the email fails */ }
  }
  return json_({ ok: true });
}

/** Trim, cap length, and stop the sheet from treating input as a formula. */
function clean_(v, max, multiline) {
  let s = String(v || '');
  s = multiline ? s.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n') : s.replace(/\s+/g, ' ');
  s = s.trim().slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}
