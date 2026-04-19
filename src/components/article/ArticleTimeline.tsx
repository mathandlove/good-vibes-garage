import { type ReactNode } from 'react'
import styles from './Article.module.css'

interface TimelineItemProps {
  step?: string    // e.g. "01" or "Phase 1" — optional label
  heading: string
  children: ReactNode
  continueLine?: boolean  // force the connecting line to show even when last-child
  variant?: 'default' | 'split'  // 'split' = text left, image right side-by-side
  splitImage?: ReactNode          // image node to render in the right column (split variant only)
  splitImageLeft?: boolean        // if true, image goes on the left in split layout
}

export function ArticleTimelineItem({ step, heading, children, continueLine, variant = 'default', splitImage, splitImageLeft = false }: TimelineItemProps) {
  return (
    <div className={`${styles.timelineItem} ${variant === 'split' ? styles.timelineItemSplit : ''} reveal`}>
      <div className={styles.timelineLeft}>
        {step && <span className={styles.timelineStep}>{step}</span>}
        <div className={`${styles.timelineLine} ${continueLine ? styles.timelineLineContinue : ''}`} />
      </div>
      {variant === 'split' && splitImage ? (
        <div className={`${styles.timelineContent} ${styles.timelineSplitContent} ${splitImageLeft ? styles.timelineSplitReverse : ''}`}>
          <div className={styles.timelineSplitText}>
            <h3 className={styles.timelineHeading}>{heading}</h3>
            <div className={styles.timelineBody}>{children}</div>
          </div>
          <div className={styles.timelineSplitImage}>
            {splitImage}
          </div>
        </div>
      ) : (
        <div className={styles.timelineContent}>
          <h3 className={styles.timelineHeading}>{heading}</h3>
          <div className={styles.timelineBody}>{children}</div>
        </div>
      )}
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
