import styles from './Article.module.css'

interface ArticleImageProps {
  src: string
  alt: string
  caption?: string  // optional — omit for no caption
}

export default function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  return (
    <figure className={`${styles.articleImage} reveal`}>
      <div className={caption ? styles.articleImageWrap : undefined}>
        <img src={src} alt={alt} className={caption ? styles.articleImageImgCaptioned : styles.articleImageImg} />
        {caption && <figcaption className={styles.articleImageCaption}>{caption}</figcaption>}
      </div>
    </figure>
  )
}
