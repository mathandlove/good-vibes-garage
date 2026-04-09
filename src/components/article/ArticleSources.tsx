import { ReactNode } from 'react'
import styles from './Article.module.css'

interface ArticleSourcesProps {
  children: ReactNode   // one <li> per source, content is the citation string/JSX
}

export default function ArticleSources({ children }: ArticleSourcesProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.sources} reveal`}>
        <h4 className={styles.sourcesHeading}>Sources</h4>
        <ul className={styles.sourcesList}>
          {children}
        </ul>
      </div>
    </div>
  )
}
