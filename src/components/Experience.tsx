import { experience } from '../data/portfolio'
import { SectionIntro } from './SectionIntro'

export function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="section-shell">
        <SectionIntro
          index="04"
          eyebrow="Experience"
          title="One employer. Multiple production systems."
          description="Full-stack responsibility grew across customer-facing checkout, inventory operations, integrations, payments, and cloud delivery."
        />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item reveal" key={item.company}>
              <div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
              <div className="timeline-main">
                <div className="timeline-heading">
                  <div><h3>{item.role}</h3><p>{item.company}</p></div>
                  <time>{item.dates}</time>
                </div>
                <p className="timeline-description">{item.description}</p>
                {item.engagements.length > 0 && (
                  <ul className="engagement-list" aria-label="Client engagements">
                    {item.engagements.map((engagement) => <li key={engagement}>{engagement}</li>)}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
