import './Hero.css'

export default function Hero() {
  return (
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
        <p className="eyebrow">Design & digital development <span>●</span> Santiago, CL</p>
        <h1>Ideas claras.<br /><em>Experiencias</em> que quedan.</h1>
        <div className="hero-footer">
          <p className="intro">Creo productos digitales con intencion, desde la primera conversacion hasta el ultimo detalle de codigo.</p>
          <a className="arrow-link" href="#proyectos">Ver proyectos <span aria-hidden="true">↘</span></a>
        </div>
      </div>
    </section>
  )
}
