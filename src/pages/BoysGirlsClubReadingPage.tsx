import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleImage,
  ArticleProjectMeta,
  ArticleStatRow,
  ArticleStat,
  ArticleSectionHeading,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'

import heroImg from '../assets/Images/boys-girls-club-reading/reading6.webp'
import wonderQuestionImg from '../assets/Images/boys-girls-club-reading/reading3.webp'
import coinSystemImg from '../assets/Images/boys-girls-club-reading/reading1.webp'
import cleanInterfaceImg from '../assets/Images/boys-girls-club-reading/reading7.webp'
import wonderQuestionsSlideImg from '../assets/Images/boys-girls-club-reading/reading8.webp'
import skipAlertImg from '../assets/Images/boys-girls-club-reading/reading5.webp'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/boys-girls-club-reading'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-boys-girls-club-reading.jpg'

export default function BoysGirlsClubReadingPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>From "I Won't Read a Paragraph" to "Can We Play Again?" | Elliott Hedman</title>
        <meta name="description" content="Boys & Girls Club students refused to read a single paragraph. After iterating on the reading experience — coin systems, bite-sized reveals, Wonder Questions — they were asking to go again." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content='From "I Won&#39;t Read a Paragraph" to "Can We Play Again?"' />
        <meta property="og:description" content="Boys & Girls Club students refused to read a single paragraph. After iterating on the reading experience, they were asking to go again." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2021-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='From "I Won&#39;t Read a Paragraph" to "Can We Play Again?"' />
        <meta name="twitter:description" content="What it took to turn reluctant readers into kids who asked to keep going." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": 'From "I Won\'t Read a Paragraph" to "Can We Play Again?"',
          "description": "Boys & Girls Club students refused to read a single paragraph. After iterating on the reading experience, they were asking to go again.",
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

          <ArticleHeader
            type="Case Study"
            date="2021"
            author="Elliott Hedman"
            readTime="6 min read"
            title='From "I Won&#39;t Read a Paragraph" to "Can We Play Again?"'
            subtitle="The same kids. A different reading experience."
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Client',   value: 'Boys & Girls Club' },
            { label: 'Sector',   value: 'Education, Literacy, After-School' },
            { label: 'My Role',  value: 'Research Lead & Literacy Instructor' },
            { label: 'Scope',    value: '3rd and 4th grade reluctant readers' },
          ]} />

          <ArticleHero img={heroImg} imgAlt="3rd grader at the Boys & Girls Club working through the reading prototype on a laptop" layout="below" />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                The first prototype we brought to the Boys & Girls Club had a clear problem: most students refused to finish a single paragraph.
              </p>
              <p className={`${styles.p} reveal`}>
                These were third and fourth graders who had, over years, learned that reading was something that happened to them — not something they did. Handing them a digital reading lesson and asking them to engage was like asking someone who's been burned by a stove to try cooking again. The first ask was the hard one.
              </p>
              <p className={`${styles.p} reveal`}>
                The last prototype looked different. Students were actively reading every line, paying attention to feedback, and asking — without any prompting — if they could do it again.
              </p>
              <p className={`${styles.p} reveal`}>
                Same kids. Different experience.
              </p>
            </div>
          </div>

          <ArticleImage src={wonderQuestionImg} alt="Wonder Question opener asking why vultures eat dead animals instead of alive ones" caption="The Wonder Question that opened the vulture lesson — a genuinely uncertain question students couldn't answer without reading." />

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="1→0" label="paragraphs refused" note="started at 'most refused 1 paragraph'" />
              <ArticleStat value="3" label="core design changes" note="each informed by eye tracking + behavior" />
              <ArticleStat value="∞" label="asks to play again" note="unprompted, by the same kids who quit" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Three changes ── */}
          <ArticleSectionHeading>Three Changes That Flipped the Experience</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Add Weight to the Questions">
                <p className={styles.p}>
                  Early versions let students skip wrong answers or move on without engaging. The result: students treated the whole experience as something to get through. We implemented a coin system — one coin per correct answer, within two attempts. This single change reframed every question from "obstacle" to "opportunity." Students who'd been guessing started re-reading passages. Eye tracking confirmed it: time-on-text went up the moment there was something worth earning. Later data showed coin accumulation correlated strongly with comprehension scores.
                </p>
                <ArticleImage src={coinSystemImg} alt="Coin system UI showing a multiple-choice question with coins to earn for correct answers" caption="One coin per correct answer, within two attempts. That was the whole change — and it flipped how students treated every question." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Remove the Visual Clutter">
                <p className={styles.p}>
                  Eye tracking caught something counterintuitive: images and questions were actually working against the reading. Students were skipping the text entirely to focus on the more visually engaging elements. The redesign stripped the interface down to one or two sentences at a time, with images and questions appearing only after the text was completed. The inspiration was the app Hooked — which uses progressive text reveals to maintain narrative tension. Students who had been skipping were suddenly reading to find out what came next.
                </p>
                <ArticleImage src={cleanInterfaceImg} alt="Clean reading interface with cartoon illustration, fill-in-blank text, and progress bar at the bottom" caption="The stripped-down interface: one passage at a time, progress bar at the bottom, no visual escape routes." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Start with a Wonder Question">
                <p className={styles.p}>
                  Students were reading to finish, not to know. We introduced "Wonder Questions" at the beginning of each lesson — a genuinely uncertain question that the reading would answer. "Why do vultures eat dead animals?" isn't a setup. It's a real thing to wonder about. Before reading, students discussed the question with each other. That conversation gave them a stake in the answer. Reading became purposeful instead of obligatory.
                </p>
                <ArticleImage src={wonderQuestionsSlideImg} alt="Slide showing Bad Wonder Questions vs Good Wonder Questions side by side" caption="The difference: bad Wonder Questions can be answered from a photo. Good ones require reading to resolve." />
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Additional findings ── */}
          <div className={styles.container}>
            <ArticleCallout label="Other Things We Learned" variant="insight">
              <p>Peer conversation before reading consistently outperformed individual prompting. Skip alerts — notifications that a student had bypassed text — were welcomed, not resented: kids actually appreciated being caught. Pre-reading games were more effective than post-reading rewards. And the best Wonder Questions were ones that adults couldn't answer from general knowledge — questions that genuinely required reading to resolve.</p>
            </ArticleCallout>
          </div>

          <ArticleImage src={skipAlertImg} alt="'Slow Down!' popup asking the student to click OK and re-read the passage they skipped" caption="Skip alerts weren't punishments — students saw them as fair. Being caught meant the game was paying attention." />

          {/* ── Closing ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The kids who refused to read a paragraph in prototype one were the same kids asking to play again in prototype three. Nothing changed about who they were or what they were capable of. What changed was the experience we put in front of them.
              </p>
              <p className={`${styles.p} reveal`}>
                This work became the foundation for Wonder.io — the app we built to give reluctant readers a reading experience designed around how they actually behave, not how we wish they would.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The kids weren't the problem. The reading experience was.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher or literacy researcher you know."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
