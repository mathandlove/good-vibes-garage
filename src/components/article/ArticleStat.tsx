import { ReactNode } from 'react'
import styles from './Article.module.css'

// Single stat
interface ArticleStatProps {
  value: string   // e.g. "30+"
  label: string   // e.g. "prototypes tested"
  note?: string   // e.g. "over one year"
}

export function ArticleStat({ value, label, note }: ArticleStatProps) {
  return (
    <div className={styles.stat}>
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
      {note && <span className={styles.statNote}>{note}</span>}
    </div>
  )
}

// Row of stats
interface ArticleStatRowProps {
  children: ReactNode
}

export function ArticleStatRow({ children }: ArticleStatRowProps) {
  return (
    <div className={`${styles.statRow} reveal`}>
      {children}
    </div>
  )
}
