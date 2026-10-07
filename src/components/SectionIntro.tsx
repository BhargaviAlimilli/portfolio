type SectionIntroProps = {
  index: string
  eyebrow: string
  title: string
  description: string
}

export function SectionIntro({ index, eyebrow, title, description }: SectionIntroProps) {
  return (
    <div className="section-intro reveal">
      <div className="section-kicker"><span>{index}</span>{eyebrow}</div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
