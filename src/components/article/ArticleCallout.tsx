import { ReactNode } from 'react'
import styles from './Article.module.css'

type CalloutVariant = 'default' | 'insight' | 'warning' | 'result' | 'testimonial'

interface ArticleCalloutProps {
  children: ReactNode
  label?: string          // e.g. "Key Insight", "Result", "Note"
  variant?: CalloutVariant
  img?: string
  imgAlt?: string
  attribution?: string   // e.g. "Shawn Young, CEO of Classcraft"
}

export default function ArticleCallout({
  children,
  label,
  variant = 'default',
  img,
  imgAlt = '',
  attribution,
}: ArticleCalloutProps) {
  const variantClass = {
    default: styles.calloutDefault,
    insight: styles.calloutInsight,
    warning: styles.calloutWarning,
    result: styles.calloutResult,
    testimonial: styles.calloutTestimonial,
  }[variant]

  return (
    <div className={`${styles.callout} ${variantClass} ${img ? styles.calloutWithImage : ''} reveal`}>
      {img && <img src={img} alt={imgAlt} className={styles.calloutImg} />}
      <div>
        {label && <p className={styles.calloutLabel}>{label}</p>}
        <div className={styles.calloutBody}>{children}</div>
        {attribution && <p className={styles.calloutAttribution}>— {attribution}</p>}
      </div>
    </div>
  )
}
