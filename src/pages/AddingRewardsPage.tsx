import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleHero,
  ArticleImage,
  ArticleImageGrid,
  ArticleProjectMeta,
  ArticleStatRow,
  ArticleStat,
  ArticleSectionHeading,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticlePullQuote,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import heroImg from '../assets/Images/adding-rewards/image1.webp'
import lesson1Img from '../assets/Images/adding-rewards/image12.webp'
import coin1Img from '../assets/Images/adding-rewards/coin1.webp'
import coin2Img from '../assets/Images/adding-rewards/coin2.webp'
import image3Img from '../assets/Images/adding-rewards/image3.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/adding-rewards'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-adding-rewards.jpg'

export default function AddingRewardsPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Adding Rewards to Digital Lessons | Elliott Hedman</title>
        <meta name="description" content="Avatar systems and end-of-lesson prizes weren't working. Students wanted acknowledgment tied directly to their academic achievements — not cosmetic rewards disconnected from learning." />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Adding Rewards to Digital Lessons" />
        <meta property="og:description" content="Avatar systems and end-of-lesson prizes weren't working. Students wanted acknowledgment tied directly to their academic achievements." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2020-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adding Rewards to Digital Lessons" />
        <meta name="twitter:description" content="What students actually want from reward systems — and why avatar collections miss the point entirely." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Adding Rewards to Digital Lessons",
          "description": "Avatar systems and end-of-lesson prizes weren't working. Students wanted acknowledgment tied directly to their academic achievements.",
          "author": { "@type": "Person", "name": "Elliott Hedman", "url": "https://goodvibesgarage.ai" },
          "datePublished": "2020-01-01",
          "publisher": { "@type": "Organization", "name": "Good Vibes Garage", "url": "https://goodvibesgarage.ai" },
          "url": CANONICAL_URL,
          "image": OG_IMAGE
        })}</script>
      </Helmet>

      <Nav />

      <main className={styles.main}>
        <article className={styles.article}>

          <ArticleHeader
            type="Case Study"
            date="2020"
            author="Elliott Hedman"
            readTime="5 min read"
            title="Adding Rewards to Digital Lessons"
            subtitle="The avatar system was perfectly designed. Students didn't care about it at all."
          />

          <ArticleHero img={heroImg} imgAlt="Boys & Girls Club digital lesson prototype with reward system" layout="below" />

          <ArticleProjectMeta items={[
            { label: 'Client',  value: 'Boys & Girls Club' },
            { label: 'Sector',  value: 'Education, Gamification, Motivation' },
            { label: 'My Role', value: 'Research Lead' },
            { label: 'Team',    value: 'Garrett Hedman, Meredith Wilson, Christine Zanchi, Elysa Greenberger' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                The client came in with a clear hypothesis: students needed better rewards to stay motivated. They wanted an avatar system — characters students could customize and level up as they completed lessons.
              </p>
              <p className={`${styles.p} reveal`}>
                We tested it. Elementary students struggled to form goals around avatar collection. The cosmetic rewards felt disconnected from what they were actually doing in the lesson. When the avatar leveled up, it didn't feel earned — it felt arbitrary.
              </p>
              <p className={`${styles.p} reveal`}>
                The problem wasn't a lack of rewards. It was that the rewards were pointing at the wrong thing.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="3" label="core reward principles" note="from direct classroom testing" />
              <ArticleStat value="∞" label="retries requested" note="students asked to keep going" />
              <ArticleStat value="Roman" label="numerals requested" note="students asked for more lessons" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>What Actually Worked</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Acknowledgment Over Prizes">
                <p className={styles.p}>
                  Students cared far more about rewards tied directly to their academic achievements than about cosmetic prizes. A simple checkbox or star representing "I got this right" was more motivating than a new avatar outfit. The reward had to mean something about the student's competency — not just their participation. Deci's model of intrinsic motivation explains why: rewards that support feelings of competence increase internal motivation. Rewards that feel like external payments undermine it.
                </p>
                <ArticleImage src={lesson1Img} alt="Early lesson prototype without effective reward structure" caption="Early prototype: lesson completion without meaningful acknowledgment left students disengaged." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Immediate Rewards, Not End-of-Lesson Prizes">
                <p className={styles.p}>
                  When rewards came at the end of the lesson, students didn't try harder to earn them. The gap between effort and reward was too large. Moving acknowledgment to immediately after each correct answer changed the dynamic completely. Every question became its own small loop: effort → correct answer → immediate recognition. Students who had been coasting started engaging. The feedback interval was the mechanism.
                </p>
                <ArticleImageGrid columns={2}>
                  <ArticleImage src={coin1Img} alt="Coin reward UI showing immediate per-question acknowledgment" layout="grid" caption="Coin earned immediately after correct answer." />
                  <ArticleImage src={coin2Img} alt="Coin reward system showing competency tracking" layout="grid" caption="Stars and coins tied directly to academic achievement." />
                </ArticleImageGrid>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Try-It-Again Is Non-Negotiable">
                <p className={styles.p}>
                  Standard lesson flows advance students regardless of whether they understood the content. Students who got something wrong felt stuck — not because they couldn't learn it, but because the system took the opportunity away. Adding unlimited retries let students pursue mastery instead of just completion. The prototype proved so engaging that students who finished the lesson asked to do the roman numerals extension — an entirely optional additional challenge. That's what motivated students look like.
                </p>
                <ArticleImage src={image3Img} alt="Try-again feature prototype showing retry option after incorrect answers" caption="Unlimited retries: the option to demonstrate mastery rather than just move on." />
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticlePullQuote>
            "Students cared more about rewards more closely tied to their academic achievements than about cosmetic rewards."
          </ArticlePullQuote>

          <div className={styles.container}>
            <ArticleCallout label="The Underlying Framework" variant="insight">
              <p>This aligns closely with Deci's self-determination theory: intrinsic motivation requires feelings of competence, autonomy, and relatedness. Avatar collection systems fail on all three counts. Immediate academic acknowledgment + the freedom to retry + seeing your own progress against real content hits all three. The reward system that works isn't designed around prizes — it's designed around the feeling of getting better at something.</p>
            </ArticleCallout>
          </div>

          {/* ── Closing ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Instead of implementing the complex avatar system, the client moved toward immediate question-level rewards and a try-again feature. Students who had previously moved through lessons passively were now engaged enough to ask for more.
              </p>
              <p className={`${styles.p} reveal`}>
                The lesson for edtech: the question isn't "what should we give students?" It's "what do students feel when they get something right?" Design toward that feeling, and the reward takes care of itself.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The best reward is the feeling of getting smarter. Design backward from there.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone building learning products for kids."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
