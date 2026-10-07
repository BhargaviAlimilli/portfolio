import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('portfolio', () => {
  beforeEach(() => window.localStorage.clear())

  it('presents the authoritative title, metrics, and projects', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: /lakshmi bhargavi/i })).toBeInTheDocument()
    expect(screen.getByText(/Full Stack Engineer/, { selector: '.hero-title' })).toBeInTheDocument()
    expect(screen.getByText('50')).toBeInTheDocument()
    expect(screen.getByText('~1,000')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'RetailOps AI' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Self-Checkout POS' })).toBeInTheDocument()
  })

  it('links to the resume and professional profiles', () => {
    render(<App />)

    const resumeLinks = screen.getAllByRole('link', { name: /resume|résumé/i })
    expect(resumeLinks.some((link) => link.getAttribute('href') === '/lakshmi-bhargavi-resume.pdf')).toBe(true)
    expect(screen.getAllByRole('link', { name: /linkedin/i })[0]).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    expect(screen.getAllByRole('link', { name: /github/i })[0]).toHaveAttribute('href', expect.stringContaining('github.com'))
  })

  it('uses a recruiter-first structure with prominent skills and contact paths', () => {
    render(<App />)

    const about = document.querySelector('#about')
    const skills = document.querySelector('#capabilities')
    const work = document.querySelector('#work')

    expect(about).toBeInTheDocument()
    expect(skills).toBeInTheDocument()
    expect(work).toBeInTheDocument()
    if (!about || !skills || !work) throw new Error('Expected recruiter-first portfolio sections')
    expect(about.compareDocumentPosition(skills) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(skills.compareDocumentPosition(work) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(screen.getAllByRole('link', { name: /contact|email/i }).some((link) => link.getAttribute('href')?.startsWith('mailto:'))).toBe(true)
    expect(screen.getAllByRole('link', { name: /call|63053 63872/i }).some((link) => link.getAttribute('href') === 'tel:+916305363872')).toBe(true)
    expect(screen.queryByRole('heading', { name: /ai application engineering/i })).not.toBeInTheDocument()
  })

  it('keeps engineering case studies behind a deliberate project-details click', () => {
    render(<App />)

    const details = document.querySelector<HTMLDetailsElement>('#helius-pos .project-details')
    if (!details) throw new Error('Expected project details interaction')
    expect(details.open).toBe(false)

    fireEvent.click(screen.getAllByText('View project details')[0])
    expect(details.open).toBe(true)
  })

  it('persists theme changes', () => {
    render(<App />)

    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark theme' }))
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    expect(window.localStorage.getItem('portfolio-theme')).toBe('dark')
  })
})
