/* ================================================
   NEW SALMAN ELECTRONICS - JavaScript
   Complete product database + filters + comparison
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* ======================================
       PRODUCT DATABASE
       Organized by category -> models -> brands
       ====================================== */
    const DB = {
        ac: {
            title: 'Air Conditioners',
            icon: 'fa-snowflake',
            iconClass: 'ac',
            sub: 'Split, Window & Inverter ACs',
            models: [
                {
                    name: '1 Ton Inverter AC',
                    brands: [
                        { brand: 'Haier', price: 115000, warranty: '4 Years', features: ['Inverter', 'WiFi Control', 'Gold Fin', 'Low Noise'] },
                        { brand: 'Gree', price: 108000, warranty: '3 Years', features: ['Inverter', 'WiFi Control', 'Copper Condenser'] },
                        { brand: 'Pel', price: 99000, warranty: '3 Years', features: ['Inverter', 'Energy Saving', 'Turbo Cool'] },
                        { brand: 'Dawlance', price: 105000, warranty: '4 Years', features: ['Inverter', 'Self Clean', 'Eco Mode'] }
                    ]
                },
                {
                    name: '1.5 Ton Inverter AC',
                    brands: [
                        { brand: 'Haier', price: 135000, warranty: '4 Years', features: ['Inverter', 'WiFi Control', 'Gold Fin', '4-Way Air'] },
                        { brand: 'Gree', price: 128000, warranty: '3 Years', features: ['Inverter', 'WiFi Control', 'Copper Condenser'] },
                        { brand: 'Pel', price: 118000, warranty: '3 Years', features: ['Inverter', 'Turbo Cool', 'Anti-Corrosion'] },
                        { brand: 'Dawlance', price: 122000, warranty: '4 Years', features: ['Inverter', 'Self Clean', 'Eco Mode'] }
                    ]
                },
                {
                    name: '2 Ton Inverter AC',
                    brands: [
                        { brand: 'Haier', price: 168000, warranty: '4 Years', features: ['Inverter', 'WiFi Control', 'Gold Fin', '4-Way Air', 'Jet Cool'] },
                        { brand: 'Gree', price: 158000, warranty: '3 Years', features: ['Inverter', 'WiFi Control', 'Copper Condenser', 'Hot/Cold'] },
                        { brand: 'Dawlance', price: 152000, warranty: '4 Years', features: ['Inverter', 'Self Clean', 'High Air Flow'] }
                    ]
                },
                {
                    name: '1 Ton Window AC',
                    brands: [
                        { brand: 'Haier', price: 68000, warranty: '3 Years', features: ['Energy Saving', 'Auto Restart', 'Timer'] },
                        { brand: 'Gree', price: 65000, warranty: '2 Years', features: ['Copper Condenser', 'Auto Restart'] },
                        { brand: 'Pel', price: 58000, warranty: '2 Years', features: ['Energy Saving', 'Turbo Mode'] }
                    ]
                }
            ]
        },
        fridge: {
            title: 'Refrigerators',
            icon: 'fa-temperature-low',
            iconClass: 'fridge',
            sub: 'Single & Double Door, Freezers',
            models: [
                {
                    name: 'Single Door 8 Cu.ft',
                    brands: [
                        { brand: 'Dawlance', price: 52000, warranty: '3 Years', features: ['Direct Cool', 'Adjustable Shelves', 'Low Voltage'] },
                        { brand: 'Haier', price: 48000, warranty: '3 Years', features: ['Direct Cool', 'Door Lock', 'Low Voltage'] },
                        { brand: 'Pel', price: 44000, warranty: '2 Years', features: ['Direct Cool', 'Large Storage'] }
                    ]
                },
                {
                    name: 'Double Door 12 Cu.ft',
                    brands: [
                        { brand: 'Dawlance', price: 82000, warranty: '10Y Compressor', features: ['No Frost', 'Digital Display', 'Inverter'] },
                        { brand: 'Haier', price: 78000, warranty: '10Y Compressor', features: ['No Frost', 'Turbo Cooling', 'Inverter'] },
                        { brand: 'Samsung', price: 92000, warranty: '10Y Compressor', features: ['No Frost', 'Twin Cooling', 'Smart Connect'] },
                        { brand: 'Pel', price: 72000, warranty: '5Y Compressor', features: ['No Frost', 'Inverter', 'Large Crisper'] }
                    ]
                },
                {
                    name: 'Double Door 18 Cu.ft',
                    brands: [
                        { brand: 'Dawlance', price: 118000, warranty: '10Y Compressor', features: ['No Frost', 'Inverter', 'Multi Air Flow'] },
                        { brand: 'Haier', price: 112000, warranty: '10Y Compressor', features: ['No Frost', 'Inverter', 'Holiday Mode'] },
                        { brand: 'Samsung', price: 135000, warranty: '10Y Compressor', features: ['No Frost', 'Digital Inverter', 'Twin Cooling Plus'] }
                    ]
                },
                {
                    name: 'Deep Freezer 8 Cu.ft',
                    brands: [
                        { brand: 'Dawlance', price: 48000, warranty: '3 Years', features: ['Lock & Key', 'Low Voltage'] },
                        { brand: 'Haier', price: 45000, warranty: '3 Years', features: ['Lock & Key', 'Energy Saving'] },
                        { brand: 'Pel', price: 42000, warranty: '2 Years', features: ['Lock & Key', 'Spacious Interior'] }
                    ]
                }
            ]
        },
        washing: {
            title: 'Washing Machines',
            icon: 'fa-tshirt',
            iconClass: 'washing',
            sub: 'Front Load, Top Load & Semi',
            models: [
                {
                    name: 'Top Load 8kg Automatic',
                    brands: [
                        { brand: 'Haier', price: 72000, warranty: '5Y Motor', features: ['8 Programs', 'Fuzzy Logic', 'Quick Wash'] },
                        { brand: 'Gree', price: 65000, warranty: '5Y Motor', features: ['8 Programs', 'Jet Wash', 'Anti-Rat'] },
                        { brand: 'Dawlance', price: 68000, warranty: '5Y Motor', features: ['8 Programs', 'Magic Filter', 'Air Dry'] },
                        { brand: 'Singer', price: 58000, warranty: '3Y Motor', features: ['6 Programs', 'Auto Restart'] }
                    ]
                },
                {
                    name: 'Front Load 8kg',
                    brands: [
                        { brand: 'Haier', price: 125000, warranty: '10Y Motor', features: ['15 Programs', 'Inverter Motor', 'Steam Wash'] },
                        { brand: 'Samsung', price: 138000, warranty: '10Y Motor', features: ['15 Programs', 'Digital Inverter', 'Eco Bubble'] },
                        { brand: 'LG', price: 142000, warranty: '10Y Motor', features: ['16 Programs', 'Direct Drive', 'Steam True'] }
                    ]
                },
                {
                    name: 'Semi-Automatic 10kg',
                    brands: [
                        { brand: 'Haier', price: 32000, warranty: '3 Years', features: ['Double Tub', 'Powerful Motor'] },
                        { brand: 'Gree', price: 28000, warranty: '3 Years', features: ['Double Tub', 'Rust Proof Body'] },
                        { brand: 'Singer', price: 25000, warranty: '2 Years', features: ['Double Tub', 'Easy Wash'] }
                    ]
                }
            ]
        },
        tv: {
            title: 'LED TVs',
            icon: 'fa-tv',
            iconClass: 'tv',
            sub: 'Smart, 4K & HD TVs',
            models: [
                {
                    name: '32" HD LED TV',
                    brands: [
                        { brand: 'Samsung', price: 38000, warranty: '2 Years', features: ['HD Ready', 'Tizen OS', 'Mirroring'] },
                        { brand: 'LG', price: 35000, warranty: '2 Years', features: ['HD Ready', 'Smart TV', 'USB'] },
                        { brand: 'TCL', price: 28000, warranty: '2 Years', features: ['HD Ready', 'Android TV', 'Netflix'] },
                        { brand: 'Sony', price: 42000, warranty: '2 Years', features: ['HD Ready', 'Powerful Speaker'] }
                    ]
                },
                {
                    name: '43" 4K UHD Smart TV',
                    brands: [
                        { brand: 'Samsung', price: 72000, warranty: '2 Years', features: ['4K UHD', 'HDR10+', 'Tizen OS'] },
                        { brand: 'LG', price: 68000, warranty: '2 Years', features: ['4K UHD', 'HDR10', 'webOS'] },
                        { brand: 'Sony', price: 78000, warranty: '2 Years', features: ['4K HDR', 'Google TV', 'X1 Processor'] },
                        { brand: 'TCL', price: 52000, warranty: '2 Years', features: ['4K UHD', 'Android TV', 'Assistant'] }
                    ]
                },
                {
                    name: '55" 4K UHD Smart TV',
                    brands: [
                        { brand: 'Samsung', price: 128000, warranty: '2 Years', features: ['4K QLED', 'Quantum HDR', 'Ambient Mode'] },
                        { brand: 'LG', price: 118000, warranty: '2 Years', features: ['4K OLED', 'HDR10 Pro', 'Dolby Atmos'] },
                        { brand: 'Sony', price: 145000, warranty: '2 Years', features: ['4K OLED', 'Cognitive Processor', 'Google TV'] },
                        { brand: 'TCL', price: 85000, warranty: '2 Years', features: ['4K QLED', 'HDR10+', 'Android TV'] }
                    ]
                }
            ]
        },
        bike: {
            title: 'Bikes',
            icon: 'fa-motorcycle',
            iconClass: 'bike',
            sub: 'Honda, Yamaha, Suzuki & More',
            models: [
                {
                    name: '70cc Standard',
                    brands: [
                        { brand: 'Honda', price: 148000, warranty: '2 Years', features: ['4-Stroke', 'CDI Ignition', 'Self Start'] },
                        { brand: 'Yamaha', price: 152000, warranty: '2 Years', features: ['4-Stroke', 'CDI Ignition', 'Sporty Design'] },
                        { brand: 'United', price: 105000, warranty: '1 Year', features: ['4-Stroke', 'CDI Ignition', 'Economy'] }
                    ]
                },
                {
                    name: '125cc',
                    brands: [
                        { brand: 'Honda', price: 218000, warranty: '2 Years', features: ['4-Stroke', 'Self Start', 'Disc Brake'] },
                        { brand: 'Yamaha', price: 215000, warranty: '2 Years', features: ['4-Stroke', 'Self Start', 'Sporty Exhaust'] },
                        { brand: 'Suzuki', price: 205000, warranty: '2 Years', features: ['4-Stroke', 'CDI Ignition', 'Powerful'] }
                    ]
                },
                {
                    name: '150cc',
                    brands: [
                        { brand: 'Honda', price: 295000, warranty: '2 Years', features: ['Fuel Injection', 'ABS', 'LED Headlight'] },
                        { brand: 'Yamaha', price: 288000, warranty: '2 Years', features: ['Fuel Injection', 'ABS', 'Sport Design'] },
                        { brand: 'Suzuki', price: 278000, warranty: '2 Years', features: ['Fuel Injection', 'Power Mode', 'LED'] }
                    ]
                }
            ]
        },
        appliance: {
            title: 'Home Appliances',
            icon: 'fa-blender',
            iconClass: 'appliance',
            sub: 'Microwaves, Fans & More',
            models: [
                {
                    name: 'Microwave Oven 28L',
                    brands: [
                        { brand: 'Philips', price: 38000, warranty: '2 Years', features: ['Solo Grill', 'Digital Touch', 'Defrost'] },
                        { brand: 'Dawlance', price: 32000, warranty: '2 Years', features: ['Grill Oven', 'Digital Timer'] },
                        { brand: 'Panasonic', price: 36000, warranty: '2 Years', features: ['Inverter Tech', 'Smart Cooking'] }
                    ]
                },
                {
                    name: 'Electric Iron Dry',
                    brands: [
                        { brand: 'Philips', price: 3500, warranty: '1 Year', features: ['Non-Stick Soleplate', 'Steam Ready'] },
                        { brand: 'Panasonic', price: 3000, warranty: '1 Year', features: ['Steam Iron', 'Anti-Drip'] },
                        { brand: 'Black+Decker', price: 2800, warranty: '1 Year', features: ['Non-Stick', '2500W'] }
                    ]
                },
                {
                    name: 'Ceiling Fan 56"',
                    brands: [
                        { brand: 'Panasonic', price: 12000, warranty: '2 Years', features: ['Energy Saving', 'Silent Motor'] },
                        { brand: 'Dawlance', price: 10000, warranty: '1 Year', features: ['Aerodynamic Blades'] },
                        { brand: 'Pel', price: 9000, warranty: '1 Year', features: ['High Air Delivery'] }
                    ]
                }
            ]
        }
    };


    /* ======================================
       PRODUCT IMAGES
       Sab tasveerein Unsplash se hain (free / commercial use).
       Client ki asal photos aane par sirf yahan URL badal dena
       (ya "images/ac-1ton.jpg" jaisa local path daal dena).
       ====================================== */
    const IMG_BASE = 'https://images.unsplash.com/photo-';
    const IMG_OPT  = '?auto=format&fit=crop&q=70';

    // Har category ka default (fallback) photo
    const CAT_IMG = {
        ac:        '1726614846573-c1ac2e6161d1',   // indoor split AC
        fridge:    '1484154218962-a197022b5858',
        washing:   '1597418048367-7dd01e4404ee',
        tv:        '1611234688667-76b6d8fadd75',
        bike:      '1609630875171-b1321377ee65',
        appliance: '1740803292822-a742c6a4fef0'    // microwave
    };

    // Model-wise photo: 'categoryKey|Model Name'
    // Sirf wahi photo di gayi hai jo waqai us cheez ki hai.
    // Jahan sahi photo nahi mili, wahan category ka default chalta hai.
    const MODEL_IMG = {
        'ac|1 Ton Inverter AC':          '1726614846573-c1ac2e6161d1',  // indoor split
        'ac|1.5 Ton Inverter AC':        '1759772238012-9d5ad59ae637',  // indoor split
        'ac|2 Ton Inverter AC':          '1762341123870-d706f257a12e',  // indoor split, display on
        // 'ac|1 Ton Window AC'          -> window AC ki sahi photo nahi mili

        'fridge|Single Door 8 Cu.ft':    '1484154218962-a197022b5858',
        'fridge|Double Door 12 Cu.ft':   '1588854337115-1c67d9247e4d',
        'fridge|Double Door 18 Cu.ft':   '1484154218962-a197022b5858',
        // 'fridge|Deep Freezer 8 Cu.ft' -> deep freezer ki photo nahi mili

        'washing|Front Load 8kg':        '1597418048367-7dd01e4404ee',
        'washing|Top Load 8kg Automatic':'1626806819282-2c1dc01a5e0c',
        'washing|Semi-Automatic 10kg':   '1632923565835-6582b54f2105',

        'tv|32" HD LED TV':              '1611234688667-76b6d8fadd75',
        'tv|43" 4K UHD Smart TV':        '1611234688667-76b6d8fadd75',
        'tv|55" 4K UHD Smart TV':        '1611234688667-76b6d8fadd75',

        'bike|70cc Standard':            '1591637333184-19aa84b3e01f',
        'bike|125cc':                    '1588756681780-9d5859fc2ca0',
        'bike|150cc':                    '1609630875171-b1321377ee65',

        'appliance|Microwave Oven 28L':  '1740803292822-a742c6a4fef0'
        // 'appliance|Electric Iron Dry' -> iron ki photo nahi mili
        // 'appliance|Ceiling Fan 56"'   -> fan ki photo nahi mili
    };

    // URL banata hai. width dena zaroori hai taake mobile par chhoti file aaye.
    function imgUrl(catKey, modelName, w) {
        const id = MODEL_IMG[catKey + '|' + modelName] || CAT_IMG[catKey];
        if (!id) return '';
        return IMG_BASE + id + IMG_OPT + '&w=' + (w || 600);
    }

    // <img> tag. Koi icon nahi - photo na aaye to sirf khaali plate rehti hai.
    function productImgTag(catKey, modelName, w, alt) {
        const url = imgUrl(catKey, modelName, w);
        if (!url) return '';
        return `<img src="${url}" alt="${alt || modelName}" loading="lazy" decoding="async" onerror="this.remove()">`;
    }

    /* ======================================
       UTILITIES
       ====================================== */
    const fmt = n => n.toLocaleString('en-PK');
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

    function getCatModels(catKey) {
        const models = [];
        DB[catKey].models.forEach(m => {
            m.brands.forEach(b => {
                models.push({ catKey, model: m.name, ...b });
            });
        });
        return models;
    }

    /* ======================================
       HERO BACKGROUND SLIDER (auto 3s)
       ====================================== */
    (function heroSlider() {
        const track = document.getElementById('hsTrack');
        const dotsEl = document.getElementById('hsDots');
        const labelEl = document.getElementById('hsLabel');
        if (!track) return;

        // Har model ka sasta-tareen brand -> ek slide
        const all = [];
        Object.entries(DB).forEach(([key, cat]) => {
            cat.models.forEach(m => {
                const cheapest = m.brands.slice().sort((a, b) => a.price - b.price)[0];
                all.push({
                    cat: key, catTitle: cat.title, model: m.name,
                    brand: cheapest.brand, price: cheapest.price,
                    img: imgUrl(key, m.name, 1600)
                });
            });
        });

        // Category-wise mix taake ek hi cheez lagataar na aaye
        const byCat = {};
        all.forEach(s => { (byCat[s.cat] = byCat[s.cat] || []).push(s); });
        const slides = [];
        let more = true, i = 0;
        while (more) {
            more = false;
            Object.values(byCat).forEach(arr => {
                if (arr[i]) { slides.push(arr[i]); more = true; }
            });
            i++;
        }

        track.innerHTML = slides.map((s, idx) =>
            `<div class="hero-slide${idx === 0 ? ' active' : ''}" style="background-image:url('${s.img}')" role="img" aria-label="${s.brand} ${s.model}"></div>`
        ).join('');

        dotsEl.innerHTML = slides.map((s, idx) =>
            `<button class="hs-dot${idx === 0 ? ' active' : ''}" data-i="${idx}" aria-label="Slide ${idx + 1}"></button>`
        ).join('');

        const slideEls = [...track.querySelectorAll('.hero-slide')];
        const dotEls = [...dotsEl.querySelectorAll('.hs-dot')];
        let cur = -1, timer = null;

        function go(n) {
            if (cur >= 0) {
                slideEls[cur].classList.remove('active');
                dotEls[cur].classList.remove('active');
            }
            cur = (n + slideEls.length) % slideEls.length;
            slideEls[cur].classList.add('active');
            dotEls[cur].classList.add('active');

            const s = slides[cur];
            if (labelEl) {
                labelEl.innerHTML = `
                    <span class="hsl-cat">${s.catTitle}</span>
                    <span class="hsl-model">${s.model}</span>
                    <span class="hsl-price">${s.brand} &middot; Rs. ${fmt(s.price)}</span>`;
                labelEl.dataset.cat = s.cat;
            }
        }
        function start() { stop(); timer = setInterval(() => go(cur + 1), 3000); }
        function stop() { if (timer) clearInterval(timer); timer = null; }

        document.getElementById('hsNext').addEventListener('click', () => { go(cur + 1); start(); });
        document.getElementById('hsPrev').addEventListener('click', () => { go(cur - 1); start(); });
        dotEls.forEach(d => d.addEventListener('click', () => { go(+d.dataset.i); start(); }));

        // Label par click -> us category ka modal
        if (labelEl) labelEl.addEventListener('click', () => {
            if (labelEl.dataset.cat) openModal(labelEl.dataset.cat);
        });

        document.getElementById('heroSlider').addEventListener('mouseenter', stop);
        document.getElementById('heroSlider').addEventListener('mouseleave', start);
        document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

        go(0);
        start();
    })();

    /* ======================================
       NAVBAR
       ====================================== */
    const navbar = $('#navbar');
    const navLinks = $$('.nav-link');
    const sections = $$('section[id]');
    const navToggle = $('#navToggle');
    const navMenu = $('#navMenu');

    function onScroll() {
        const y = window.scrollY;
        navbar.classList.toggle('scrolled', y > 60);

        let current = '';
        sections.forEach(s => {
            if (y >= s.offsetTop - 120 && y < s.offsetTop + s.offsetHeight) {
                current = s.id;
            }
        });
        navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', onScroll);
    onScroll();

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    navLinks.forEach(l => l.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    /* ======================================
       SMOOTH SCROLL
       ====================================== */
    $$('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const id = a.getAttribute('href');
            if (id === '#') return;
            const el = $(id);
            if (el) {
                e.preventDefault();
                window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
            }
        });
    });

    /* ======================================
       CATEGORY CARDS -> OPEN MODAL
       ====================================== */
    const modal = $('#productModal');
    const modalTitle = $('#modalTitle');
    const modalSub = $('#modalSubTitle');
    const modalIcon = $('#modalCatIcon');
    const modalBrandBtns = $('#modalBrandBtns');
    const modalProducts = $('#modalProducts');
    const modalClose = $('#modalClose');

    let activeModalCat = null;
    let activeModalBrand = 'all';

    function openModal(catKey) {
        const cat = DB[catKey];
        if (!cat) return;

        activeModalCat = catKey;
        activeModalBrand = 'all';

        modalTitle.textContent = cat.title;
        modalSub.textContent = cat.sub;
        modalIcon.className = 'modal-cat-img ' + cat.iconClass;
        modalIcon.innerHTML = productImgTag(catKey, '', 200, cat.title);

        // Brand filter buttons
        const brands = [...new Set(getCatModels(catKey).map(p => p.brand))];
        modalBrandBtns.innerHTML = `
            <button class="filter-btn active" data-brand="all">All Brands</button>
            ${brands.map(b => `<button class="filter-btn" data-brand="${b}">${b}</button>`).join('')}
        `;
        $$('.filter-btn', modalBrandBtns).forEach(btn => {
            btn.addEventListener('click', () => {
                $$('.filter-btn', modalBrandBtns).forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                activeModalBrand = btn.dataset.brand;
                renderModalProducts();
            });
        });

        renderModalProducts();
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function renderModalProducts() {
        const cat = DB[activeModalCat];
        const allProducts = getCatModels(activeModalCat);
        const filtered = activeModalBrand === 'all'
            ? allProducts
            : allProducts.filter(p => p.brand === activeModalBrand);

        // Group by model
        const grouped = {};
        filtered.forEach(p => {
            if (!grouped[p.model]) grouped[p.model] = [];
            grouped[p.model].push(p);
        });

        modalProducts.innerHTML = Object.entries(grouped).map(([modelName, items]) => {
            items = items.sort((a, b) => a.price - b.price);
            const minPrice = items[0].price;
            return `
                <div class="mp-group-section">
                    <h3 class="mp-model-title">${modelName}</h3>
                    ${items.map(p => `
                        <div class="mp-card ${p.price === minPrice ? 'best-deal' : ''}">
                            <div class="mp-media">${productImgTag(activeModalCat, modelName, 500, p.brand + ' ' + modelName)}</div>
                            <div class="mp-header">
                                <span class="mp-brand">${p.brand}</span>
                                <span class="mp-warranty"><i class="fas fa-shield-alt"></i> ${p.warranty}</span>
                            </div>
                            <div class="mp-price ${p.price === minPrice ? 'best' : ''}">${fmt(p.price)}</div>
                            <div class="mp-features">
                                ${p.features.map(f => `<span>${f}</span>`).join('')}
                            </div>
                            <div class="mp-actions">
                                <button class="mp-add cart-add" data-cat="${activeModalCat}" data-model="${modelName}" data-brand="${p.brand}" data-price="${p.price}">
                                    <i class="fas fa-cart-plus"></i> Add to Cart
                                </button>
                                <button class="mp-buy cart-buy" data-cat="${activeModalCat}" data-model="${modelName}" data-brand="${p.brand}" data-price="${p.price}">
                                    <i class="fas fa-bolt"></i> Buy Now
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }).join('');

        // Attach cart listeners to newly rendered cards
        $$('.cart-add', modalProducts).forEach(btn => {
            btn.addEventListener('click', () => addToCart(btn.dataset));
        });
        $$('.cart-buy', modalProducts).forEach(btn => {
            btn.addEventListener('click', () => {
                addToCart(btn.dataset);
                closeModal();
                openCart();
                $('#checkoutBtn').click();
            });
        });
    }

    // Click category cards
    $$('.cat-card').forEach(card => {
        card.addEventListener('click', () => openModal(card.dataset.category));
    });

    // Close modal
    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
    });

    // Footer category links
    $$('[data-cat-link]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            openModal(link.dataset.catLink);
        });
    });

    /* ======================================
       PRICE COMPARISON
       ====================================== */
    const cmpCategory = $('#cmpCategory');
    const cmpProduct = $('#cmpProduct');
    const cmpBtn = $('#cmpBtn');
    const cmpResult = $('#cmpResult');
    const cmpPlaceholder = $('#cmpPlaceholder');

    // Fill category select
    Object.entries(DB).forEach(([key, cat]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = cat.title;
        cmpCategory.appendChild(opt);
    });

    cmpCategory.addEventListener('change', () => {
        cmpProduct.innerHTML = '<option value="">Select Product</option>';
        cmpBtn.disabled = true;
        cmpResult.innerHTML = '';
        cmpPlaceholder.style.display = 'block';

        const catKey = cmpCategory.value;
        if (catKey && DB[catKey]) {
            cmpProduct.disabled = false;
            DB[catKey].models.forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.name;
                opt.textContent = m.name;
                cmpProduct.appendChild(opt);
            });
        } else {
            cmpProduct.disabled = true;
        }
    });

    cmpProduct.addEventListener('change', () => {
        cmpBtn.disabled = !cmpProduct.value;
        cmpResult.innerHTML = '';
        cmpPlaceholder.style.display = cmpProduct.value ? 'none' : 'block';
    });

    cmpBtn.addEventListener('click', () => {
        const catKey = cmpCategory.value;
        const modelName = cmpProduct.value;
        if (!catKey || !modelName) return;

        const cat = DB[catKey];
        const model = cat.models.find(m => m.name === modelName);
        if (!model) return;

        const items = [...model.brands].sort((a, b) => a.price - b.price);
        const minPrice = items[0].price;
        const maxPrice = items[items.length - 1].price;

        // Collect all features
        const allFeatures = [...new Set(items.flatMap(i => i.features))];

        // Build table
        let html = `
            <div class="cmp-table-wrap">
            <table class="cmp-table">
                <thead>
                    <tr>
                        <th>${model.name}</th>
                        ${items.map(i => `
                            <th class="${i.price === minPrice ? 'best-col' : ''}">
                                ${i.brand}
                                <span class="th-badge">${i.price === minPrice ? 'Best Price' : 'Available'}</span>
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        ${items.map(i => `
                            <td class="cmp-price ${i.price === minPrice ? 'cmp-best' : ''}">${fmt(i.price)}</td>
                        `).join('')}
                    </tr>
                    <tr>
                        <td>Warranty</td>
                        ${items.map(i => `<td><i class="fas fa-shield-alt"></i> ${i.warranty}</td>`).join('')}
                    </tr>
        `;

        allFeatures.forEach(f => {
            html += `
                <tr>
                    <td>${f}</td>
                    ${items.map(i => `
                        <td class="${i.features.includes(f) ? 'ck' : 'cr'}">
                            <i class="fas ${i.features.includes(f) ? 'fa-check' : 'fa-times'}"></i>
                        </td>
                    `).join('')}
                </tr>
            `;
        });

        html += '</tbody></table></div>';

        // Verdict
        const best = items[0];
        const saving = maxPrice - minPrice;
        html += `
            <div class="cmp-verdict">
                <div class="cmp-verdict-icon"><i class="fas fa-trophy"></i></div>
                <div>
                    <h3>Best Deal: ${best.brand} at Rs. ${fmt(best.price)}</h3>
                    <p>You save up to <strong>Rs. ${fmt(saving)}</strong> compared to the most expensive option (${items[items.length-1].brand}). ${best.features.length > 1 ? `Includes ${best.features.slice(0,3).join(', ')}.` : ''}</p>
                </div>
            </div>
        `;

        cmpResult.innerHTML = html;
        cmpResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    /* ======================================
       CART SYSTEM
       ====================================== */
    let cart = [];
    try {
        cart = JSON.parse(localStorage.getItem('se_cart') || '[]');
    } catch (e) { cart = []; }

    const catNames = {};
    Object.entries(DB).forEach(([key, cat]) => { catNames[key] = cat.title; });

    function saveCart() {
        localStorage.setItem('se_cart', JSON.stringify(cart));
    }

    function cartItemKey(item) {
        return `${item.cat}|${item.model}|${item.brand}`;
    }

    function getCartTotal() {
        return cart.reduce((sum, i) => sum + (parseFloat(i.price) * i.qty), 0);
    }

    function getCartCount() {
        return cart.reduce((sum, i) => sum + i.qty, 0);
    }

    function addToCart(data) {
        const existing = cart.find(i =>
            i.cat === data.cat && i.model === data.model && i.brand === data.brand
        );
        if (existing) {
            existing.qty++;
        } else {
            cart.push({
                cat: data.cat,
                model: data.model,
                brand: data.brand,
                price: parseFloat(data.price),
                qty: 1
            });
        }
        saveCart();
        renderCart();
        showToast(`${data.brand} ${data.model} added to cart`);
    }

    function updateQty(index, delta) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        renderCart();
    }

    // Cart DOM
    const cartOverlay = $('#cartOverlay');
    const cartDrawer = $('#cartDrawer');
    const cartItemsEl = $('#cartItems');
    const cartEmptyEl = $('#cartEmpty');
    const cartFooterEl = $('#cartFooter');
    const cartCountEl = $('#cartCount');
    const cartHeaderCount = $('#cartHeaderCount');
    const cartTotalEl = $('#cartTotal');

    function renderCart() {
        const count = getCartCount();
        const total = getCartTotal();

        cartCountEl.textContent = count;
        cartHeaderCount.textContent = count ? `(${count} item${count > 1 ? 's' : ''})` : '';

        if (cart.length === 0) {
            cartItemsEl.style.display = 'none';
            cartEmptyEl.style.display = 'block';
            cartFooterEl.style.display = 'none';
        } else {
            cartItemsEl.style.display = 'block';
            cartEmptyEl.style.display = 'none';
            cartFooterEl.style.display = 'block';

            cartItemsEl.innerHTML = cart.map((item, idx) => `
                <div class="cart-item">
                    <div class="ci-thumb">${productImgTag(item.cat, item.model, 160, item.brand + ' ' + item.model)}</div>
                    <div class="ci-info">
                        <span class="ci-brand">${item.brand}</span>
                        <span class="ci-name">${item.model}</span>
                        <span class="ci-cat">${catNames[item.cat] || item.cat}</span>
                        <div class="ci-price">Rs. ${fmt(item.price)}</div>
                    </div>
                    <div class="ci-controls">
                        <button class="qty-btn" data-idx="${idx}" data-d="-1"><i class="fas fa-minus"></i></button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" data-idx="${idx}" data-d="1"><i class="fas fa-plus"></i></button>
                        <button class="ci-remove" data-idx="${idx}"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div>
            `).join('');

            cartTotalEl.textContent = `Rs. ${fmt(total)}`;

            // Qty buttons
            $$('.qty-btn', cartItemsEl).forEach(b => {
                b.addEventListener('click', () => updateQty(parseInt(b.dataset.idx), parseInt(b.dataset.d)));
            });
            $$('.ci-remove', cartItemsEl).forEach(b => {
                b.addEventListener('click', () => {
                    cart.splice(parseInt(b.dataset.idx), 1);
                    saveCart();
                    renderCart();
                });
            });
        }
    }
    renderCart();

    // Open / Close cart
    function openCart() {
        cartDrawer.classList.add('open');
        cartOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        cartDrawer.classList.remove('open');
        cartOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    $('#cartBtn').addEventListener('click', openCart);
    $('#cartClose').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    $('#cartEmpty .cart-browse-btn').addEventListener('click', closeCart);

    /* ======================================
       CHECKOUT
       ====================================== */
    const checkoutOverlay = $('#checkoutOverlay');
    const checkoutSummary = $('#checkoutSummary');
    const checkoutForm = $('#checkoutForm');
    const checkoutClose = $('#checkoutClose');

    $('#checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) { openCart(); return; }

        // Summary
        const total = getCartTotal();
        checkoutSummary.innerHTML = `
            <div class="co-summary">
                <h4>Order Summary</h4>
                ${cart.map(i => `
                    <div class="co-sum-row">
                        <span>${i.brand} ${i.model} x ${i.qty}</span>
                        <span>Rs. ${fmt(i.price * i.qty)}</span>
                    </div>
                `).join('')}
                <div class="co-sum-total">
                    <span>Total</span>
                    <strong>Rs. ${fmt(total)}</strong>
                </div>
            </div>
        `;

        checkoutOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    function closeCheckout() {
        checkoutOverlay.classList.remove('open');
        document.body.style.overflow = '';
    }
    checkoutClose.addEventListener('click', closeCheckout);
    checkoutOverlay.addEventListener('click', e => {
        if (e.target === checkoutOverlay) closeCheckout();
    });

    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = $('#coName').value.trim();
        const phone = $('#coPhone').value.trim();
        const address = $('#coAddress').value.trim();
        const paymentMethod = $('#coPayment').value;
        const notes = $('#coNotes').value.trim();

        if (!name || !phone) {
            showToast('Please enter name and phone number', 'error');
            return;
        }

        const total = getCartTotal();
        const items = cart.map(i => ({
            brand: i.brand,
            model: i.model,
            category: catNames[i.cat] || i.cat,
            price: i.price,
            qty: i.qty
        }));

        // 1. Build WhatsApp message
        let waMsg = `*NEW ORDER - SALMAN ELECTRONICS*\n\n`;
        waMsg += `*Name:* ${name}\n*Phone:* ${phone}\n`;
        if (address) waMsg += `*Address:* ${address}\n`;
        waMsg += `*Payment:* ${paymentMethod}\n`;
        if (notes) waMsg += `*Notes:* ${notes}\n\n`;
        waMsg += `*Items:*\n`;
        cart.forEach((i, idx) => {
            waMsg += `${idx + 1}. ${i.brand} ${i.model} (${catNames[i.cat]}) x${i.qty} = Rs. ${fmt(i.price * i.qty)}\n`;
        });
        waMsg += `\n*Total: Rs. ${fmt(total)}*`;
        const waUrl = `https://wa.me/923229285641?text=${encodeURIComponent(waMsg)}`;

        // 2. Try send email to owner via backend
        const submitBtn = $('#coSubmit');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        let emailOk = true;
        try {
            const resp = await fetch('/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, phone, address, paymentMethod, notes, total, items })
            });
            if (!resp.ok) emailOk = false;
        } catch (err) {
            emailOk = false;
        }

        // 3. Clear cart
        cart = [];
        saveCart();
        renderCart();
        closeCheckout();
        closeCart();

        // 4. Open WhatsApp to confirm order
        window.open(waUrl, '_blank');

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Confirm Order on WhatsApp';

        showToast(emailOk
            ? 'Order sent! Confirming on WhatsApp...'
            : 'Order confirmed on WhatsApp! (Backend not running)');
    });

    /* ======================================
       CONTACT / COMPLAINT FORM (BREVO EMAIL)
       ====================================== */
    const contactForm = $('#contactForm');
    const cfSuccess = $('#cfSuccess');

    // Navbar "Message Owner" -> scroll + highlight form
    const msgOwnerBtn = $('#msgOwnerBtn');
    if (msgOwnerBtn) {
        msgOwnerBtn.addEventListener('click', e => {
            e.preventDefault();
            const wrap = $('#contactFormWrap');
            const contactSec = $('#contact');
            if (contactSec) {
                window.scrollTo({ top: contactSec.offsetTop - 70, behavior: 'smooth' });
                setTimeout(() => {
                    if (wrap) {
                        wrap.classList.add('flash');
                        setTimeout(() => wrap.classList.remove('flash'), 2200);
                    }
                    const firstField = $('#cfName');
                    if (firstField) setTimeout(() => firstField.focus(), 700);
                }, 600);
            }
        });
    }

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const payload = {
            name: $('#cfName').value.trim(),
            phone: $('#cfPhone').value.trim(),
            email: $('#cfEmail').value.trim(),
            subject: $('#cfSubject').value.trim(),
            message: $('#cfMessage').value.trim(),
            type: $('#cfType').value
        };

        if (!payload.name || !payload.phone || !payload.message) {
            showToast('Please fill required fields', 'error');
            return;
        }

        const submitBtn = $('#cfSubmit');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        let sent = false;
        try {
            const resp = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const data = await resp.json();
            sent = data.success === true;
        } catch (err) {
            sent = false;
        }

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message to Owner';

        if (sent) {
            contactForm.style.display = 'none';
            cfSuccess.style.display = 'block';
            document.querySelector('#cfSuccess h4').textContent = 'Message Sent!';
            document.querySelector('#cfSuccess p').textContent = 'Thank you! Sir Salman ne aap ki message email pe pa lee hai. Eqher baaten kabhi issue hoon to call karein: 0322-9285641';
            document.querySelector('#cfSuccess .btn').textContent = 'Send Another Message';
            document.querySelector('#cfSuccess .btn').href = '#';
            showToast('Message sent to owner via email');
        } else {
            // Email nahi bhej saky - WhatsApp button user khud dabaye
            const typeNames = { general: 'Question', complaint: 'Complaint', feedback: 'Feedback', warranty: 'Warranty' };
            let waMsg = `*Salman Electronics - ${typeNames[payload.type] || 'Message'}*\n\n`;
            waMsg += `*Name:* ${payload.name}\n*Phone:* ${payload.phone}\n`;
            if (payload.email) waMsg += `*Email:* ${payload.email}\n`;
            if (payload.subject) waMsg += `*Subject:* ${payload.subject}\n\n`;
            waMsg += `*Message:*\n${payload.message}`;
            const waHref = `https://wa.me/923229285641?text=${encodeURIComponent(waMsg)}`;
            cfSuccess.querySelector('.btn').href = waHref;
            contactForm.style.display = 'none';
            cfSuccess.style.display = 'block';
            document.querySelector('#cfSuccess h4').textContent = 'Email kamyab nahi hui';
            document.querySelector('#cfSuccess p').textContent = 'Server/Brevo email available nahi tha. WhatsApp par bhejne ke liye niche button dabayen.';
            document.querySelector('#cfSuccess .btn').textContent = 'Send via WhatsApp Instead';
            showToast('Email raste band hai - WhatsApp option diya gaya', 'error');
        }
    });

    // Reset success when clicking WhatsApp again
    const cfWhatsApp = cfSuccess.querySelector('a');
    if (cfWhatsApp) {
        cfWhatsApp.addEventListener('click', () => {
            contactForm.style.display = 'block';
            cfSuccess.style.display = 'none';
        });
    }

    /* ======================================
       TOAST NOTIFICATIONS
       ====================================== */
    let toastTimeout;
    function showToast(message, type = 'success') {
        let toast = $('#toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast';
            document.body.appendChild(toast);
        }
        toast.className = type;
        toast.innerHTML = `<i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${message}`;
        toast.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
    }

    /* ======================================
       SCROLL ANIMATIONS
       ====================================== */
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.08 });

    $$('.section-badge, .section-title, .section-header p, .cat-card, .svc-card, .cc, .about-card').forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = (i % 6) * 0.07 + 's';
        obs.observe(el);
    });

    // Stat counters
    const statObs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const el = e.target;
                const target = parseInt(el.textContent);
                if (!isNaN(target)) {
                    let cur = 0;
                    const step = Math.max(1, Math.ceil(target / 40));
                    const t = setInterval(() => {
                        cur += step;
                        if (cur >= target) { cur = target; clearInterval(t); }
                        el.textContent = cur + '+';
                    }, 30);
                }
                statObs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    $$('.stat-num').forEach(n => statObs.observe(n));

});