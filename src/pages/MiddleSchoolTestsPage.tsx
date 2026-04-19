import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleImage,
  ArticleProjectMeta,
  ArticleSectionHeading,
  ArticleCallout,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import fastGuessing from '../assets/Images/middle-school-tests/test6.webp'
import anxietyChart from '../assets/Images/middle-school-tests/test3.webp'
import realStudents from '../assets/Images/middle-school-tests/test10.webp'
import letMeProveIt from '../assets/Images/middle-school-tests/plan2.webp'
import avoidGeneralities from '../assets/Images/middle-school-tests/plan1.webp'
import narratorVideo from '../assets/Images/middle-school-tests/reading.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/middle-school-tests'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-middle-school-tests.jpg'

export default function MiddleSchoolTestsPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>These Kids Aren't Lazy. They're Anxious. | Elliott Hedman</title>
        <meta name="description" content="Middle schoolers were randomly clicking through diagnostic tests. Eye tracking and stress sensors revealed it wasn't apathy — it was anxiety. And the messaging designed to help was making it worse." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="These Kids Aren't Lazy. They're Anxious." />
        <meta property="og:description" content="Middle schoolers were randomly clicking through diagnostic tests. Eye tracking and stress sensors revealed it wasn't apathy — it was anxiety." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2021-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="These Kids Aren't Lazy. They're Anxious." />
        <meta name="twitter:description" content="Middle schoolers were randomly clicking through diagnostic tests. Eye tracking and stress sensors revealed the real reason — and what actually worked." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "These Kids Aren't Lazy. They're Anxious.",
          "description": "Middle schoolers were randomly clicking through diagnostic tests. Eye tracking and stress sensors revealed it wasn't apathy — it was anxiety.",
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

          {/* ── Hero image ── */}
          <ArticleHero
            img={fastGuessing}
            imgAlt="Skin conductance chart for an 11th grade girl showing fast guessing phases during a multiplication test"
            caption="An 11th grader's skin conductance during a test. The flat valleys labeled 'Fast Guessing' mark the moments she stopped engaging — exhausted and looking for any way out."
            layout="below"
            title="These Kids Aren't Lazy. They're Anxious."
            subtitle="Diagnostic tests were showing garbage data. The fix wasn't harder enforcement. It was a different understanding of what was happening."
            type="Case Study"
            date="2021"
            author="Elliott Hedman"
            readTime="5 min read"
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Context',  value: 'Diagnostic test engagement research' },
            { label: 'Sector',   value: 'Education, EdTech, Assessment' },
            { label: 'My Role',  value: 'Research Lead' },
            { label: 'Method',   value: 'Eye tracking + MOXO stress sensors + interviews' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                Students were not taking diagnostics seriously, answering questions randomly. These false efforts were affecting school scores and students were being placed in content that was too easy for them.
              </p>
              <p className={`${styles.p} reveal`}>
                We put eye tracking glasses on students and watched what actually happened when they hit a hard question.
              </p>
              <p className={`${styles.p} reveal`}>
                They didn't skip hard questions because they were lazy. They quit because they were scared. Fast guessing wasn't apathy — it was a coping strategy for anxiety.
              </p>
              <p className={`${styles.p} reveal`}>
                We prototyped different messages to give to students that might motivate them to try harder on tests. We found that middle school students paid the most attention and listened to high school students who adults didn't believe in. Students paid attention to the student lead messaging and reported more desire to try hard.
              </p>
            </div>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Three findings ── */}
          <ArticleSectionHeading>Three Things the Sensors Showed Us</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Anxiety, Not Apathy">
                <p className={styles.p}>
                  Eye tracking revealed the pattern: students would engage carefully with early questions, then accelerate through the section as difficulty increased. The speed-up happened exactly when questions got hard. MOXO sensors confirmed elevated stress at those moments. These weren't kids who didn't care — they were kids who cared enough to be afraid of failing and had learned that moving fast was how you got through without having to confront that fear directly.
                </p>
                <p className={styles.p}>
                  Our client was planning on bringing in an animation studio to make an entertaining pitch to try hard on the test. Students didn't believe the prototyped animation nor care.
                </p>
                <p className={styles.p}>
                  When we prototyped "real" student's stories students were leaning in and could remember every piece of information. Middle School students aspire to be high school students care deeply about what they had to say. We recommended all messaging be conducted from a high school student.
                </p>
                <p className={styles.p}>
                  If the narrator doesn't believe in the student, the student does not trust them.
                </p>
                <p className={styles.p}>
                  Students were fast guessing to avoid anxiety, not because of apathy.
                </p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImage
            src={anxietyChart}
            alt="Skin conductance chart for an 8th grade boy showing stress spikes when messages about adults not believing in him were read aloud"
            caption="An 8th grader's physiological response. Stress peaks when he hears 'Teachers assume they can't do it' — students are motivated by the prospect of proving doubters wrong, not by reassurance."
            layout="wide"
          />

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="02" heading="Narrator Credibility Made a Bigger Difference Than We Expected">
                <p className={styles.p}>
                  We tested several kinds of motivational messaging before the test. Animated characters: students tuned out immediately. Generic "try your best" copy: equally ineffective. High school students speaking directly to camera about how they'd approached similar challenges: engagement stayed up. Real peers with real credibility — same school, similar background, speaking about their own experience — cut through in a way designed assets simply couldn't.
                </p>
                <p className={styles.p}>
                  Videos of high school students were much more interesting. So much so, we recommended future lessons may want to have high school students teach middle school students.
                </p>
                <p className={styles.p}>
                  In our early prototypes we presented various pieces of messaging and it was the student stories that were the most remembered.
                </p>
                <p className={styles.p}>
                  Our main question became, how do we create a narrator the student believes in and wants to listen to.
                </p>
                <p className={styles.p}>
                  While students were more relatable, teachers were more knowledgeable, so we recommended having a teacher alongside the student.
                </p>
                <p className={styles.p}>
                  Initial messaging revolved around downplaying the challenge — "you can do this" and "this will be easy". When students ran into a hard problem they felt even dumb and misunderstood.
                </p>
                <p className={styles.p}>
                  If you say "this test will be easy" students will think you don't know them or think they are dumb.
                </p>
                <p className={styles.p}>
                  Students were much more motivated around messaging that centered around "I don't give up" and "proving yourself". Students believed they were great and wanted messaging that believed in that too.
                </p>
                <p className={styles.p}>
                  Proving a teacher wrong, that you can do it, is a highly engaging and motivating archetype.
                </p>
                <p className={styles.p}>
                  We tried various academic interventions to motivate children and they had no effect as children struggled to create aspirations.
                </p>
                <p className={styles.p}>
                  Proving to a teacher that they underestimated you is highly motivating.
                </p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImage
            src={realStudents}
            alt="Comparison of four narrator types tested: funny character, cartoon student, written text, and video of a real student"
            caption="Students had a clear preference. 'Have the student because she's relatable. She's the same person as me, she's in school like me.' — 12th grade girl"
            layout="wide"
          />

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="03" heading="Growth Framing Outperformed Effort Framing">
                <p className={styles.p}>
                  "Try hard" messaging didn't move the needle. What resonated: "I don't give up" and "I'm here to prove something to myself." The distinction matters — effort framing puts the bar on how hard you work, which is vague and easy to dismiss. Growth framing connects the test to identity: what kind of person are you becoming? Students had something to prove to themselves that was more interesting than pleasing a system.
                </p>
                <p className={styles.p}>
                  With eye tracking and MOXO sensors we saw children were giving up after encountering problems that were too difficult. Their coping mechanism was to not try hard afterwards.
                </p>
                <p className={styles.p}>
                  Rather than emphasizing the importance of answering questions correctly, we instead emphasized that if you can't get a problem correct, it's okay — some of these questions almost no 8th grader can answer correctly.
                </p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          <ArticleImage
            src={letMeProveIt}
            alt="Slide showing 'Let Me Prove It' framing with a student quote about proving her teacher wrong by doing long division in her head"
            caption="The most memorable story in the study — weeks later, students still remembered it. Growth framing works when it's personal and specific, not abstract."
            layout="wide"
          />

          {/* ── The messaging trap ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Messaging Trap" variant="insight">
              <p>We tested "this will be easy" framing to lower stakes and reduce anxiety. It backfired. When students hit hard questions — which they always did — the mismatch between the promise and the reality made them feel lied to. Accurate messaging about challenge ("some of these will be hard, and that's the point") performed better than false reassurance.</p>
            </ArticleCallout>
          </div>

          <ArticleImage
            src={avoidGeneralities}
            alt="Slide titled 'Avoid Glittering Generalities' listing phrases like 'Try your best' and 'Pay attention' as ineffective messaging"
            caption="Commands like 'Try your best' secretly signal distrust. Students hear: 'I don't think you will.'"
            layout="wide"
          />

          {/* ── What worked ── */}
          <ArticleSectionHeading>What We Built Instead</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                The solution was a short video, filmed with high school students, centered on growth and resilience rather than difficulty minimization. A few specific design choices:
              </p>
              <ul className={`${styles.list} reveal`}>
                <li>High school narrators from a similar background to the students taking the test — peer credibility, not authority credibility</li>
                <li>Real stories about facing hard academic moments, not inspirational abstraction</li>
                <li>Direct acknowledgment that some questions would be hard — and that struggling through them was the point</li>
                <li>Teacher presence built into the framing, not just the video — the social context mattered</li>
              </ul>
              <p className={`${styles.p} reveal`}>
                Normalizing difficulty changed the experience. "Getting something wrong is okay" turned out to be more motivating than "you can do this" — because it was honest about what students were actually going to experience.
              </p>
            </div>
          </div>

          <ArticleImage
            src={narratorVideo}
            alt="A high school student speaking directly to camera in a classroom setting — a still from the motivational video produced for the study"
            caption="The final video used a high school narrator — same school, same background as the students taking the test. Peer credibility that no animated character could replicate."
            layout="wide"
          />

          <ArticleClosing>
            When a kid quits, ask what they're afraid of before assuming they don't care.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher or assessment designer you know."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
