import Section from './Section'

const education = [
  {
    school: 'Your University',
    degree: 'B.S. Computer Science',
    period: 'Aug 2022 – May 2026',
    gpa: '3.8 / 4.0',
    details: [
      'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Databases, Computer Networks',
      'Dean\'s List: Fall 2022, Spring 2023, Fall 2023',
    ],
  },
]

export default function Education() {
  return (
    <Section id="education" label="03" title="Education">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {education.map((edu, i) => (
          <EducationItem key={i} edu={edu} />
        ))}
      </div>
    </Section>
  )
}

function EducationItem({ edu }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '180px 1fr',
      gap: '24px 40px',
    }}>
      <div>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          lineHeight: 1.8,
        }}>
          {edu.period}
        </p>
        {edu.gpa && (
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-muted)',
          }}>
            GPA: {edu.gpa}
          </p>
        )}
      </div>

      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '2px',
        }}>
          {edu.degree}
        </h3>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--accent)',
          marginBottom: '16px',
        }}>
          {edu.school}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {edu.details.map((d, i) => (
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
              {d}
            </li>
          ))}
        </ul>
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
