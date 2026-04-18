import styles from './Article.module.css'

interface MetaItem {
  label: string
  value: string
}

interface ArticleProjectMetaProps {
  items: MetaItem[]
}

export default function ArticleProjectMeta({ items }: ArticleProjectMetaProps) {
  return (
    <div className={styles.container}>
      <dl className={`${styles.projectMeta} reveal`}>
        {items.map(({ label, value }) => (
          <div key={label} className={styles.projectMetaItem}>
            <dt className={styles.projectMetaLabel}>{label}</dt>
            <dd className={styles.projectMetaValue}>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
