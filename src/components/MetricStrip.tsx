import { metrics } from '../data/portfolio'

export function MetricStrip() {
  return (
    <section className="metric-strip" aria-label="Professional highlights">
      {metrics.map((metric) => (
        <div className="metric" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  )
}
