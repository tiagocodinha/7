/* ===================================
   7Iks — Menu Page Script
   =================================== */

// ---- Menu Data ----
const menuData = {
    bar: {
        "Cervejas & Sidras": [
            { name: "Imperial Sagres 20cl", price: "1,30€" },
            { name: "Imperial Sagres 50cl", price: "3,50€" },
            { name: "Bandida do Pomar 20cl", price: "1,80€" },
            { name: "Bandida do Pomar 40cl", price: "3,50€" },
            { name: "Tango / Panaché 20cl", price: "1,30€" },
        ],
        "Cocktails": [
            { name: "Aperol Spritz", price: "7,00€" },
            { name: "Tequila Sunrise", price: "7,00€" },
            { name: "Mojito", price: "8,00€" },
            { name: "Morangoska", price: "8,00€" },
            { name: "Caipirinha", price: "8,00€" },
            { name: "Caipiroska", price: "8,00€", desc: "Black | White" },
            { name: "Long Island Iced Tea", price: "9,00€" },
            { name: "Moscow Mule", price: "9,00€" },
        ],
        "Aperitivos": [
            { name: "Porto Cadão", price: "2,80€", desc: "Tinto | Branco" },
            { name: "Martini Bianco", price: "3,60€" },
            { name: "Martini Rosso", price: "3,60€" },
            { name: "Martini c/ Cerveja", price: "3,50€" },         
            { name: "Moscatel", price: "3,60€" },
        ],
        "Vodka": [
            { name: "Eristoff", price: "6,00€" },
            { name: "Eristoff Black", price: "6,00€" },
            { name: "Eristoff Pink", price: "6,00€" },
            { name: "Eristoff Passion", price: "6,00€" },
            { name: "Grey Goose", price: "10,00€" },
            { name: "Adição Red Bull", price: "2,00€" },
        ],
        "Gin": [
            { name: "Bombay Dry Gin", price: "6,50€" },
            { name: "Bombay Sapphire", price: "8,50€" },
            { name: "Bulldog", price: "10,00€" },
            { name: "Martin Miller's", price: "10,00€" },
            { name: "Hendrick's", price: "11,00€" },
            { name: "Adição Red Bull", price: "2,00€" },
        ],
        "Licores": [
            { name: "Amêndoa Amarga", price: "3,50€" },
            { name: "Licor Beirão", price: "5,00€" },
            { name: "Ginja", price: "5,00€" },
            { name: "Triple Seco", price: "5,00€" },
            { name: "Safari", price: "7,00€" },
            { name: "Malibu", price: "7,00€" },
            { name: "Baileys", price: "7,00€" },
            { name: "Jägermeister ", price: "6,00€" },
            { name: "Adição Red Bull", price: "2,00€" },
        ],
        "Aguardentes / Brandies": [
            { name: "Brandy Croft", price: "4,50€" },
            { name: "Macieira", price: "4,50€" },
            { name: "CRF", price: "7,00€" },
        ],
        "Whisky": [
            { name: "William Lawson's", price: "6,00€" },
            { name: "Dewar's White Label", price: "6,50€" },
            { name: "Jameson", price: "7,00€" },
            { name: "Jack Daniel's", price: "8,00€" },
            { name: "Adição Red Bull", price: "2,00€" },
        ],
        "Rum & Tequila": [
            { name: "Bacardí Carta Blanca", price: "6,00€" },
            { name: "Bacardí Limón", price: "6,00€" },
            { name: "Bacardí Razz", price: "6,00€" },
            { name: "Bacardí Spiced", price: "6,50€" },
            { name: "Tequila Camino Real", price: "5,00€" },
            { name: "Adição Red Bull", price: "2,00€" },
        ],
        "Sangrias": [
            { name: "La Casera", priceGlass: "3,00€", priceJarro: "-" },
            { name: "Tinta", priceGlass: "5,00€", priceJarro: "15,00€" },
            { name: "Branca", priceGlass: "5,00€", priceJarro: "15,00€" },
            { name: "Maracujá", priceGlass: "6,00€", priceJarro: "18,00€" },
        ],
        "Shots": [
            { name: "Shot", price: "2,00€" },
            { name: "Shot Premium", price: "3,00€" },
        ],
    },
    cafetaria: {
        "Cafés": [
            { name: "Expresso / Descafeinado", price: "1,00€" },
            { name: "Abatanado", price: "1,40€" },
            { name: "Café Duplo", price: "1,80€" },
            { name: "Garoto", price: "0,80€" },
            { name: "Meia de Leite", price: "1,60€" },
            { name: "Galão", price: "1,60€" },
            { name: "Cappuccino", price: "2,80€" },
            { name: "Chocolate Quente", price: "1,70€" },
            { name: "Copo de Leite", price: "1,40€" },
            { name: "Café com Natas", price: "3,50€" },
            { name: "Carioca de Limão", price: "0,80€" },
            { name: "Infusão de Limão", price: "1,00€" },
            { name: "Chá / Infusão", price: "1,20€" },
        ],
        "Sumos & Refrigerantes": [
            { name: "A Copo", price: "1,50€", desc: "Néctar" },
            { name: "Coca-Cola 33cl", price: "1,80€" },
            { name: "Coca-Cola Zero 33cl", price: "1,80€" },
            { name: "Sumol 33cl", price: "1,80€", desc: "Ananás | Laranja" },
            { name: "7Up 33cl", price: "1,80€" },
            { name: "Ice Tea 33cl", price: "1,80€", desc: "Manga | Pêssego | Limão" },
            { name: "Compal Néctar 20cl", price: "1,80€", desc: "Laranja do Algarve | Pêssego | Pêra | Maçã | Manga Laranja | Frutos Vermelhos" },
            { name: "Schweppes Tónica 20cl", price: "1,80€" },
            { name: "Schweppes Ginger Ale 20cl", price: "1,80€" },
            { name: "Red Bull", price: "3,00€" },
            { name: "Sumo de Laranja Natural", price: "3,70€" },
        ],
        "Águas": [
            { name: "Água Luso 50cl", price: "1,20€" },
            { name: "Água Luso 1,5L", price: "2,20€" },
            { name: "Água das Pedras", price: "1,50€" },
            { name: "Água das Pedras Sabores", price: "2,00€", desc: "Limão | Maracujá | Açaí | Frutos Vermelhos | Ananás" },
            { name: "Água Castelo", price: "1,40€" },
        ],
    },
    vinhos: {
        "Vinho Tinto": [
            { name: "Paulo Laureano", priceGlass: "5,00€", priceBottle: "12,00€" },
            { name: "Vallado", priceGlass: "6,00€", priceBottle: "16,00€" },
        ],
        "Vinho Branco": [
            { name: "Paulo Laureano", priceGlass: "5,00€", priceBottle: "12,00€" },
            { name: "Vallado", priceGlass: "6,00€", priceBottle: "16,00€" },
            { name: "Ribeiro Santo Encruzado", priceGlass: "9,00€", priceBottle: "24,00€" },
        ],
    },
    snacks: {
        "Batatas Fritas": [
            { name: "Doritos Tex Mex", price: "2,00€" },
            { name: "Ruffles Presunto", price: "2,00€" },
            { name: "Lays 3Ds", price: "2,00€" },
            { name: "Cheetos Futebolas", price: "2,00€" },
            { name: "Lays Sal", price: "2,00€" },
            { name: "Ruffles Sal", price: "2,00€" },
        ],
        "Outros": [
            { name: "Chupa Chups", price: "0,50€" },
            { name: "Trident Morango", price: "1,50€" },
            { name: "Trident Menta", price: "1,50€" },
        ],
    },
};

// ---- Translations ----
const translations = {
    en: {
        tabs: { bar: "Bar", cafetaria: "Coffee & Drinks", vinhos: "Wines", snacks: "Snacks" },
        all: "All",
        glassLabel: "Glass",
        bottleLabel: "Bottle",
        jarLabel: "Jug",
        categories: {
            "Cervejas & Sidras": "Beers & Ciders",
            "Cocktails": "Cocktails",
            "Aperitivos": "Aperitifs",
            "Vodka": "Vodka",
            "Gin": "Gin",
            "Licores": "Liqueurs",
            "Aguardentes / Brandies": "Spirits / Brandies",
            "Whisky": "Whisky",
            "Rum & Tequila": "Rum & Tequila",
            "Shots": "Shots",
            "Cafés": "Coffee",
            "Sumos & Refrigerantes": "Juices & Soft Drinks",
            "Águas": "Water",
            "Vinho Tinto": "Red Wine",
            "Vinho Branco": "White Wine",
            "Batatas Fritas": "Crisps",
            "Outros": "Other",
        },
        items: {
            "Expresso / Descafeinado": "Espresso / Decaf",
            "Abatanado": "Long Black",
            "Café Duplo": "Double Espresso",
            "Garoto": "Cortado",
            "Meia de Leite": "Half Milk Coffee",
            "Galão": "Latte",
            "Chocolate Quente": "Hot Chocolate",
            "Copo de Leite": "Glass of Milk",
            "Café com Natas": "Coffee with Cream",
            "Carioca de Limão": "Lemon Carioca",
            "Infusão de Limão": "Lemon Infusion",
            "Chá / Infusão": "Tea / Infusion",
            "A Copo": "By the Glass",
            "Sumo de Laranja Natural": "Fresh Orange Juice",
            "Amêndoa Amarga": "Bitter Almond",
            "Martini c/ Cerveja": "Martini with Beer",
            "Ginja": "Sour Cherry Liqueur",
            "Água Luso 50cl": "Luso Water 50cl",
            "Água Luso 1,5L": "Luso Water 1.5L",
            "Água das Pedras Sabores": "Água das Pedras Flavours",
            "Água Castelo": "Castelo Water",
            "Imperial Sagres 20cl": "Beer 20cl",
            "Imperial Sagres 50cl": "Beer 50cl",
            "Bandida do Pomar 20cl": "Cider 20cl",
            "Bandida do Pomar 40cl": "Cider 40cl",
            "Schweppes Tónica 20cl": "Schweppes Tonic 20cl",
            "Sangria Tinta": "Red Sangria",
            "Sangria Branca": "White Sangria",
            "Adição Red Bull": "Add Red Bull",
        },
        descs: {
            "Tinto | Branco": "Red | White",
            "Ananás | Laranja": "Pineapple | Orange",
            "Manga | Pêssego | Limão": "Mango | Peach | Lemon",
            "Laranja do Algarve | Pêssego | Pêra | Maçã | Manga Laranja | Frutos Vermelhos": "Algarve Orange | Peach | Pear | Apple | Mango Orange | Red Berries",
            "Limão | Maracujá | Açaí | Frutos Vermelhos | Ananás": "Lemon | Passion Fruit | Açaí | Red Berries | Pineapple",
            "Néctar": "Nectar",
        },
    },
};

// ---- State ----
let currentMenuMode = 'bar';
let currentCategory = null;
let currentLang = 'pt';

// ---- DOM ----
const body = document.body;
const categoryPills = document.getElementById('categoryPills');
const menuContent = document.getElementById('menuContent');
const cursorGlow = document.getElementById('cursorGlow');

// ---- Always Day Mode ----
body.setAttribute('data-mode', 'day');

// ---- Cursor Glow (desktop) ----
if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

// ---- Translation helpers ----
function t(type, key) {
    if (currentLang === 'pt') return key;
    const map = translations[currentLang]?.[type];
    return map?.[key] || key;
}

function tLabel(key) {
    if (currentLang === 'pt') {
        const ptLabels = { glassLabel: 'A Copo', bottleLabel: 'Garrafa', jarLabel: 'A Jarro', all: 'Todos' };
        return ptLabels[key] || key;
    }
    return translations[currentLang]?.[key] || key;
}

// ---- Menu Rendering ----
function getCategories(mode) {
    return Object.keys(menuData[mode]);
}

function renderCategoryPills(mode, resetCategory = true) {
    const categories = getCategories(mode);
    if (resetCategory) currentCategory = null;

    categoryPills.innerHTML =
        `<button class="category-pill ${currentCategory === null ? 'active' : ''}" data-category="all">${tLabel('all')}</button>` +
        categories.map(cat =>
            `<button class="category-pill ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">${t('categories', cat)}</button>`
        ).join('');

    categoryPills.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            currentCategory = pill.dataset.category === 'all' ? null : pill.dataset.category;
            categoryPills.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderMenu();
        });
    });
}

function renderTabs() {
    document.querySelectorAll('.menu-mode-tab').forEach(tab => {
        const mode = tab.dataset.menuMode;
        if (currentLang === 'pt') {
            const ptTabs = { bar: 'Bar', cafetaria: 'Cafetaria', vinhos: 'Vinhos', snacks: 'Snacks' };
            tab.textContent = ptTabs[mode] || mode;
        } else {
            tab.textContent = translations[currentLang]?.tabs?.[mode] || mode;
        }
    });
}

function renderMenu() {
    const data = menuData[currentMenuMode];
    const categoriesToRender = currentCategory ? { [currentCategory]: data[currentCategory] } : data;

    let html = '';
    for (const [category, items] of Object.entries(categoriesToRender)) {
        const hasDoublePrice = items.some(item => item.priceGlass);
        const hasJarro = items.some(item => item.priceJarro);
        html += `<div class="menu-category-block">
            <h3 class="menu-category-title">${t('categories', category)}</h3>
            ${hasDoublePrice ? `<div class="menu-price-header"><span>${tLabel('glassLabel')}</span><span>${hasJarro ? tLabel('jarLabel') : tLabel('bottleLabel')}</span></div>` : ''}
            <div class="menu-list">
                ${items.map((item, i) =>
                    `<div class="menu-row" style="animation-delay: ${i * 0.03}s">
                        <div class="menu-row-left">
                            <span class="menu-row-name">${t('items', item.name)}${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}</span>
                            ${item.desc ? `<span class="menu-row-desc">${t('descs', item.desc)}</span>` : ''}
                        </div>
                        <span class="menu-row-dots"></span>
                        ${item.priceGlass
                            ? `<span class="menu-row-price menu-row-price-double"><span>${item.priceGlass}</span><span class="menu-price-sep">|</span><span>${item.priceJarro || item.priceBottle}</span></span>`
                            : `<span class="menu-row-price">${item.price}</span>`
                        }
                    </div>`
                ).join('')}
            </div>
        </div>`;
    }

    const legalNotice1 = currentLang === 'en'
        ? 'No dish, food product, or beverage, including the couvert, may be charged if not requested by the customer or if left unused by the customer.'
        : 'Nenhum prato, produto alimentar ou bebida, incluindo o couvert, pode ser cobrado se não for solicitado pelo cliente ou por este for inutilizado.';
    const legalNotice2 = currentLang === 'en'
        ? 'If you suffer from any food intolerance or allergy, please inform our staff.'
        : 'Caso sofra de alguma intolerância alimentar ou alergia alimentar por favor informe o nosso staff.';

    html += `<div class="menu-legal-notice"><p>${legalNotice1}</p><p>${legalNotice2}</p></div>`;

    menuContent.innerHTML = html;
}

// Menu mode tabs
document.querySelectorAll('.menu-mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.menu-mode-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMenuMode = tab.dataset.menuMode;
        renderCategoryPills(currentMenuMode);
        renderMenu();
    });
});

// Init
renderTabs();
renderCategoryPills(currentMenuMode);
renderMenu();

// ---- Category scroll fade hint ----
const scrollWrapper = document.querySelector('.category-scroll-wrapper');
function checkScrollEnd() {
    const el = categoryPills;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
    scrollWrapper.classList.toggle('scrolled-end', atEnd);
}
categoryPills.addEventListener('scroll', checkScrollEnd);
// Re-check whenever pills re-render
const origRenderPills = renderCategoryPills;
renderCategoryPills = function(...args) {
    origRenderPills(...args);
    setTimeout(checkScrollEnd, 50);
};

// ---- Language Switcher (inside nav) ----
(function createLangSwitcher() {
    const navInner = document.querySelector('.nav-inner');
    const switcher = document.createElement('button');
    switcher.className = 'lang-switcher';
    switcher.setAttribute('aria-label', 'Switch language');
    switcher.innerHTML = `<span class="lang-switcher-label">EN</span>`;
    navInner.appendChild(switcher);

    const label = switcher.querySelector('.lang-switcher-label');

    switcher.addEventListener('click', () => {
        const newLang = currentLang === 'pt' ? 'en' : 'pt';
        currentLang = newLang;

        // Pulse animation
        switcher.classList.add('lang-switching');
        setTimeout(() => switcher.classList.remove('lang-switching'), 400);

        // Swap label with a quick flip
        label.classList.add('lang-label-flip');
        setTimeout(() => {
            label.textContent = newLang === 'en' ? 'PT' : 'EN';
        }, 150);
        setTimeout(() => label.classList.remove('lang-label-flip'), 300);

        // Animate menu content out, swap, animate in
        menuContent.classList.add('menu-lang-exit');
        setTimeout(() => {
            renderTabs();
            renderCategoryPills(currentMenuMode, false);
            renderMenu();
            menuContent.classList.remove('menu-lang-exit');
            menuContent.classList.add('menu-lang-enter');
            setTimeout(() => menuContent.classList.remove('menu-lang-enter'), 400);
        }, 250);
    });
})();

// ---- Nav Background on Scroll ----
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.style.boxShadow = 'var(--shadow)';
    } else {
        nav.style.boxShadow = 'none';
    }
}, { passive: true });
