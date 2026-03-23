/* ===================================
   7Iks — Café & Bar | Nazaré
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
            { name: "Vodka Nacional", price: "X.XX€" },
            { name: "Smirnoff", price: "X.XX€" },
            { name: "Absolut", price: "X.XX€" },
            { name: "Grey Goose", price: "X.XX€", desc: "Premium" },
        ],
        "Gin": [
            { name: "Gin Nacional", price: "X.XX€" },
            { name: "Gordons", price: "X.XX€" },
            { name: "Tanqueray", price: "X.XX€" },
            { name: "Hendricks", price: "X.XX€", desc: "Premium" },
            { name: "Gin Mare", price: "X.XX€", desc: "Premium" },
        ],
        "Licores": [
            { name: "Beirão", price: "X.XX€" },
            { name: "Amarguinha", price: "X.XX€" },
            { name: "Ginjinha", price: "X.XX€" },
            { name: "Baileys", price: "X.XX€" },
            { name: "Jägermeister", price: "X.XX€" },
        ],
        "Whiskey": [
            { name: "J&B", price: "X.XX€" },
            { name: "Jameson", price: "X.XX€" },
            { name: "Jack Daniel's", price: "X.XX€" },
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
            { name: "Martini Branco", price: "X.XX€" },
            { name: "Martini Rosso", price: "X.XX€" },
            { name: "Porto Branco", price: "X.XX€" },
            { name: "Porto Tinto", price: "X.XX€" },
            { name: "Campari", price: "X.XX€" },
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
            { name: "Café / Expresso", price: "X.XX€" },
            { name: "Café Duplo", price: "X.XX€" },
            { name: "Descafeinado", price: "X.XX€" },
            { name: "Garoto", price: "X.XX€" },
            { name: "Meia de Leite", price: "X.XX€" },
            { name: "Galão", price: "X.XX€" },
            { name: "Cappuccino", price: "X.XX€" },
            { name: "Café com Cheirinho", price: "X.XX€", desc: "Café + aguardente" },
            { name: "Chá", price: "X.XX€", desc: "Vários sabores" },
            { name: "Chocolate Quente", price: "X.XX€" },
        ],
        "Águas & Refrigerantes": [
            { name: "Água 0.5L", price: "X.XX€" },
            { name: "Água 1.5L", price: "X.XX€" },
            { name: "Água com Gás", price: "X.XX€" },
            { name: "Coca-Cola", price: "X.XX€" },
            { name: "Coca-Cola Zero", price: "X.XX€" },
            { name: "Ice Tea", price: "X.XX€", desc: "Limão / Pêssego" },
            { name: "Sumol", price: "X.XX€", desc: "Laranja / Ananás" },
            { name: "7Up", price: "X.XX€" },
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
let currentMode = 'bar';
let currentCat = null;

// ---- DOM ----
const body = document.body;
const modeToggle = document.getElementById('modeToggle');
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobileNav');
const categories = document.getElementById('categories');
const menuList = document.getElementById('menuList');
const nav = document.getElementById('nav');

// ---- Day/Night ----
function setDayNight(mode) {
    body.setAttribute('data-mode', mode);
    localStorage.setItem('7iks-mode', mode);
}

(function autoMode() {
    const saved = localStorage.getItem('7iks-mode');
    if (saved) { setDayNight(saved); return; }
    const h = new Date().getHours();
    setDayNight(h >= 19 || h < 7 ? 'night' : 'day');
})();

modeToggle.addEventListener('click', () => {
    setDayNight(body.getAttribute('data-mode') === 'day' ? 'night' : 'day');
});

// ---- Mobile Nav ----
burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        body.style.overflow = '';
    });
});

// ---- Nav scroll shadow ----
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ---- Menu ----
function renderCategories() {
    const cats = Object.keys(menuData[currentMode]);
    currentCat = cats[0];

    categories.innerHTML = cats.map((c, i) =>
        `<button class="cat-btn${i === 0 ? ' active' : ''}" data-cat="${c}">${c}</button>`
    ).join('');

    categories.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentCat = btn.dataset.cat;
            categories.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderItems();
        });
    });
}

function renderItems() {
    const items = menuData[currentMode][currentCat] || [];
    menuList.innerHTML = items.map(item =>
        `<div class="menu-row">
            <div class="menu-row-left">
                <div class="menu-row-name">
                    ${item.name}
                    ${item.badge ? `<span class="menu-row-badge">${item.badge}</span>` : ''}
                </div>
                ${item.desc ? `<div class="menu-row-desc">${item.desc}</div>` : ''}
            </div>
            <div class="menu-row-price">${item.price}</div>
        </div>`
    ).join('');
}

document.querySelectorAll('.menu-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentMode = tab.dataset.menuMode;
        renderCategories();
        renderItems();
    });
});

renderCategories();
renderItems();

// ---- Smooth scroll ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.scrollY - 65,
                behavior: 'smooth'
            });
        }
    });
});

// ---- Scroll reveal ----
document.querySelectorAll('.espaco-block, .step').forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
