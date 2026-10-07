import { contact } from '../data/portfolio'
import { ArrowDownIcon, ArrowUpRightIcon, DownloadIcon, PhoneIcon } from './Icons'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-eyebrow"><span className="status-dot" /> Hyderabad, India · Open to senior full-stack roles</p>
        <h1 id="hero-title" aria-label="Lakshmi Bhargavi">Lakshmi<br />Bhargavi</h1>
        <p className="hero-title">Full Stack Engineer <span>/</span> React, Node.js, PostgreSQL, AI Applications</p>
        <p className="hero-summary">
          I build secure, reliable products across frontend, backend, data, cloud, and third-party integrations. My production experience includes retail, payments, self-service, and operations—but the engineering approach transfers across product domains.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">Explore my work <ArrowDownIcon /></a>
          <a className="button button-secondary" href={contact.resume} download>Download Resume <DownloadIcon /></a>
        </div>
        <div className="hero-links" aria-label="Professional profiles">
          <a href={contact.phoneHref}><PhoneIcon /> Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`}>Email <ArrowUpRightIcon /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRightIcon /></a>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRightIcon /></a>
        </div>
      </div>

      <div className="hero-system" aria-label="Core engineering skills">
        <div className="system-heading">
          <span>Core engineering stack</span>
          <span className="system-live"><i /> production experience</span>
        </div>
        <div className="system-stack skill-stack">
          <div className="system-layer layer-ui">
            <span className="layer-index">01</span>
            <div><strong>Frontend</strong><small>React · Next.js · TypeScript · MUI</small></div>
            <span className="layer-state">UI</span>
          </div>
          <div className="system-layer layer-api">
            <span className="layer-index">02</span>
            <div><strong>Backend</strong><small>Node.js · Express · REST APIs · FastAPI</small></div>
            <span className="layer-state">API</span>
          </div>
          <div className="system-layer layer-data">
            <span className="layer-index">03</span>
            <div><strong>Data</strong><small>PostgreSQL · Sequelize · Datastore</small></div>
            <span className="layer-state">DATA</span>
          </div>
          <div className="system-layer layer-quality">
            <span className="layer-index">04</span>
            <div><strong>Quality & delivery</strong><small>Testing · Security · GCP · CI/CD</small></div>
            <span className="layer-state">SHIP</span>
          </div>
        </div>
        <a className="system-cta" href="#capabilities">View complete skill set <ArrowDownIcon /></a>
      </div>
    </section>
  )
}
