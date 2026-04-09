import styles from './Article.module.css'

interface ArticleClosingProps {
  children: string
}

export default function ArticleClosing({ children }: ArticleClosingProps) {
  return (
    <div className={`${styles.closingWrap} reveal`}>
      <p className={styles.closing}>{children}</p>
    </div>
  )
}
