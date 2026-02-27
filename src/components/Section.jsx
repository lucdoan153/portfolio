export default function Section({ id, label, title, children }) {
  return (
    <section id={id} style={{
      padding: '96px 24px',
      maxWidth: 'var(--max-width)',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'flex', alignItems: 'baseline', gap: '16px',
        marginBottom: '48px',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '20px',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          minWidth: '60px',
        }}>
          {label}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: 400,
          color: 'var(--text-primary)',
        }}>
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
