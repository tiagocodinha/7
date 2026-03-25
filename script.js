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
            { name: "Aperol Spritz", price: "" },
        ],
        "Aperitivos": [
            { name: "Porto Cadão", price: "2,80€", desc: "Tinto | Branco" },
            { name: "Martini Bianco", price: "3,60€" },
            { name: "Martini Rosso", price: "3,60€" },
            { name: "Moscatel", price: "3,60€" },
        ],
        "Vodka": [
            { name: "Eristoff", price: "6,00€" },
            { name: "Eristoff Black", price: "6,00€" },
            { name: "Eristoff Pink", price: "6,00€" },
            { name: "Eristoff Passion", price: "6,00€" },
            { name: "Grey Goose", price: "10,00€" },
        ],
        "Gin": [
            { name: "Bombay Dry Gin", price: "6,50€" },
            { name: "Bombay Sapphire", price: "8,50€" },
            { name: "Bulldog", price: "10,00€" },
            { name: "Martin Miller's", price: "10,00€" },
            { name: "Hendrick's", price: "11,00€" },
        ],
        "Licores": [
            { name: "Amêndoa Amarga", price: "3,50€" },
            { name: "Licor Beirão", price: "5,00€" },
            { name: "Ginja", price: "5,00€" },
            { name: "Triple Seco", price: "5,00€" },
            { name: "Safari", price: "7,00€" },
            { name: "Malibu", price: "7,00€" },
            { name: "Jägermeister ", price: "6,00€" },
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
            { name: "Jack Daniel's", price: "7,50€" },
        ],
        "Rum & Tequila": [
            { name: "Bacardí Carta Blanca", price: "6,00€" },
            { name: "Bacardí Limón", price: "6,00€" },
            { name: "Bacardí Razz", price: "6,00€" },
            { name: "Bacardí Spiced", price: "6,50€" },
            { name: "Tequila Camino Real", price: "5,00€" },
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
            { name: "Sumo Laranja Natural", price: "3,70€" },
        ],
        "Águas": [
            { name: "Água Luso 33cl", price: "1,20€" },
            { name: "Água Luso 1,5L", price: "2,20€" },
            { name: "Água das Pedras", price: "1,50€" },
            { name: "Água das Pedras Sabores", price: "2,00€", desc: "Limão | Maracujá | Tangerina | Frutos Vermelhos | Ananás" },
            { name: "Água Castelo", price: "1,40€" },
        ],
    },
    vinhos: {
        "Vinho Tinto": [
            { name: "Paulo Laureano", price: "12,00€" },
            { name: "Vallado", price: "16,00€" },
        ],
        "Vinho Branco": [
            { name: "Paulo Laureano", price: "12,00€" },
            { name: "Vallado", price: "16,00€" },
        ],
    },
};

// ---- State ----
let currentMenuMode = 'bar';
let currentCategory = null;

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

// ---- Menu Rendering ----
function getCategories(mode) {
    return Object.keys(menuData[mode]);
}

function renderCategoryPills(mode) {
    const categories = getCategories(mode);
    currentCategory = null;

    categoryPills.innerHTML =
        `<button class="category-pill active" data-category="all">Todos</button>` +
        categories.map(cat =>
            `<button class="category-pill" data-category="${cat}">${cat}</button>`
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

function renderMenu() {
    const data = menuData[currentMenuMode];
    const categoriesToRender = currentCategory ? { [currentCategory]: data[currentCategory] } : data;

    let html = '';
    for (const [category, items] of Object.entries(categoriesToRender)) {
        html += `<div class="menu-category-block">
            <h3 class="menu-category-title">${category}</h3>
            <div class="menu-list">
                ${items.map((item, i) =>
                    `<div class="menu-row" style="animation-delay: ${i * 0.03}s">
                        <div class="menu-row-left">
                            <span class="menu-row-name">${item.name}${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}</span>
                            ${item.desc ? `<span class="menu-row-desc">${item.desc}</span>` : ''}
                        </div>
                        <span class="menu-row-dots"></span>
                        <span class="menu-row-price">${item.price}</span>
                    </div>`
                ).join('')}
            </div>
        </div>`;
    }

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
renderCategoryPills(currentMenuMode);
renderMenu();

// ---- Nav Background on Scroll ----
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.style.boxShadow = 'var(--shadow)';
    } else {
        nav.style.boxShadow = 'none';
    }
}, { passive: true });
