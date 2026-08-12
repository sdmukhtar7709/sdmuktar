export default function ResumeSection() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="resume-section">
      <div className="resume-shell">
        <div className="resume-head">
          <h2 id="resume-heading" className="resume-title">Professional Resume</h2>
          <div className="resume-divider" aria-hidden="true"></div>
          <p className="resume-subtitle">Software Engineer • Full-Stack Developer • 2026 Graduate</p>
        </div>

        <div className="resume-actions">
          <a href="/resume.pdf" download="Muktar_Sayyad_Resume.pdf" className="resume-btn resume-btn-primary">
            <span className="resume-btn-icon resume-btn-icon-download">
              <i className='bx bx-download'></i>
            </span>
            <span>Download PDF</span>
          </a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn resume-btn-secondary">
            <span className="resume-btn-icon resume-btn-icon-view">
              <i className='bx bx-show-alt'></i>
            </span>
            <span>View Online</span>
          </a>
        </div>

        <div className="resume-summary-card">
          <div className="resume-summary-header">
            <span className="resume-summary-icon" aria-hidden="true">
              <i className='bx bx-user'></i>
            </span>
            <h3>Professional Summary</h3>
          </div>

          <p>
            B.Tech Information Technology graduate (2026) with hands-on experience in software development,
            backend development, REST APIs, and API testing. Skilled in Java, JavaScript, TypeScript,
            Node.js, Express.js, React.js, MongoDB, PostgreSQL, and Git. Experienced in developing real-world
            applications, building APIs, debugging backend issues, and working in Agile development
            environments. Seeking entry-level opportunities as a Software Engineer, Backend Developer, or
            Full-Stack Developer.
          </p>
        </div>
      </div>
    </section>
  )
}
