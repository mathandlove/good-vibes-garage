import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleCard,
  ArticleProjectMeta,
  ArticleSectionHeading,
  ArticleClosing,
  ArticleCta,
  ArticleSources,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import heroImg from '../assets/Images/designing-wonder-io/slide7.webp'
import bgcSessionImg from '../assets/Images/designing-wonder-io/bgc-session.webp'
import sensorChartImg from '../assets/Images/designing-wonder-io/capture.webp'
import appUiImg from '../assets/Images/designing-wonder-io/slide13.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/designing-wonder-io'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-designing-wonder-io.jpg'

export default function DesigningWonderIoPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Five Years Building Wonder.io With the Kids Who Needed It Most | Elliott Hedman</title>
        <meta name="description" content="Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students, we built Wonder.io. What eye tracking and emotion sensors taught us about reluctant readers." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Five Years Building Wonder.io With the Kids Who Needed It Most" />
        <meta property="og:description" content="Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students, we built Wonder.io." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2021-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Five Years Building Wonder.io With the Kids Who Needed It Most" />
        <meta name="twitter:description" content="70+ versions, eye tracking, emotion sensors, and five years with the same kids — what we learned building Wonder.io." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Five Years Building Wonder.io With the Kids Who Needed It Most",
          "description": "Over five years, 70+ versions, and hundreds of hours with Boys & Girls Club students, we built Wonder.io.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2021-01-01",
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

          <ArticleHero
            img={heroImg}
            imgAlt="Student wearing eye-tracking glasses at a laptop during a Wonder.io research session"
            layout="below"
            title="Five Years Building Wonder.io With the Kids Who Needed It Most"
            subtitle="What 70 versions, eye tracking, and emotion sensors taught us about reluctant readers."
            type="Case Study"
            date="2021"
            author="Elliott Hedman"
            readTime="6 min read"
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Context',  value: 'Five years of research at Boys & Girls Club' },
            { label: 'Sector',   value: 'Education, Literacy, EdTech' },
            { label: 'My Role',  value: 'Researcher, Designer, Literacy Instructor' },
            { label: 'Outcome',  value: '3 grade-level reading improvement; international adoption' },
          ]} />

          {/* ── Card 1: Representation ── */}
          <div className={styles.cardsContainer}>
            <ArticleCard
              number="01"
              heading="Representation:"
              img={bgcSessionImg}
              imgAlt="Students at the Boys & Girls Club using Wonder.io"
            >
              <p className={styles.p}>Over five years, we co-created Wonder.io with students at the Boys & Girls Club, who were mostly diverse, struggling readers. We asked, "How can we make reading something you identify with and want to engage with?" Dr. Hedman became a literacy teacher at the club, trying different books with the students and implementing their suggestions for improving the app each week. We then distributed Wonder.io in after-school clubs across Denver.</p>
            </ArticleCard>
          </div>

          {/* ── Card 2: Methodology ── */}
          <div className={styles.cardsContainer}>
            <ArticleCard
              number="02"
              heading="Methodology:"
              img={sensorChartImg}
              imgAlt="Skin conductance chart showing engagement during a Wonder.io session"
              reverse
            >
              <p className={styles.p}>Eye tracking showed how readers would skip over the text but then reread each question two to three times.</p>
              <p className={styles.p}>Our emotion sensor showed how important answering questions and receiving positive feedback was for students.</p>
            </ArticleCard>
          </div>

          {/* ── Card 3: Iteration ── */}
          <div className={styles.cardsContainer}>
            <ArticleCard
              number="03"
              heading="Iteration:"
              img={appUiImg}
              imgAlt="Four Wonder.io app screens showing the reading experience"
            >
              <p className={styles.p}>We have created over 70 different versions of Wonder.io (and are still making more). In our next version, we hope to better capitalize on students' desire for more images and comics and more humor.</p>
            </ArticleCard>
          </div>

          {/* ── Outcome ── */}
          <ArticleSectionHeading>Outcome:</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Students reading Wonder.io have increased their reading level by three grade levels. Wonder.io is read internationally and has come highly recommended by struggling readers. You can try Wonder.io free here. <a href="/writing/question-based-reading">A write-up on why Wonder.io works can be read here.</a>
              </p>
            </div>
          </div>

          <ArticleClosing>
            Five years. 70 versions. The same kids, week after week. That's what it takes to build something that works.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher, designer, or literacy researcher you know."
          />

          <ArticleSources>
            <li><a href="/writing/question-based-reading">Question-Based Reading — Wonder Stories</a></li>
            <li><a href="/HedmanELO2021.pdf" target="_blank" rel="noopener noreferrer">Motivating Struggling Readers to Mentally Show Up with Wonder Stories, 2021</a></li>
          </ArticleSources>

        </article>
      </main>

      <Footer />
    </>
  )
}
