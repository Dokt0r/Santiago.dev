
import { useState } from 'react'
import logoSantiago from './assets/Logo_Santiago.svg?raw'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`site ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Santiago.dev, inicio">
            <span className="header_logo" aria-label="Santiago" role="img" dangerouslySetInnerHTML={{ __html: logoSantiago }} />
            <span className="brand-copy">
              <strong>santiago<span>.dev</span></strong>
              <small>software engineer</small>
            </span>
          </a>
          <nav className="navigation" aria-label="Navegacion principal">
            <a href="#proyectos">Proyectos</a>
            <a href="#sobre-mi">Sobre mi</a>
            <a href="#contacto">Contacto</a>
          </nav>
          <button className="theme-toggle" type="button" aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} onClick={() => setIsDark(!isDark)}>
            <span aria-hidden="true">{isDark ? '☼' : '◐'}</span>
          </button>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="code-field" aria-hidden="true">
            <div className="code-line code-line-a">const <i>clarity</i> = build(<b>intent</b>)</div>
            <div className="code-line code-line-b">return experience.<i>remembered</i>()</div>
            <div className="code-line code-line-c">{`{ design: true, detail: 100 }`}</div>
            <div className="code-line code-line-d">&lt;strong&gt;ideas claras&lt;/strong&gt;</div>
            <div className="code-line code-line-e">function <i>makeSimple</i>(complexity) {'{'}</div>
            <div className="code-line code-line-f">  complexity.<b>reduce</b>(until: clarity)</div>
          </div>
          <div className="hero-content">
            <p className="eyebrow">Diseno & desarrollo digital <span>●</span> Santiago, CL</p>
            <h1>Ideas claras.<br /><em>Experiencias</em> que quedan.</h1>
            <div className="hero-footer">
              <p className="intro">Creo productos digitales con intencion, desde la primera conversacion hasta el ultimo detalle de codigo.</p>
              <a className="arrow-link" href="#proyectos">Ver proyectos <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </section>

        <section className="work-section" id="proyectos">
          <div className="section-heading"><p className="eyebrow">01 / Seleccion reciente</p><span>2022—24</span></div>
          <article className="project-card">
            <div className="project-art"><div className="art-mark">S<span>/</span>D</div><p>studio / 01</p></div>
            <div className="project-info"><p className="project-type">Identidad · Producto digital</p><h2>Una presencia digital<br />con voz propia.</h2><a className="text-link" href="#contacto">Explorar caso <span aria-hidden="true">↗</span></a></div>
          </article>
        </section>

        <section className="about-section" id="sobre-mi">
          <p className="eyebrow">02 / En pocas palabras</p>
          <p className="about-copy">Trabajo en la interseccion entre estrategia, diseno y tecnologia para convertir lo complejo en algo que se siente simple.</p>
        </section>
      </main>

      <footer className="footer" id="contacto"><span>Disponible para nuevos proyectos</span><a href="mailto:hola@santiago.dev">hola@santiago.dev <span aria-hidden="true">↗</span></a></footer>
    </div>
  )
}

export default App
