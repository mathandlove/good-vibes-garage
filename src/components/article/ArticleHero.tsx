import { Link } from 'react-router-dom'
import styles from './Article.module.css'

type HeroLayout = 'overlay' | 'below' | 'split'

interface ArticleHeroProps {
  img: string
  imgAlt: string
  title?: string
  subtitle?: string
  layout?: HeroLayout
  caption?: string
  // meta bar props (for 'below' layout)
  type?: string
  date?: string
  author?: string
  readTime?: string
  backLabel?: string
  backTo?: string
}

export default function ArticleHero({
  img,
  imgAlt,
  title,
  subtitle,
  layout = 'below',
  caption,
  type,
  date,
  author,
  readTime,
  backLabel = '← Writing',
  backTo = '/writing',
}: ArticleHeroProps) {
  const hasMeta = type || date || author || readTime

  if (layout === 'overlay') {
    return (
      <div className={`${styles.heroOverlay} reveal`}>
        <img src={img} alt={imgAlt} className={styles.heroOverlayImg} />
        <div className={styles.heroOverlayScrim} />
        {(title || subtitle) && (
          <div className={styles.heroOverlayText}>
            {title && <h2 className={styles.heroOverlayTitle}>{title}</h2>}
            {subtitle && <p className={styles.heroOverlaySubtitle}>{subtitle}</p>}
          </div>
        )}
        {caption && <p className={styles.heroCaption}>{caption}</p>}
      </div>
    )
  }

  if (layout === 'split') {
    return (
      <div className={`${styles.heroSplit} reveal`}>
        <div className={styles.heroSplitText}>
          {title && <h2 className={styles.heroSplitTitle}>{title}</h2>}
          {subtitle && <p className={styles.heroSplitSubtitle}>{subtitle}</p>}
        </div>
        <div className={styles.heroSplitImage}>
          <img src={img} alt={imgAlt} className={styles.heroImg} />
          {caption && <p className={styles.heroCaption}>{caption}</p>}
        </div>
      </div>
    )
  }

  // Default: 'below' — full-width image with optional meta bar, title + subtitle underneath
  return (
    <div className={`${styles.heroBelow} reveal`}>
      {hasMeta && (
        <div className={styles.heroMetaBar}>
          <div className={styles.heroMetaBarLeft}>
            <Link to={backTo} className={styles.heroMetaBarBack}>{backLabel}</Link>
            {type && (
              <>
                <div className={styles.heroMetaBarDivider} />
                <span className={styles.heroMetaBarType}>{type}</span>
              </>
            )}
          </div>
          <div className={styles.heroMetaBarRight}>
            {date && <span className={styles.heroMetaBarDate}>{date}</span>}
            {author && <><span className={styles.heroMetaBarDot}>·</span><span className={styles.heroMetaBarAuthor}>{author}</span></>}
            {readTime && <><span className={styles.heroMetaBarDot}>·</span><span className={styles.heroMetaBarRead}>{readTime}</span></>}
          </div>
        </div>
      )}
      <img src={img} alt={imgAlt} className={styles.heroImg} />
      {caption && <p className={styles.heroCaption}>{caption}</p>}
      {(title || subtitle) && (
        <div className={styles.heroBelowText}>
          {title && <h1 className={styles.heroBelowTitle}>{title}</h1>}
          {subtitle && <p className={styles.heroBelowSubtitle}>{subtitle}</p>}
        </div>
      )}
    </div>
  )
}
