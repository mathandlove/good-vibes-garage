import styles from './Article.module.css'

interface ArticlePullQuoteProps {
  children: string
  attribution?: string  // optional — e.g. "Elliott Hedman, 2023"
}

export default function ArticlePullQuote({ children, attribution }: ArticlePullQuoteProps) {
  return (
    <div className={`${styles.pullQuoteWrap} reveal`}>
      <blockquote className={styles.pullQuote}>
        <span className={styles.pullQuoteMark}>"</span>
        {children}
        <span className={styles.pullQuoteMark}>"</span>
      </blockquote>
      {attribution && (
        <p className={styles.pullQuoteAttribution}>— {attribution}</p>
      )}
    </div>
  )
}
