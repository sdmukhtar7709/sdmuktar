import { useState } from 'react'
import Swal from 'sweetalert2'

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactSection() {
  const [formData, setFormData] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', title: '', message: '', visible: false })

  const updateField = (event) => {
    const { name, value } = event.target
    const nextForm = { ...formData, [name]: value }
    setFormData(nextForm)

    const nextErrors = { ...errors }
    if (!value.trim()) {
      nextErrors[name] = name === 'email' ? 'Please enter your email address.' : name === 'name' ? 'Please enter your name.' : name === 'subject' ? 'Please enter a subject.' : 'Please enter your message.'
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
      nextErrors[name] = 'Please enter a valid email address.'
    } else {
      delete nextErrors[name]
    }
    setErrors(nextErrors)
  }

  const validate = () => {
    const nextErrors = {}
    const fields = ['name', 'email', 'subject', 'message']

    fields.forEach((field) => {
      const value = formData[field]?.trim() || ''
      if (!value) {
        nextErrors[field] = field === 'email' ? 'Please enter your email address.' : field === 'name' ? 'Please enter your name.' : field === 'subject' ? 'Please enter a subject.' : 'Please enter your message.'
      } else if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors[field] = 'Please enter a valid email address.'
      }
    })

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validate()) {
      const firstInvalid = Object.keys(errors).length ? Object.keys(errors)[0] : Object.keys(formData).find((key) => !formData[key]?.trim())
      const input = document.getElementById(firstInvalid)
      if (input) input.focus()
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', title: '', message: '', visible: false })

    try {
      const response = await fetch('https://formspree.io/f/mvzjbbay', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(event.target),
      })

      if (!response.ok) throw new Error('Formspree request failed')

      setFormData(initialState)
      setErrors({})
      await Swal.fire({
        icon: 'success',
        title: '✅ Message Sent Successfully!',
        html: "Thank you for contacting me.<br>Your message has been received successfully.<br>I'll get back to you as soon as possible.",
        confirmButtonText: 'Great!',
        confirmButtonColor: '#2563eb',
        background: '#111827',
        color: '#ffffff',
        timer: 3000,
        timerProgressBar: true,
        showCloseButton: false,
      })

      const homeSection = document.getElementById('home')
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'Unable to Send Message',
        html: 'Something went wrong.<br>Please try again later or contact me directly using my email.',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#2563eb',
        background: '#111827',
        color: '#ffffff',
      })

      setStatus({
        type: 'error',
        title: 'Unable to send message.',
        message: 'Please try again later.<br>Or contact me directly using my email.',
        visible: true,
      })
    } finally {
      setIsSubmitting(false)
      window.setTimeout(() => {
        setStatus((prev) => ({ ...prev, visible: false }))
      }, 5000)
    }
  }

  return (
    <section className="conatct" id="Contact">
      <div className="con">
        <div className="firstcont contact-text">
          <h2>
            Contact <span>ME</span>
          </h2>
          <br />
          <h4>Let's Work Together</h4>
          &nbsp;
          <p className="conatct-p">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a Full Stack Developer specializing in creating dynamic and user-friendly websites. Whether you need a web solution, UI/UX improvements, or collaboration, feel free to reach out. You can contact me via email at muktarsayyad2003@gmail.com or connect on <a href="https://www.linkedin.com/in/mukhtar-sayyed/" target="_blank" rel="noreferrer">LinkedIn</a>.&nbsp; Let’s build something amazing together! Looking forward to hearing from you.
          </p>
          <br />
          <div className="contact-lists">
            <div className="contact-list">
              <img src="/assets/gmail.png" data-asset="contactMail" alt="gmail" className="image-top" width="512" height="512" loading="lazy" decoding="async" />
              <p className="contct-text">muktarsayyad2003@gmail.com</p>
            </div>
            <div className="contact-list">
              <p className="contct-text"></p>
            </div>
          </div>
        </div>

        <div className="secondcont">
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit} noValidate>
              <div className="field-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                  aria-describedby="nameError"
                  className={errors.name ? 'invalid' : ''}
                  value={formData.name}
                  onChange={updateField}
                />
                <label htmlFor="name" className="floating-label">Your Name</label>
                <div className="field-error" id="nameError" data-error-for="name" role="alert">{errors.name || ''}</div>
              </div>

              <div className="field-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                  autoComplete="email"
                  inputMode="email"
                  aria-describedby="emailError"
                  className={errors.email ? 'invalid' : ''}
                  value={formData.email}
                  onChange={updateField}
                />
                <label htmlFor="email" className="floating-label">Your Email</label>
                <div className="field-error" id="emailError" data-error-for="email" role="alert">{errors.email || ''}</div>
              </div>

              <div className="field-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  required
                  autoComplete="off"
                  aria-describedby="subjectError"
                  className={errors.subject ? 'invalid' : ''}
                  value={formData.subject}
                  onChange={updateField}
                />
                <label htmlFor="subject" className="floating-label">Subject</label>
                <div className="field-error" id="subjectError" data-error-for="subject" role="alert">{errors.subject || ''}</div>
              </div>

              <div className="field-group textarea-group">
                <textarea
                  id="message"
                  name="message"
                  cols="40"
                  rows="10"
                  placeholder="Tell me about your project"
                  required
                  autoComplete="off"
                  aria-describedby="messageError"
                  className={errors.message ? 'invalid' : ''}
                  value={formData.message}
                  onChange={updateField}
                ></textarea>
                <label htmlFor="message" className="floating-label">Your Message</label>
                <div className="field-error" id="messageError" data-error-for="message" role="alert">{errors.message || ''}</div>
              </div>

              {status.visible && (
                <div id="formStatus" className={`form-status ${status.type === 'success' ? 'is-success' : 'is-error'}`} role="status" aria-live="polite">
                  <div className="status-title">{status.title}</div>
                  <div className="status-text" dangerouslySetInnerHTML={{ __html: status.message }}></div>
                </div>
              )}

              <button
                type="submit"
                className={`send ${isSubmitting ? 'loading' : ''}`}
                id="submitBtn"
                aria-label="Send message"
                disabled={isSubmitting}
              >
                <span className="btn-text">{isSubmitting ? 'Sending...' : 'Submit'}</span>
                <span className="btn-spinner" aria-hidden="true"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
