export type Project = {
  id: string
  number: string
  eyebrow: string
  title: string
  dates: string
  summary: string
  role: string
  challenge: string
  contributions: string[]
  stack: string[]
  metric?: { value: string; label: string }
  architecture: string[]
  ownershipNote?: string
  variant: 'forest' | 'blue' | 'sand' | 'violet'
}

export const contact = {
  email: 'bhargavi.alimilli@gmail.com',
  phone: '+91 63053 63872',
  phoneHref: 'tel:+916305363872',
  location: 'Hyderabad, India',
  linkedin: 'https://www.linkedin.com/in/lakshmi-bhargavi-97874017a/',
  github: 'https://github.com/BhargaviAlimilli',
  resume: '/lakshmi-bhargavi-resume.pdf',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#capabilities' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
export const metrics = [
  { value: '4+', label: 'Years building production software' },
  { value: '50', label: 'Stores supported by self-checkout' },
  { value: '~1,000', label: 'Transactions per store per day' },
  { value: '6', label: 'Core unattended-retail integrations' },
]

export const projects: Project[] = [
  {
    id: 'helius-pos',
    number: '01',
    eyebrow: 'Helius Retail · Production system',
    title: 'Self-Checkout POS',
    dates: 'Nov 2025 — Oct 2026',
    summary:
      'A bilingual, customer-facing checkout platform for unattended touchscreen kiosks, with backend-authoritative pricing and payment-terminal orchestration.',
    role:
      'Rebuilt the React and TypeScript kiosk around a secure backend, built the Node.js payment flow, and delivered scanning, checkout, receipts, localization, and unattended recovery.',
    challenge:
      'A physically exposed browser had to remain secret-free while asynchronous terminal payments resolved safely through declined, pending, and approved states.',
    contributions: [
      'Removed browser-accessible credentials and client-side pricing in favor of a typed backend-for-frontend boundary.',
      'Engineered adaptive payment polling and bounded, response-aware retries without encouraging repeat payment attempts.',
      'Delivered English/French scanning, checkout, payment outcomes, receipts, and secure kiosk recovery after restarts.',
      'Covered critical frontend and backend behavior with automated tests and documented APIs.',
    ],
    stack: ['React', 'TypeScript', 'MUI', 'Node.js', 'Express', 'Zod', 'Vitest', 'Node test runner'],
    metric: { value: '50 stores', label: 'About 1,000 transactions per store per day' },
    architecture: ['Kiosk UI', 'POS backend', 'Inventory system', 'Payment terminal'],
    ownershipNote:
      'Built the original payment orchestration; collaborated with the tech lead on later durable idempotency and reconciliation hardening.',
    variant: 'forest',
  },
  {
    id: 'helius-ims',
    number: '02',
    eyebrow: 'Helius Retail · Production system',
    title: 'Inventory Management',
    dates: 'Jun 2026 — Oct 2026',
    summary:
      'A multi-store retail platform for catalogue, purchasing, inventory control, promotions, kiosk setup, and sales reporting.',
    role:
      'Delivered security and inventory features across a Next.js frontend and Node.js/PostgreSQL backend, with a focus on authorization, concurrency, and reporting correctness.',
    challenge:
      'Payments, promotions, and stock movements required deterministic behavior under concurrent checkouts while data remained scoped to authorized stores.',
    contributions: [
      'Delivered TOTP/2FA and RBAC across frontend and backend, including encrypted secrets and store-scoped permissions.',
      'Implemented PostgreSQL checkout transactions and row-level locks to preserve promotion, stock, and sales consistency.',
      'Built atomic multi-product adjustments and used database locks to prevent duplicate restock drafts.',
      'Improved reporting and profit-margin statistics while fixing export completeness and timezone correctness.',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Sequelize', 'Firebase', 'Vitest', 'Playwright'],
    architecture: ['IMS admin', 'REST API', 'PostgreSQL', 'POS services'],
    variant: 'blue',
  },
  {
    id: 'aisle-24',
    number: '03',
    eyebrow: 'Aisle 24 · Production system',
    title: 'Cashierless Retail',
    dates: 'Jul 2022 — Apr 2026',
    summary:
      'A live unattended-store platform connecting customer identity, store access, smart retail hardware, payments, and operational tooling.',
    role:
      'Built and extended mobile APIs, payment and identity integrations, smart-retail workflows, merchant onboarding, admin security, and GCP delivery.',
    challenge:
      'The system coordinated money movement and asynchronous callbacks across external processors, identity services, doors, coolers, and lockers.',
    contributions: [
      'Delivered six core integrations: Stripe, ProPay, Yoti, smart doors, coolers, and lockers.',
      'Implemented pre-authorization, Stripe Connect payouts, ProPay split payments, and settlement-aware refunds or voids.',
      'Built merchant onboarding and admin TOTP/2FA for live operational workflows.',
      'Extended App Engine delivery, Bitbucket Pipelines, and Datastore indexes across environments.',
    ],
    stack: ['Node.js', 'Express', 'Cloud Datastore', 'GCP App Engine', 'Stripe', 'ProPay', 'Yoti', 'Socket.IO'],
    metric: { value: '6 integrations', label: 'Identity, access, hardware, and payments' },
    architecture: ['Identity', 'Store access', 'Smart retail', 'Payments'],
    ownershipNote:
      'Contribution language distinguishes new integrations and extensions from legacy RBAC, access-control, and earlier API foundations.',
    variant: 'sand',
  },
  {
    id: 'retailops-ai',
    number: '04',
    eyebrow: 'Independent project · AI-enabled retail operations',
    title: 'RetailOps AI',
    dates: 'Personal project',
    summary:
      'A retail assistant that queries sales and inventory data, retrieves business documents, and explains findings with grounded citations.',
    role:
      'Designed and built the application independently, combining a Next.js interface, FastAPI services, retrieval, validated tools, and stateful human-approved workflows.',
    challenge:
      'Operational answers needed to stay grounded in structured data and source documents, while purchase-order actions retained an explicit human approval boundary.',
    contributions: [
      'Built PostgreSQL sales and inventory tools plus document RAG with cited sources and validated tool calling.',
      'Implemented BM25 and vector retrieval, rank fusion, reranking, and evaluation checks for relevance and groundedness.',
      'Created a LangGraph purchase-order workflow with saved state and human approval.',
      'Exposed inventory tools through MCP and deployed the tested application on GCP.',
    ],
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'LLM APIs', 'LangGraph', 'MCP'],
    architecture: ['Next.js', 'FastAPI', 'LangGraph', 'PostgreSQL + RAG', 'LLM'],
    variant: 'violet',
  },
]

export const experience = [
  {
    company: 'Markovate',
    role: 'Full Stack Developer',
    dates: 'Jul 2022 — Oct 2026',
    description:
      'Owned full-stack delivery across three retail platforms—from React and TypeScript interfaces and Node.js APIs to database design, deployment, automated testing, and production support.',
    engagements: ['Helius Retail · Self-Checkout POS', 'Helius Retail · Inventory Management', 'Aisle 24 · Cashierless Retail'],
  },
  {
    company: 'Marquios Technologies',
    role: 'Test Engineer',
    dates: 'Feb 2020 — Jun 2021',
    description:
      'Tested Android software releases, flashed firmware, reproduced defects, and produced clear reports for troubleshooting and release verification.',
    engagements: [],
  },
]

export const capabilities = [
  {
    label: 'Frontend',
    description: 'Interfaces designed for operators, shoppers, and complex back-office workflows.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'MUI', 'Tailwind CSS', 'React Hook Form', 'i18next'],
  },
  {
    label: 'Backend & Data',
    description: 'APIs and transactional data paths where correctness is part of the feature.',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Sequelize', 'Cloud Datastore', 'OpenAPI'],
  },
  {
    label: 'Security',
    description: 'Explicit trust boundaries for staff tools, public kiosks, and service integrations.',
    items: ['Authentication', 'Authorization', 'JWT', 'RBAC', 'TOTP / 2FA', 'Encryption', 'Secure cookies', 'CSRF'],
  },
  {
    label: 'Cloud & Delivery',
    description: 'Environment-aware delivery and support for live systems.',
    items: ['GCP', 'App Engine', 'Secret Manager', 'Firebase', 'Bitbucket Pipelines', 'CI/CD', 'PM2', 'Nginx'],
  },
  {
    label: 'Quality',
    description: 'Tests and release feedback that protect critical user and payment flows.',
    items: ['Vitest', 'React Testing Library', 'Node test runner', 'Integration testing', 'Playwright', 'Git', 'Agile'],
  },
  {
    label: 'Python & Applied AI',
    description: 'Supporting product capabilities built with Python, grounded data, tools, and approval boundaries.',
    items: ['Python', 'FastAPI', 'LLM APIs', 'RAG', 'Tool calling', 'LangGraph', 'MCP'],
  },
]

