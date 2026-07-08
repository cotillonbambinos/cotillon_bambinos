/* ============================================================
   Cotillón Bambinos — main.js
   IIFE pattern, no modules, no imports
   ============================================================ */

(function () {
  'use strict';

  /* ── helpers ─────────────────────────────────────────────── */
  var D = window.__BAMBINOS__;

  function safe(fn, name) {
    try { fn(); }
    catch (e) { console.warn('[Bambinos] Error en ' + name + ':', e.message); }
  }

  function el(sel, ctx) { return (ctx || document).querySelector(sel); }
  function els(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  /* Arma el link de WhatsApp con el detalle del pedido y el total estimado. */
  function waMsgLink(items, customerName) {
    var name = (customerName || '').trim() || 'un cliente';
    var msg = 'Hola, soy ' + name + '. Quisiera realizar el siguiente pedido:\n\n';
    items.forEach(function (item) {
      msg += '• ' + item.qty + ' x ' + item.name + ' — $' + (item.price * item.qty).toLocaleString('es-AR') + '\n';
    });
    var total = items.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    msg += '\nTotal estimado: $' + total.toLocaleString('es-AR');
    msg += '\n\nMuchas gracias.';
    return 'https://wa.me/' + D.contact.phone + '?text=' + encodeURIComponent(msg);
  }

  /* Devuelve el nombre cargado en el campo del carrito, o null si está vacío.
     Si está vacío, abre el carrito y enfoca el campo para que el cliente lo complete. */
  function requireCustomerName() {
    var input = el('#cart-customer-name');
    if (!input) return 'un cliente';
    var name = input.value.trim();
    if (name) return name;
    cartOpen();
    input.classList.remove('shake');
    void input.offsetWidth;
    input.classList.add('shake');
    input.focus();
    showToast('Contanos tu nombre antes de enviar el pedido 🙂');
    return null;
  }

  /* ── toast simple ────────────────────────────────────────── */
  function showToast(message) {
    var existing = el('#bambinos-toast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.id = 'bambinos-toast';
    toast.className = 'bambinos-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add('show'); });
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 300);
    }, 2400);
  }

  function waLink(msg) {
    var text = msg || '¡Hola! Quiero consultar sobre sus productos.';
    return 'https://wa.me/' + D.contact.phone + '?text=' + encodeURIComponent(text);
  }

  function formatPrice(n) { return '$\u00A0' + n.toLocaleString('es-AR'); }

  function stars(rating) {
    var full = Math.floor(rating);
    var half = rating % 1 >= 0.5;
    var out = '';
    for (var i = 0; i < 5; i++) {
      if (i < full) out += '<span class="star full">★</span>';
      else if (i === full && half) out += '<span class="star half">★</span>';
      else out += '<span class="star empty">★</span>';
    }
    return out;
  }

  /* ── cart state (con persistencia en localStorage) ──────── */
  var CART_KEY = 'bambinos_cart_v1';

  function cartLoad() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }

  function cartSave() {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); }
    catch (e) { /* almacenamiento no disponible: el carrito sigue en memoria */ }
  }

  var cart = cartLoad();

  function cartAdd(productId) {
    var prod = D.products.find(function (p) { return p.id === productId; });
    if (!prod) return;
    var existing = cart.find(function (i) { return i.id === productId; });
    if (existing) existing.qty++;
    else cart.push({ id: prod.id, name: prod.name, price: prod.price, img: prod.img, qty: 1 });
    cartRender();
    cartOpen();
    cartBubbleAnimate();
  }

  function cartRemove(productId) {
    cart = cart.filter(function (i) { return i.id !== productId; });
    cartRender();
  }

  function cartChange(productId, delta) {
    var item = cart.find(function (i) { return i.id === productId; });
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    cartRender();
  }

  function cartTotal() {
    return cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
  }

  function cartCount() {
    return cart.reduce(function (s, i) { return s + i.qty; }, 0);
  }

  var lastFocusedEl = null;

  function cartOpen() {
    var drawer = el('#cart-drawer');
    var overlay = el('#cart-overlay');
    lastFocusedEl = document.activeElement;
    if (drawer) drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.classList.add('cart-open');
    var closeBtn = el('#cart-close');
    if (closeBtn) closeBtn.focus();
  }

  function cartClose() {
    var drawer = el('#cart-drawer');
    var overlay = el('#cart-overlay');
    if (drawer) drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.classList.remove('cart-open');
    if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') lastFocusedEl.focus();
  }

  /* Trampa de foco: mientras el carrito está abierto, Tab/Shift+Tab
     ciclan solo entre los elementos enfocables del drawer. */
  function cartFocusTrap(e) {
    if (e.key !== 'Tab') return;
    var drawer = el('#cart-drawer');
    if (!drawer || !drawer.classList.contains('open')) return;
    var focusables = els('button, a[href], input, select, [tabindex]:not([tabindex="-1"])', drawer)
      .filter(function (node) { return !node.disabled && node.offsetParent !== null; });
    if (focusables.length === 0) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function cartBubbleAnimate() {
    var bubble = el('#cart-bubble');
    if (!bubble) return;
    bubble.textContent = cartCount();
    bubble.classList.remove('pop');
    void bubble.offsetWidth;
    bubble.classList.add('pop');
  }

  function cartRender() {
    cartSave();
    var body = el('#cart-body');
    var footer = el('#cart-footer');
    var bubble = el('#cart-bubble');
    if (!body) return;

    if (bubble) bubble.textContent = cartCount();

    if (cart.length === 0) {
      body.innerHTML = '<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p>Tu carrito está vacío</p><span>Agregá productos del catálogo</span></div>';
      if (footer) footer.classList.add('hidden');
      return;
    }

    if (footer) footer.classList.remove('hidden');

    body.innerHTML = cart.map(function (item) {
      return '<div class="cart-item" data-id="' + item.id + '">' +
        '<div class="cart-item-img"><img src="' + item.img + '" alt="' + item.name + '" onerror="this.src=\'assets/img/placeholder.svg\'"></div>' +
        '<div class="cart-item-info">' +
        '<div class="cart-item-name">' + item.name + '</div>' +
        '<div class="cart-item-price">' + formatPrice(item.price) + '</div>' +
        '</div>' +
        '<div class="cart-item-controls">' +
        '<button class="qty-btn minus" data-id="' + item.id + '" aria-label="Quitar uno">−</button>' +
        '<span class="qty-val">' + item.qty + '</span>' +
        '<button class="qty-btn plus" data-id="' + item.id + '" aria-label="Agregar uno">+</button>' +
        '<button class="cart-item-del" data-id="' + item.id + '" aria-label="Eliminar">×</button>' +
        '</div>' +
        '</div>';
    }).join('');

    var totalEl = el('#cart-total-price');
    if (totalEl) totalEl.textContent = formatPrice(cartTotal());

    /* bind controls */
    els('.qty-btn.minus', body).forEach(function (btn) {
      btn.addEventListener('click', function () { cartChange(+btn.dataset.id, -1); });
    });
    els('.qty-btn.plus', body).forEach(function (btn) {
      btn.addEventListener('click', function () { cartChange(+btn.dataset.id, 1); });
    });
    els('.cart-item-del', body).forEach(function (btn) {
      btn.addEventListener('click', function () { cartRemove(+btn.dataset.id); });
    });
  }

  /* ── placeholder SVG (inline, no fetch needed) ───────────── */
  function injectPlaceholder() {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="#f0e6f8" width="400" height="300"/><text x="50%" y="45%" text-anchor="middle" fill="#c084fc" font-size="48">🎉</text><text x="50%" y="65%" text-anchor="middle" fill="#a855f7" font-size="14">Bambinos</text></svg>';
    var blob = new Blob([svg], { type: 'image/svg+xml' });
    return URL.createObjectURL(blob);
  }

  /* Emoji representativo por categoría, usado cuando un producto todavía no tiene foto real */
  var CATEGORY_ICON = {
    'Repostería': '🧁',
    'Dulces': '🍬',
    'Máscaras': '🎭',
    'Juguetes': '🧸',
    'Cotillón': '🎈',
    'Combos': '🎉'
  };
  var CATEGORY_COLOR = {
    'Repostería': '#FF6B9D',
    'Dulces': '#F59F00',
    'Máscaras': '#845EF7',
    'Juguetes': '#74C0FC',
    'Cotillón': '#20C997',
    'Combos': '#FF8787'
  };

  /* ── product card builder ────────────────────────────────── */
  function productCard(prod) {
    var stockClass = prod.stock === 'agotado' ? 'stock-out' : prod.stock === 'poco stock' ? 'stock-low' : 'stock-ok';
    var stockLabel = prod.stock === 'agotado' ? 'Sin stock' : prod.stock === 'poco stock' ? '⚡ Poco stock' : '✓ Disponible';
    var disabledAttr = prod.stock === 'agotado' ? ' disabled' : '';
    var hasPhoto = !!prod.img;
    var catColor = CATEGORY_COLOR[prod.category] || '#845EF7';
    var catIcon = CATEGORY_ICON[prod.category] || '🎁';

    var imgBlock = hasPhoto
      ? '<img class="prod-img lazy" src="assets/img/placeholder.svg" data-src="' + prod.img + '" alt="' + prod.name + '" loading="lazy" onerror="this.src=\'assets/img/placeholder.svg\'">'
      : '<div class="prod-img prod-img-fallback" style="--cat-color:' + catColor + '"><span class="prod-img-fallback-icon">' + catIcon + '</span></div>';

    return '<div class="prod-card" data-id="' + prod.id + '" data-cat="' + prod.category + '" data-price="' + prod.price + '" data-rating="' + prod.rating + '">' +
      '<div class="prod-img-wrap">' +
      imgBlock +
      (prod.badge ? '<div class="prod-badge">' + prod.badge + '</div>' : '') +
      '</div>' +
      '<div class="prod-body">' +
      '<div class="prod-cat-tag">' + prod.category + (prod.medida ? ' · ' + prod.medida : '') + '</div>' +
      '<div class="prod-name">' + prod.name + '</div>' +
      '<div class="prod-stars">' + stars(prod.rating) + ' <span class="prod-rating-num">(' + prod.rating + ')</span></div>' +
      '<div class="prod-desc">' + (prod.desc || '') + '</div>' +
      '<div class="prod-footer">' +
      '<div class="prod-price">' + formatPrice(prod.price) + '</div>' +
      '<div class="prod-stock ' + stockClass + '">' + stockLabel + '</div>' +
      '</div>' +
      '<button class="btn-add-cart"' + disabledAttr + ' data-id="' + prod.id + '">' +
      (prod.stock === 'agotado' ? 'Sin stock' : '+ Agregar') +
      '</button>' +
      '</div>' +
      '</div>';
  }


  /* ── init: nav ───────────────────────────────────────────── */
  function initNav() {
    var nav = el('#main-nav');
    var burger = el('#nav-burger');
    var navMenu = el('#nav-menu');
    if (!nav) return;

    /* scroll effect */
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* burger toggle */
    if (burger && navMenu) {
      burger.addEventListener('click', function () {
        var open = navMenu.classList.toggle('open');
        burger.classList.toggle('active', open);
        burger.setAttribute('aria-expanded', open);
      });

      /* close on link click */
      els('a', navMenu).forEach(function (a) {
        a.addEventListener('click', function () {
          navMenu.classList.remove('open');
          burger.classList.remove('active');
          burger.setAttribute('aria-expanded', false);
        });
      });
    }

    /* wa buttons in nav */
    els('[data-wa]', nav).forEach(function (btn) {
      btn.href = waLink();
    });
  }

  /* ── init: hero ──────────────────────────────────────────── */
  function initHero() {
    /* update WA links */
    els('[data-wa]').forEach(function (btn) {
      if (!btn.closest('#cart-drawer') && !btn.closest('#cart-footer-wa')) {
        btn.href = waLink();
      }
    });

    /* smooth scroll for anchor CTA */
    els('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var target = el(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }


  /* ── init: catalog ───────────────────────────────────────── */
  function initCatalog() {
    var grid = el('#catalog-grid');
    var searchInput = el('#catalog-search');
    var filterBtns = els('.filter-btn');
    var sortSel = el('#catalog-sort');
    var countEl = el('#catalog-count');
    if (!grid) return;

    var activeFilter = 'Todos';
    var activeSort = 'default';
    var activeSearch = '';

    /* Genera los botones de filtro SOLO con categorías que tienen productos reales,
       evitando filtros que caen en estado vacío. */
    function buildFilters() {
      var filtersWrap = el('.catalog-filters');
      if (!filtersWrap) return;
      var ICONS = { 'Repostería':'🎂','Dulces':'🍬','Máscaras':'🎭','Juguetes':'🎲','Cotillón':'🎈','Combos':'🌟' };
      var cats = [];
      D.products.forEach(function (p) { if (cats.indexOf(p.category) === -1) cats.push(p.category); });
      var html = '<button class="filter-btn active" data-cat="Todos" aria-pressed="true">Todos</button>';
      cats.forEach(function (c) {
        var ic = ICONS[c] ? ICONS[c] + ' ' : '';
        html += '<button class="filter-btn" data-cat="' + c + '" aria-pressed="false">' + ic + c + '</button>';
      });
      filtersWrap.innerHTML = html;
    }
    buildFilters();
    filterBtns = els('.filter-btn');

    function getFiltered() {
      var prods = D.products.slice();

      /* search */
      if (activeSearch) {
        var q = activeSearch.toLowerCase();
        prods = prods.filter(function (p) {
          return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || (p.desc || '').toLowerCase().includes(q);
        });
      }

      /* filter */
      if (activeFilter !== 'Todos') {
        prods = prods.filter(function (p) { return p.category === activeFilter; });
      }

      /* sort */
      if (activeSort === 'price-asc') prods.sort(function (a, b) { return a.price - b.price; });
      else if (activeSort === 'price-desc') prods.sort(function (a, b) { return b.price - a.price; });
      else if (activeSort === 'rating') prods.sort(function (a, b) { return b.rating - a.rating; });

      return prods;
    }

    function renderCatalog() {
      var prods = getFiltered();
      if (countEl) countEl.textContent = prods.length + ' producto' + (prods.length !== 1 ? 's' : '');

      if (prods.length === 0) {
        grid.innerHTML = '<div class="catalog-empty"><div class="catalog-empty-icon">🔍</div><p>No encontramos productos con esos filtros</p><button class="btn-reset-filters">Ver todos</button></div>';
        var resetBtn = el('.btn-reset-filters', grid);
        if (resetBtn) resetBtn.addEventListener('click', function () {
          if (searchInput) searchInput.value = '';
          activeSearch = '';
          var todosBtn = filterBtns.filter(function (b) { return b.dataset.cat === 'Todos'; })[0];
          if (todosBtn) todosBtn.click();
        });
        return;
      }

      grid.innerHTML = prods.map(productCard).join('');
      bindAddToCart(grid);
      initLazyImages(grid);
    }

    /* filter buttons */
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
        activeFilter = btn.dataset.cat;
        renderCatalog();
      });
    });

    /* Enlaza las tarjetas de categoría y los links del footer (data-cat) al filtro */
    els('[data-cat]').forEach(function (link) {
      if (link.classList.contains('filter-btn')) return;
      link.addEventListener('click', function () {
        var target = filterBtns.filter(function (b) { return b.dataset.cat === link.dataset.cat; })[0];
        if (target) setTimeout(function () { target.click(); }, 350);
      });
    });

    /* sort */
    if (sortSel) {
      sortSel.addEventListener('change', function () {
        activeSort = sortSel.value;
        renderCatalog();
      });
    }

    /* search */
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        activeSearch = searchInput.value.trim();
        renderCatalog();
      });
    }

    renderCatalog();
  }

  /* ── init: featured products ─────────────────────────────── */
  function initFeaturedProducts() {
    var grid = el('#featured-prod-grid');
    if (!grid) return;
    var featured = D.products.filter(function (p) { return p.featured; });
    grid.innerHTML = featured.map(productCard).join('');
    bindAddToCart(grid);
    initLazyImages(grid);
  }

  /* ── bind add to cart buttons ────────────────────────────── */
  function bindAddToCart(ctx) {
    els('.btn-add-cart:not([disabled])', ctx).forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var id = +btn.dataset.id;
        cartAdd(id);
        btn.textContent = '✓ Agregado';
        btn.classList.add('added');
        setTimeout(function () {
          btn.textContent = '+ Agregar';
          btn.classList.remove('added');
        }, 1800);
      });
    });
  }

  /* ── lazy image loader ───────────────────────────────────── */
  function initLazyImages(ctx) {
    if (!('IntersectionObserver' in window)) {
      /* fallback: load all */
      els('.lazy', ctx).forEach(function (img) {
        if (img.dataset.src) img.src = img.dataset.src;
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var img = e.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
          }
          io.unobserve(img);
        }
      });
    }, { threshold: 0.05, rootMargin: '100px' });

    els('.lazy', ctx).forEach(function (img) { io.observe(img); });
  }

  /* ── init: cart drawer ───────────────────────────────────── */
  function initCart() {
    var overlay = el('#cart-overlay');
    var closeBtn = el('#cart-close');
    var cartBtn = el('#cart-toggle-btn');
    var waBtn = el('#cart-wa-btn');

    if (overlay) overlay.addEventListener('click', cartClose);
    if (closeBtn) closeBtn.addEventListener('click', cartClose);
    if (cartBtn) cartBtn.addEventListener('click', function () {
      var drawer = el('#cart-drawer');
      if (drawer && drawer.classList.contains('open')) cartClose();
      else cartOpen();
    });

    if (waBtn) {
      waBtn.addEventListener('click', function () {
        if (cart.length === 0) {
          showToast('Agregá al menos un producto al carrito primero.');
          return;
        }
        var name = requireCustomerName();
        if (!name) return;
        window.open(waMsgLink(cart, name), '_blank', 'noopener');
      });
    }

    var continueBtn = el('#cart-continue-btn');
    if (continueBtn) continueBtn.addEventListener('click', cartClose);

    /* Nota: el botón #wa-cart-btn de la sección CTA se maneja en initWaCTA()
       para evitar que se abran dos pestañas de WhatsApp al hacer un solo clic. */

    cartRender();
  }

  /* ── init: scroll reveal ─────────────────────────────────── */
  function initReveal() {
    /* Safety net: reveal ALL .reveal elements after 6s */
    var safetyTimer = setTimeout(function () {
      els('.reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }, 6000);

    if (!('IntersectionObserver' in window)) {
      clearTimeout(safetyTimer);
      els('.reveal').forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    /* GSAP ScrollTrigger integration */
    if (window.gsap && window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

    els('.reveal').forEach(function (el) { io.observe(el); });

    /* GSAP enhanced reveals for key elements */
    if (window.gsap) {
      safe(function () {
        var headings = els('.section-title, .hero-title, .section-num');
        headings.forEach(function (h, i) {
          ScrollTrigger.create({
            trigger: h,
            onEnter: function () {
              gsap.from(h, { y: 40, opacity: 0, duration: 0.8, delay: i * 0.05 });
            }
          });
        });
      }, 'gsap-reveals');
    }
  }

  /* ── init: sticky cart button pulse ─────────────────────── */
  function initCartPulse() {
    var btn = el('#cart-toggle-btn');
    if (!btn) return;
    setInterval(function () {
      if (cart.length > 0) {
        btn.classList.add('pulse');
        setTimeout(function () { btn.classList.remove('pulse'); }, 600);
      }
    }, 4000);
  }

  /* ── init: footer ────────────────────────────────────────── */
  function initFooter() {
    var footerWa = el('#footer-wa-btn');
    if (footerWa) footerWa.href = waLink();

    var footerWaInline = el('#footer-wa-inline');
    if (footerWaInline) {
      footerWaInline.href = waLink();
      footerWaInline.target = '_blank';
      footerWaInline.rel = 'noopener';
    }

    var year = el('#footer-year');
    if (year) year.textContent = D.brand.year;

    var footerAddr = el('#footer-address');
    if (footerAddr) footerAddr.textContent = D.contact.address;

    var footerPhone = el('#footer-phone');
    if (footerPhone) {
      footerPhone.textContent = D.contact.phoneDisplay;
      footerPhone.href = waLink();
    }
  }

  /* ── init: map link ──────────────────────────────────────── */
  function initMap() {
    var mapLink = el('#map-link');
    if (mapLink) mapLink.href = D.contact.gmapsLink;

    var mapEmbed = el('#map-iframe');
    if (mapEmbed) mapEmbed.src = D.contact.gmapsEmbed;
  }

  /* ── init: wa big CTA ────────────────────────────────────── */
  function initWaCTA() {
    var waNow = el('#wa-now-btn');
    var waCart = el('#wa-cart-btn');
    if (waNow) waNow.href = waLink();
    if (waCart) {
      waCart.addEventListener('click', function (e) {
        e.preventDefault();
        if (cart.length === 0) {
          window.open(waLink(), '_blank', 'noopener');
          return;
        }
        var name = requireCustomerName();
        if (!name) return;
        window.open(waMsgLink(cart, name), '_blank', 'noopener');
      });
    }
  }

  /* ── brand data injection ────────────────────────────────── */
  function injectBrandData() {
    els('[data-brand-name]').forEach(function (el) { el.textContent = D.brand.name; });
    els('[data-brand-tagline]').forEach(function (el) { el.textContent = D.brand.tagline; });
    els('[data-brand-kicker]').forEach(function (el) { el.textContent = D.brand.kicker; });
    els('[data-brand-desc]').forEach(function (el) { el.textContent = D.brand.description; });
    els('[data-contact-phone]').forEach(function (el) { el.textContent = D.contact.phoneDisplay; });
    els('[data-contact-address]').forEach(function (el) { el.textContent = D.contact.address; });

    /* Reemplaza los emojis de logo placeholder por el isologo real, si está definido */
    if (D.brand.logoImg) {
      els('.nav-logo-emoji, .footer-logo-emoji, .splash-emoji').forEach(function (span) {
        var img = document.createElement('img');
        img.src = D.brand.logoImg;
        img.alt = D.brand.name;
        img.className = 'brand-logo-img';
        span.replaceWith(img);
      });
    }
  }

  /* ── conteo real de productos por categoría en las tarjetas del home ── */
  function injectCategoryCounts() {
    var counts = {};
    D.products.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });
    els('.categoria-card').forEach(function (card) {
      var cat = card.dataset.cat;
      var n = counts[cat] || 0;
      var span = document.createElement('span');
      span.className = 'cat-count';
      span.textContent = n + (n === 1 ? ' producto' : ' productos');
      card.appendChild(span);
    });
  }

  /* ── booster: animate nav links on hover ─────────────────── */
  function initNavHover() {
    els('#nav-menu a').forEach(function (a) {
      a.addEventListener('mouseenter', function () {
        if (window.gsap) gsap.to(a, { y: -2, duration: 0.2 });
      });
      a.addEventListener('mouseleave', function () {
        if (window.gsap) gsap.to(a, { y: 0, duration: 0.2 });
      });
    });
  }

  /* ── keyboard accessibility ──────────────────────────────── */
  function initA11y() {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') cartClose();
      cartFocusTrap(e);
    });
  }

  /* ── MAIN BOOT ───────────────────────────────────────────── */
  function boot() {
    if (!D) {
      console.error('[Bambinos] manifest.js no cargó o tiene un error de sintaxis');
      els('.reveal').forEach(function (el) { el.classList.add('visible'); });
      var grid = el('#catalog-grid');
      if (grid) grid.innerHTML = '<div class="catalog-empty"><p>No pudimos cargar el catálogo. Escribinos directo:</p><a class="btn btn-wa" href="https://wa.me/5491158404213" target="_blank" rel="noopener">💬 Contactar por WhatsApp</a></div>';
      var featGrid = el('#featured-prod-grid');
      if (featGrid) featGrid.innerHTML = '';
      return;
    }

    safe(injectBrandData,       'brandData');
    safe(injectCategoryCounts,  'categoryCounts');
    safe(initNav,               'nav');
    safe(initHero,              'hero');
    safe(initCatalog,           'catalog');
    safe(initFeaturedProducts,  'featuredProducts');
    safe(initCart,              'cart');
    safe(initWaCTA,             'waCTA');
    safe(initMap,               'map');
    safe(initFooter,            'footer');
    safe(initReveal,            'reveal');
    safe(initCartPulse,         'cartPulse');
    safe(initNavHover,          'navHover');
    safe(initA11y,              'a11y');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
