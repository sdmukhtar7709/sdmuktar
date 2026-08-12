export default function SkillsSection({ skillWidgets }) {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills & Interests</h2>
        <div className="skills-grid">
          {skillWidgets.map((widget) => (
            <article
              key={widget.title}
              className="skill-widget"
              style={{ '--count': widget.count, '--duration': widget.duration, '--dir': widget.dir }}
            >
              <h3 className="skill-widget-title">{widget.title}</h3>
              <div className="skill-orbit" aria-label={`${widget.title} skills`}>
                <div className="skill-core" aria-hidden="true">
                  {widget.coreType === 'code' && <span className="skill-core-icon skill-core-icon--code">&lt;/&gt;</span>}
                  {widget.coreType === 'stack' && (
                    <span className="skill-core-icon skill-core-icon--stack">
                      <i className="bx bx-cloud"></i>
                      <i className="bx bx-data"></i>
                    </span>
                  )}
                  {widget.coreType === 'default' && (
                    <span className="skill-core-icon"><i className="bx bx-cog"></i></span>
                  )}
                </div>
                <ul className="skill-items">
                  {widget.items.map((item, index) => (
                    <li key={item} className="skill-item" style={{ '--i': index }}>
                      <span className="skill-badge">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
