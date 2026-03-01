import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Work', href: '#work' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      height: 'var(--nav-height)',
      zIndex: 100,
      background: scrolled ? 'rgba(247,244,239,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        padding: '0 24px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo / Name */}
        <a href="#" style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
        }}>
          Luc.Doan
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--text-secondary)',
              fontWeight: 400,
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/lucdoan153"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 500,
              color: 'var(--bg)',
              background: 'var(--text-primary)',
              padding: '6px 14px',
              borderRadius: 'var(--radius)',
              transition: 'background 0.2s',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => e.target.style.background = 'var(--accent)'}
            onMouseLeave={e => e.target.style.background = 'var(--text-primary)'}
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px',
              background: 'var(--text-primary)',
              transition: 'all 0.3s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                : 'scaleX(0)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div style={{
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          padding: '16px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {navLinks.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '16px', color: 'var(--text-primary)' }}>
              {link.label}
            </a>
          ))}
          <a href="https://github.com/lucdoan153" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
            GitHub ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 600px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
