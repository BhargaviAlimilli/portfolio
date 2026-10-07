import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  fill: 'none',
  viewBox: '0 0 24 24',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowUpRightIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>
}

export function ArrowDownIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 4v15m-6-6 6 6 6-6" /></svg>
}

export function DownloadIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 3v12m-5-5 5 5 5-5M5 20h14" /></svg>
}

export function SunIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>
}

export function MoonIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" /></svg>
}

export function MenuIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
}

export function CloseIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>
}

export function MailIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
}

export function PhoneIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
}

export function CodeIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-9-4 12" /></svg>
}

export function ServerIcon(props: IconProps) {
  return <svg {...base} {...props}><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6" /></svg>
}

export function ShieldIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>
}

export function CloudIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M17.5 19H6a4 4 0 0 1-.5-8A7 7 0 0 1 19 9a5 5 0 0 1-1.5 10Z" /><path d="m9 15 3-3 3 3m-3-3v7" /></svg>
}

export function QualityIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m12 2 2.2 4.5 5 .7-3.6 3.5.8 5-4.4-2.3-4.4 2.3.8-5-3.6-3.5 5-.7L12 2Z" /><path d="m9.5 10.5 1.6 1.6 3.4-3.4" /></svg>
}

export function SparkIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z" /></svg>
}

export function CartIcon(props: IconProps) {
  return <svg {...base} {...props}><circle cx="9" cy="20" r="1" /><circle cx="19" cy="20" r="1" /><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" /></svg>
}

export function InventoryIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Zm8 4v10" /></svg>
}

export function StoreIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M3 10h18L19 4H5l-2 6Zm1 0v10h16V10M8 20v-6h8v6" /><path d="M3 10a3 3 0 0 0 5 2 3 3 0 0 0 4 0 3 3 0 0 0 4 0 3 3 0 0 0 5-2" /></svg>
}

export function LocationIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
}

export function GithubIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 3 5.4 5.4 0 0 0 19.1-.9S17.9-1.3 15 1a14 14 0 0 0-6 0C6.1-1.3 4.9-.9 4.9-.9A5.4 5.4 0 0 0 4.7 3a5.8 5.8 0 0 0-1.5 4.1c0 5.8 3.5 7 6.8 7.4a4.8 4.8 0 0 0-1 3.5v4M9 19c-3 .9-3-1.5-4.2-2" /></svg>
}

export function LinkedInIcon(props: IconProps) {
  return <svg {...base} {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
}
