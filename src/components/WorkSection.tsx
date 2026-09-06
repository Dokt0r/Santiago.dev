import React from 'react'
import './WorkSection.css'

export default function WorkSection() {
  return (
    <section className="work-section" id="proyectos">
      <div className="section-heading"><p className="eyebrow">01 / Seleccion reciente</p><span>2022—24</span></div>
      <article className="project-card">
        <div className="project-art"><div className="art-mark">S<span>/</span>D</div><p>studio / 01</p></div>
        <div className="project-info"><p className="project-type">Identidad · Producto digital</p><h2>Una presencia digital<br />con voz propia.</h2><a className="text-link" href="#contacto">Explorar caso <span aria-hidden="true">↗</span></a></div>
      </article>
    </section>
  )
}
