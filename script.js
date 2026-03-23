/* ===================================
   7Iks — Café & Bar | Nazaré
   Main Script
   =================================== */

// ---- Menu Data ----
const menuData = {
    bar: {
        "Cervejas": [
            { name: "Imperial", price: "X.XX€", desc: "Fino de pressão", badge: "Popular" },
            { name: "Mini", price: "X.XX€", desc: "Cerveja de pressão" },
            { name: "Super Bock", price: "X.XX€", desc: "Garrafa" },
            { name: "Sagres", price: "X.XX€", desc: "Garrafa" },
            { name: "Super Bock s/ Álcool", price: "X.XX€", desc: "Garrafa" },
            { name: "Somersby", price: "X.XX€", desc: "Garrafa" },
            { name: "Desperados", price: "X.XX€", desc: "Garrafa" },
            { name: "Corona", price: "X.XX€", desc: "Garrafa" },
            { name: "Heineken", price: "X.XX€", desc: "Garrafa" },
        ],
        "Sangrias": [
            { name: "Sangria de Tinto", price: "X.XX€", desc: "Jarro" },
            { name: "Sangria de Branco", price: "X.XX€", desc: "Jarro" },
            { name: "Sangria de Espumante", price: "X.XX€", desc: "Jarro" },
            { name: "Copo de Sangria", price: "X.XX€", desc: "Individual" },
        ],
        "Cocktails": [
            { name: "Mojito", price: "X.XX€", desc: "Rum, hortelã, lima, açúcar" },
            { name: "Caipirinha", price: "X.XX€", desc: "Cachaça, lima, açúcar" },
            { name: "Gin Tónico", price: "X.XX€", desc: "Gin, água tónica, botânicos" },
            { name: "Moscow Mule", price: "X.XX€", desc: "Vodka, ginger beer, lima" },
            { name: "Aperol Spritz", price: "X.XX€", desc: "Aperol, prosecco, soda", badge: "Popular" },
            { name: "Piña Colada", price: "X.XX€", desc: "Rum, coco, ananás" },
            { name: "Margarita", price: "X.XX€", desc: "Tequila, triple sec, lima" },
            { name: "Sex on the Beach", price: "X.XX€", desc: "Vodka, pêssego, laranja" },
        ],
        "Mocktails": [
            { name: "Virgin Mojito", price: "X.XX€", desc: "Sem álcool — hortelã, lima" },
            { name: "Sunrise", price: "X.XX€", desc: "Sem álcool — laranja, grenadine" },
            { name: "Tropical Breeze", price: "X.XX€", desc: "Sem álcool — manga, ananás" },
        ],
        "Vodka": [
            { name: "Vodka Nacional", price: "X.XX€", desc: "" },
            { name: "Smirnoff", price: "X.XX€", desc: "" },
            { name: "Absolut", price: "X.XX€", desc: "" },
            { name: "Grey Goose", price: "X.XX€", desc: "Premium" },
        ],
        "Gin": [
            { name: "Gin Nacional", price: "X.XX€", desc: "" },
            { name: "Gordons", price: "X.XX€", desc: "" },
            { name: "Tanqueray", price: "X.XX€", desc: "" },
            { name: "Hendricks", price: "X.XX€", desc: "Premium" },
            { name: "Gin Mare", price: "X.XX€", desc: "Premium" },
        ],
        "Licores": [
            { name: "Beirão", price: "X.XX€", desc: "" },
            { name: "Amarguinha", price: "X.XX€", desc: "" },
            { name: "Ginjinha", price: "X.XX€", desc: "" },
            { name: "Baileys", price: "X.XX€", desc: "" },
            { name: "Jägermeister", price: "X.XX€", desc: "" },
        ],
        "Whiskey": [
            { name: "J&B", price: "X.XX€", desc: "" },
            { name: "Jameson", price: "X.XX€", desc: "" },
            { name: "Jack Daniel's", price: "X.XX€", desc: "" },
            { name: "Johnnie Walker Black", price: "X.XX€", desc: "Premium" },
        ],
        "Rum & Tequila": [
            { name: "Bacardi", price: "X.XX€", desc: "Rum" },
            { name: "Captain Morgan", price: "X.XX€", desc: "Rum" },
            { name: "Havana Club", price: "X.XX€", desc: "Rum" },
            { name: "Jose Cuervo", price: "X.XX€", desc: "Tequila" },
            { name: "Sierra", price: "X.XX€", desc: "Tequila" },
        ],
        "Aperitivos": [
            { name: "Martini Branco", price: "X.XX€", desc: "" },
            { name: "Martini Rosso", price: "X.XX€", desc: "" },
            { name: "Porto Branco", price: "X.XX€", desc: "" },
            { name: "Porto Tinto", price: "X.XX€", desc: "" },
            { name: "Campari", price: "X.XX€", desc: "" },
        ],
        "Shots": [
            { name: "Shot Simples", price: "X.XX€", desc: "À escolha" },
            { name: "Shot Premium", price: "X.XX€", desc: "Jäger, Tequila, etc." },
            { name: "Ronda de 5 Shots", price: "X.XX€", desc: "À escolha", badge: "Grupo" },
            { name: "Ronda de 10 Shots", price: "X.XX€", desc: "À escolha", badge: "Festa" },
        ],
    },
    cafetaria: {
        "Cafetaria": [
            { name: "Café / Expresso", price: "X.XX€", desc: "" },
            { name: "Café Duplo", price: "X.XX€", desc: "" },
            { name: "Descafeinado", price: "X.XX€", desc: "" },
            { name: "Garoto", price: "X.XX€", desc: "" },
            { name: "Meia de Leite", price: "X.XX€", desc: "" },
            { name: "Galão", price: "X.XX€", desc: "" },
            { name: "Cappuccino", price: "X.XX€", desc: "" },
            { name: "Café com Cheirinho", price: "X.XX€", desc: "Café + aguardente" },
            { name: "Chá", price: "X.XX€", desc: "Vários sabores" },
            { name: "Chocolate Quente", price: "X.XX€", desc: "" },
        ],
        "Águas & Refrigerantes": [
            { name: "Água 0.5L", price: "X.XX€", desc: "" },
            { name: "Água 1.5L", price: "X.XX€", desc: "" },
            { name: "Água com Gás", price: "X.XX€", desc: "" },
            { name: "Coca-Cola", price: "X.XX€", desc: "" },
            { name: "Coca-Cola Zero", price: "X.XX€", desc: "" },
            { name: "Ice Tea", price: "X.XX€", desc: "Limão / Pêssego" },
            { name: "Sumol", price: "X.XX€", desc: "Laranja / Ananás" },
            { name: "7Up", price: "X.XX€", desc: "" },
            { name: "Compal", price: "X.XX€", desc: "Vários sabores" },
        ],
        "Sumos Naturais": [
            { name: "Sumo de Laranja", price: "X.XX€", desc: "Natural", badge: "Natural" },
            { name: "Sumo de Cenoura", price: "X.XX€", desc: "Natural" },
            { name: "Sumo de Maçã", price: "X.XX€", desc: "Natural" },
            { name: "Sumo Misto", price: "X.XX€", desc: "Combinação à escolha" },
            { name: "Limonada Natural", price: "X.XX€", desc: "Fresca", badge: "Popular" },
        ],
    }
};

// ---- State ----
let currentMenuMode = 'bar';
let currentCategory = null;

// ---- DOM ----
const body = document.body;
const modeToggle = document.getElementById('modeToggle');
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');
const categoryPills = document.getElementById('categoryPills');
const menuGrid = document.getElementById('menuGrid');
const cursorGlow = document.getElementById('cursorGlow');

// ---- Mode Toggle (Day/Night) ----
function setMode(mode) {
    body.setAttribute('data-mode', mode);
    localStorage.setItem('7iks-mode', mode);
}

// Auto-detect: night mode after 19h
function autoDetectMode() {
    const saved = localStorage.getItem('7iks-mode');
    if (saved) {
        setMode(saved);
        return;
    }
    const hour = new Date().getHours();
    setMode(hour >= 19 || hour < 7 ? 'night' : 'day');
}

modeToggle.addEventListener('click', () => {
    const current = body.getAttribute('data-mode');
    setMode(current === 'day' ? 'night' : 'day');
});

autoDetectMode();

// ---- Mobile Menu ----
navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', () => {
        navBurger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

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
    currentCategory = categories[0];

    categoryPills.innerHTML = categories.map((cat, i) =>
        `<button class="category-pill${i === 0 ? ' active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    categoryPills.querySelectorAll('.category-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            currentCategory = pill.dataset.category;
            categoryPills.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            renderMenuItems();
        });
    });
}

function renderMenuItems() {
    const items = menuData[currentMenuMode][currentCategory] || [];
    menuGrid.innerHTML = items.map((item, i) =>
        `<div class="menu-item" style="animation-delay: ${i * 0.05}s">
            <div class="menu-item-info">
                <div class="menu-item-name">
                    ${item.name}
                    ${item.badge ? `<span class="menu-item-badge">${item.badge}</span>` : ''}
                </div>
                ${item.desc ? `<div class="menu-item-desc">${item.desc}</div>` : ''}
            </div>
            <div class="menu-item-price">${item.price}</div>
        </div>`
    ).join('');
}

// Menu mode tabs
document.querySelectorAll('.menu-mode-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.menu-mode-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMenuMode = tab.dataset.menuMode;
        renderCategoryPills(currentMenuMode);
        renderMenuItems();
    });
});

// Init menu
renderCategoryPills(currentMenuMode);
renderMenuItems();

// ---- Scroll Reveal ----
const revealElements = document.querySelectorAll('.espaco-card, .pedir-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ---- Nav Background on Scroll ----
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Add shadow on scroll
    if (scrollY > 20) {
        nav.style.boxShadow = 'var(--shadow)';
    } else {
        nav.style.boxShadow = 'none';
    }

    lastScroll = scrollY;
}, { passive: true });

// ---- Smooth anchor scrolling with offset ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 70;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
