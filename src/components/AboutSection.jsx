export default function AboutSection() {
  return (
    <section className="about" id="About">
      <div className="about-img">
        <img className="imgs" src="/assets/proo.jpg" data-asset="about" alt="Mukhtar profile image" width="960" height="1088" loading="lazy" decoding="async" />
      </div>

      <div className="about-text">
        <h2>
          About <span>Me</span>
        </h2>
        <h4>
          Full Stack Developer | Frontend Developer | UI/UX Enthusiast | Web Application Developer
        </h4>
        <p>
          I am a passionate <b>Full Stack Developer</b> with hands-on experience in building responsive and scalable web applications using <b>React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript</b>.
          <br />
          <br />
          Through internships at <b>DIAT DRDO</b> and <b>Indux Technology</b>, I have worked on frontend development, backend engineering, REST API integration, and modern web technologies.
          <br />
          <br />
          I enjoy designing clean, intuitive, and user-friendly interfaces while developing efficient backend systems that deliver seamless user experiences.
          <br />
          <br />
          Currently pursuing my <b>B.Tech in Information Technology</b>, I am continuously improving my frontend development and UI/UX skills to build impactful digital products.
        </p>

        <a href="https://www.github.com/sdmukhtar7709" target="_blank" rel="noreferrer" data-link="github">
          <button type="button" className="btn">Visit GitHub</button>
        </a>
        <a href="https://work-board-zeta.vercel.app/dashboard" target="_blank" rel="noreferrer" data-link="dashboard">
          <button type="button" className="btn">Open Dashboard</button>
        </a>
      </div>
    </section>
  )
}
