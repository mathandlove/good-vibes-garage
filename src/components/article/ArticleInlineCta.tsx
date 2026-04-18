import { Link } from 'react-router-dom'
import styles from './Article.module.css'

interface ArticleInlineCtaProps {
  label: string       // e.g. "See all 30 prototypes"
  href: string
  note?: string       // optional preceding sentence, e.g. "We documented every iteration."
  external?: boolean
}

export default function ArticleInlineCta({
  label,
  href,
  note,
  external = false,
}: ArticleInlineCtaProps) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <div className={`${styles.inlineCta} reveal`}>
      {note && <span className={styles.inlineCtaNote}>{note} </span>}
      {external ? (
        <a href={href} className={styles.inlineCtaLink} target="_blank" rel="noopener noreferrer">
          {label} →
        </a>
      ) : (
        <Link to={href} className={styles.inlineCtaLink}>
          {label} →
        </Link>
      )}
    </div>
  )
}
