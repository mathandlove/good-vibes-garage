import styles from './Article.module.css'

type ImageLayout = 'prose' | 'wide' | 'full' | 'grid'

interface ArticleImageProps {
  src: string
  alt: string
  caption?: string
  layout?: ImageLayout  // 'prose' = 720px (default), 'wide' = 1160px, 'full' = edge-to-edge, 'grid' = used inside ArticleImageGrid
}

export default function ArticleImage({ src, alt, caption, layout = 'prose' }: ArticleImageProps) {
  const wrapClass = {
    prose: styles.articleImage,
    wide: styles.articleImageWide,
    full: styles.articleImageFull,
    grid: styles.articleImageGridItem,
  }[layout]

  return (
    <figure className={`${wrapClass} reveal`}>
      <div className={caption ? styles.articleImageWrap : undefined}>
        <img
          src={src}
          alt={alt}
          className={caption ? styles.articleImageImgCaptioned : styles.articleImageImg}
        />
        {caption && <figcaption className={styles.articleImageCaption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}

// Grid of 2 or 3 images side by side
//
// Props:
//   columns  — 2 (default) or 3 columns
//   breakout — escape a narrow parent (e.g. timeline column, prose body) and
//              render at full 1160px article width. Use when the grid is nested
//              inside a constrained container and would otherwise shrink images.
interface ArticleImageGridProps {
  children: React.ReactNode
  columns?: 2 | 3
  breakout?: boolean
}

export function ArticleImageGrid({ children, columns = 2, breakout = false }: ArticleImageGridProps) {
  return (
    <div className={[
      styles.imageGrid,
      columns === 3 ? styles.imageGrid3 : '',
      breakout ? styles.imageGridBreakout : '',
      'reveal',
    ].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

// Before / After comparison: two images in a unified bordered frame with
// "Before" / "After" labels. Always breakout from narrow parents.
//
// Usage:
//   <ArticleImageComparison
//     before={{ src, alt, caption }}
//     after={{ src, alt, caption }}
//     beforeLabel="Before"   // optional, defaults to "Before"
//     afterLabel="After"     // optional, defaults to "After"
//   />
interface ComparisonImage {
  src: string
  alt: string
  caption?: string
}

interface ArticleImageComparisonProps {
  before: ComparisonImage
  after: ComparisonImage
  beforeLabel?: string
  afterLabel?: string
}

export function ArticleImageComparison({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: ArticleImageComparisonProps) {
  return (
    <div className={`${styles.imageGridComparison} reveal`}>
      <div className={styles.imageGridComparisonItem}>
        <div className={styles.imageGridComparisonLabel}>{beforeLabel}</div>
        <img src={before.src} alt={before.alt} className={styles.imageGridComparisonImg} />
        {before.caption && (
          <p className={styles.imageGridComparisonCaption}>{before.caption}</p>
        )}
      </div>
      <div className={styles.imageGridComparisonItem}>
        <div className={styles.imageGridComparisonLabel}>{afterLabel}</div>
        <img src={after.src} alt={after.alt} className={styles.imageGridComparisonImg} />
        {after.caption && (
          <p className={styles.imageGridComparisonCaption}>{after.caption}</p>
        )}
      </div>
    </div>
  )
}
