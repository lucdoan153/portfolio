import Section from './Section'

const skills = {
  Languages: ['JavaScript', 'Python', 'C++', 'Linux', 'Powershell','HTML', 'Ocaml', 'Ruby'],
  Frameworks: ['React', 'Flutter', 'React Native'],
  Tools: ['Git', 'Firebase', 'VS Code', 'Figma'],
}

export default function Skills() {
  return (
    <Section id="skills" label="04" title="Technical Skills">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{
            display: 'grid',
            gridTemplateColumns: '120px 1fr',
            gap: '16px',
            alignItems: 'start',
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-muted)',
              paddingTop: '4px',
            }}>
              {category}
            </span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {items.map(skill => (
                <span key={skill} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--accent)',
                  background: 'var(--accent-light)',
                  padding: '4px 12px',
                  borderRadius: '2px',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}