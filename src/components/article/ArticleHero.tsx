import styles from './Article.module.css'

type HeroLayout = 'overlay' | 'below' | 'split'

interface ArticleHeroProps {
  img: string
  imgAlt: string
  title?: string         // optional — can be used independently of ArticleHeader
  subtitle?: string
  layout?: HeroLayout    // 'overlay' = title on top of image, 'below' = image then text, 'split' = side by side
  caption?: string
}

export default function ArticleHero({
  img,
  imgAlt,
  title,
  subtitle,
  layout = 'below',
  caption,
}: ArticleHeroProps) {
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

  // Default: 'below' — full-width image, text underneath
  return (
    <div className={`${styles.heroBelow} reveal`}>
      <img src={img} alt={imgAlt} className={styles.heroImg} />
      {caption && <p className={styles.heroCaption}>{caption}</p>}
      {(title || subtitle) && (
        <div className={styles.heroBelowText}>
          {title && <h2 className={styles.heroBelowTitle}>{title}</h2>}
          {subtitle && <p className={styles.heroBelowSubtitle}>{subtitle}</p>}
        </div>
      )}
    </div>
  )
}
