import { capabilities } from '../data/portfolio'
import { CloudIcon, CodeIcon, QualityIcon, ServerIcon, ShieldIcon, SparkIcon } from './Icons'
import { SectionIntro } from './SectionIntro'

const featuredTechnologies = [
  { name: 'React', mark: '⚛', tone: 'cyan' },
  { name: 'TypeScript', mark: 'TS', tone: 'blue' },
  { name: 'Node.js', mark: 'JS', tone: 'green' },
  { name: 'PostgreSQL', mark: 'PG', tone: 'indigo' },
  { name: 'GCP', mark: 'G', tone: 'multi' },
  { name: 'Python', mark: 'PY', tone: 'yellow' },
]

function CapabilityIcon({ label }: { label: string }) {
  if (label === 'Frontend') return <CodeIcon />
  if (label === 'Backend & Data') return <ServerIcon />
  if (label === 'Security') return <ShieldIcon />
  if (label === 'Cloud & Delivery') return <CloudIcon />
  if (label === 'Quality') return <QualityIcon />
  return <SparkIcon />
}

export function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="section-shell">
        <SectionIntro
          index="02"
          eyebrow="Core skills"
          title="A full-stack toolkit built for product delivery."
          description="Frontend, backend, data, cloud, security, testing, and integrations—organized for a fast recruiter scan."
        />

        <div className="skills-spotlight reveal">
          <div className="skills-spotlight-copy">
            <span>Production toolkit</span>
            <strong>From interface<br />to infrastructure.</strong>
            <p>One engineer working across the complete product lifecycle.</p>
          </div>
          <div className="technology-wall" aria-label="Primary technologies">
            {featuredTechnologies.map((technology) => (
              <div className={`technology-logo technology-${technology.tone}`} key={technology.name}>
                <span aria-hidden="true">{technology.mark}</span>
                <strong>{technology.name}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article className="capability-card reveal" key={capability.label}>
              <div className="capability-card-top">
                <span className="capability-icon"><CapabilityIcon label={capability.label} /></span>
                <span className="capability-number">0{index + 1}</span>
              </div>
              <h3>{capability.label}</h3>
              <p>{capability.description}</p>
              <ul>
                {capability.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
