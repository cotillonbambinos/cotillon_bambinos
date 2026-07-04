# 🎉 Cotillón Bambinos — Guía de uso y edición
### Para editar sin saber programación

---

## ✅ Cómo abrir y ver la web

1. Hacé doble clic en el archivo **`index.html`** que está en la carpeta del proyecto.
2. Se abre en tu navegador (Chrome, Firefox o Edge).
3. La web funciona tal cual, sin internet, desde tu computadora.

> **Consejo:** Si algo no se actualiza después de editar, presioná **Ctrl + F5** (Windows) o **Cmd + Shift + R** (Mac) para recargar sin caché.

---

## 🌐 Cómo subir la web a Hostinger

1. Entrá a tu panel de Hostinger → **Hosting** → **File Manager** (Administrador de archivos).
2. Navegá hasta la carpeta **`public_html`**.
3. Subí **todos los archivos y carpetas** de tu carpeta `bambinos/` directamente ahí dentro.
   - Tiene que quedar así: `public_html/index.html`, `public_html/lib/`, `public_html/assets/`, etc.
4. Listo. Entrá a tu dominio y ya está funcionando.

> ⚠️ **Importante:** Subí también el archivo **`.htaccess`** (puede que no lo veas porque empieza con punto — en File Manager aparece igual).

---

## ✏️ Cómo editar los textos, teléfono y productos

### Paso 1: Abrí el archivo de configuración

1. Buscá el archivo: **`lib/manifest.js`**
2. Hacé clic derecho → **Abrir con** → **Bloc de notas** (o Notepad++, si lo tenés).

### Paso 2: Cambiá lo que necesitás

El archivo está organizado en secciones. Solo cambiá el texto que está **entre comillas** (`"así"`). **No borres las comas, las llaves `{ }` ni los corchetes `[ ]`.**

---

### 📞 Cambiar el número de WhatsApp

Buscá este bloque:

```
contact: {
  phone:    "5491140000000",
  phoneDisplay: "+54 9 11 4000-0000",
```

- **`phone`**: Poné tu número completo sin espacios ni signos. Formato: código de país + código de área + número. Ejemplo para Buenos Aires: `5491155667788`
- **`phoneDisplay`**: Cómo se muestra en la web. Podés ponerlo como quieras: `+54 9 11 5566-7788`

---

### 🏠 Cambiar la dirección

Buscá:
```
address:  "Polonia 1049, José C. Paz, Buenos Aires, Argentina",
addressShort: "Polonia 1049, José C. Paz",
```

Cambiá los dos por tu dirección real.

---

### 📸 Cambiar el link de Instagram

Buscá:
```
instagram: "https://instagram.com/cotillonbambinos",
```

Reemplazá `cotillonbambinos` por tu usuario real de Instagram.

---

### 🛍️ Cambiar los productos

Cada producto tiene este formato:

```js
{
  id: 1,
  name: "Crema Ledevit Chantilly 500 g", ← nombre del producto
  category: "Repostería",               ← categoría (ver lista abajo)
  price: 5800,                          ← precio en pesos (sin puntos ni signos)
  medida: "500 g",                      ← tamaño/formato (gr, cm, talles, pack, etc.)
  img: "assets/img/crema-ledevit-chantilly-500gr.png",  ← foto del producto (dejá "" si todavía no tenés foto)
  badge: "🔥 Más pedido",               ← etiqueta (podés dejarla vacía: "")
  stock: "disponible",                  ← "disponible", "poco stock" o "agotado"
  rating: 5,                            ← puntuación del 1 al 5
  featured: true,                       ← true = aparece en Destacados; false = solo en Catálogo
  desc: "Rica, práctica y lista para usar. Ideal para rellenar, cubrir y decorar tortas."  ← descripción corta
},
```

> 💡 Si dejás `img: ""` (vacío), la tarjeta del producto muestra automáticamente un ícono de la categoría en vez de una foto rota. Es útil mientras todavía no sacaste la foto de ese producto.

**Categorías disponibles:** `Repostería`, `Dulces`, `Máscaras`, `Juguetes`, `Cotillón`, `Combos`

#### ➕ Para agregar un producto nuevo:

1. Copiá un bloque completo (desde `{` hasta `},`)
2. Pegalo antes del corchete final `]` de la lista de productos
3. Cambiá el `id` por el número siguiente (si el último es 12, el nuevo es 13)
4. Completá los datos

#### ➖ Para quitar un producto:

Borrá el bloque completo desde `{` hasta `},` (inclusive la coma del final).

---

### 🏷️ Cambiar los stats / frases de confianza

Buscá el bloque `stats`:

```js
stats: [
  { value: "500+",     label: "Productos",            icon: "🎁" },
  { value: "24/7",     label: "Disponible",           icon: "⚡" },
  ...
```

Cambiá `value` y `label` como quieras. El `icon` es un emoji, podés copiarlo de internet.

---

## 🖼️ Cómo cambiar las fotos

### Fotos de productos

1. Guardá tu foto en la carpeta **`assets/img/`**
2. El nombre del archivo tiene que coincidir con el que pusiste en `manifest.js`.
   - Ejemplo: si pusiste `"img": "assets/img/prod-torta.jpg"`, la foto tiene que llamarse `prod-torta.jpg`
3. Tamaño recomendado: **800 × 600 píxeles**, formato JPG o PNG.

### Fotos de categorías

Las fotos de las tarjetas grandes de categorías (sección "Explorá por categoría") también se editan en `manifest.js`, dentro del bloque `featuredCategories`:

```js
{
  id:      "reposteria",
  name:    "Repostería Creativa",
  badge:   "🎂 Lo más pedido",
  desc:    "Cremas, dulce de leche, pastas para tortas...",
  img:     "assets/img/crema-ledevit-chantilly-500gr.png",  ← foto (dejá "" si no tenés)
  icon:    "🧁",          ← emoji que se muestra si img está vacío
  color:   "#FF6B9D",     ← color de fondo de la tarjeta si no hay foto
  filter:  "Repostería"   ← a qué categoría del catálogo lleva el botón "Ver productos"
},
```

Si dejás `img: ""`, la tarjeta muestra automáticamente un fondo de color con el emoji de `icon` en vez de una foto rota. Ahora mismo solo la categoría **Repostería** tiene foto real; las demás (Dulces, Máscaras, Combos) muestran el ícono hasta que subas fotos.

---

## 🔄 Si algo no se actualiza en la web online

Cuando subas cambios a Hostinger, los navegadores guardan una copia vieja (caché). Para forzar que vea la versión nueva:

1. Abrí `index.html` con el Bloc de notas
2. Buscá las líneas que dicen `?v=20260531`
3. Cambiá la fecha por la fecha de hoy (ejemplo: `?v=20261201`)
4. Guardá y volvé a subir el archivo

---

## ❓ Preguntas frecuentes

**¿Puedo usar fotos que descargué de internet?**
Solo si tenés permiso (imágenes libres de derechos). Mejor usá fotos propias de tus productos.

**¿Necesito saber HTML o JavaScript?**
No. Solo editás `lib/manifest.js` con el Bloc de notas y reemplazás las fotos en `assets/img/`.

**¿La web funciona en el celular?**
Sí. Está diseñada primero para móvil (mobile-first).

**¿Puedo agregar más categorías?**
Sí. En `manifest.js` buscá `categories:` y agregá el nombre de la categoría nueva entre comillas, separado por coma.

**¿Qué hago si la web se "rompe" después de editar?**
Abrí el archivo `lib/manifest.js` en el Bloc de notas. Si hay un error, el texto va a verse raro (por ejemplo, una coma de más). Compará con el original y corregí.

---

## 📁 Estructura de carpetas

```
bambinos/
├── index.html          ← la web principal (no tocar)
├── .htaccess           ← configuración del servidor (no tocar)
├── lib/
│   ├── manifest.js     ← ✏️ AQUÍ EDITÁS TEXTOS, PRODUCTOS Y CONTACTO
│   ├── style.css       ← estilos visuales (no tocar)
│   ├── main.js         ← lógica de la web (no tocar)
│   ├── gsap.min.js     ← animaciones (no tocar)
│   └── ScrollTrigger.min.js ← animaciones (no tocar)
├── assets/
│   └── img/            ← 🖼️ AQUÍ VAN LAS FOTOS
└── templates/
    └── htaccess.template ← plantilla de configuración
```

---

*Hecho con 🎉 para Cotillón Bambinos — Polonia 1049, José C. Paz, Buenos Aires.*
