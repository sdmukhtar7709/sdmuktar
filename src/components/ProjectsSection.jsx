export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.alt} width="1200" height="600" loading="lazy" decoding="async" />
                ) : (
                  <div className="project-placeholder">
                    <span className="project-icon">🤖</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.demo && (
                    <a href={project.demo} className="btn-project btn-project-primary" target="_blank" rel="noreferrer" data-link="chatbotDemo">
                      View Live
                    </a>
                  )}
                  <a href={project.github} className="btn-project btn-project-secondary" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
