/**
 * GVG Article Template
 * ─────────────────────────────────────────────
 * HOW TO USE:
 *   1. Duplicate this file, rename it e.g. `MyArticlePage.tsx`
 *   2. Fill in all the FILL_IN placeholders
 *   3. Import your images at the top
 *   4. Add a route in App.tsx: <Route path="/writing/my-article" element={<MyArticlePage />} />
 *   5. Add a card to WritingPage.tsx
 *
 * CARD VARIANTS:
 *   <ArticleCard ...>                 — unnumbered, heading is an h2
 *   <ArticleCard number="01" ...>     — numbered, ghost number behind h3
 *   <ArticleCard reverse ...>         — image on right
 *   <ArticleCard reverse number="02"> — both
 *
 * PROSE BLOCKS (inside .container > .body):
 *   <p className={styles.lead}>      — large opening line
 *   <p className={styles.p}>         — body paragraph
 *   <h2 className={styles.h2}>       — section heading
 *   <h3 className={styles.h3}>       — sub-heading
 *   <blockquote className={styles.blockquote}> — pull quote
 *   <ul className={styles.list}>     — bullet list
 *
 * IMAGES (in prose or cards):
 *   <ArticleImage src={img} alt="..." />                    — no caption
 *   <ArticleImage src={img} alt="..." caption="..." />      — with caption (grey tint + italic)
 * ─────────────────────────────────────────────
 */

import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleCard,
  ArticleImage,
  ArticleSectionHeading,
  ArticleClosing,
  ArticleCta,
  ArticleSources,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

// Import your images here:
// import heroImg from '../assets/Images/SLUG/hero.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/SLUG'  // FILL_IN
const OG_IMAGE = 'https://goodvibesgarage.ai/og-SLUG.jpg'        // FILL_IN

export default function MyArticlePage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>FILL_IN | Elliott Hedman</title>
        <meta name="description" content="FILL_IN" />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="FILL_IN" />
        <meta property="og:description" content="FILL_IN" />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="YYYY-MM-DD" />  {/* FILL_IN */}
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FILL_IN" />
        <meta name="twitter:description" content="FILL_IN" />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "FILL_IN",
          "description": "FILL_IN",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "YYYY-MM-DD",  // FILL_IN
          "publisher": {
            "@type": "Organization",
            "name": "Good Vibes Garage",
            "url": "https://goodvibesgarage.ai"
          },
          "url": CANONICAL_URL,
          "image": OG_IMAGE
        })}</script>
      </Helmet>

      <Nav />

      <main className={styles.main}>
        <article className={styles.article}>

          <ArticleHeader
            type="Essay"          // Essay | Interview | Report | Case Study
            date="FILL_IN"        // e.g. "April 8, 2025"
            author="Elliott Hedman"
            readTime="X min read" // FILL_IN
            title="FILL_IN"
            subtitle="FILL_IN"
          />

          {/* ── Intro prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                FILL_IN — your opening hook sentence.
              </p>
              <p className={`${styles.p} reveal`}>
                FILL_IN
              </p>
            </div>
          </div>

          {/* ── Ornamental divider ── */}
          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Cards ── */}
          <div className={styles.cardsContainer}>

            {/* Unnumbered framing card */}
            <ArticleCard
              img={/* heroImg */ '' as unknown as string}
              imgAlt="FILL_IN"
              caption="FILL_IN"
              heading="FILL_IN"
            >
              <p className={styles.p}>FILL_IN</p>
            </ArticleCard>

            {/* Optional: section heading before a numbered series */}
            <ArticleSectionHeading>FILL_IN: Why / How / What?</ArticleSectionHeading>

            <ArticleCard
              img={/* img1 */ '' as unknown as string}
              imgAlt="FILL_IN"
              caption="FILL_IN"
              heading="FILL_IN"
              number="01"
            >
              <p className={styles.p}>FILL_IN</p>
              <blockquote className={styles.blockquote}>FILL_IN</blockquote>
            </ArticleCard>

            <ArticleCard
              img={/* img2 */ '' as unknown as string}
              imgAlt="FILL_IN"
              caption="FILL_IN"
              heading="FILL_IN"
              reverse
              number="02"
            >
              <p className={styles.p}>FILL_IN</p>
            </ArticleCard>

            {/* Add more cards as needed — alternate reverse for visual rhythm */}

          </div>

          {/* ── Closing prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>

              <h2 className={`${styles.h2} reveal`}>FILL_IN</h2>

              <p className={`${styles.p} reveal`}>FILL_IN</p>

              <h3 className={`${styles.h3} reveal`}>FILL_IN</h3>

              <ul className={`${styles.list} reveal`}>
                <li>FILL_IN</li>
                <li>FILL_IN</li>
              </ul>

            </div>
          </div>

          <ArticleClosing>
            FILL_IN — your closing sentence. Keep it punchy and forward-looking.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone who needs to read it."
          />

          {/* Remove <ArticleSources> entirely if you have no citations */}
          <ArticleSources>
            <li>FILL_IN</li>
          </ArticleSources>

        </article>
      </main>

      <Footer />
    </>
  )
}
