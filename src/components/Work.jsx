import Section from './Section'

const workExperience = [
  {
    company: 'Studio RED Architects',
    logo: '/portfolio/logos/studio_red_architects_logo.jpg',
    role: 'IT Administrator Intern',
    period: 'June 2022 – Aug 2024',
    location: 'Houston, Texas',
    bullets: [
      'I created multiple PowerShell scripts to automate routine IT tasks, which reduced manual work and improved efficiency across the company.',
      'Through this intership, I gained hands-on experience with various IT systems and tools, including VMware for virtualization, Group Policy Management for network administration, and Linux for server management.',
      'This internship not only enhanced my technical skills but also deepened my understanding of IT infrastructure and its critical role in supporting business operations.',
    ],
    tags: ['Linux', 'Powershell', 'VMware', 'Group Policy Management'],
  },
]

export default function Work() {
  return (
    <Section id="work" label="02" title="Work Experience">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {workExperience.map((job, i) => (
          <WorkItem key={i} job={job} />
        ))}
      </div>
    </Section>
  )
}

function WorkItem({ job }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: '24px 40px',
    }}>
      {/* Left: metadata */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
        }}>
          {job.period}
        </p>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
        }}>
          {job.location}
        </p>
        <img
        src={job.logo}
        alt={job.company}
        style={{
          width: '120px',
          height: '120px',
          objectFit: 'contain',
          marginTop: '8px',
          marginLeft: '8px',
          borderRadius: '8px',
          border: '1px solid var(--border)',
          padding: '8px',
          background: '#fff',
          display: 'block',
        }}
      />
      </div>

      {/* Right: content */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '2px',
        }}>
          {job.role}
        </h3>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--accent)',
          marginBottom: '16px',
        }}>
          {job.company}
        </p>

        <ul style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '16px',
        }}>
          {job.bullets.map((b, i) => (
            <li key={i} style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              paddingLeft: '16px',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute', left: 0, top: '0.55em',
                width: '5px', height: '1px',
                background: 'var(--text-muted)',
                display: 'block',
              }} />
              {b}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {job.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--accent)',
              background: 'var(--accent-light)',
              padding: '3px 10px',
              borderRadius: '2px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 180px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
