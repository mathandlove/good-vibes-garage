import { Link } from 'react-router-dom'
import styles from './Article.module.css'

interface ArticleHeaderProps {
  type: string        // e.g. "Essay", "Interview", "Report"
  date: string        // e.g. "April 8, 2025"
  author: string      // e.g. "Elliott Hedman"
  readTime: string    // e.g. "7 min read"
  title?: string      // only for articles without a hero image
  subtitle?: string   // only for articles without a hero image
  backLabel?: string  // defaults to "← Writing"
  backTo?: string     // defaults to "/writing"
}

export default function ArticleHeader({
  type,
  date,
  author,
  readTime,
  title,
  subtitle,
  backLabel = '← Writing',
  backTo = '/writing',
}: ArticleHeaderProps) {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} reveal`} data-type={type}>
        <div className={styles.breadcrumb}>
          <Link to={backTo} className={styles.breadcrumbLink}>{backLabel}</Link>
        </div>
        <div className={styles.meta}>
          <span className={styles.typeTag}>{type}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.date}>{date}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.author}>{author}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.readTime}>{readTime}</span>
        </div>
        {title && <h1 className={styles.title}>{title}</h1>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>
    </div>
  )
}
