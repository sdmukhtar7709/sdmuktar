export default function HeaderNav({ theme, navItems, activeSection, onToggleTheme, isMenuOpen, onToggleMenu, onCloseMenu, onNavClick }) {
  return (
    <header>
      <nav>
        <div className="left">
          <a href="#home" className="logo-link" onClick={onCloseMenu}>Portfolio</a>
        </div>

        <div className="center">
          <button
            type="button"
            className="theme-toggle"
            data-action="toggle-theme"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
          >
            <div className="toggle-icon">{theme === 'light' ? '☀️' : '🌙'}</div>
          </button>
        </div>

        <div className="right">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => {
              const itemId = item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => onNavClick(itemId)}
                    className={`nav-link ${activeSection === itemId ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            type="button"
            className="hamburger"
            data-action="toggle-menu"
            aria-label="Toggle menu"
            onClick={onToggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>
      </nav>
    </header>
  )
}
