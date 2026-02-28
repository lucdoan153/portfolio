import Section from './Section'

const education = [
  {
    school: 'Louisiana State University',
    logo: '/portfolio/logos/louisiana_state_university_logo.jpg',
    degree: 'Pursuing a B.S. Computer Science | Software Engineering',
    period: 'Aug 2023 – Present',
    gpa: null,
    details: [
      'Relevant Coursework: Data Structures, Algorithms, Operating Systems, Databases, Data Structures, Software Systems, Computer Organization & Design',
    ],
  },
  {
    school: 'Strake Jesuit College Preparatory',
    logo: '/portfolio/logos/strake_jesuit_college_preparatory_logo.jpg',
    degree: 'High School Diploma',
    period: 'Aug 2019 – May 2023',
    gpa: null,
    details: [
      'Proud Alumni of Strake Jesuit, where I developed a strong foundation in critical thinking and leadership.',
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
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
        <img
          src={edu.logo}
          alt={edu.school}
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
