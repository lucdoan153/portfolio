export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      paddingTop: 'var(--nav-height)',
    }}>
      <div style={{ maxWidth: 'var(--max-width)', margin: '0 auto', width: '100%' }}>

        <p className="fade-up" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          marginBottom: '20px',
          animationDelay: '0.1s',
        }}>
          COMPUTER SCIENCE STUDENT
        </p>

        <h1 className="fade-up" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 8vw, 88px)',
          lineHeight: 1.05,
          fontWeight: 400,
          color: 'var(--text-primary)',
          marginBottom: '28px',
          animationDelay: '0.2s',
        }}>
          Luc<br />Doan.
        </h1>

        <p className="fade-up" style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          maxWidth: '480px',
          lineHeight: 1.7,
          marginBottom: '40px',
          animationDelay: '0.35s',
          fontWeight: 300,
        }}>
          I love turning ideas into polished, functional products and am always looking for new problems worth solving. 
          Currently studying CS at <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Louisiana State University</strong>, 
          interested in <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>App Development</strong>, <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>UX/Product Design</strong> and <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Technical Marketing</strong>.
        </p>

        <div className="fade-up" style={{
          display: 'flex', gap: '12px', flexWrap: 'wrap',
          animationDelay: '0.5s',
        }}>
          <a href="#projects" style={{
            padding: '12px 24px',
            background: 'var(--text-primary)',
            color: 'var(--bg)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            borderRadius: 'var(--radius)',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = 'var(--accent)'}
            onMouseLeave={e => e.target.style.background = 'var(--text-primary)'}
          >
            View Projects
          </a>
          <a href="mailto:lucdoan153@gmail.com" style={{
            padding: '12px 24px',
            background: 'transparent',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.target.style.borderColor = 'var(--text-primary)'}
            onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com/in/luc-doan-bb7a27243"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              background: 'transparent',
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.target.style.borderColor = 'var(--text-primary)'; e.target.style.color = 'var(--text-primary)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-secondary)' }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
