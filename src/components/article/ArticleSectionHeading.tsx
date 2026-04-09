import styles from './Article.module.css'

interface ArticleSectionHeadingProps {
  children: string
}

export default function ArticleSectionHeading({ children }: ArticleSectionHeadingProps) {
  return (
    <div className={styles.sectionHeadingRow}>
      <h2 className={`${styles.sectionHeading} reveal`}>{children}</h2>
    </div>
  )
}
