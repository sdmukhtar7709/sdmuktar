function updateElementAttribute(selector, attribute, value) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        element.setAttribute(attribute, value);
    });
}

export function applyAssets(assets) {
    updateElementAttribute('[data-asset="hero"]', 'src', assets.hero);
    updateElementAttribute('[data-asset="about"]', 'src', assets.about);
    updateElementAttribute('[data-asset="contactMail"]', 'src', assets.contactMail);
}

export function applyLinks(links) {
    updateElementAttribute('[data-link="linkedin"]', 'href', links.linkedin);
    updateElementAttribute('[data-link="instagram"]', 'href', links.instagram);
    updateElementAttribute('[data-link="resume"]', 'href', links.resume);
    updateElementAttribute('[data-link="github"]', 'href', links.github);
    updateElementAttribute('[data-link="chatbotDemo"]', 'href', links.chatbotDemo);
    updateElementAttribute('[data-link="chatbotRepo"]', 'href', links.chatbotRepo);
}

export function initTypedText(strings) {
    if (window.Typed) {
        new window.Typed('#element', {
            strings,
            typeSpeed: 50
        });
    }
}

export function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

export function closeMenuOnNavClick() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenu = document.querySelector('.nav-links');

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
            }
        });
    });
}

export function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.toggle-icon');

    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
        localStorage.setItem('theme', 'light');
    } else {
        if (themeToggle) {
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', 'dark');
    }
}

export function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggle = document.querySelector('.toggle-icon');

    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        if (themeToggle) {
            themeToggle.textContent = '☀️';
        }
    } else {
        body.classList.remove('light-theme');
        if (themeToggle) {
            themeToggle.textContent = '🌙';
        }
    }
}
