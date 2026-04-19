import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleImage,
  ArticleImageGrid,
  ArticleProjectMeta,
  ArticleSectionHeading,
  ArticleStatRow,
  ArticleStat,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import legoHero from '../assets/Images/lego-technic/lego1.webp'
import legoChild from '../assets/Images/lego-technic/lego2.webp'
import legoSensor from '../assets/Images/lego-technic/lego3.webp'
import legoSlide1 from '../assets/Images/lego-technic/legoslide1.webp'
import legoSlide2 from '../assets/Images/lego-technic/legoslide2.webp'
import legoSlide3 from '../assets/Images/lego-technic/legoslide3.webp'
import legoSlide5 from '../assets/Images/lego-technic/legoslide5.webp'
import legoSlide7 from '../assets/Images/lego-technic/legoslide7.webp'
import legoSlide8 from '../assets/Images/lego-technic/legoslide8.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/lego-technic'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-lego-technic.jpg'

export default function LegoTechnicPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>LEGO Technic: When Better Instructions Made Everything Worse | Elliott Hedman</title>
        <meta name="description" content="LEGO Technic redesigned their digital building instructions. The animations were cleaner, the steps were clearer — and kids were more stressed than ever. What stress sensors revealed." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="LEGO Technic: When Better Instructions Made Everything Worse" />
        <meta property="og:description" content="LEGO Technic redesigned their digital building instructions. The animations were cleaner — and kids were more stressed than ever. What stress sensors revealed." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2022-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LEGO Technic: When Better Instructions Made Everything Worse" />
        <meta name="twitter:description" content="Cleaner animations, more stress. What sensors revealed about how kids actually experience building instructions." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "LEGO Technic: When Better Instructions Made Everything Worse",
          "description": "LEGO Technic redesigned their digital building instructions. The animations were cleaner, the steps were clearer — and kids were more stressed than ever.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2022-01-01",
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

          {/* ── Hero image ── */}
          <ArticleHero
            img={legoHero}
            imgAlt="Child using LEGO Technic digital building instructions on a tablet"
            layout="below"
            title="LEGO Technic: When Better Instructions Made Everything Worse"
            subtitle="The animations were cleaner. The steps were clearer. The kids were more stressed than ever."
            type="Case Study"
            date="2022"
            author="Elliott Hedman"
            readTime="5 min read"
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Client',    value: 'The LEGO Group' },
            { label: 'Sector',    value: 'Toys, Play, Digital UX' },
            { label: 'My Role',   value: 'Research Lead' },
            { label: 'Method',    value: '10 children, MOXO stress sensors' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                LEGO Technic sets are complicated. Hundreds of pieces, intricate gear systems, digital instructions designed to guide you through every step. The LEGO team had put real craft into making those instructions intuitive — smooth 3D rotations, animated piece placements, everything you'd expect from a world-class product team.
              </p>
              <p className={`${styles.p} reveal`}>
                We strapped stress sensors onto 10 kids and watched them build.
              </p>
              <p className={`${styles.p} reveal`}>
                The sensors told a different story than the team expected.
              </p>
              <p className={`${styles.p} reveal`}>
                While the "digital" version of instructions felt technologically impressive, it often failed at creating a better building experience.
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="10" label="children observed" note="MOXO stress sensors + observation" />
              <ArticleStat value="3" label="core design insights" note="each contradicted the original assumptions" />
              <ArticleStat value="0" label="animations in final design" note="removed entirely based on sensor data" />
            </ArticleStatRow>
          </div>

          {/* ── Child + sensor photos ── */}
          <ArticleImageGrid columns={2}>
            <ArticleImage src={legoChild} alt="Child building LEGO Technic set with stress sensor wristband" layout="grid" />
            <ArticleImage src={legoSensor} alt="MOXO stress sensor worn during LEGO building session" layout="grid" />
          </ArticleImageGrid>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Findings ── */}
          <ArticleSectionHeading>What the Sensors Revealed</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Animations Were Making Kids More Stressed, Not Less">
                <p className={styles.p}>
                  The original app allowed children to rotate the model around in 3D space. Each step was accompanied by an animation of the pieces flying into place on the model. When children were confused, they would rotate the model into an arbitrary angle, which made building even harder.
                </p>
                <p className={styles.p}>
                  The animations in the beginning created a large amount of stress. Rather than go at their own pace, children had to note where all the pieces were moving in a few seconds.
                </p>
                <p className={styles.p}>
                  The fix was counterintuitive: remove the animations entirely. Static, clear, frozen views outperformed every animated variation we tested.
                </p>
                <ArticleImageGrid columns={3}>
                  <ArticleImage src={legoSlide1} alt="Before: animated 3D rotation instruction step" layout="grid" />
                  <ArticleImage src={legoSlide2} alt="After: static clear instruction step" layout="grid" />
                  <ArticleImage src={legoSlide3} alt="Comparison of animation vs static instruction design" layout="grid" />
                </ArticleImageGrid>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Errors Needed to Be Catchable, Not Just Correctable">
                <p className={styles.p}>
                  Instruction designers spend a considerable amount of time designing each page of instructions so that children would not make mistakes. But no matter how flawless the instructions were, children would inevitably make mistakes.
                </p>
                <p className={styles.p}>
                  Children felt lost and defeated when they discovered a mistake. We inserted pages that asked children to look at their model and confirm gears worked correctly so they could catch errors early. Children reported that this feature was highly valuable.
                </p>
                <p className={styles.p}>
                  We found a major pain point in building LEGO sets: What do I do when I make a mistake? Having to take things apart requires extensive planning that caused substantial stress. Our proposed solution was to help children reflect on their models more as they build.
                </p>
                <ArticleImage src={legoSlide5} alt="Checkpoint moment in LEGO building instructions verifying gear placement" layout="prose" caption="Checkpoint prompt: 'Is your gear turning?' — catching errors before they compound." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Parents Were the Missing Piece">
                <p className={styles.p}>
                  LEGO designers had a policy to not assume parents would be part of the building process, in part because parents were not always available.
                </p>
                <p className={styles.p}>
                  Originally, we were going to exclude parents from the study. One parent insisted on joining in and showed us how important a mother is in helping her child pursue more difficult challenges.
                </p>
                <p className={styles.p}>
                  Children are less stressed and more capable of taking on harder challenges when parents help. We suggested that future LEGO instructions find ways to invite parents in and make it easier to build together.
                </p>
                <ArticleImage src={legoSlide7} alt="Stress sensor graph comparing building with parent vs. alone — lower stress with parent present" layout="prose" caption="Skin conductance data: building with a parent vs. building alone. The difference is visible in every session." />
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Stress data graph ── */}
          <ArticleImage src={legoSlide8} alt="Stress sensor graph annotated with child quotes — 'Help Dad, I can't finish this', 'I can't do this. Can we play a game instead?'" layout="wide" caption="Stress data annotated with children's verbal responses. Escalating frustration matched escalating skin conductance." />

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Counterintuitive Finding" variant="insight">
              <p>We helped the LEGO team recognize that the "building experience" was broader than just comprehending instructions. It also involves helping children reflect, regulate, and feel a sense of achievement. Now, these objectives are all possible through digital instructions.</p>
            </ArticleCallout>
          </div>

          {/* ── Closing ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The LEGO team came in confident in their animations. The sensors disagreed. What came out of this research wasn't just a list of UI fixes — it was a different frame for what "good instructions" means.
              </p>
              <p className={`${styles.p} reveal`}>
                After sneaking off to his mom and asking if he could quit, Matthew told us that this LEGO Technic set was his favorite one. Often, children pride themselves in being up for the challenge.
              </p>
              <p className={`${styles.p} reveal`}>
                We sat in another room while Eric built his LEGO set, watching on video camera. Because Eric didn't feel judged or observed, he asked his father if he could quit halfway through — helping us see where building goes wrong.
              </p>
              <p className={`${styles.p} reveal`}>
                Good instructions don't just transfer information. They manage the emotional arc of learning something hard. They make it possible to fail without falling apart, to catch mistakes early, and to feel the pride of figuring something out.
              </p>
              <p className={`${styles.p} reveal`}>
                You can't design that arc by looking at the instructions. You have to watch someone live inside them.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The best instructions don't just show what to do. They help you feel like you can.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing onboarding or step-by-step experiences."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
