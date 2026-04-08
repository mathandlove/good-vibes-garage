import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'The Show', href: '#series' },
    { label: 'Work', href: '#work' },
    { label: 'SXSW Talk', href: '#talk' },
    { label: 'About', href: '#about' },
    { label: 'Say Hi', href: '#contact', cta: true },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <span className={styles.brandName}>Good Vibes Garage</span>
          <span className={styles.brandSub}>Elliott Hedman</span>
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={l.cta ? styles.ctaLink : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
