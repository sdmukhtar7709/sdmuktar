import { portfolioModel } from '../models/portfolioModel.js';
import {
    applyAssets,
    applyLinks,
    closeMenuOnNavClick,
    initTypedText,
    initializeTheme,
    toggleMenu,
    toggleTheme
} from '../views/portfolioView.js';

function bindEvents() {
    const menuButton = document.querySelector('[data-action="toggle-menu"]');
    const themeButton = document.querySelector('[data-action="toggle-theme"]');

    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    if (themeButton) {
        themeButton.addEventListener('click', toggleTheme);
    }
}

function initApp() {
    applyAssets(portfolioModel.assets);
    applyLinks(portfolioModel.links);
    initTypedText(portfolioModel.typedStrings);
    initializeTheme();
    closeMenuOnNavClick();
    bindEvents();
}

document.addEventListener('DOMContentLoaded', initApp);
