/* ==========================================================
   Sabrina Von Arx — site behaviour & translations (EN / ES / AR)
   ========================================================== */

// ---- Contact details ----
const CONFIG = {
  whatsapp: "971581702195",               // +971 58 170 2195 — international format, digits only
  email: "sabrinadbenedicto@gmail.com",
  instagram: "https://www.instagram.com/sabrinavonarx.violin/",
  // Google Apps Script web-app URL for reviews (see reviews-backend/README.md).
  // Empty = reviews are sent by email instead and none are listed.
  reviewsEndpoint: "",
};

// ---- Lesson availability, in Dubai time. Edit to match Sabrina's real schedule ----
const SCHEDULE = {
  // Start times offered on each weekday (0 = Sunday … 6 = Saturday). [] = no lessons that day.
  lessons: {
    0: [],
    1: ["15:00", "16:00", "17:00", "18:00", "19:00"],
    2: ["15:00", "16:00", "17:00", "18:00", "19:00"],
    3: ["15:00", "16:00", "17:00", "18:00", "19:00"],
    4: ["15:00", "16:00", "17:00", "18:00", "19:00"],
    5: ["15:00", "16:00", "17:00", "18:00", "19:00"],
    6: ["10:00", "11:00", "12:00", "13:00"],
  },
  blocked: [],              // days off, e.g. "2026-12-25"
  minNoticeDays: 1,         // earliest lesson: tomorrow
  lessonHorizonDays: 120,   // how far ahead lessons can be booked
  eventHorizonDays: 730,    // how far ahead events can be requested
};

const I18N = {
  en: {
    "meta.title": "Sabrina Von Arx · Piano & Violin · Dubai",
    "meta.description": "Piano and violin lessons in person and online, and live piano & violin music for weddings, memorials and events in Dubai.",
    "nav.about": "About",
    "nav.lessons": "Lessons",
    "nav.events": "Events",
    "nav.contact": "Contact",
    "nav.book": "Book",

    "hero.eyebrow": "Piano & Violin · Dubai",
    "hero.title": "Music for the moments that matter.",
    "hero.lead": "Piano and violin lessons in person and online, and live piano & violin performances for weddings, memorials and private events across the UAE.",
    "hero.cta1": "Book a lesson",
    "hero.cta2": "Plan your event",
    "anim.listen": "Listen",
    "anim.mute": "Mute",

    "about.eyebrow": "About",
    "about.p1": "A pianist and violinist based in Dubai, Sabrina brings warmth and precision to every lesson and every performance.",
    "about.p2": "Whether you are sitting at a piano for the first time or choosing the music for the most important day of your life, she listens first — and then shapes the music around you.",
    "about.s1a": "In person · Online",
    "about.s1b": "Piano & violin lessons",
    "about.s2a": "Piano · Violin · Duo",
    "about.s2b": "Live performances",
    "about.s3a": "Dubai & UAE",
    "about.s3b": "Based in Dubai",

    "lessons.eyebrow": "Piano & violin lessons",
    "lessons.title": "Learn at your own pace.",
    "lessons.lead": "Personalised one-to-one piano and violin lessons for children and adults, from first notes to advanced repertoire.",
    "lessons.in.title": "In person",
    "lessons.in.text": "Lessons in Dubai at the studio or in your home, with focused, personal attention.",
    "lessons.in.l1": "Children (5+) and adults",
    "lessons.in.l2": "Beginner to advanced",
    "lessons.in.l3": "45 or 60 minute sessions",
    "lessons.on.title": "Online",
    "lessons.on.text": "Live video lessons from anywhere in the world, with the same structure and personal feedback.",
    "lessons.on.l1": "Zoom, Google Meet or FaceTime",
    "lessons.on.l2": "Flexible scheduling across time zones",
    "lessons.on.l3": "Written practice notes after every class",
    "lessons.focus": "What we work on",
    "lessons.t1": "Technique",
    "lessons.t2": "Sight-reading",
    "lessons.t3": "Music theory",
    "lessons.t4": "Classical repertoire",
    "lessons.t5": "Pop & film music",
    "lessons.t6": "Exam preparation",
    "lessons.cta": "Request a trial lesson",

    "events.eyebrow": "Live music",
    "events.title": "Piano & violin for life's ceremonies.",
    "events.lead": "Elegant live music tailored to your event — from the first entrance to the last note.",
    "events.w.title": "Weddings",
    "events.w.text": "Ceremony, nikah, entrance and reception. Your favourite songs, arranged for piano and violin.",
    "events.m.title": "Memorials",
    "events.m.text": "Gentle, respectful music to honour and remember a loved one.",
    "events.c.title": "Corporate & gala",
    "events.c.text": "Refined background music for dinners, launches and receptions.",
    "events.p.title": "Private celebrations",
    "events.p.text": "Anniversaries, proposals, birthdays and intimate gatherings.",
    "events.formats": "Formats",
    "events.f1": "Solo piano",
    "events.f2": "Solo violin",
    "events.f3": "Piano & violin duo",
    "events.process": "How it works",
    "events.s1.t": "Tell us about your day",
    "events.s1.d": "Date, venue and the atmosphere you imagine.",
    "events.s2.t": "We shape the repertoire",
    "events.s2.d": "A suggested set list, with room for your special requests.",
    "events.s3.t": "We play, you enjoy",
    "events.s3.d": "Early arrival, full setup and music without worries.",
    "events.cta": "Check availability",

    "form.name": "Name",
    "form.message": "Message",
    "form.placeholder": "Tell us a little more…",
    "form.submit": "Send via WhatsApp",
    "form.email": "Send by email",
    "form.error": "Please add your name.",
    "msg.greeting": "Hello Sabrina,",
    "msg.name": "Name",
    "msg.subject": "Enquiry",

    "footer.place": "Dubai, United Arab Emirates",
    "dubai.eyebrow": "Dubai · UAE",
    "dubai.title": "Live music across Dubai.",
    "dubai.lead": "From Downtown to the Marina — weddings, galas and private celebrations, wherever your day takes place.",
    "dubai.cta": "Book live music",
    "media.about": "Violin and bow resting on sheet music",
    "media.lessonIn": "A child's hands on the piano keys",
    "media.lessonOn": "Sheet music on a digital piano",
    "media.wedding": "Violinist performing at a wedding",
    "media.memorial": "White candles and flowers at a ceremony",
    "media.gala": "Event stage with lights and flowers",
    "media.celebration": "Elegant dinner tables among greenery",
    "gallery.eyebrow": "Gallery",
    "gallery.title": "Moments in music.",
    "gallery.lead": "Lessons, rehearsals and performances — music in everyday life.",
    "gallery.label": "Photo gallery",
    "gallery.prev": "Previous photos",
    "gallery.next": "Next photos",
    "gallery.violin-stand": "Violinist reading sheet music on a stand",
    "gallery.piano-lesson": "Girl learning the piano",
    "gallery.violinist-stage": "Violinist performing on stage",
    "gallery.violin-detail": "Close-up of a violin",
    "gallery.piano-hands": "Hands playing an upright piano",
    "gallery.violin-lesson": "Girl practising the violin",
    "gallery.violin-wood": "Violin resting on a wooden piano",
    "gallery.piano-first-notes": "Small hands playing their first notes",
    "gallery.violinist-white": "Violinist in a white dress playing",
    "gallery.violin-score": "Violin and bow on sheet music",
    "gallery.violin-table": "Violin and sheet music on a table",
    "gallery.piano-white": "Boy playing a white piano",
    "theme.toggle": "Switch light / dark mode",

    "book.eyebrow": "Book",
    "book.title": "Book your lessons or your event.",
    "book.lead": "Choose what you need and send your request — Sabrina will confirm availability and the next steps personally.",
    "book.tabs": "Booking type",
    "book.tab.lessons": "Lessons",
    "book.tab.event": "Event",
    "book.tab.other": "Other enquiry",
    "book.l.instrument": "Instrument",
    "book.piano": "Piano",
    "book.violin": "Violin",
    "book.l.pack": "Package",
    "book.p1.t": "Trial lesson",
    "book.p1.d": "One lesson to meet and set goals",
    "book.p4.t": "4 lessons",
    "book.p4.d": "One month, once a week",
    "book.p8.t": "8 lessons",
    "book.p8.d": "Two months, or twice a week",
    "book.p12.t": "12 lessons",
    "book.p12.d": "A full term",
    "book.l.packNote": "Sabrina will confirm prices with your booking.",
    "book.l.format": "Format",
    "book.inperson": "In person",
    "book.online": "Online",
    "book.l.duration": "Lesson length",
    "book.min45": "45 min",
    "book.min60": "60 min",
    "book.l.where": "Where",
    "book.studio": "At the studio",
    "book.home": "At my home",
    "book.l.area": "Area in Dubai (optional)",
    "book.l.areaPh": "e.g. JLT, Downtown, Arabian Ranches",
    "book.l.when": "Days & times",
    "book.l.count": "{n} of {total} lessons chosen",
    "book.l.countTrial": "Choose the day and time for your trial lesson.",
    "book.l.pickDay": "Tap the days you'd like on the calendar.",
    "book.l.tapHint": "Tap a chosen day again to remove it.",
    "book.l.time": "Time",
    "book.err.lessonTime": "Choose a time for each lesson.",
    "book.l.weekly": "Same day & time every week",
    "book.l.full": "You've chosen all your lessons — remove one to pick another day.",
    "book.tz": "Times are in Dubai time (GST, UTC+4).",
    "book.l.student": "About the student",
    "book.l.who": "Lessons for",
    "book.whoMe": "Me",
    "book.whoChild": "My child",
    "book.l.age": "Age (optional)",
    "book.l.level": "Level",
    "book.lv1": "Beginner",
    "book.lv2": "Some experience",
    "book.lv3": "Advanced",
    "book.l.comments": "Comments (optional)",
    "book.l.commentsPh": "Goals, favourite music, anything Sabrina should know…",
    "book.e.type": "Type of event",
    "book.e.other": "Other",
    "book.e.music": "Music (optional)",
    "book.e.unsure": "Not sure yet",
    "book.e.date": "Date & time",
    "book.e.one": "One day",
    "book.e.many": "Several days",
    "book.e.pickHint": "Pick the date on the calendar, then the start time.",
    "book.e.pickHintMany": "Pick each day on the calendar and set its start time.",
    "book.e.start": "Start time",
    "book.e.more": "Location & details",
    "book.e.location": "Location (optional)",
    "book.e.locationPh": "Venue or area",
    "book.e.details": "Details (optional)",
    "book.e.detailsPh": "Guests, moments with music, special songs…",
    "book.you": "Your details",
    "book.note": "Nothing is charged now — Sabrina will reply to confirm.",
    "book.remove": "Remove",
    "book.prev": "Previous month",
    "book.next": "Next month",
    "book.err.mode": "Choose in person or online.",
    "book.err.lessons": "Pick at least one day and time on the calendar.",
    "book.err.type": "Choose the type of event.",
    "book.err.date": "Pick the date of your event on the calendar.",
    "book.err.time": "Add a start time for each day.",
    "book.err.message": "Please write your message.",
    "msg.lessonsIntro": "I'd like to book lessons.",
    "msg.eventIntro": "I'd like to ask about live music for an event.",
    "msg.instrument": "Instrument",
    "msg.pack": "Package",
    "msg.format": "Format",
    "msg.duration": "Length",
    "msg.lessons": "Lessons",
    "msg.rest": "The remaining lessons are still to be arranged.",
    "msg.student": "Student",
    "msg.level": "Level",
    "msg.age": "age {n}",
    "msg.event": "Event",
    "msg.music": "Music",
    "msg.dates": "Dates",
    "msg.location": "Location",
    "msg.tz": "(Dubai time)",
    "msg.subjectLessons": "Lesson booking",
    "msg.subjectEvent": "Event enquiry",

    "nav.reviews": "Reviews",
    "reviews.eyebrow": "Reviews",
    "reviews.title": "In their words.",
    "reviews.lead": "From students, and from the couples, families and hosts who trusted Sabrina with their day.",
    "reviews.tabs": "Review categories",
    "reviews.tab.lessons": "Lessons",
    "reviews.tab.events": "Events & performances",
    "reviews.write": "Leave a review",
    "reviews.more": "Show more",
    "reviews.loading": "Loading reviews…",
    "reviews.empty": "No reviews here yet — be the first to share yours.",
    "reviews.stars": "{n} out of 5 stars",
    "reviews.r1": "1 star",
    "reviews.r2": "2 stars",
    "reviews.r3": "3 stars",
    "reviews.r4": "4 stars",
    "reviews.r5": "5 stars",
    "reviews.form.title": "Share your experience",
    "reviews.form.name": "Name",
    "reviews.form.category": "Your review is about",
    "reviews.form.rating": "Rating",
    "reviews.form.detail": "Details (optional)",
    "reviews.form.detailPh": "e.g. Dubai Marina, June 2026 · 2 years of lessons",
    "reviews.g.events": "Events",
    "reviews.c.piano": "Piano lessons",
    "reviews.c.violin": "Violin lessons",
    "reviews.c.wedding": "Wedding",
    "reviews.c.memorial": "Memorial",
    "reviews.c.corporate": "Corporate & gala",
    "reviews.c.private": "Private celebration",
    "reviews.form.pick": "Please choose what your review is about.",
    "reviews.form.text": "Your review",
    "reviews.form.textPh": "What was it like?",
    "reviews.form.note": "Reviews appear on the site once they have been approved.",
    "reviews.form.submit": "Send review",
    "reviews.form.cancel": "Cancel",
    "reviews.form.sending": "Sending…",
    "reviews.form.thanks": "Thank you! Your review will appear once it has been approved.",
    "reviews.form.error": "Please add your name and a few words about your experience.",
    "reviews.form.fail": "Something went wrong. Please try again in a moment.",
    "msg.review": "Review",
    "msg.rating": "Rating",
  },

  es: {
    "meta.title": "Sabrina Von Arx · Piano y Violín · Dubái",
    "meta.description": "Clases de piano y violín presenciales y online, y música en vivo de piano y violín para bodas, memoriales y eventos en Dubái.",
    "nav.about": "Sobre mí",
    "nav.lessons": "Clases",
    "nav.events": "Eventos",
    "nav.contact": "Contacto",
    "nav.book": "Reservar",

    "hero.eyebrow": "Piano y Violín · Dubái",
    "hero.title": "Música para los momentos que importan.",
    "hero.lead": "Clases de piano y violín presenciales y online, y actuaciones en vivo de piano y violín para bodas, memoriales y eventos privados en todos los Emiratos.",
    "hero.cta1": "Reservar una clase",
    "hero.cta2": "Planear tu evento",
    "anim.listen": "Escuchar",
    "anim.mute": "Silenciar",

    "about.eyebrow": "Sobre mí",
    "about.p1": "Pianista y violinista con base en Dubái, Sabrina aporta calidez y precisión a cada clase y a cada actuación.",
    "about.p2": "Ya sea que te sientes al piano por primera vez o que estés eligiendo la música del día más importante de tu vida, ella escucha primero — y luego da forma a la música a tu alrededor.",
    "about.s1a": "Presencial · Online",
    "about.s1b": "Clases de piano y violín",
    "about.s2a": "Piano · Violín · Dúo",
    "about.s2b": "Actuaciones en vivo",
    "about.s3a": "Dubái y EAU",
    "about.s3b": "Con base en Dubái",

    "lessons.eyebrow": "Clases de piano y violín",
    "lessons.title": "Aprende a tu propio ritmo.",
    "lessons.lead": "Clases individuales y personalizadas de piano y violín para niños y adultos, desde las primeras notas hasta repertorio avanzado.",
    "lessons.in.title": "Presenciales",
    "lessons.in.text": "Clases en Dubái, en el estudio o en tu casa, con atención personal y dedicada.",
    "lessons.in.l1": "Niños (desde 5 años) y adultos",
    "lessons.in.l2": "De principiante a avanzado",
    "lessons.in.l3": "Sesiones de 45 o 60 minutos",
    "lessons.on.title": "Online",
    "lessons.on.text": "Clases en vivo por videollamada desde cualquier lugar del mundo, con la misma estructura y seguimiento personal.",
    "lessons.on.l1": "Zoom, Google Meet o FaceTime",
    "lessons.on.l2": "Horarios flexibles en distintas zonas horarias",
    "lessons.on.l3": "Notas de práctica escritas después de cada clase",
    "lessons.focus": "Qué trabajamos",
    "lessons.t1": "Técnica",
    "lessons.t2": "Lectura a primera vista",
    "lessons.t3": "Teoría musical",
    "lessons.t4": "Repertorio clásico",
    "lessons.t5": "Pop y música de cine",
    "lessons.t6": "Preparación de exámenes",
    "lessons.cta": "Solicitar clase de prueba",

    "events.eyebrow": "Música en vivo",
    "events.title": "Piano y violín para las ceremonias de la vida.",
    "events.lead": "Música en vivo elegante, a la medida de tu evento — desde la primera entrada hasta la última nota.",
    "events.w.title": "Bodas",
    "events.w.text": "Ceremonia, nikah, entrada y recepción. Tus canciones favoritas, arregladas para piano y violín.",
    "events.m.title": "Memoriales",
    "events.m.text": "Música serena y respetuosa para honrar y recordar a un ser querido.",
    "events.c.title": "Corporativos y galas",
    "events.c.text": "Música de ambiente refinada para cenas, lanzamientos y recepciones.",
    "events.p.title": "Celebraciones privadas",
    "events.p.text": "Aniversarios, propuestas de matrimonio, cumpleaños y reuniones íntimas.",
    "events.formats": "Formatos",
    "events.f1": "Piano solo",
    "events.f2": "Violín solo",
    "events.f3": "Dúo de piano y violín",
    "events.process": "Cómo funciona",
    "events.s1.t": "Cuéntanos sobre tu día",
    "events.s1.d": "Fecha, lugar y el ambiente que imaginas.",
    "events.s2.t": "Damos forma al repertorio",
    "events.s2.d": "Una lista sugerida, con espacio para tus peticiones especiales.",
    "events.s3.t": "Nosotros tocamos, tú disfrutas",
    "events.s3.d": "Llegada anticipada, montaje completo y música sin preocupaciones.",
    "events.cta": "Consultar disponibilidad",

    "form.name": "Nombre",
    "form.message": "Mensaje",
    "form.placeholder": "Cuéntanos un poco más…",
    "form.submit": "Enviar por WhatsApp",
    "form.email": "Enviar por email",
    "form.error": "Por favor, escribe tu nombre.",
    "msg.greeting": "Hola Sabrina,",
    "msg.name": "Nombre",
    "msg.subject": "Consulta",

    "footer.place": "Dubái, Emiratos Árabes Unidos",
    "dubai.eyebrow": "Dubái · EAU",
    "dubai.title": "Música en vivo en todo Dubái.",
    "dubai.lead": "Del Downtown a la Marina — bodas, galas y celebraciones privadas, donde sea que tenga lugar tu día.",
    "dubai.cta": "Reservar música en vivo",
    "media.about": "Violín y arco sobre partituras",
    "media.lessonIn": "Manos de una niña sobre el teclado del piano",
    "media.lessonOn": "Partitura sobre un piano digital",
    "media.wedding": "Violinista tocando en una boda",
    "media.memorial": "Velas blancas y flores en una ceremonia",
    "media.gala": "Escenario de evento con luces y flores",
    "media.celebration": "Mesas de cena elegantes entre vegetación",
    "gallery.eyebrow": "Galería",
    "gallery.title": "Momentos de música.",
    "gallery.lead": "Clases, ensayos y actuaciones — la música en el día a día.",
    "gallery.label": "Galería de fotos",
    "gallery.prev": "Fotos anteriores",
    "gallery.next": "Más fotos",
    "gallery.violin-stand": "Violinista leyendo la partitura en el atril",
    "gallery.piano-lesson": "Niña aprendiendo piano",
    "gallery.violinist-stage": "Violinista tocando en el escenario",
    "gallery.violin-detail": "Primer plano de un violín",
    "gallery.piano-hands": "Manos tocando un piano vertical",
    "gallery.violin-lesson": "Niña practicando violín",
    "gallery.violin-wood": "Violín apoyado sobre un piano de madera",
    "gallery.piano-first-notes": "Manos pequeñas tocando sus primeras notas",
    "gallery.violinist-white": "Violinista de vestido blanco tocando",
    "gallery.violin-score": "Violín y arco sobre partituras",
    "gallery.violin-table": "Violín y partituras sobre una mesa",
    "gallery.piano-white": "Niño tocando un piano blanco",
    "theme.toggle": "Cambiar a modo claro / oscuro",

    "book.eyebrow": "Reservas",
    "book.title": "Reserva tus clases o tu evento.",
    "book.lead": "Elige lo que necesitas y envía tu solicitud — Sabrina te confirmará la disponibilidad y los próximos pasos personalmente.",
    "book.tabs": "Tipo de reserva",
    "book.tab.lessons": "Clases",
    "book.tab.event": "Evento",
    "book.tab.other": "Otra consulta",
    "book.l.instrument": "Instrumento",
    "book.piano": "Piano",
    "book.violin": "Violín",
    "book.l.pack": "Paquete",
    "book.p1.t": "Clase de prueba",
    "book.p1.d": "Una clase para conocernos y fijar objetivos",
    "book.p4.t": "4 clases",
    "book.p4.d": "Un mes, una vez por semana",
    "book.p8.t": "8 clases",
    "book.p8.d": "Dos meses, o dos veces por semana",
    "book.p12.t": "12 clases",
    "book.p12.d": "Un trimestre completo",
    "book.l.packNote": "Sabrina te confirmará los precios con tu reserva.",
    "book.l.format": "Modalidad",
    "book.inperson": "Presencial",
    "book.online": "Online",
    "book.l.duration": "Duración de la clase",
    "book.min45": "45 min",
    "book.min60": "60 min",
    "book.l.where": "Dónde",
    "book.studio": "En el estudio",
    "book.home": "En mi casa",
    "book.l.area": "Zona en Dubái (opcional)",
    "book.l.areaPh": "Ej.: JLT, Downtown, Arabian Ranches",
    "book.l.when": "Días y horarios",
    "book.l.count": "{n} de {total} clases elegidas",
    "book.l.countTrial": "Elige el día y el horario de tu clase de prueba.",
    "book.l.pickDay": "Toca en el calendario los días que quieras.",
    "book.l.tapHint": "Toca de nuevo un día elegido para quitarlo.",
    "book.l.time": "Horario",
    "book.err.lessonTime": "Elige un horario para cada clase.",
    "book.l.weekly": "Mismo día y hora cada semana",
    "book.l.full": "Ya elegiste todas tus clases — quita una para elegir otro día.",
    "book.tz": "Los horarios están en hora de Dubái (GST, UTC+4).",
    "book.l.student": "Sobre el alumno",
    "book.l.who": "Las clases son para",
    "book.whoMe": "Mí",
    "book.whoChild": "Mi hijo/a",
    "book.l.age": "Edad (opcional)",
    "book.l.level": "Nivel",
    "book.lv1": "Principiante",
    "book.lv2": "Con algo de experiencia",
    "book.lv3": "Avanzado",
    "book.l.comments": "Comentarios (opcional)",
    "book.l.commentsPh": "Objetivos, música favorita, algo que Sabrina deba saber…",
    "book.e.type": "Tipo de evento",
    "book.e.other": "Otro",
    "book.e.music": "Música (opcional)",
    "book.e.unsure": "Aún no lo sé",
    "book.e.date": "Fecha y hora",
    "book.e.one": "Un día",
    "book.e.many": "Varios días",
    "book.e.pickHint": "Elige la fecha en el calendario y después la hora de inicio.",
    "book.e.pickHintMany": "Elige cada día en el calendario y su hora de inicio.",
    "book.e.start": "Hora de inicio",
    "book.e.more": "Ubicación y detalles",
    "book.e.location": "Ubicación (opcional)",
    "book.e.locationPh": "Lugar o zona",
    "book.e.details": "Detalles (opcional)",
    "book.e.detailsPh": "Invitados, momentos con música, canciones especiales…",
    "book.you": "Tus datos",
    "book.note": "No se cobra nada ahora — Sabrina te responderá para confirmar.",
    "book.remove": "Quitar",
    "book.prev": "Mes anterior",
    "book.next": "Mes siguiente",
    "book.err.mode": "Elige presencial u online.",
    "book.err.lessons": "Elige al menos un día y horario en el calendario.",
    "book.err.type": "Elige el tipo de evento.",
    "book.err.date": "Elige la fecha de tu evento en el calendario.",
    "book.err.time": "Indica la hora de inicio de cada día.",
    "book.err.message": "Por favor, escribe tu mensaje.",
    "msg.lessonsIntro": "Quiero reservar clases.",
    "msg.eventIntro": "Quiero consultar por música en vivo para un evento.",
    "msg.instrument": "Instrumento",
    "msg.pack": "Paquete",
    "msg.format": "Modalidad",
    "msg.duration": "Duración",
    "msg.lessons": "Clases",
    "msg.rest": "El resto de las clases, a coordinar.",
    "msg.student": "Alumno",
    "msg.level": "Nivel",
    "msg.age": "{n} años",
    "msg.event": "Evento",
    "msg.music": "Música",
    "msg.dates": "Fechas",
    "msg.location": "Ubicación",
    "msg.tz": "(hora de Dubái)",
    "msg.subjectLessons": "Reserva de clases",
    "msg.subjectEvent": "Consulta por evento",

    "nav.reviews": "Reseñas",
    "reviews.eyebrow": "Reseñas",
    "reviews.title": "En sus palabras.",
    "reviews.lead": "De alumnos, y de las parejas, familias y anfitriones que confiaron a Sabrina su día.",
    "reviews.tabs": "Categorías de reseñas",
    "reviews.tab.lessons": "Clases",
    "reviews.tab.events": "Eventos y actuaciones",
    "reviews.write": "Deja tu reseña",
    "reviews.more": "Ver más",
    "reviews.loading": "Cargando reseñas…",
    "reviews.empty": "Aún no hay reseñas aquí — sé quien comparta la primera.",
    "reviews.stars": "{n} de 5 estrellas",
    "reviews.r1": "1 estrella",
    "reviews.r2": "2 estrellas",
    "reviews.r3": "3 estrellas",
    "reviews.r4": "4 estrellas",
    "reviews.r5": "5 estrellas",
    "reviews.form.title": "Comparte tu experiencia",
    "reviews.form.name": "Nombre",
    "reviews.form.category": "Tu reseña es sobre",
    "reviews.form.rating": "Valoración",
    "reviews.form.detail": "Detalles (opcional)",
    "reviews.form.detailPh": "Ej.: Dubai Marina, junio 2026 · 2 años de clases",
    "reviews.g.events": "Eventos",
    "reviews.c.piano": "Clases de piano",
    "reviews.c.violin": "Clases de violín",
    "reviews.c.wedding": "Boda",
    "reviews.c.memorial": "Memorial",
    "reviews.c.corporate": "Corporativo y gala",
    "reviews.c.private": "Celebración privada",
    "reviews.form.pick": "Elige sobre qué es tu reseña.",
    "reviews.form.text": "Tu reseña",
    "reviews.form.textPh": "¿Cómo fue tu experiencia?",
    "reviews.form.note": "Las reseñas se publican en la web una vez aprobadas.",
    "reviews.form.submit": "Enviar reseña",
    "reviews.form.cancel": "Cancelar",
    "reviews.form.sending": "Enviando…",
    "reviews.form.thanks": "¡Gracias! Tu reseña aparecerá en cuanto sea aprobada.",
    "reviews.form.error": "Por favor, escribe tu nombre y unas palabras sobre tu experiencia.",
    "reviews.form.fail": "Algo salió mal. Por favor, inténtalo de nuevo en un momento.",
    "msg.review": "Reseña",
    "msg.rating": "Valoración",
  },

  ar: {
    "meta.title": "سابرينا فون آركس · بيانو وكمان · دبي",
    "meta.description": "دروس بيانو وكمان حضورية وعبر الإنترنت، وموسيقى حيّة بالبيانو والكمان لحفلات الزفاف ومراسم التأبين والمناسبات في دبي.",
    "nav.about": "نبذة",
    "nav.lessons": "الدروس",
    "nav.events": "المناسبات",
    "nav.contact": "تواصل",
    "nav.book": "احجز",

    "hero.eyebrow": "بيانو وكمان · دبي",
    "hero.title": "موسيقى للّحظات التي تهمّك.",
    "hero.lead": "دروس بيانو وكمان حضورية وعبر الإنترنت، وعروض حيّة بالبيانو والكمان لحفلات الزفاف ومراسم التأبين والمناسبات الخاصة في جميع أنحاء الإمارات.",
    "hero.cta1": "احجز درساً",
    "hero.cta2": "خطّط لمناسبتك",
    "anim.listen": "استمع",
    "anim.mute": "كتم الصوت",

    "about.eyebrow": "نبذة",
    "about.p1": "عازفة بيانو وكمان مقيمة في دبي، تضفي سابرينا الدفء والدقّة على كل درس وكل عرض.",
    "about.p2": "سواء كنت تجلس أمام البيانو لأول مرة أو تختار موسيقى أهم يوم في حياتك، فهي تُصغي أولاً — ثم تصوغ الموسيقى من حولك.",
    "about.s1a": "حضورياً · عبر الإنترنت",
    "about.s1b": "دروس البيانو والكمان",
    "about.s2a": "بيانو · كمان · ثنائي",
    "about.s2b": "عروض حيّة",
    "about.s3a": "دبي والإمارات",
    "about.s3b": "مقيمة في دبي",

    "lessons.eyebrow": "دروس البيانو والكمان",
    "lessons.title": "تعلّم بالوتيرة التي تناسبك.",
    "lessons.lead": "دروس فردية مصمّمة خصيصاً في البيانو والكمان للأطفال والكبار، من النوتات الأولى إلى المقطوعات المتقدّمة.",
    "lessons.in.title": "حضورياً",
    "lessons.in.text": "دروس في دبي في الاستوديو أو في منزلك، مع اهتمام شخصي كامل.",
    "lessons.in.l1": "الأطفال (من 5 سنوات) والكبار",
    "lessons.in.l2": "من المبتدئ إلى المتقدّم",
    "lessons.in.l3": "حصص مدتها 45 أو 60 دقيقة",
    "lessons.on.title": "عبر الإنترنت",
    "lessons.on.text": "دروس مباشرة بالفيديو من أي مكان في العالم، بنفس المنهجية والمتابعة الشخصية.",
    "lessons.on.l1": "Zoom أو Google Meet أو FaceTime",
    "lessons.on.l2": "مواعيد مرنة تناسب مختلف المناطق الزمنية",
    "lessons.on.l3": "ملاحظات تدريب مكتوبة بعد كل حصة",
    "lessons.focus": "ما نعمل عليه",
    "lessons.t1": "التقنية",
    "lessons.t2": "القراءة الفورية",
    "lessons.t3": "نظرية الموسيقى",
    "lessons.t4": "الموسيقى الكلاسيكية",
    "lessons.t5": "موسيقى البوب والأفلام",
    "lessons.t6": "التحضير للامتحانات",
    "lessons.cta": "اطلب درساً تجريبياً",

    "events.eyebrow": "موسيقى حيّة",
    "events.title": "بيانو وكمان لأجمل مناسبات الحياة.",
    "events.lead": "موسيقى حيّة راقية مصمّمة لمناسبتك — من لحظة الدخول حتى النغمة الأخيرة.",
    "events.w.title": "حفلات الزفاف",
    "events.w.text": "عقد القران والزفّة والاستقبال. أغانيكم المفضّلة بتوزيع للبيانو والكمان.",
    "events.m.title": "مراسم التأبين",
    "events.m.text": "موسيقى هادئة ووقورة لتكريم ذكرى من نحب.",
    "events.c.title": "الشركات والحفلات الرسمية",
    "events.c.text": "موسيقى خلفية راقية لحفلات العشاء وإطلاق المنتجات وحفلات الاستقبال.",
    "events.p.title": "احتفالات خاصة",
    "events.p.text": "ذكرى الزواج، طلب الزواج، أعياد الميلاد واللقاءات العائلية.",
    "events.formats": "الصيغ",
    "events.f1": "بيانو منفرد",
    "events.f2": "كمان منفرد",
    "events.f3": "ثنائي بيانو وكمان",
    "events.process": "كيف نعمل",
    "events.s1.t": "أخبرنا عن مناسبتك",
    "events.s1.d": "التاريخ والمكان والأجواء التي تتخيّلها.",
    "events.s2.t": "نختار البرنامج الموسيقي معاً",
    "events.s2.d": "قائمة مقطوعات مقترحة، مع مساحة لطلباتك الخاصة.",
    "events.s3.t": "نعزف وأنت تستمتع",
    "events.s3.d": "وصول مبكّر، تجهيز كامل، وموسيقى بلا أي قلق.",
    "events.cta": "تحقّق من التوفّر",

    "form.name": "الاسم",
    "form.message": "الرسالة",
    "form.placeholder": "أخبرنا المزيد…",
    "form.submit": "أرسل عبر واتساب",
    "form.email": "أرسل عبر البريد الإلكتروني",
    "form.error": "يرجى كتابة اسمك.",
    "msg.greeting": "مرحباً سابرينا،",
    "msg.name": "الاسم",
    "msg.subject": "استفسار",

    "footer.place": "دبي، الإمارات العربية المتحدة",
    "dubai.eyebrow": "دبي · الإمارات",
    "dubai.title": "موسيقى حيّة في كل أنحاء دبي.",
    "dubai.lead": "من وسط المدينة إلى المارينا — حفلات زفاف وحفلات رسمية واحتفالات خاصة، أينما كانت مناسبتك.",
    "dubai.cta": "احجز موسيقى حيّة",
    "media.about": "كمان وقوس على النوتات الموسيقية",
    "media.lessonIn": "يدا طفلة على مفاتيح البيانو",
    "media.lessonOn": "نوتة موسيقية على بيانو رقمي",
    "media.wedding": "عازف كمان في حفل زفاف",
    "media.memorial": "شموع بيضاء وزهور في مراسم",
    "media.gala": "منصة مناسبة بالأضواء والزهور",
    "media.celebration": "طاولات عشاء أنيقة وسط الخضرة",
    "gallery.eyebrow": "معرض الصور",
    "gallery.title": "لحظات موسيقية.",
    "gallery.lead": "دروس وتدريبات وعروض — الموسيقى في الحياة اليومية.",
    "gallery.label": "معرض الصور",
    "gallery.prev": "الصور السابقة",
    "gallery.next": "الصور التالية",
    "gallery.violin-stand": "عازف كمان يقرأ النوتة على الحامل",
    "gallery.piano-lesson": "طفلة تتعلّم البيانو",
    "gallery.violinist-stage": "عازفة كمان على المسرح",
    "gallery.violin-detail": "لقطة قريبة لكمان",
    "gallery.piano-hands": "يدان تعزفان على بيانو عمودي",
    "gallery.violin-lesson": "طفلة تتدرّب على الكمان",
    "gallery.violin-wood": "كمان على بيانو خشبي",
    "gallery.piano-first-notes": "يدان صغيرتان تعزفان أولى النغمات",
    "gallery.violinist-white": "عازفة كمان بفستان أبيض",
    "gallery.violin-score": "كمان وقوس على النوتات",
    "gallery.violin-table": "كمان ونوتات موسيقية على طاولة",
    "gallery.piano-white": "طفل يعزف على بيانو أبيض",
    "theme.toggle": "التبديل بين الوضع الفاتح والداكن",

    "book.eyebrow": "الحجز",
    "book.title": "احجز دروسك أو مناسبتك.",
    "book.lead": "اختر ما تحتاجه وأرسل طلبك — ستؤكد سابرينا التوفّر والخطوات التالية بنفسها.",
    "book.tabs": "نوع الحجز",
    "book.tab.lessons": "الدروس",
    "book.tab.event": "مناسبة",
    "book.tab.other": "استفسار آخر",
    "book.l.instrument": "الآلة",
    "book.piano": "البيانو",
    "book.violin": "الكمان",
    "book.l.pack": "الباقة",
    "book.p1.t": "درس تجريبي",
    "book.p1.d": "درس واحد للتعارف وتحديد الأهداف",
    "book.p4.t": "4 دروس",
    "book.p4.d": "شهر واحد، مرة في الأسبوع",
    "book.p8.t": "8 دروس",
    "book.p8.d": "شهران، أو مرتين في الأسبوع",
    "book.p12.t": "12 درساً",
    "book.p12.d": "فصل دراسي كامل",
    "book.l.packNote": "ستؤكد سابرينا الأسعار مع حجزك.",
    "book.l.format": "طريقة الدرس",
    "book.inperson": "حضورياً",
    "book.online": "عبر الإنترنت",
    "book.l.duration": "مدة الدرس",
    "book.min45": "45 دقيقة",
    "book.min60": "60 دقيقة",
    "book.l.where": "المكان",
    "book.studio": "في الاستوديو",
    "book.home": "في منزلي",
    "book.l.area": "المنطقة في دبي (اختياري)",
    "book.l.areaPh": "مثال: JLT، وسط المدينة، المرابع العربية",
    "book.l.when": "الأيام والمواعيد",
    "book.l.count": "تم اختيار {n} من {total} دروس",
    "book.l.countTrial": "اختر يوم ووقت درسك التجريبي.",
    "book.l.pickDay": "اضغط على الأيام التي تريدها في التقويم.",
    "book.l.tapHint": "اضغط على اليوم المختار مرة أخرى لإزالته.",
    "book.l.time": "الوقت",
    "book.err.lessonTime": "اختر وقتاً لكل درس.",
    "book.l.weekly": "نفس اليوم والوقت كل أسبوع",
    "book.l.full": "لقد اخترت جميع دروسك — احذف درساً لاختيار يوم آخر.",
    "book.tz": "المواعيد بتوقيت دبي (GST، UTC+4).",
    "book.l.student": "عن الطالب",
    "book.l.who": "الدروس لـ",
    "book.whoMe": "لي",
    "book.whoChild": "طفلي",
    "book.l.age": "العمر (اختياري)",
    "book.l.level": "المستوى",
    "book.lv1": "مبتدئ",
    "book.lv2": "لديه بعض الخبرة",
    "book.lv3": "متقدّم",
    "book.l.comments": "ملاحظات (اختياري)",
    "book.l.commentsPh": "أهدافك، موسيقاك المفضلة، أي شيء يجب أن تعرفه سابرينا…",
    "book.e.type": "نوع المناسبة",
    "book.e.other": "أخرى",
    "book.e.music": "الموسيقى (اختياري)",
    "book.e.unsure": "لم أقرر بعد",
    "book.e.date": "التاريخ والوقت",
    "book.e.one": "يوم واحد",
    "book.e.many": "عدة أيام",
    "book.e.pickHint": "اختر التاريخ من التقويم ثم وقت البدء.",
    "book.e.pickHintMany": "اختر كل يوم من التقويم وحدّد وقت البدء.",
    "book.e.start": "وقت البدء",
    "book.e.more": "المكان والتفاصيل",
    "book.e.location": "المكان (اختياري)",
    "book.e.locationPh": "القاعة أو المنطقة",
    "book.e.details": "تفاصيل (اختياري)",
    "book.e.detailsPh": "عدد الضيوف، اللحظات الموسيقية، أغانٍ خاصة…",
    "book.you": "بياناتك",
    "book.note": "لن يتم تحصيل أي مبلغ الآن — ستردّ سابرينا للتأكيد.",
    "book.remove": "إزالة",
    "book.prev": "الشهر السابق",
    "book.next": "الشهر التالي",
    "book.err.mode": "اختر حضورياً أو عبر الإنترنت.",
    "book.err.lessons": "اختر يوماً ووقتاً واحداً على الأقل من التقويم.",
    "book.err.type": "اختر نوع المناسبة.",
    "book.err.date": "اختر تاريخ مناسبتك من التقويم.",
    "book.err.time": "حدّد وقت البدء لكل يوم.",
    "book.err.message": "يرجى كتابة رسالتك.",
    "msg.lessonsIntro": "أرغب في حجز دروس.",
    "msg.eventIntro": "أرغب في الاستفسار عن موسيقى حيّة لمناسبة.",
    "msg.instrument": "الآلة",
    "msg.pack": "الباقة",
    "msg.format": "طريقة الدرس",
    "msg.duration": "المدة",
    "msg.lessons": "الدروس",
    "msg.rest": "باقي الدروس يتم تنسيقها لاحقاً.",
    "msg.student": "الطالب",
    "msg.level": "المستوى",
    "msg.age": "العمر {n}",
    "msg.event": "المناسبة",
    "msg.music": "الموسيقى",
    "msg.dates": "التواريخ",
    "msg.location": "المكان",
    "msg.tz": "(بتوقيت دبي)",
    "msg.subjectLessons": "حجز دروس",
    "msg.subjectEvent": "استفسار عن مناسبة",

    "nav.reviews": "الآراء",
    "reviews.eyebrow": "آراء العملاء",
    "reviews.title": "بكلماتهم.",
    "reviews.lead": "من الطلاب، ومن الأزواج والعائلات والمضيفين الذين ائتمنوا سابرينا على يومهم.",
    "reviews.tabs": "فئات الآراء",
    "reviews.tab.lessons": "الدروس",
    "reviews.tab.events": "المناسبات والعروض",
    "reviews.write": "اكتب رأيك",
    "reviews.more": "عرض المزيد",
    "reviews.loading": "جارٍ تحميل الآراء…",
    "reviews.empty": "لا توجد آراء هنا بعد — كن أول من يشارك رأيه.",
    "reviews.stars": "{n} من 5 نجوم",
    "reviews.r1": "نجمة واحدة",
    "reviews.r2": "نجمتان",
    "reviews.r3": "3 نجوم",
    "reviews.r4": "4 نجوم",
    "reviews.r5": "5 نجوم",
    "reviews.form.title": "شاركنا تجربتك",
    "reviews.form.name": "الاسم",
    "reviews.form.category": "رأيك حول",
    "reviews.form.rating": "التقييم",
    "reviews.form.detail": "تفاصيل (اختياري)",
    "reviews.form.detailPh": "مثال: دبي مارينا، يونيو 2026 · سنتان من الدروس",
    "reviews.g.events": "المناسبات",
    "reviews.c.piano": "دروس البيانو",
    "reviews.c.violin": "دروس الكمان",
    "reviews.c.wedding": "حفل زفاف",
    "reviews.c.memorial": "مراسم تأبين",
    "reviews.c.corporate": "فعالية شركة أو حفل رسمي",
    "reviews.c.private": "احتفال خاص",
    "reviews.form.pick": "يرجى اختيار موضوع رأيك.",
    "reviews.form.text": "رأيك",
    "reviews.form.textPh": "كيف كانت تجربتك؟",
    "reviews.form.note": "تُنشر الآراء على الموقع بعد الموافقة عليها.",
    "reviews.form.submit": "أرسل رأيك",
    "reviews.form.cancel": "إلغاء",
    "reviews.form.sending": "جارٍ الإرسال…",
    "reviews.form.thanks": "شكراً لك! سيظهر رأيك بعد الموافقة عليه.",
    "reviews.form.error": "يرجى كتابة اسمك وبضع كلمات عن تجربتك.",
    "reviews.form.fail": "حدث خطأ ما. يرجى المحاولة مرة أخرى بعد قليل.",
    "msg.review": "رأي",
    "msg.rating": "التقييم",
  },
};

const LANGS = Object.keys(I18N);
let current = "en";

function pickInitialLang() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch (_) {}
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGS.includes(nav) ? nav : "en";
}

function t(key) {
  return I18N[current][key] ?? I18N.en[key] ?? "";
}

function setLang(lang) {
  current = LANGS.includes(lang) ? lang : "en";
  const root = document.documentElement;
  root.lang = current;
  root.dir = current === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });
  document.title = t("meta.title");
  document.querySelector('meta[name="description"]').content = t("meta.description");

  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === current));
  });

  try { localStorage.setItem("lang", current); } catch (_) {}
  document.dispatchEvent(new CustomEvent("langchange"));
  const url = new URL(location.href);
  url.searchParams.set("lang", current);
  history.replaceState(null, "", url);
}

document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang))
);

setLang(pickInitialLang());

// ---- Light / dark theme (initial value is set inline in <head>) ----
const themeMeta = document.querySelector('meta[name="theme-color"]');
const systemLight = window.matchMedia("(prefers-color-scheme: light)");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeMeta.content = theme === "light" ? "#efe7da" : "#000000";
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (_) {}
});

// Follow the OS setting until the visitor picks a theme explicitly
systemLight.addEventListener("change", (e) => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (_) {}
  if (!saved) applyTheme(e.matches ? "light" : "dark");
});

applyTheme(document.documentElement.dataset.theme || "dark");

// ---- Mobile menu ----
const toggle = document.querySelector(".menu-toggle");
const links = document.getElementById("nav-links");
function closeMenu() {
  links.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => e.key === "Escape" && closeMenu());

// ---- Active nav link on scroll ----
const navAnchors = [...links.querySelectorAll("a")];
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));

// ---- Reveal on scroll ----
const revealer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealer.observe(el));

// ---- Specular highlight follows the pointer on glass ----
const canHover = window.matchMedia("(hover: hover)").matches;
function addSpecular(el) {
  if (!canHover) return;
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  });
}
document.querySelectorAll(".glass").forEach(addSpecular);

// ---- Section videos: load when near, play only while visible ----
const lazyVideos = document.querySelectorAll("video.lazy-video");
const calmMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveData = navigator.connection && navigator.connection.saveData;
if (!calmMotion && !saveData) {
  const videoWatch = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target: v, isIntersecting }) => {
        if (isIntersecting) {
          if (!v.src) v.src = v.dataset.src;
          v.play().catch(() => {});
        } else if (!v.paused) {
          v.pause();
        }
      });
    },
    { rootMargin: "300px 0px" }
  );
  lazyVideos.forEach((v) => videoWatch.observe(v));
}

// ---- Booking: lessons, events and other enquiries (sent via WhatsApp or email) ----
const form = document.getElementById("book-form");
const errorEl = document.getElementById("form-error");
const fields = form.elements;

document.getElementById("wa-link").href = `https://wa.me/${CONFIG.whatsapp}`;
document.getElementById("mail-link").href = `mailto:${CONFIG.email}`;
document.getElementById("ig-link").href = CONFIG.instagram;

// Dates are handled as local "YYYY-MM-DD" keys so time zones never shift a day
const LOCALES = { en: "en-GB", es: "es-ES", ar: "ar-AE-u-nu-latn" };
const loc = () => LOCALES[current] || "en-GB";
const pad = (n) => String(n).padStart(2, "0");
const toKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromKey = (k) => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const startOfToday = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
const byDate = (a, b) => a.date.localeCompare(b.date);

function fmtDate(key, extra) {
  const d = fromKey(key);
  const opts = { weekday: "short", day: "numeric", month: "short", ...extra };
  if (d.getFullYear() !== startOfToday().getFullYear()) opts.year = "numeric";
  return new Intl.DateTimeFormat(loc(), opts).format(d);
}
function fmtTime(hm) {
  const [h, m] = hm.split(":").map(Number);
  return new Intl.DateTimeFormat(loc(), { hour: "numeric", minute: "2-digit" }).format(new Date(2000, 0, 1, h, m));
}
const checked = (name) => form.querySelector(`input[name="${name}"]:checked`);
const chipText = (input) => input.closest("label").querySelector("span, strong").textContent;

// Month calendar (Monday first). opts: isOpen(date), state(key) → {picked, active}, onPick(key), max()
function makeCalendar(el, opts) {
  let view = null;
  let focusKey = null;
  const monthStart = (d) => new Date(d.getFullYear(), d.getMonth(), 1);

  function navButton(dir) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "cal-nav";
    b.setAttribute("aria-label", t(dir < 0 ? "book.prev" : "book.next"));
    b.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${dir < 0 ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}"/></svg>`;
    b.addEventListener("click", () => {
      view = new Date(view.getFullYear(), view.getMonth() + dir, 1);
      render();
    });
    return b;
  }

  function render() {
    const min = monthStart(startOfToday());
    const max = monthStart(opts.max());
    if (!view) view = min;
    const head = document.createElement("div");
    head.className = "cal-head";
    const prev = navButton(-1);
    const next = navButton(1);
    prev.disabled = view <= min;
    next.disabled = view >= max;
    const title = document.createElement("strong");
    const month = new Intl.DateTimeFormat(loc(), { month: "long", year: "numeric" }).format(view);
    title.textContent = month.charAt(0).toLocaleUpperCase(loc()) + month.slice(1);
    title.setAttribute("aria-live", "polite");
    head.append(prev, title, next);

    const grid = document.createElement("div");
    grid.className = "cal-grid";
    const wd = new Intl.DateTimeFormat(loc(), { weekday: "narrow" });
    for (let i = 0; i < 7; i++) {
      const s = document.createElement("span");
      s.className = "cal-wd";
      s.setAttribute("aria-hidden", "true");
      s.textContent = wd.format(new Date(2024, 0, 1 + i)); // 1 Jan 2024 was a Monday
      grid.append(s);
    }
    for (let i = 0; i < (view.getDay() + 6) % 7; i++) grid.append(document.createElement("span"));

    const todayKey = toKey(startOfToday());
    const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    for (let d = 1; d <= days; d++) {
      const date = new Date(view.getFullYear(), view.getMonth(), d);
      const key = toKey(date);
      const st = opts.state(key);
      const b = document.createElement("button");
      b.type = "button";
      b.className = "cal-day";
      b.dataset.key = key;
      b.textContent = d;
      b.disabled = !opts.isOpen(date);
      b.setAttribute("aria-pressed", String(!!st.picked));
      b.setAttribute("aria-label", fmtDate(key, { weekday: "long", month: "long", year: "numeric" }));
      b.classList.toggle("picked", !!st.picked);
      b.classList.toggle("active", !!st.active);
      b.classList.toggle("today", key === todayKey);
      b.addEventListener("click", () => {
        focusKey = key;
        opts.onPick(key);
      });
      grid.append(b);
    }
    el.replaceChildren(head, grid);
    if (focusKey) {
      el.querySelector(`[data-key="${focusKey}"]`)?.focus();
      focusKey = null;
    }
  }
  return { render, first: () => el.querySelector(".cal-day:not(:disabled)") };
}

function removeButton(label, onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "picked-remove";
  b.setAttribute("aria-label", `${t("book.remove")} — ${label}`);
  b.textContent = "×";
  b.addEventListener("click", onClick);
  return b;
}

// ---------- Lessons ----------
// Tapping a day adds it (with the last time used, if offered that day); tapping it again removes it.
const L = { picks: [], lastTime: "", full: false };
const lCount = document.getElementById("l-count");
const lHint = document.getElementById("l-hint");
const lPicked = document.getElementById("l-picked");
const lWeekly = document.getElementById("l-weekly");
const packSize = () => Number(fields.pack.value) || 1;
const lessonMax = () => addDays(startOfToday(), SCHEDULE.lessonHorizonDays);

function lessonTimes(key) {
  if (SCHEDULE.blocked.includes(key)) return [];
  return SCHEDULE.lessons[fromKey(key).getDay()] || [];
}
function lessonOpen(date) {
  return date >= addDays(startOfToday(), SCHEDULE.minNoticeDays) && date <= lessonMax() && lessonTimes(toKey(date)).length > 0;
}

const lCal = makeCalendar(document.getElementById("l-cal"), {
  isOpen: lessonOpen,
  max: lessonMax,
  state: (key) => ({ picked: L.picks.some((p) => p.date === key) }),
  onPick: toggleLessonDay,
});

function toggleLessonDay(key) {
  L.full = false;
  const existing = L.picks.find((p) => p.date === key);
  if (existing) {
    L.picks = L.picks.filter((p) => p !== existing);
  } else if (packSize() === 1) {
    L.picks = [{ date: key, time: defaultTime(key) }];   // trial: a new day replaces the old one
  } else if (L.picks.length >= packSize()) {
    L.full = true;
  } else {
    L.picks = [...L.picks, { date: key, time: defaultTime(key) }].sort(byDate);
  }
  errorEl.hidden = true;
  renderLessons();
}

function defaultTime(key) {
  return lessonTimes(key).includes(L.lastTime) ? L.lastTime : "";
}

// Fill the package with the same weekday & time, starting from the first chosen lesson
function weeklySeries(start, time) {
  const out = [];
  for (let d = fromKey(start); out.length < packSize() && d <= lessonMax(); d = addDays(d, 7)) {
    if (lessonOpen(d) && lessonTimes(toKey(d)).includes(time)) out.push({ date: toKey(d), time });
  }
  return out;
}
function applyWeekly() {
  const first = L.picks.find((p) => p.time);
  if (lWeekly.checked && first && packSize() > 1) L.picks = weeklySeries(first.date, first.time);
}

function renderLessons() {
  const total = packSize();
  lCount.classList.toggle("warn", L.full);
  lCount.textContent = L.full
    ? t("book.l.full")
    : total === 1
      ? t("book.l.countTrial")
      : t("book.l.count").replace("{n}", L.picks.length).replace("{total}", total);
  lWeekly.closest("label").hidden = total === 1;
  lHint.textContent = t(L.picks.length ? "book.l.tapHint" : "book.l.pickDay");

  lPicked.replaceChildren(
    ...L.picks.map((p) => {
      const li = document.createElement("li");
      li.className = "with-time";
      const day = document.createElement("span");
      day.textContent = fmtDate(p.date);
      const field = document.createElement("label");
      field.className = "time-field";
      const cap = document.createElement("span");
      cap.textContent = t("book.l.time");
      const select = document.createElement("select");
      select.className = "glass-inset";
      const blank = new Option("—", "");
      blank.disabled = true;
      select.append(blank, ...lessonTimes(p.date).map((time) => new Option(fmtTime(time), time)));
      select.value = p.time;
      select.addEventListener("change", () => {
        p.time = select.value;
        L.lastTime = select.value;
        // fill in later lessons that have no time yet
        L.picks.forEach((x) => { if (!x.time && lessonTimes(x.date).includes(p.time)) x.time = p.time; });
        applyWeekly();
        errorEl.hidden = true;
        renderLessons();
      });
      field.append(cap, select);
      li.append(day, field, removeButton(day.textContent, () => toggleLessonDay(p.date)));
      return li;
    })
  );
  lCal.render();
}

form.addEventListener("change", (e) => {
  const n = e.target.name;
  if (n === "pack") {
    applyWeekly();
    L.picks = L.picks.slice(0, packSize());
    L.full = false;
    renderLessons();
  }
  if (n === "mode" || n === "place") {
    document.getElementById("l-where").hidden = fields.mode.value !== "inperson";
    document.getElementById("l-area").hidden = fields.place.value !== "home";
  }
  if (n === "days") {
    if (fields.days.value === "one") E.picks = E.picks.slice(0, 1);
    renderEvent();
  }
  if (["mode", "etype", "message", "name"].includes(n)) errorEl.hidden = true;
});
form.addEventListener("input", (e) => {
  if (e.target.matches("input[type=text], textarea")) errorEl.hidden = true;
});
lWeekly.addEventListener("change", () => {
  applyWeekly();
  renderLessons();
});

// ---------- Event ----------
const E = { picks: [] };
const eHint = document.getElementById("e-hint");
const ePicked = document.getElementById("e-picked");
const eventMax = () => addDays(startOfToday(), SCHEDULE.eventHorizonDays);
const manyDays = () => fields.days.value === "many";

const eCal = makeCalendar(document.getElementById("e-cal"), {
  isOpen: (date) => date >= addDays(startOfToday(), 1) && date <= eventMax(),
  max: eventMax,
  state: (key) => ({ picked: E.picks.some((p) => p.date === key) }),
  onPick: (key) => {
    const existing = E.picks.find((p) => p.date === key);
    const lastTime = E.picks.at(-1)?.time || "";
    if (existing) E.picks = E.picks.filter((p) => p !== existing);
    else if (!manyDays()) E.picks = [{ date: key, time: E.picks[0]?.time || "" }];
    else if (E.picks.length < 10) E.picks = [...E.picks, { date: key, time: lastTime }].sort(byDate);
    errorEl.hidden = true;
    renderEvent();
  },
});

function renderEvent() {
  eHint.textContent = E.picks.length ? "" : t(manyDays() ? "book.e.pickHintMany" : "book.e.pickHint");
  eHint.hidden = E.picks.length > 0;
  ePicked.replaceChildren(
    ...E.picks.map((p) => {
      const li = document.createElement("li");
      li.className = "with-time";
      const day = document.createElement("span");
      day.textContent = fmtDate(p.date);
      const field = document.createElement("label");
      field.className = "time-field";
      const cap = document.createElement("span");
      cap.textContent = t("book.e.start");
      const input = document.createElement("input");
      input.type = "time";
      input.step = 900;
      input.className = "glass-inset";
      input.value = p.time;
      input.addEventListener("input", () => {
        p.time = input.value;
        errorEl.hidden = true;
      });
      field.append(cap, input);
      li.append(day, field, removeButton(day.textContent, () => {
        E.picks = E.picks.filter((x) => x !== p);
        renderEvent();
      }));
      return li;
    })
  );
  eCal.render();
}

// ---------- Tabs & entry points ----------
const bookTabs = [...document.querySelectorAll(".book-tabs [role=tab]")];
let flow = "lessons";

function setFlow(name, focus) {
  flow = name;
  bookTabs.forEach((b) => {
    const on = b.dataset.flow === name;
    b.setAttribute("aria-selected", String(on));
    b.tabIndex = on ? 0 : -1;
    if (on) {
      form.setAttribute("aria-labelledby", b.id);
      if (focus) b.focus();
    }
  });
  form.querySelectorAll(".flow").forEach((f) => (f.hidden = f.dataset.flow !== name));
  errorEl.hidden = true;
}
bookTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => setFlow(tab.dataset.flow));
  tab.addEventListener("keydown", (e) => {
    const rtl = document.documentElement.dir === "rtl";
    const step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    setFlow(bookTabs[(i + step + bookTabs.length) % bookTabs.length].dataset.flow, true);
  });
});

// CTA buttons elsewhere on the page open the matching form
document.querySelectorAll("[data-service]").forEach((a) =>
  a.addEventListener("click", () => {
    const s = a.dataset.service;
    setFlow(s === "event" ? "event" : "lessons");
    if (s === "trial") {
      form.querySelector('input[name="pack"][value="1"]').checked = true;
      L.picks = L.picks.slice(0, 1);
      L.full = false;
      renderLessons();
    }
  })
);

// ---------- Message ----------
function fail(key, el) {
  errorEl.textContent = t(key);
  errorEl.hidden = false;
  el?.focus();
  return null;
}

function composeMessage() {
  const name = fields.name.value.trim();
  const lines = [t("msg.greeting"), ""];
  let subject = t("msg.subject");

  if (flow === "lessons") {
    const mode = checked("mode");
    if (!mode) return fail("book.err.mode", form.querySelector('input[name="mode"]'));
    if (!L.picks.length) return fail("book.err.lessons", lCal.first());
    const noTime = L.picks.findIndex((p) => !p.time);
    if (noTime >= 0) return fail("book.err.lessonTime", lPicked.querySelectorAll("select")[noTime]);
    if (!name) return fail("form.error", fields.name);
    const instrument = chipText(checked("instrument"));
    const pack = checked("pack");
    let format = chipText(mode);
    if (mode.value === "inperson") {
      format += ` — ${chipText(checked("place"))}`;
      const area = fields.area.value.trim();
      if (fields.place.value === "home" && area) format += ` (${area})`;
    }
    const age = fields.age.value.trim();
    subject = `${t("msg.subjectLessons")} — ${instrument}`;
    lines.push(
      t("msg.lessonsIntro"), "",
      `${t("msg.name")}: ${name}`,
      `${t("msg.instrument")}: ${instrument}`,
      `${t("msg.pack")}: ${pack.closest("label").querySelector("strong").textContent}`,
      `${t("msg.format")}: ${format}`,
      `${t("msg.duration")}: ${chipText(checked("duration"))}`,
      "",
      `${t("msg.lessons")} ${t("msg.tz")}:`,
      ...L.picks.map((p) => `• ${fmtDate(p.date)} · ${fmtTime(p.time)}`)
    );
    if (L.picks.length < packSize()) lines.push(t("msg.rest"));
    lines.push(
      "",
      `${t("msg.student")}: ${fields.who.selectedOptions[0].textContent}` +
        (age ? ` (${t("msg.age").replace("{n}", age)})` : "") +
        ` · ${t("msg.level")}: ${fields.level.selectedOptions[0].textContent}`
    );
    const comments = fields.comments.value.trim();
    if (comments) lines.push("", comments);
  } else if (flow === "event") {
    const type = checked("etype");
    if (!type) return fail("book.err.type", form.querySelector('input[name="etype"]'));
    if (!E.picks.length) return fail("book.err.date", eCal.first());
    const missing = E.picks.findIndex((p) => !p.time);
    if (missing >= 0) return fail("book.err.time", ePicked.querySelectorAll("input")[missing]);
    if (!name) return fail("form.error", fields.name);
    const music = checked("music");
    subject = `${t("msg.subjectEvent")} — ${chipText(type)}`;
    lines.push(t("msg.eventIntro"), "", `${t("msg.name")}: ${name}`, `${t("msg.event")}: ${chipText(type)}`);
    if (music) lines.push(`${t("msg.music")}: ${chipText(music)}`);
    lines.push("", `${t("msg.dates")} ${t("msg.tz")}:`, ...E.picks.map((p) => `• ${fmtDate(p.date)} · ${fmtTime(p.time)}`));
    const location = fields.location.value.trim();
    if (location) lines.push(`${t("msg.location")}: ${location}`);
    const details = fields.details.value.trim();
    if (details) lines.push("", details);
  } else {
    const message = fields.message.value.trim();
    if (!message) return fail("book.err.message", fields.message);
    if (!name) return fail("form.error", fields.name);
    lines.push(`${t("msg.name")}: ${name}`, "", message);
  }
  errorEl.hidden = true;
  return { text: lines.join("\n"), subject };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = composeMessage();
  if (!msg) return;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg.text)}`, "_blank", "noopener");
});

document.getElementById("send-email").addEventListener("click", () => {
  const msg = composeMessage();
  if (!msg) return;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(msg.subject)}&body=${encodeURIComponent(msg.text)}`;
});

renderLessons();
renderEvent();
document.addEventListener("langchange", () => {
  renderLessons();
  renderEvent();
});

document.getElementById("year").textContent = new Date().getFullYear();

// ---- Gallery carousel: swipe / scroll natively, arrows page through ----
document.querySelectorAll(".carousel").forEach((carousel) => {
  const track = carousel.querySelector(".carousel-track");
  const buttons = carousel.querySelectorAll(".carousel-btn");
  const update = () => {
    const pos = Math.abs(track.scrollLeft);           // RTL scrolls into negative values
    const max = track.scrollWidth - track.clientWidth;
    buttons[0].disabled = pos <= 2;
    buttons[1].disabled = pos >= max - 2;
  };
  buttons.forEach((b) =>
    b.addEventListener("click", () => {
      const rtl = getComputedStyle(track).direction === "rtl";
      track.scrollBy({ left: Number(b.dataset.dir) * track.clientWidth * 0.8 * (rtl ? -1 : 1), behavior: calmMotion ? "auto" : "smooth" });
    })
  );
  track.addEventListener("scroll", update, { passive: true });
  track.addEventListener("scrollend", update);
  track.querySelectorAll("img").forEach((img) => img.addEventListener("load", update));
  window.addEventListener("resize", update);
  update();
});

// ---- Reviews (stored in a Google Sheet, published only once approved) ----
const reviewTabs = [...document.querySelectorAll('#reviews [role="tab"]')];
const reviewList = document.getElementById("reviews-list");
const reviewEmpty = document.getElementById("reviews-empty");
const reviewMore = document.getElementById("reviews-more");
const reviewPanel = document.getElementById("review-panel");
const reviewOpen = document.getElementById("review-open");
const reviewForm = document.getElementById("review-form");
const reviewError = document.getElementById("review-error");
const reviewThanks = document.getElementById("review-thanks");
const reviewStars = reviewForm.querySelector(".stars");
const reviewSubmit = reviewForm.querySelector('[type="submit"]');
const REVIEWS_PAGE = 6;
// Each category the visitor can pick, and the tab it is listed under
const REVIEW_GROUP = {
  piano: "lessons", violin: "lessons",
  wedding: "events", memorial: "events", corporate: "events", private: "events",
};

let reviews = null;            // null while loading
let reviewCat = "lessons";
let reviewsShown = REVIEWS_PAGE;

function reviewCard(r) {
  const n = Math.min(5, Math.max(1, Math.round(Number(r.rating)) || 5));
  const card = document.createElement("figure");
  card.className = "review glass";

  const stars = document.createElement("div");
  stars.className = "review-stars";
  stars.setAttribute("role", "img");
  stars.setAttribute("aria-label", t("reviews.stars").replace("{n}", n));
  const on = document.createElement("span");
  on.textContent = "★".repeat(n);
  const off = document.createElement("span");
  off.className = "off";
  off.textContent = "★".repeat(5 - n);
  stars.append(on, off);

  const quote = document.createElement("blockquote");
  const p = document.createElement("p");
  p.dir = "auto";
  p.textContent = r.text;
  quote.append(p);

  const cap = document.createElement("figcaption");
  const name = document.createElement("strong");
  name.dir = "auto";
  name.textContent = r.name;
  cap.append(name);
  if (r.detail) {
    const detail = document.createElement("span");
    detail.dir = "auto";
    detail.textContent = r.detail;
    cap.append(detail);
  }

  const head = document.createElement("div");
  head.className = "review-head";
  head.append(stars);
  if (REVIEW_GROUP[r.category]) {
    const tag = document.createElement("span");
    tag.className = "review-tag";
    tag.textContent = t(`reviews.c.${r.category}`);
    head.append(tag);
  }

  card.append(head, quote, cap);
  addSpecular(card);
  return card;
}

function renderReviews() {
  const items = (reviews || []).filter((r) => REVIEW_GROUP[r.category] === reviewCat && r.text && r.name);
  reviewList.replaceChildren(...items.slice(0, reviewsShown).map(reviewCard));
  reviewEmpty.hidden = items.length > 0;
  reviewEmpty.textContent = t(reviews === null ? "reviews.loading" : "reviews.empty");
  reviewMore.hidden = items.length <= reviewsShown;
}

function selectReviewTab(tab, focus) {
  reviewCat = tab.dataset.cat;
  reviewsShown = REVIEWS_PAGE;
  reviewTabs.forEach((b) => {
    const on = b === tab;
    b.setAttribute("aria-selected", String(on));
    b.tabIndex = on ? 0 : -1;
  });
  reviewList.setAttribute("aria-labelledby", tab.id);
  if (focus) tab.focus();
  renderReviews();
}

reviewTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectReviewTab(tab));
  tab.addEventListener("keydown", (e) => {
    const rtl = document.documentElement.dir === "rtl";
    const step = { ArrowRight: rtl ? -1 : 1, ArrowLeft: rtl ? 1 : -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    selectReviewTab(reviewTabs[(i + step + reviewTabs.length) % reviewTabs.length], true);
  });
});

reviewMore.addEventListener("click", () => {
  reviewsShown += REVIEWS_PAGE;
  renderReviews();
});

async function loadReviews() {
  if (!CONFIG.reviewsEndpoint) {
    reviews = [];
  } else {
    try {
      const res = await fetch(CONFIG.reviewsEndpoint);
      const data = await res.json();
      reviews = Array.isArray(data.reviews) ? data.reviews : [];
    } catch (_) {
      reviews = [];
    }
  }
  renderReviews();
}

renderReviews();
// Fetch only when the visitor gets close to the section
const reviewsWatch = new IntersectionObserver(
  (entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      reviewsWatch.disconnect();
      loadReviews();
    }
  },
  { rootMargin: "600px 0px" }
);
reviewsWatch.observe(document.getElementById("reviews"));
document.addEventListener("langchange", renderReviews);

// Write-a-review panel
function setReviewPanel(open) {
  reviewPanel.hidden = !open;
  reviewOpen.setAttribute("aria-expanded", String(open));
  if (!open) return;
  reviewForm.hidden = false;
  reviewThanks.hidden = true;
  reviewError.hidden = true;
  reviewForm.elements.name.focus({ preventScroll: true });
  reviewPanel.scrollIntoView({ behavior: calmMotion ? "auto" : "smooth", block: "nearest" });
}
reviewOpen.addEventListener("click", () => setReviewPanel(reviewPanel.hidden));
document.getElementById("review-cancel").addEventListener("click", () => {
  setReviewPanel(false);
  reviewOpen.focus();
});

reviewForm.addEventListener("change", (e) => {
  if (e.target.name === "rating") reviewStars.dataset.value = e.target.value;
  if (e.target.name === "category") reviewError.hidden = true;
});

function showReviewError(key) {
  reviewError.textContent = t(key);
  reviewError.hidden = false;
}

reviewForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const f = reviewForm.elements;
  const data = {
    name: f.name.value.trim(),
    category: f.category.value,
    rating: Number(f.rating.value) || 5,
    detail: f.detail.value.trim(),
    text: f.text.value.trim(),
    lang: current,
    website: f.website.value,   // honeypot: real visitors leave it empty
  };
  if (!data.name || data.text.length < 5) {
    showReviewError("reviews.form.error");
    (data.name ? f.text : f.name).focus();
    return;
  }
  if (!REVIEW_GROUP[data.category]) {
    showReviewError("reviews.form.pick");
    f.category[0].focus();
    return;
  }
  reviewError.hidden = true;

  // Not connected to the sheet yet: hand the review over by email
  if (!CONFIG.reviewsEndpoint) {
    const cat = t(`reviews.c.${data.category}`);
    const body = [
      `${t("msg.name")}: ${data.name}`,
      `${t("reviews.form.category")}: ${cat}${data.detail ? ` — ${data.detail}` : ""}`,
      `${t("msg.rating")}: ${"★".repeat(data.rating)}`,
      "",
      data.text,
    ].join("\n");
    location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(`${t("msg.review")} — ${cat}`)}&body=${encodeURIComponent(body)}`;
    return;
  }

  reviewSubmit.disabled = true;
  reviewSubmit.textContent = t("reviews.form.sending");
  try {
    // A plain-text body keeps this a "simple" request, so Apps Script accepts it cross-origin
    const res = await fetch(CONFIG.reviewsEndpoint, { method: "POST", body: JSON.stringify(data) });
    const out = await res.json();
    if (!out.ok) throw new Error(out.error || "failed");
    reviewForm.reset();
    reviewStars.dataset.value = "5";
    reviewForm.elements.category.forEach((c) => (c.checked = false));
    reviewForm.hidden = true;
    reviewThanks.hidden = false;
  } catch (_) {
    showReviewError("reviews.form.fail");
  } finally {
    reviewSubmit.disabled = false;
    reviewSubmit.textContent = t("reviews.form.submit");
  }
});

["name", "text"].forEach((n) =>
  reviewForm.elements[n].addEventListener("input", () => (reviewError.hidden = true))
);
