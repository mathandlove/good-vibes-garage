import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <span className={styles.brandName}>Good Vibes Garage</span>
          <span className={styles.brandSub}>Elliott Hedman</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <li>
            <Link to="/writing" onClick={() => setMenuOpen(false)}>
              Writing
            </Link>
          </li>
          <li>
            <a
              href="mailto:hedman@buildempathy.com"
              className={styles.ctaLink}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
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
