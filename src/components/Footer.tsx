import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <span className="wip">Always WIP</span>
      <div className="social-links" aria-label="Redes sociales y contacto">
        <a href="mailto:hola@santiago.dev" className="social-link social-email" aria-label="Enviar email">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 5h18v14H3zM3 6l9 7 9-7" />
          </svg>
        </a>
        <a href="https://instagram.com" className="social-link social-instagram" aria-label="Instagram" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" className="icon-fill" />
          </svg>
        </a>
        <a href="https://linkedin.com" className="social-link social-linkedin" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 9v10M5 5v.01M9 19V9m0 4a4 4 0 0 1 8 0v6m0 0v-5" />
          </svg>
        </a>
        <a href="https://github.com" className="social-link social-github" aria-label="GitHub" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 19c-4 1.5-4-2-5.5-2.5M14.5 19v-3.5c0-1 .1-1.5-.5-2 1.8-.2 3.5-.9 3.5-4a3 3 0 0 0-.8-2.2A2.8 2.8 0 0 0 16.6 5S15.9 4.8 14.5 6a9.5 9.5 0 0 0-5 0C8.1 4.8 7.4 5 7.4 5a2.8 2.8 0 0 0-.1 2.3A3 3 0 0 0 6.5 9c0 3.1 1.7 3.8 3.5 4-.5.5-.5 1.1-.5 2V19" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
