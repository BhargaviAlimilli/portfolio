import type { Project } from '../data/portfolio'
import { ArrowUpRightIcon, CartIcon, InventoryIcon, SparkIcon, StoreIcon } from './Icons'

function ArchitectureFlow({ nodes }: { nodes: string[] }) {
  return (
    <div className="architecture-flow" aria-label={`Architecture flow: ${nodes.join(' to ')}`}>
      {nodes.map((node, index) => (
        <div className="architecture-step" key={node}>
          <span>{node}</span>
          {index < nodes.length - 1 && <i aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}

function ProjectIcon({ id }: { id: string }) {
  if (id === 'helius-pos') return <CartIcon />
  if (id === 'helius-ims') return <InventoryIcon />
  if (id === 'aisle-24') return <StoreIcon />
  return <SparkIcon />
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-${project.variant} reveal`} id={project.id}>
      <div className="project-topline">
        <span>{project.number}</span>
        <span>{project.eyebrow}</span>
        <span>{project.dates}</span>
      </div>

      <div className="project-overview">
        <div>
          <div className="project-title-row">
            <span className="project-icon"><ProjectIcon id={project.id} /></span>
            <h3>{project.title}</h3>
          </div>
          <p>{project.summary}</p>
          <ul className="project-preview-tags" aria-label={`${project.title} key technologies`}>
            {project.stack.slice(0, 4).map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        {project.metric && (
          <div className="project-metric">
            <strong>{project.metric.value}</strong>
            <span>{project.metric.label}</span>
          </div>
        )}
      </div>

      <details className="project-details">
        <summary>
          <span className="project-summary-label">
            <span className="summary-closed">View project details</span>
            <span className="summary-open">Close project details</span>
            <small>Role · architecture · challenges · contributions</small>
          </span>
          <span className="project-summary-action" aria-hidden="true">Case study <ArrowUpRightIcon /></span>
        </summary>
        <div className="project-details-body">
          <div className="project-architecture">
            <span>System flow</span>
            <ArchitectureFlow nodes={project.architecture} />
          </div>
          <div className="project-detail-grid">
            <div>
              <h4>My role</h4>
              <p>{project.role}</p>
            </div>
            <div>
              <h4>Engineering challenge</h4>
              <p>{project.challenge}</p>
            </div>
            <div className="contribution-list">
              <h4>Selected contributions</h4>
              <ul>
                {project.contributions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h4>Technology</h4>
              <ul className="tag-list" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {project.ownershipNote && <p className="ownership-note"><strong>Ownership note:</strong> {project.ownershipNote}</p>}
            </div>
          </div>
        </div>
      </details>
    </article>
  )
}
