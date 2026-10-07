import { contact } from '../data/portfolio'
import { ArrowUpRightIcon, MailIcon, PhoneIcon } from './Icons'
import { SectionIntro } from './SectionIntro'

const profileStrengths = [
  {
    label: 'End-to-end ownership',
    text: 'From responsive interfaces and API design to data integrity, security, testing, deployment, and production support.',
  },
  {
    label: 'Domain-flexible engineering',
    text: 'My experience is grounded in complex retail and payments systems, while the architecture and problem-solving skills transfer across industries.',
  },
  {
    label: 'Production judgment',
    text: 'I design for failure states, concurrency, secure boundaries, maintainability, and the people operating the product after launch.',
  },
]

export function About() {
  return (
    <section className="section about-early" id="about">
      <div className="section-shell">
        <SectionIntro
          index="01"
          eyebrow="Professional profile"
          title="Full-stack ownership beyond a single domain."
          description="I’m a product engineer first. Retail and payments are where I have proven that work in production—not the limit of what I can build."
        />

        <div className="profile-layout">
          <div className="profile-narrative reveal">
            <p>
              I’m a Full Stack Engineer with 4+ years of experience building live software across React, TypeScript, Node.js, PostgreSQL, cloud infrastructure, and secure third-party integrations.
            </p>
            <p>
              I’m comfortable moving across the stack, learning a new business domain, and turning complex requirements into dependable product workflows. I’m looking for full-time roles where I can own meaningful product areas and contribute from architecture through delivery.
            </p>
            <div className="profile-contact-group">
              <a className="profile-contact" href={`mailto:${contact.email}`}>
                <MailIcon /> Email about a role <ArrowUpRightIcon />
              </a>
              <a className="profile-phone" href={contact.phoneHref}>
                <PhoneIcon /> {contact.phone}
              </a>
            </div>
          </div>

          <div className="profile-strengths">
            {profileStrengths.map((strength, index) => (
              <article className="profile-strength reveal" key={strength.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{strength.label}</h3><p>{strength.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
