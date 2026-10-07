import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MetricStrip } from './components/MetricStrip'
import { ProjectCard } from './components/ProjectCard'
import { SectionIntro } from './components/SectionIntro'
import { contact, projects } from './data/portfolio'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem('portfolio-theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header theme={theme} onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} />
      <main id="main-content">
        <div className="hero-shell">
          <Hero />
          <MetricStrip />
        </div>

        <About />
        <Capabilities />

        <section className="section work-section" id="work">
          <div className="section-shell">
            <SectionIntro
              index="03"
              eyebrow="Selected work"
              title="Systems where product experience meets operational correctness."
              description="Four case studies demonstrating transferable product engineering across customer experiences, operations, data integrity, integrations, and an applied AI project."
            />
            <div className="project-list">
              {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
            </div>
          </div>
        </section>

        <Experience />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>© 2026 Lakshmi Bhargavi</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </footer>
    </>
  )
}

export default App
