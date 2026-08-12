import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function HeroSection({ strings, socialLinks }) {
  const typedRef = useRef(null)

  useEffect(() => {
    if (!typedRef.current) return undefined

    const typedInstance = new Typed(typedRef.current, {
      strings,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typedInstance.destroy()
    }
  }, [strings])

  return (
    <section id="home" className="firstsection">
      <div className="leftsection">
        Hi, I am <span className="purple">Muktar Sayyad</span>
        <p>I am a passionate </p>
        <span ref={typedRef}></span>
        <br />

        <div className="home-sci">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              data-link={link.label}
              style={link.style}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>

        <div className="btnfront">
          <br />
          <a href="https://www.github.com/sdmukhtar7709" target="_blank" rel="noreferrer" data-link="github">
            <button type="button" className="btn">Visit GitHub</button>
          </a>
        </div>
      </div>

      <div className="rightsection">
        <div className="hero-illustration">
          <img src="/assets/bg.png" data-asset="hero" alt="dev-png" width="360" height="360" fetchPriority="high" decoding="async" />
        </div>
      </div>
    </section>
  )
}
