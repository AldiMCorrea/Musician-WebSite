# Reseñas: conectar la planilla de Google (≈10 minutos, una sola vez)

Las reseñas que la gente deja en la web se guardan en una planilla de Google.
Ninguna se publica hasta que marcás la casilla **Aprobado**.

## 1. Crear la planilla y el script

1. Entrá a [sheets.new](https://sheets.new) con la cuenta de Google de Sabrina (sabrinadbenedicto@gmail.com) y ponele un nombre, por ejemplo *Reseñas web*.
2. Menú **Extensiones → Apps Script**.
3. Borrá lo que aparece y pegá todo el contenido de [`Code.gs`](Code.gs). Guardá (💾).
4. Arriba, en el selector de funciones, elegí **`setup`** y tocá **Ejecutar**.
   Google va a pedir permisos: *Revisar permisos → elegir la cuenta → Configuración avanzada → Ir a (proyecto) → Permitir*.
   Esto crea la pestaña **Reseñas** con las columnas, el desplegable y las casillas.

## 2. Publicarlo como aplicación web

1. **Implementar → Nueva implementación**.
2. Tipo (⚙️): **Aplicación web**.
3. *Ejecutar como*: **Yo**. *Quién tiene acceso*: **Cualquier persona**.
4. **Implementar** y copiá la **URL de la aplicación web** (termina en `/exec`).

## 3. Pegar la URL en la web

En `script.js`, arriba de todo:

```js
reviewsEndpoint: "https://script.google.com/macros/s/XXXXXXXX/exec",
```

Hacé commit y push, y listo.

## Uso diario

- Cuando llega una reseña nueva, Sabrina recibe un email en sabrinadbenedicto@gmail.com con el texto y el link a la planilla.
- Para **publicarla**, marcá ✅ en **Aprobado**. Aparece en la web al recargar la página.
  Se ubica sola según la **Categoría**: *Clases de piano* y *Clases de violín* van a la pestaña **Clases**;
  *Bodas*, *Memoriales*, *Corporativos y galas* y *Celebraciones privadas* van a **Eventos**.
  Si la persona eligió mal, cambiá la categoría en la planilla y se mueve sola.
- Para **ocultarla**, desmarcá la casilla. Para borrarla del todo, borrá la fila.
- Para **cargar reseñas que ya tiene** (de WhatsApp, Google, etc.), agregá una fila a mano:
  Nombre, Categoría (elegila del desplegable), Estrellas (1–5), Detalle (opcional), Reseña, y marcá Aprobado.
- Podés corregir errores de tipeo directamente en la celda.

## Si cambiás `Code.gs` más adelante

**Implementar → Administrar implementaciones → ✏️ → Versión: Nueva versión → Implementar.**
Así la URL sigue siendo la misma y no hay que tocar la web.
