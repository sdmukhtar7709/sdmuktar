import { useEffect, useState } from 'react'
import HeaderNav from './components/HeaderNav'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import EducationSection from './components/EducationSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import { typedStrings, socialLinks, skillWidgets, projects } from './data/portfolioData'

function App() {
  const [theme, setTheme] = useState('light')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const initialTheme = savedTheme === 'dark' ? 'dark' : 'light'
    setTheme(initialTheme)
    document.body.classList.toggle('light-theme', initialTheme === 'light')
  }, [])

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            if (entry.target.id === 'skills') {
              entry.target.classList.add('is-visible')
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <HeaderNav
        theme={theme}
        isMenuOpen={isMenuOpen}
        onToggleTheme={handleToggleTheme}
        onToggleMenu={handleToggleMenu}
        onCloseMenu={handleCloseMenu}
      />
      <main>
        <HeroSection strings={typedStrings} socialLinks={socialLinks} />
        <AboutSection />
        <EducationSection />
        <SkillsSection skillWidgets={skillWidgets} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <footer>
        <div className="last-text">
          <p>Developed with love by Muktar Sayyad © 2026</p>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/mukhtar-sayyed/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/sdmukhtar7709" target="_blank" rel="noreferrer">GitHub</a>
            <a href="mailto:muktarsayyad2003@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
