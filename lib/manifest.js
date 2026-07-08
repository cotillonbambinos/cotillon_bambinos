/* ============================================================
   lib/manifest.js — Datos editables de Cotillón Bambinos

   INSTRUCCIONES PARA EDITAR:
   • Abrí este archivo con el Bloc de notas (clic derecho → Abrir con → Bloc de notas)
   • Cambiá solo los textos entre comillas ("...")
   • NO borres comas, llaves { } ni corchetes [ ]
   • Guardá con Ctrl + S
   • En el navegador presioná Ctrl + F5 para ver los cambios
   ============================================================ */

(function (w) {

  w.__BAMBINOS__ = {

    /* ── MARCA ─────────────────────────────────────────────── */
    brand: {
      name:        "Cotillón Bambinos",
      tagline:     "Todo para tu fiesta, a pasos de tu casa en José C. Paz.",
      kicker:      "Repostería · Dulces · Juguetes · Máscaras · Combos",
      description: "Hace 15 años armamos fiestas en Polonia 1049. Vení a ver, pedí por WhatsApp o retirá en el día.",
      year:        "2026",
      logoText:    "Bambinos",
      logoImg:     "assets/img/logo.png"
    },

    /* ── CONTACTO ───────────────────────────────────────────── */
    contact: {
      phone:    "5491158404213",        /* ← reemplazá con tu número (código país + código área + número, sin + ni espacios) */
      phoneDisplay: "+54 9 11 5840-4213",
      address:  "Polonia 1049, José C. Paz, Buenos Aires, Argentina",
      addressShort: "Polonia 1049, José C. Paz",
      gmapsLink: "https://maps.google.com/?q=Polonia+1049+Jose+C+Paz+Buenos+Aires+Argentina",
      gmapsEmbed: "https://www.google.com/maps?q=Polonia+1049,+Jose+C.+Paz,+Buenos+Aires,+Argentina&output=embed",
      whatsappMessage: "Hola! Me interesa hacer un pedido en Cotillón Bambinos. Te paso los productos que elegí:"
    },

    /* ── REDES SOCIALES ─────────────────────────────────────── */
    social: {
      instagram: "https://instagram.com/cotillonbambinos",
      facebook:  "",    /* dejá vacío si no tenés */
      tiktok:    ""     /* dejá vacío si no tenés */
    },

    /* ── STATS / CONFIANZA ──────────────────────────────────── */
    stats: [
      { value: "15",   label: "Años en el barrio",        icon: "🏠" },
      { value: "JCP",  label: "Polonia 1049",             icon: "📍" },
      { value: "WApp", label: "Pedís y coordinás retiro", icon: "💬" },
      { value: "4",    label: "Formas de pago",           icon: "💵" }
    ],

    /* ── CATEGORÍAS DE FILTRO ───────────────────────────────── */
    categories: ["Todos", "Repostería", "Dulces", "Máscaras", "Juguetes", "Combos"],

    /* ── OPCIONES DE ORDENAMIENTO ───────────────────────────── */
    sortOptions: [
      { value: "default",    label: "Más populares"   },
      { value: "price-asc",  label: "Menor precio"    },
      { value: "price-desc", label: "Mayor precio"    },
      { value: "rating",     label: "Mejor valorados" }
    ],

    /* ── PRODUCTOS ──────────────────────────────────────────── */
    /* Para agregar un producto copiá un bloque {} y pegalo antes del ] final */
    /* rating: número del 1 al 5 | featured: true para destacados | stock: "disponible" / "poco stock" / "agotado" */
    /* medida: el tamaño/formato del producto (gr, cm, talles, pack, etc.) */
    products: [
      {
        id: 1,
        name: "Crema Ledevit Chantilly 500 g",
        category: "Repostería",
        price: 5800,
        medida: "500 g",
        img: "assets/img/crema-ledevit-chantilly-500gr.webp",
        badge: "🔥 Más pedido",
        stock: "disponible",
        rating: 5,
        featured: true,
        desc: "Rica, práctica y lista para usar. Ideal para rellenar, cubrir y decorar tortas, postres y facturas."
      },
      {
        id: 2,
        name: "Crema Ledevit Frutilla 500 g",
        category: "Repostería",
        price: 5800,
        medida: "500 g",
        img: "assets/img/crema-ledevit-frutilla-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Lista para batir, con sabor a frutilla. Queda firme para decorar y le da color a la torta sin teñir de más."
      },
      {
        id: 3,
        name: "Crema Ledevit Vainilla 500 g",
        category: "Repostería",
        price: 5800,
        medida: "500 g",
        img: "assets/img/crema-ledevit-vainilla-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "La clásica de vainilla: neutra, rinde bien y es la base perfecta cuando querés agregarle tu propio color o sabor."
      },
      {
        id: 4,
        name: "Crema Ledevit Chocolate 500 g",
        category: "Repostería",
        price: 6600,
        medida: "500 g",
        img: "assets/img/crema-ledevit-chocolate-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Sabor a chocolate marcado, ideal para rellenos golosos y coberturas que no se bajan con el calor."
      },
      {
        id: 5,
        name: "Dulce de Leche Repostero El Bosque",
        category: "Repostería",
        price: 2300,
        medida: "400 g",
        img: "assets/img/dulce-de-leche-repostero-ElBosque-400gr-potTransparente.webp",
        badge: "🆕 Nuevo",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "De textura firme y sabor tradicional. Ideal para rellenos y decoraciones en tortas, alfajores y postres."
      },
      {
        id: 6,
        name: "Dulce de Leche Repostero Vacalin (Pote Original)",
        category: "Repostería",
        price: 3600,
        medida: "400 g",
        img: "assets/img/dulce-de-leche-repostero-vacalin-400gr.webp",
        badge: "🆕 Nuevo",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "De textura firme y sabor intenso. Ideal para rellenar y decorar tortas, alfajores y postres."
      },
      {
        id: 7,
        name: "Dulce de Leche Repostero Vacalin (Pote Transparente)",
        category: "Repostería",
        price: 3500,
        medida: "400 g",
        img: "assets/img/dulce-de-leche-repostero-vacalin-400gr-potTransparente.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "El mismo Vacalin repostero, en pote transparente para que veas el punto y el color. Mismo precio, un toque más económico."
      },
      {
        id: 8,
        name: "Relleno Bon o Bon Maní",
        category: "Repostería",
        price: 6300,
        medida: "290 g",
        img: "assets/img/relleno-BonOBon-mani-290gr.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Cremoso y con intenso sabor a maní. Ideal para rellenos y decoraciones en tortas, postres y facturas."
      },
      {
        id: 9,
        name: "Gel de Brillo Ledevit Sabor Neutro",
        category: "Repostería",
        price: 4800,
        medida: "310 g",
        img: "assets/img/GelDeBrillo-ledevit-destello-310gr.webp",
        badge: "🔥 Más pedido",
        stock: "disponible",
        rating: 5,
        featured: true,
        desc: "Ideal para dar un acabado brillante y profesional a tus tortas y postres."
      },
      {
        id: 10,
        name: "Micky Mapsa Maní",
        category: "Repostería",
        price: 6000,
        medida: "450 g",
        img: "assets/img/micky-mani-mapsa-450gr.webp",
        badge: "💲 Oferta",
        stock: "disponible",
        rating: 5,
        featured: true,
        desc: "Crema de maní ideal para rellenos, coberturas o postres."
      },
      {
        id: 11,
        name: "Micky Mapsa Frutilla",
        category: "Repostería",
        price: 6000,
        medida: "450 g",
        img: "assets/img/micky-frutilla-mapsa-450gr.webp",
        badge: "💲 Oferta",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Crema de frutilla ideal para rellenos, coberturas o postres."
      },
      {
        id: 12,
        name: "Micky Mapsa Menta",
        category: "Repostería",
        price: 6000,
        medida: "450 g",
        img: "assets/img/micky-menta-mapsa-450gr.webp",
        badge: "💲 Oferta",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Crema de menta ideal para rellenos, coberturas o postres."
      },
      {
        id: 13,
        name: "Micky Mapsa Pistacho",
        category: "Repostería",
        price: 6000,
        medida: "450 g",
        img: "assets/img/micky_Pistacho-Mapsa-450gr.webp",
        badge: "💲 Oferta",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Crema de pistacho ideal para rellenos, coberturas o postres."
      },
      {
        id: 14,
        name: "Pasta Ballina para Cubrir Tortas - Blanco",
        category: "Repostería",
        price: 6000,
        medida: "500 g",
        img: "assets/img/Pasta-ballina-blanco-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "El básico que no puede faltar: cubre parejo y es la base para teñir del color que necesites."
      },
      {
        id: 15,
        name: "Pasta Ballina para Cubrir Tortas - Negro",
        category: "Repostería",
        price: 6000,
        medida: "500 g",
        img: "assets/img/Pasta-ballina-negro-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Color intenso ya listo, sin manchar las manos. Perfecto para detalles, contornos y temáticas oscuras."
      },
      {
        id: 16,
        name: "Pasta Ballina para Cubrir Tortas - Rojo",
        category: "Repostería",
        price: 6000,
        medida: "500 g",
        img: "assets/img/Pasta-ballina-rojo-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Rojo vivo difícil de lograr tiñendo en casa. Ideal para Mickey, autos, corazones y temáticas fuertes."
      },
      {
        id: 17,
        name: "Pasta Ballina para Cubrir Tortas - Rosa",
        category: "Repostería",
        price: 6000,
        medida: "500 g",
        img: "assets/img/Pasta-ballina-rosa-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "El más pedido para cumples de princesas y baby showers de nena. Tono pastel listo para estirar."
      },
      {
        id: 18,
        name: "Pasta Ballina para Cubrir Tortas - Verde",
        category: "Repostería",
        price: 6000,
        medida: "500 g",
        img: "assets/img/Pasta-ballina-verde-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Verde parejo para dinos, fútbol o naturaleza. Se estira fácil y no se cuartea al cubrir."
      },
      {
        id: 19,
        name: "Pasta Ballina para Cubrir Tortas - Amarillo",
        category: "Repostería",
        price: 6000,
        medida: "500 g",
        img: "assets/img/Pasta-ballina-amarillo-500gr.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Amarillo alegre para temáticas de abejas, soles y Pooh. Cubre sin rastros de color disparejo."
      },
      {
        id: 20,
        name: "Pasta de Goma Ballina",
        category: "Repostería",
        price: 5000,
        medida: "500 g",
        img: "assets/img/PastaDeGoma-ballina-500gr.webp",
        badge: "🆕 Nuevo",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Ideal para modelado y decoraciones detalladas."
      },
      {
        id: 21,
        name: "Bizcochuelo Ravana Sabor Vainilla",
        category: "Repostería",
        price: 2800,
        medida: "540 g",
        img: "assets/img/Bizcochuelo-de-vainilla-Ravana.webp",
        badge: "🆕 Nuevo",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Esponjoso y de sabor suave. Ideal como base para tortas."
      },
      {
        id: 22,
        name: "Bizcochuelo Emeth Sabor Vainilla",
        category: "Repostería",
        price: 2000,
        medida: "450 g",
        img: "assets/img/bizcochuelo-emeth-vainilla-450gr.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Suave y esponjoso. Ideal como base para preparaciones dulces caseras."
      },
      {
        id: 23,
        name: "Brownie Ledevit",
        category: "Repostería",
        price: 4600,
        medida: "470 g",
        img: "assets/img/brownie-ledevit-470g.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Húmedo y con intenso sabor a chocolate."
      },
      {
        id: 24,
        name: "Kit Máscaras Superhéroes",
        category: "Máscaras",
        price: 2400,
        medida: "Pack x4",
        img: "",
        badge: "🔥 Más pedido",
        stock: "disponible",
        rating: 4,
        featured: true,
        desc: "Set x4 en EVA resistente."
      },
      {
        id: 25,
        name: "Combo Baby Shower",
        category: "Combos",
        price: 14500,
        medida: "Pack completo",
        img: "",
        badge: "💲 Oferta",
        stock: "disponible",
        rating: 5,
        featured: true,
        desc: "Torta, cupcakes, globos y decoración completa."
      },
      {
        id: 26,
        name: "Saladix",
        category: "Dulces",
        price: 1300,
        medida: "33gr",
        img: "assets/img/saladix.webp",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Saladix Duo Jamon Y Queso."
      },
      {
        id: 27,
        name: "Pastry Spray Dorado",
        category: "Repostería",
        price: 21000,
        medida: "",
        img: "assets/img/pastry-spray-dorado.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Decorante Artificial Dorado En Aerosol."
      },
      {
        id: 28,
        name: "Mielcita",
        category: "Dulces",
        price: 500,
        medida: "X5",
        img: "assets/img/mielcita.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Mielsitas De Sabor Frutilla Manzana Y Limon."
      },
      {
        id: 29,
        name: "Juego De ludo",
        category: "Juguetes",
        price: 19000,
        medida: "",
        img: "assets/img/argentinaJuego.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Juego De ludo Version Argentina."
      },
      {
        id: 30,
        name: "Juego Color Dance",
        category: "Juguetes",
        price: 14000,
        medida: "",
        img: "assets/img/ColorDance.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Alfombra Y Ruleta!! Juego clasico."
      },
      {
        id: 31,
        name: "Juego 4 En Linea",
        category: "Juguetes",
        price: 6900,
        medida: "",
        img: "assets/img/4EnLinea.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "La Linea Puede Ser Horizontal, Vertical o Diagonal."
      },
      {
        id: 32,
        name: "Laberinto De Bolitas",
        category: "Juguetes",
        price: 11000,
        medida: "",
        img: "assets/img/cityBall.webp",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "City Ball, Desafia el Aro Infernal."
      }
    ],

    /* ── COLORES DEL TEMA ───────────────────────────────────── */
    /* Solo cambiá si sos diseñador y sabés lo que hacés */
    theme: {
      primary:   "#FF6B9D",
      secondary: "#845EF7",
      accent:    "#F59F00",
      success:   "#20C997",
      dark:      "#1A1025",
      light:     "#FFF9FC"
    }

  }; /* fin de __BAMBINOS__ */

})(window);
