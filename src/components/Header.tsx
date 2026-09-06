import React from 'react'
import logoSantiago from '../assets/Logo_Santiago.svg?raw'
import './Header.css'

type Props = {
  isDark: boolean
  setIsDark: (v: boolean) => void
}

export default function Header({ isDark, setIsDark }: Props) {
  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="Santiago.dev, inicio">
          <span className="header_logo" aria-label="Santiago" role="img" dangerouslySetInnerHTML={{ __html: logoSantiago }} />
          <span className="brand-copy">
            <strong>Santiago<span>.dev</span></strong>
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
  )
}
