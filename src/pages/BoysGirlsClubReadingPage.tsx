import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
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

          <ArticleHero
            img={heroImg}
            imgAlt="3rd grader at the Boys & Girls Club working through the reading prototype on a laptop"
            layout="below"
            title='From "I Won&#39;t Read a Paragraph" to "Can We Play Again?"'
            subtitle="The same kids. A different reading experience."
            type="Case Study"
            date="2021"
            author="Elliott Hedman"
            readTime="6 min read"
          />

          {/* ── Project metadata ── */}
          <ArticleProjectMeta items={[
            { label: 'Client',   value: 'Boys & Girls Club' },
            { label: 'Sector',   value: 'Education, Literacy, After-School' },
            { label: 'My Role',  value: 'Research Lead & Literacy Instructor' },
            { label: 'Scope',    value: '3rd and 4th grade reluctant readers' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                We worked at the Boys & Girls Club to provide reading lessons for 3rd and 4th graders that reluctant readers would engage with, care about, and actively ask to do.
              </p>
              <p className={`${styles.p} reveal`}>
                Many of these students would not even read one paragraph from our initial prototype.
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
                  In our initial reading tests, students seldom cared if they answered a reading question wrong. Consequentially, they did not read the text nor spend much time on the question. Most of the students skipped their grade at the end.
                </p>
                <p className={styles.p}>
                  Students were offered a coin for every problem they got right within 2 guesses. Students would re-read sections and think carefully, knowing this coin was on the line. Later research showed that this coin was a strong indicator of achievement and added weight to problems.
                </p>
                <p className={styles.p}>
                  With all the right motivators and rewards in place, children started asking us for help answering questions, which was our ultimate goal. In this prototype, we added the "Break it Down" button.
                </p>
                <ArticleImage src={coinSystemImg} alt="Coin system UI showing a multiple-choice question with coins to earn for correct answers" caption="One coin per correct answer, within two attempts. That was the whole change — and it flipped how students treated every question." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Remove the Visual Clutter">
                <p className={styles.p}>
                  Through eye tracking, we saw children would often skip over the text and focus on questions which were more engaging. Vibrant images also pulled children's attention away.
                </p>
                <p className={styles.p}>
                  Inspired by the app Hooked — we removed all visual distractions — there were only one to two sentences visible at a time. Questions and images only appeared once children finished reading texts. This simplification helped children ease into reading and stay focused.
                </p>
                <p className={styles.p}>
                  We added simple cartoons like "Diary of a Wimpy Kid" as it helped kids reflect on what they read and not feel overwhelmed.
                </p>
                <ArticleImage src={cleanInterfaceImg} alt="Clean reading interface with cartoon illustration, fill-in-blank text, and progress bar at the bottom" caption="The stripped-down interface: one passage at a time, progress bar at the bottom, no visual escape routes." />
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Start with a Wonder Question">
                <p className={styles.p}>
                  Children seldom had a reason to read a text other than to finish as fast as possible. Questions were present just to "prove that they read it." While adult readers often read for enjoyment, struggling readers did not enjoy reading the preselected texts given to them.
                </p>
                <p className={styles.p}>
                  We added a key Wonder Question at the beginning of every text. For example, "Why do vultures eat dead animals?" We then had readers ask a neighbor the same question. This instilled in readers a sense of purpose and curiosity as they read the scientific text. At the end they were able to show they were able to answer the challenging question.
                </p>
                <p className={styles.p}>
                  We found children were more engaged and answered faster when talking with each other rather than typing.
                </p>
                <p className={styles.p}>
                  We alerted kids when they were skipping past the reading. Rather than be annoyed, children said reported that they really appreciated knowing they weren't reading as they were unaware themselves.
                </p>
                <p className={styles.p}>
                  When providing Wonder Questions, we quickly found out that some questions were more fun and interesting than others. A rule of thumb — if you, an adult, already know the answer, it's probably not that fun.
                </p>
                <p className={styles.p}>
                  Games are usually added as a reward. We found games were more effective if children could play one before they started reading. This helped them warm up their mind and get engaged with the material.
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
