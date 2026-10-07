import { useEffect, useState } from 'react'
import { contact, navItems } from '../data/portfolio'
import { CloseIcon, DownloadIcon, MenuIcon, MoonIcon, PhoneIcon, SunIcon } from './Icons'

type HeaderProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Lakshmi Bhargavi, home">
        <span className="brand-mark" aria-hidden="true">LB</span>
        <span className="brand-name">Lakshmi Bhargavi</span>
      </a>

      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? 'is-active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="mobile-resume-link" href={contact.resume} download>
          Resume <DownloadIcon />
        </a>
        <a className="mobile-phone-link" href={contact.phoneHref}>
          Call {contact.phone} <PhoneIcon />
        </a>
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        <a className="header-contact" href={contact.phoneHref} aria-label={`Call Lakshmi at ${contact.phone}`}>
          <PhoneIcon /> {contact.phone}
        </a>
        <a className="header-resume" href={contact.resume} download>
          Resume <DownloadIcon />
        </a>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}
