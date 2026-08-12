export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Full-Stack Web Development</h3>
            <p>High-performance MERN applications, responsive interfaces, and complete backend solutions tailored to your business needs.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design & Frontend</h3>
            <p>Beautiful, accessible interfaces with responsive design, prototypes, and polished user experiences.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Data Analytics & ML Solutions</h3>
            <p>Dashboards, reporting systems, and predictive insights designed to help teams make better decisions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
