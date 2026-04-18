import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleImage,
  ArticleSectionHeading,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleCallout,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import rubricImage from '../assets/Images/rubric-for-engaging-educational-games/games-rubric.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/rubric-for-engaging-educational-games'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-rubric-for-engaging-educational-games.jpg'

export default function RubricForEngagingEducationalGamesPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>A Rubric for Making Engaging Educational Games | Elliott Hedman</title>
        <meta name="description" content="Most educational games fail because designers assume kids will accept games they themselves wouldn't play. Here are the 5 foundational pieces that actually determine whether a game works." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="A Rubric for Making Engaging Educational Games" />
        <meta property="og:description" content="Most educational games fail because designers assume kids will accept games they themselves wouldn't play. Here are the 5 foundational pieces that actually determine whether a game works." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2023-05-15" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="A Rubric for Making Engaging Educational Games" />
        <meta name="twitter:description" content="Most educational games fail because designers assume kids will accept games they themselves wouldn't play." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "A Rubric for Making Engaging Educational Games",
          "description": "Most educational games fail because designers assume kids will accept games they themselves wouldn't play. Here are the 5 foundational pieces that actually determine whether a game works.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2023-05-15",
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
            type="Research"
            date="May 15, 2023"
            author="Elliott Hedman"
            readTime="4 min read"
            title="A Rubric for Making Engaging Educational Games"
            subtitle="Most fail before kids even press play."
          />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                Most educational games fail because designers assume children will accept games they themselves wouldn't play.
              </p>
              <p className={`${styles.p} reveal`}>
                Over the last 10 years, I've been hired to review and create educational games for many top educational and toy companies. Determining what makes educational games effective has been genuinely hard — not because the research doesn't exist, but because the assumptions are so deeply baked in.
              </p>
              <p className={`${styles.p} reveal`}>
                When children have access to million-dollar commercial apps at home, educational games must compete on entertainment value. That's not a nice-to-have. It's the baseline.
              </p>
              <p className={`${styles.p} reveal`}>
                Here are the five foundational pieces that determine whether an educational game works — or gets abandoned after two minutes.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>The 5 Foundational Pieces</ArticleSectionHeading>

          {/* ── Timeline: all 5 pieces ── */}
          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Game Mechanics">
                <p className={styles.p}>
                  Game mechanics drive both engagement and teaching effectiveness. A good educational game needs a clear winning goal and progressive difficulty. But beyond that, it needs at least one of these: a non-academic interactive skill that takes effort to master without causing frustration; a timing element children can overcome through effort; or opportunities for children to create something that reflects their own contribution — the hardest to design, and the most powerful.
                </p>
              </ArticleTimelineItem>

              <ArticleTimelineItem step="02" heading="Sticky Stories">
                <p className={styles.p}>
                  Story matters — especially for younger learners. The best stories are memorable and slightly silly, easy to understand, and short enough that they don't collapse under their own weight. Two to three minutes total is the target. Critically, stories should acknowledge mistakes and connect them directly to the learning objective. The story isn't decoration. It's the vehicle.
                </p>
              </ArticleTimelineItem>

              <ArticleTimelineItem step="03" heading="Agency: The Child's Actions Affect the Story">
                <p className={styles.p}>
                  Children's choices need to meaningfully affect the narrative — not just update a scoreboard. Characters in the story should visibly react to what a child does. A basic example: a character responds emotionally to a correct or incorrect answer. Even a simple emotional reaction closes the loop between effort and consequence, and that loop is what makes kids lean in.
                </p>
              </ArticleTimelineItem>

              <ArticleTimelineItem step="04" heading="Educational Effectiveness">
                <p className={styles.p}>
                  Games should help children master new skills through repetition and multiple answer attempts with constructive feedback. The majority of time spent playing should be focused on practicing and mastering skills — not watching cinematics or navigating menus. Teachers introduce new concepts; games provide the practice support. Children love to learn, but they disengage fast when they can't actually get good at something.
                </p>
              </ArticleTimelineItem>

              <ArticleTimelineItem step="05" heading="Usability / Flow">
                <p className={styles.p}>
                  The interface has to be intuitive, with professional-quality graphics, animations, and text. Transitions should feel polished without excessive loading times or clunky navigation. This one is easy to underestimate. A great game mechanic buried under a confusing UI is a game no one finishes. The experience of using the game is part of the game.
                </p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Rubric image ── */}
          <ArticleImage
            src={rubricImage}
            alt="Educational game engagement rubric scoring sheet"
            layout="inset"
            caption="The rubric used to evaluate engagement levels across educational game designs."
          />

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Underlying Problem" variant="insight">
              <p>Designers assume children will accept games they themselves wouldn't play. But kids have Roblox, Minecraft, and Fortnite at home. "Good enough for school" is not a bar that gets cleared.</p>
            </ArticleCallout>
          </div>

          {/* ── Closing prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Incorporating these five elements significantly increases game effectiveness for children's learning. Together, they form a rubric for evaluating whether a game is actually engaging — or just educational in the way that gets tolerated and abandoned.
              </p>
              <p className={`${styles.p} reveal`}>
                The rubric isn't a formula. It's a set of honest questions to ask before shipping. Does the mechanic reward real effort? Does the story stick? Do children's choices matter? Does the interface get out of the way?
              </p>
              <p className={`${styles.p} reveal`}>
                If the answer is no on any of them, kids will find out in about two minutes — and they won't come back.
              </p>
            </div>
          </div>

          <ArticleClosing>
            Kids know the difference between a game and a chore. Build a game.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a game designer or edtech team you know."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
