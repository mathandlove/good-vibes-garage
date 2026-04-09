import styles from './Article.module.css'

interface ArticleCtaProps {
  sharePrompt?: string   // the italic nudge line
  label?: string         // the smaller descriptor line
  buttonText?: string
  buttonHref?: string
}

export default function ArticleCta({
  sharePrompt = 'If this landed, forward it to someone who needs to read it.',
  label = 'I write about AI, education, and building things that matter.',
  buttonText = 'Get new essays by email →',
  buttonHref = '/#contact',
}: ArticleCtaProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.articleCta} reveal`}>
        <p className={styles.articleCtaShare}>{sharePrompt}</p>
        <div className={styles.articleCtaDivider} />
        <p className={styles.articleCtaLabel}>{label}</p>
        <a href={buttonHref} className={styles.articleCtaButton}>{buttonText}</a>
      </div>
    </div>
  )
}
