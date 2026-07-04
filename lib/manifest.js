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
        img: "assets/img/crema-ledevit-chantilly-500gr.png",
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
        img: "assets/img/crema-ledevit-frutilla-500gr.png",
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
        img: "assets/img/crema-ledevit-vainilla-500gr.png",
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
        img: "assets/img/crema-ledevit-chocolate-500gr.png",
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
        img: "assets/img/dulce-de-leche-repostero-ElBosque-400gr-potTransparente.png",
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
        img: "assets/img/dulce-de-leche-repostero-vacalin-400gr.png",
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
        img: "assets/img/dulce-de-leche-repostero-vacalin-400gr-potTransparente.png",
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
        img: "assets/img/relleno-BonOBon-mani-290gr.png",
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
        img: "assets/img/GelDeBrillo-ledevit-destello-310gr.png",
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
        img: "assets/img/micky-mani-mapsa-450gr.png",
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
        img: "assets/img/micky-frutilla-mapsa-450gr.png",
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
        img: "assets/img/micky-menta-mapsa-450gr.png",
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
        img: "assets/img/micky_Pistacho-Mapsa-450gr.png",
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
        img: "assets/img/Pasta-ballina-blanco-500gr.png",
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
        img: "assets/img/Pasta-ballina-negro-500gr.png",
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
        img: "assets/img/Pasta-ballina-rojo-500gr.png",
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
        img: "assets/img/Pasta-ballina-rosa-500gr.png",
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
        img: "assets/img/Pasta-ballina-verde-500gr.png",
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
        img: "assets/img/Pasta-ballina-amarillo-500gr.png",
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
        img: "assets/img/PastaDeGoma-ballina-500gr.png",
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
        img: "assets/img/Bizcochuelo-de-vainilla-Ravana.png",
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
        img: "assets/img/bizcochuelo-emeth-vainilla-450gr.png",
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
        img: "assets/img/brownie-ledevit-470g.png",
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
        name: "Peluca Arco Iris",
        category: "Máscaras",
        price: 1900,
        medida: "Talle único",
        img: "",
        badge: "🆕 Nuevo",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Multicolor y lavable. Talle único."
      },
      {
        id: 26,
        name: "Disfraz Bruja Completo",
        category: "Máscaras",
        price: 4100,
        medida: "Talles S/M/L",
        img: "",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Vestido, sombrero y escoba. Talles S, M y L."
      },
      {
        id: 27,
        name: "Bolsa Sorpresa Kids",
        category: "Juguetes",
        price: 1800,
        medida: "Pack x5",
        img: "",
        badge: "🆕 Nuevo",
        stock: "disponible",
        rating: 5,
        featured: true,
        desc: "Cinco mini juguetes más golosinas."
      },
      {
        id: 28,
        name: "Peluche Oso Corazón",
        category: "Juguetes",
        price: 3600,
        medida: "25 cm",
        img: "",
        badge: "",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Supersuave. Ideal para regalo o sorpresa."
      },
      {
        id: 29,
        name: "Set Plastilina 12 Colores",
        category: "Juguetes",
        price: 2100,
        medida: "12 colores",
        img: "",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Con moldes y herramientas incluidas."
      },
      {
        id: 30,
        name: "Surtido Golosinas",
        category: "Dulces",
        price: 2400,
        medida: "500 g",
        img: "",
        badge: "🔥 Más pedido",
        stock: "disponible",
        rating: 4,
        featured: true,
        desc: "Mix de caramelos, chicles y chocolatines."
      },
      {
        id: 31,
        name: "Chupetines Artesanales",
        category: "Dulces",
        price: 3000,
        medida: "Pack x12",
        img: "",
        badge: "🆕 Nuevo",
        stock: "disponible",
        rating: 5,
        featured: false,
        desc: "Personalizados con nombre y sabores frutales."
      },
      {
        id: 32,
        name: "Chocolates Artesanales",
        category: "Dulces",
        price: 5200,
        medida: "Pack x24",
        img: "",
        badge: "🔥 Más pedido",
        stock: "disponible",
        rating: 5,
        featured: true,
        desc: "Rellenos y caja decorada."
      },
      {
        id: 33,
        name: "Garrapiñadas",
        category: "Dulces",
        price: 1600,
        medida: "200 g",
        img: "",
        badge: "",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Maní bañado en caramelo artesanal."
      },
      {
        id: 34,
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
        id: 35,
        name: "Combo Cumple Princesa",
        category: "Combos",
        price: 22000,
        medida: "Pack completo",
        img: "",
        badge: "⏳ Últimos",
        stock: "disponible",
        rating: 5,
        featured: true,
        desc: "Torta, cupcakes, cotillón y arco de globos."
      },
      {
        id: 36,
        name: "Combo Dino Party",
        category: "Combos",
        price: 8900,
        medida: "Pack x10",
        img: "",
        badge: "💲 Oferta",
        stock: "disponible",
        rating: 4,
        featured: false,
        desc: "Piñata, kit cotillón y bolsas sorpresa."
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
