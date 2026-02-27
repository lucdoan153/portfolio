import Section from './Section'

const projects = [
  {
    name: 'Project Alpha',
    description: 'A brief description of what this project does, the problem it solves, and why it matters. Keep it to 2–3 sentences.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project-alpha',
    demo: 'https://your-demo-link.com',
    year: '2024',
  },
  {
    name: 'Project Beta',
    description: 'Another cool project. Describe the key technical challenge or interesting aspect of what you built here.',
    tags: ['Python', 'Flask', 'SQLite'],
    github: 'https://github.com/yourusername/project-beta',
    demo: null,
    year: '2024',
  },
  {
    name: 'Project Gamma',
    description: 'A third project showcasing different skills. Mention any notable outcomes — users, stars, or impact.',
    tags: ['C++', 'Algorithms', 'CLI'],
    github: 'https://github.com/yourusername/project-gamma',
    demo: null,
    year: '2023',
  },
]

export default function Projects() {
  return (
    <Section id="projects" label="01" title="Projects">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </Section>
  )
}

function ProjectCard({ project }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      padding: '28px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: '16px',
      alignItems: 'start',
      transition: 'background 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-light)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
    >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontWeight: 400,
            color: 'var(--text-primary)',
          }}>
            {project.name}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
          }}>
            {project.year}
          </span>
        </div>

        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
          marginBottom: '14px',
          maxWidth: '560px',
        }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent)',
              background: 'var(--accent-light)',
              padding: '3px 10px',
              borderRadius: '2px',
              letterSpacing: '0.02em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          transition: 'color 0.2s',
        }}
          onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
        >
          Code ↗
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            color: 'var(--text-secondary)',
            transition: 'color 0.2s',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            Demo ↗
          </a>
        )}
      </div>
    </div>
  )
}
