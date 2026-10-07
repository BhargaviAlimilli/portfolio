import { contact } from '../data/portfolio'
import { ArrowUpRightIcon, GithubIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from './Icons'

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-shell">
        <div className="contact-heading reveal">
          <div className="section-kicker"><span>05</span>Contact</div>
          <h2>Ready for the next engineering challenge.</h2>
          <p>I’m exploring full-time Full Stack Engineer and product engineering roles across industries.</p>
        </div>

        <div className="contact-panel reveal" aria-label="Contact Lakshmi Bhargavi">
          <p className="contact-eyebrow">For recruiters &amp; hiring teams</p>
          <h3>Let’s discuss the role, product, and engineering problems your team is solving.</h3>
          <a className="contact-primary" href={`mailto:${contact.email}`}>
            <span><MailIcon /> {contact.email}</span><ArrowUpRightIcon />
          </a>
          <a className="contact-primary contact-phone" href={contact.phoneHref}>
            <span><PhoneIcon /> {contact.phone}</span><span>Call now</span>
          </a>
          <div className="contact-links">
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /><span>LinkedIn</span><ArrowUpRightIcon /></a>
            <a href={contact.github} target="_blank" rel="noreferrer"><GithubIcon /><span>GitHub</span><ArrowUpRightIcon /></a>
            <div><LocationIcon /><span>{contact.location}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
