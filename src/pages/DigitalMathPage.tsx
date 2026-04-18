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
import heroImg from '../assets/Images/digital-math/addition1.webp'
import animationImg from '../assets/Images/digital-math/image2.webp'
import feedbackImg from '../assets/Images/digital-math/math2.webp'
import interfaceImg from '../assets/Images/digital-math/additionslide4.webp'
import slide13Img from '../assets/Images/digital-math/slide13.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/digital-math'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-digital-math.jpg'

export default function DigitalMathPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Understanding the Digital Math Experience | Elliott Hedman</title>
        <meta name="description" content="19 children, eye tracking glasses, and MOXO sensors. The key finding: classroom pedagogy doesn't work when children are learning by themselves digitally." />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Understanding the Digital Math Experience" />
        <meta property="og:description" content="19 children, eye tracking glasses, and MOXO sensors. Classroom pedagogy doesn't work when children are learning by themselves digitally." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2019-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Understanding the Digital Math Experience" />
        <meta name="twitter:description" content="What happens when you put 19 kids in front of a digital math prototype wearing eye tracking glasses and stress sensors." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Understanding the Digital Math Experience",
          "description": "19 children, eye tracking glasses, and MOXO sensors. Classroom pedagogy doesn't work when children are learning by themselves digitally.",
          "author": { "@type": "Person", "name": "Elliott Hedman", "url": "https://goodvibesgarage.ai" },
          "datePublished": "2019-01-01",
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
            date="2019"
            author="Elliott Hedman"
            readTime="5 min read"
            title="Understanding the Digital Math Experience"
            subtitle="The prototype worked in the classroom. Alone at a screen, children fell apart."
          />

          <ArticleHero img={heroImg} imgAlt="Child using digital math prototype while researcher observes" layout="below" />

          <ArticleProjectMeta items={[
            { label: 'Client',   value: 'Math EdTech Client' },
            { label: 'Sector',   value: 'Education, Digital Learning, UX Research' },
            { label: 'My Role',  value: 'Research Lead' },
            { label: 'Method',   value: 'Eye tracking glasses + MOXO sensor observation, 19 children' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                The math team had built a working prototype for teaching addition — double and single digits, animated, polished. It performed well when teachers were present. Then we put 19 children in front of it alone.
              </p>
              <p className={`${styles.p} reveal`}>
                Each child wore eye tracking glasses and MOXO sensors measuring skin conductance. We watched what they actually looked at, where they disengaged, and where their stress spiked.
              </p>
              <p className={`${styles.p} reveal`}>
                What we found was a fundamental mismatch: the prototype was designed the way classroom teachers teach. But children learning alone on a screen are in an entirely different situation. The pedagogy didn't transfer.
              </p>
            </div>
          </div>

          <ArticlePullQuote>
            "Our results helped the team understand how classroom pedagogy does not work when children are learning by themselves digitally."
          </ArticlePullQuote>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="19" label="children observed" note="eye tracking + MOXO sensors" />
              <ArticleStat value="5 sec" label="animation threshold" note="disengagement point for instructional video" />
              <ArticleStat value="3" label="redesign principles" note="animations, feedback, interface teaching" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          <ArticleSectionHeading>Three Things the Data Revealed</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Long Animations Disengage Within 5 Seconds">
                <p className={styles.p}>
                  The original prototype used long animation clips — movement, jokes, teacher-style instruction — to explain concepts. Eye tracking showed children watching for a few seconds, then mentally checking out. By the time the key instructional moment arrived, most students had already disengaged. The fix wasn't to make better animations. It was to make them shorter. Animations should serve as brief introductions only — after roughly five seconds, they stop teaching and start losing people.
                </p>
                <ArticleImage src={animationImg} alt="Digital math lesson prototype showing animation-based instruction" caption="The original animation approach — engaging for seconds, then losing students entirely." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Minimal Feedback Creates Helplessness">
                <p className={styles.p}>
                  When children got something wrong, the original response was: "That's not right; try again!" After three failed attempts, the answer was simply given. Sensor data showed children learning helplessness — they clicked through, waiting to be shown the answer. Dynamic feedback, by contrast, became the primary teaching mechanism. When the system responded to wrong answers with information rather than just correction, children learned from their mistakes instead of waiting them out. The difference between a teaching moment and a "click-to-continue" experience was in the specificity of the feedback.
                </p>
                <ArticleImage src={feedbackImg} alt="Digital math prototype showing feedback interaction design" caption="Dynamic feedback as the primary teaching mechanism — not just correction, but explanation." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Interfaces Must Be Explicitly Taught">
                <p className={styles.p}>
                  Children who couldn't figure out the interface assumed they didn't understand the math. The two things were completely conflated. A child who couldn't find the "+10 button" wasn't confused about addition — they were confused about the interface. But what they experienced was math failure. The fix was treating interface teaching as content: model every new button, explicitly, before asking students to use it. When children understood how to use the tool, they also learned the math. The UX was the pedagogy.
                </p>
                <ArticleImageGrid columns={2}>
                  <ArticleImage src={interfaceImg} alt="Math interface showing explicit button instruction" layout="grid" caption="Teaching the +10 button explicitly before use." />
                  <ArticleImage src={slide13Img} alt="Research slide showing interface teaching findings" layout="grid" caption="Findings: interface confusion mistaken for math inability." />
                </ArticleImageGrid>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <div className={styles.container}>
            <ArticleCallout label="The Core Finding" variant="insight">
              <p>Digital math tools that replicate classroom instruction miss something essential: in a classroom, a teacher can read the room, answer questions in real time, and adjust on the fly. A screen can't. The design has to compensate for the absence of a human — not by adding more instruction, but by building feedback, scaffolding, and interface clarity directly into the experience.</p>
            </ArticleCallout>
          </div>

          {/* ── Testimonials ── */}
          <ArticleSectionHeading>What the Client Said</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                "I can't believe that he could identify problems and come up with some solutions on the spot without having to bring it back to an editor. I love that he created his own prototype. I consider him a real asset to our team."
              </p>
              <p className={`${styles.p} reveal`}>
                "This is 100% absolutely amazingly helpful. I'm learning, they're helping me think about the design of the product, and it's so incredibly INFORMATIVE... Even in just watching Sara and Elliott work with the 'digital' paper prototype — I'd love to learn how to do more of that."
              </p>
              <p className={`${styles.p} reveal`}>
                "Wow — super impressed with Elliott's findings. This is really powerful data to be getting. And just seeing the kid get bored was a powerful image."
              </p>
            </div>
          </div>

          <ArticleClosing>
            The tool was well-designed. What was missing was the teacher. Build the teacher into the design.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone building digital learning tools."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
