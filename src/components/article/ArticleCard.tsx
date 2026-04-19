import { ReactNode } from 'react'
import styles from './Article.module.css'

interface ArticleCardProps {
  img?: string          // optional — omit for full-width text card
  imgAlt?: string
  caption?: string
  heading: string
  children: ReactNode   // paragraph/blockquote content
  reverse?: boolean     // image on right, text on left (only applies when img is present)
  number?: string       // e.g. "01" — shows ghost number behind heading
  quote?: string        // optional inline pull quote shown below card text
  fullBleedImg?: boolean // image spans full width above text
}

export default function ArticleCard({
  img,
  imgAlt = '',
  caption,
  heading,
  children,
  reverse = false,
  number,
  quote,
  fullBleedImg = false,
}: ArticleCardProps) {
  const hasImage = Boolean(img)

  let cardClass: string
  if (!hasImage) {
    cardClass = `${styles.cardTextOnly} reveal`
  } else if (fullBleedImg) {
    cardClass = `${styles.cardStacked} reveal`
  } else if (reverse) {
    cardClass = `${styles.card} ${styles.cardReverse} reveal`
  } else {
    cardClass = `${styles.card} reveal`
  }

  return (
    <div className={cardClass}>
      {hasImage && (
        <div className={fullBleedImg ? styles.cardImageFull : styles.cardImage}>
          <img src={img} alt={imgAlt} className={styles.img} />
          {caption && <div className={styles.cardCaption}>{caption}</div>}
        </div>
      )}
      <div className={styles.cardText}>
        {number ? (
          <div className={styles.cardNumberWrap}>
            <div className={styles.cardNumber}>{number}</div>
            <h3 className={styles.cardTitle}>{heading}</h3>
          </div>
        ) : (
          <h2 className={styles.cardHeading}>{heading}</h2>
        )}
        {children}
        {quote && (
          <blockquote className={styles.cardQuote}>{quote}</blockquote>
        )}
      </div>
    </div>
  )
}
