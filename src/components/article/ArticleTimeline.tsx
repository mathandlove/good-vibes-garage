import { ReactNode } from 'react'
import styles from './Article.module.css'

interface TimelineItemProps {
  step?: string    // e.g. "01" or "Phase 1" — optional label
  heading: string
  children: ReactNode
  continueLine?: boolean  // force the connecting line to show even when last-child
}

export function ArticleTimelineItem({ step, heading, children, continueLine }: TimelineItemProps) {
  return (
    <div className={`${styles.timelineItem} reveal`}>
      <div className={styles.timelineLeft}>
        {step && <span className={styles.timelineStep}>{step}</span>}
        <div className={`${styles.timelineLine} ${continueLine ? styles.timelineLineContinue : ''}`} />
      </div>
      <div className={styles.timelineContent}>
        <h3 className={styles.timelineHeading}>{heading}</h3>
        <div className={styles.timelineBody}>{children}</div>
      </div>
    </div>
  )
}

interface ArticleTimelineProps {
  children: ReactNode
}

export function ArticleTimeline({ children }: ArticleTimelineProps) {
  return (
    <div className={styles.timeline}>
      {children}
    </div>
  )
}
