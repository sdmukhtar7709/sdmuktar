export default function HeaderNav({ theme, onToggleTheme, isMenuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header>
      <nav>
        <div className="left">
          <a href="#home" className="logo-link" onClick={onCloseMenu}>Welcome To My Portfolio</a>
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
            <li><a href="#home" onClick={onCloseMenu}>Home</a></li>
            <li><a href="#About" onClick={onCloseMenu}>About</a></li>
            <li><a href="#skills" onClick={onCloseMenu}>Skills</a></li>
            <li><a href="#projects" onClick={onCloseMenu}>Projects</a></li>
            <li><a href="#Education" onClick={onCloseMenu}>Education</a></li>
            <li><a href="#Contact" onClick={onCloseMenu}>Contact me</a></li>
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
