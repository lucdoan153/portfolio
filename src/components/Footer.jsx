const LAST_UPDATED = 'February 2026'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '32px 24px',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.04em',
        }}>
          © {year} Luc Doan
        </p>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--text-muted)',
          letterSpacing: '0.04em',
        }}>
          Last updated: {LAST_UPDATED}
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/lucdoan153' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/luc-doan-bb7a27243' },
            { label: 'Email', href: 'mailto:lucdoan153@gmail.com' },
          ].map(link => (
            <a key={link.label} href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
