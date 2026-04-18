import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import styles from './EmpowerPlayPage.module.css'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/lego-reading/prototypes'

// All 30 image slots — ext varies per file
const IMAGE_EXT: Record<number, string> = {
  1: 'jpg', 2: 'webp', 3: 'webp', 4: 'jpg', 5: 'jpg',
  6: 'webp', 7: 'jpg', 8: 'jpg', 9: 'webp', 10: 'webp',
  11: 'jpg', 12: 'jpg', 13: 'jpg', 14: 'jpg', 15: 'jpg',
  16: 'jpg', 17: 'webp', 18: 'webp', 20: 'webp', 21: 'webp',
  22: 'webp', 23: 'webp', 24: 'webp', 25: 'jpg', 26: 'jpg',
  27: 'jpg', 28: 'webp', 29: 'webp', 30: 'webp',
}

// PDFs that exist
const PDF_EXISTS = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14,
  15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
])

const prototypes = Object.entries(IMAGE_EXT)
  .map(([n]) => Number(n))
  .sort((a, b) => a - b)

export default function EmpowerPlayPage() {
  return (
    <>
      <Helmet>
        <title>30+ Prototype Iterations — LEGO Reading Research | Elliott Hedman</title>
        <meta name="description" content="Every prototype from a year-long reading study with Denver Public Schools. 30+ iterations, fully printed and tested with 2nd–4th grade struggling readers." />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="30+ Prototype Iterations — LEGO Reading Research" />
        <meta property="og:description" content="Every prototype from a year-long reading study with Denver Public Schools." />
        <meta property="og:url" content={CANONICAL_URL} />
      </Helmet>

      <Nav />

      <main className={styles.main}>
        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.breadcrumb}>
              <Link to="/writing/lego-reading" className={styles.breadcrumbLink}>
                ← Reinventing the Book with the LEGO Group
              </Link>
            </div>
            <h1 className={styles.title}>All Prototype Iterations</h1>
            <p className={styles.subtitle}>
              Every book we built, printed, and tested with struggling readers over one year.
              Click any cover to download the full PDF.
            </p>
            <div className={styles.metaRow}>
              <span className={styles.metaPill}>{prototypes.length} prototypes</span>
              <span className={styles.metaDot}>·</span>
              <span className={styles.metaText}>Denver Public Schools · 2nd–4th grade</span>
            </div>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {prototypes.map((n) => {
              const hasPdf = PDF_EXISTS.has(n)
              const img = `/empower-play/images/book${n}.${IMAGE_EXT[n]}`
              const pdf = `/empower-play/pdfs/book${n}.pdf`
              const label = `Prototype ${String(n).padStart(2, '0')}`

              return (
                <div key={n} className={styles.card}>
                  {hasPdf ? (
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      aria-label={`Download ${label}`}
                    >
                      <div className={styles.cardImageWrap}>
                        <img
                          src={img}
                          alt={label}
                          className={styles.cardImage}
                          loading="lazy"
                        />
                        <div className={styles.cardOverlay}>
                          <span className={styles.downloadLabel}>Download PDF</span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className={styles.cardLink}>
                      <div className={styles.cardImageWrap}>
                        <img
                          src={img}
                          alt={label}
                          className={styles.cardImage}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                  <div className={styles.cardMeta}>
                    <span className={styles.cardNumber}>{label}</span>
                    {!hasPdf && <span className={styles.noPdf}>No PDF</span>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div className={styles.footerCta}>
          <p className={styles.footerCtaText}>
            Want to understand why we made these?
          </p>
          <Link to="/writing/lego-reading" className={styles.footerCtaLink}>
            Read the full case study →
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}
