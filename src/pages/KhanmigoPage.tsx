import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleStatRow,
  ArticleStat,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticleCallout,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import heroImg from '../assets/Images/khanmigo/reading-interface.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/khanmigo'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-khanmigo.jpg'

export default function KhanmigoPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students | Elliott Hedman</title>
        <meta name="description" content="AI tutoring tools like Khanmigo assume students will ask for help. The kids who need it most never do. Why the most vulnerable learners will be the last ones these systems reach." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students" />
        <meta property="og:description" content="AI tutoring tools like Khanmigo assume students will ask for help. The kids who need it most never do." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2023-07-08" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students" />
        <meta name="twitter:description" content="AI tutoring tools assume students will ask for help. The kids who need it most never do." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students",
          "description": "AI tutoring tools like Khanmigo assume students will ask for help. The kids who need it most never do.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2023-07-08",
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
            imgAlt="Boys & Girls Club student working through a reading comprehension prototype on a laptop"
            layout="below"
            title="Like the Help Button, Khanmigo Will Fail to Help My Underrepresented Students"
            subtitle="The students who need it most are the ones who will never ask."
            type="Essay"
            date="July 8, 2023"
            author="Elliott Hedman"
            readTime="5 min read"
          />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                A question I work with all of my clients on: How can we get a student to click that help button I pasted on the screen? This Break It Down "Help" button was seldomly pushed.
              </p>
              <p className={`${styles.p} reveal`}>
                When you look at the Khan lab School situated in Silicon Valley, it sounds exciting - "The best teaching and learning processes are student-centered and encourage students to take responsibility for their own learning." But then you read that it's located in the center Silicon Valley, populated with some of the geekiest, most privileged kids in the U.S. Even though Khanamigo is digital and available to everyone, I believe the AI software faces a similar accessibility issue.
              </p>
              <p className={`${styles.p} reveal`}>
                My students at the Boys & Girls Club (25% proficient in Reading) do not voluntarily use Khanamigo. For my elementary school students, digital education is about being asked a question and then "proving you know it." Take for example one 4th grade student who was asked a word problem involving multiplication. She did not know how to do the multiplication, skipped over the reading and typed the number "42". To her astonishment, she guessed correctly. She told the whole class to look at her screen – she got the answer right! Celebrations for all.
              </p>
              <p className={`${styles.p} reveal`}>
                For my students, learning is a constant trial of proving that you are already smart, that you are better than how the teachers treat you. Digital education is not about learning or working on skills. A second-grade student complained to me about a multiple choice assignment., "It's not fair that you won't let me guess a 3rd time, I knew what it was." My students are not reflecting. They aren't saying "I don't know this and that's a problem." Instead, they are treating learning like a slot machine where their knowledge is preset, not something to be grown.
              </p>
              <p className={`${styles.p} reveal`}>
                A recent client of mine was building an AI avatar into their new digital reading program. I joked and called the avatar "Clippy." The students will not be clicking on that avatar for help. Asking for help requires three things to work:
              </p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className={styles.container}>
            <ArticleStatRow>
              <ArticleStat value="25%" label="reading proficiency" note="Boys & Girls Club student baseline" />
              <ArticleStat value="3" label="prerequisites for help-seeking" note="most underrepresented students meet zero" />
              <ArticleStat value="0" label="students who asked Khan Academy" note="in years of classroom observation" />
            </ArticleStatRow>
          </div>

          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Three prerequisites ── */}
          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="A desire to learn and answer correctly" continueLine>
                <p className={styles.p}>I wrote an article for AERA on this topic: "Effective Feedback Depends on the Emotional Weight of a Problem"</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="The confidence and humility to acknowledge you may not know the answer" continueLine>
                <p className={styles.p}>A student 2 grade levels below actively hides their "failure".</p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="The skillset to look externally for that information">
                <p className={styles.p}>When I teach at the Boys & Girls Club, I tell all of my students I will give them any answer they would like if they ask. Only one or two students will ever ask for answers over the entire year. My students even avoid asking their peers for help. I've never seen a student look towards external resources like Khan Academy.</p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>

          {/* ── Callout ── */}
          <div className={styles.container}>
            <ArticleCallout label="The Core Problem" variant="insight">
              <p>Khanmigo is a brilliant tool for students who are already internally motivated and self-efficacious. It fails the students who need help most — because those students have already decided they're not the kind of person who asks for help. The tool assumes the very behavior it needs to first create.</p>
            </ArticleCallout>
          </div>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                Now reading Khan's new book, an entire chapter is dedicated to preventing students from "just asking for the answer." I wish my students cared enough to ask for an answer– most often guessing incorrectly is easier (and there's a chance you can get it right!). Khan illustrates magical experiences where students write in things like "I'm having trouble with polynomials. Can you help explain how to find the degree of this polynomial and the leading coefficient in this question? 3x^2-5X^2+2?" I just don't see this type of inquisitiveness in my classroom and Khan is lucky to have family members with such curiosity and a drive to learn in his family circle.
              </p>
              <p className={`${styles.p} reveal`}>
                Khanamigo fails my students because they are not seeking help. Yes, if my students wrote – "How can I write this sentence better?" Khanamigo will open a new world to them. But if they aren't actively seeking to learn, they won't. My students are not logging into Khanmigo in their free time to write a story – they are being drilled in reading books 2 – 3 the grade levels below – and hating every moment of it.
              </p>
              <p className={`${styles.p} reveal`}>
                Khan included in his second chapter an important note that would be easy to glance over, "Our tutor would understand what motivates a student and use that to really fine-tune their education." Often times, motivation gets put to the wayside, offered as an exercise for the teacher. But I think this motivational aspect is at the crux of what it will take students to embrace Khan Academy. I believe there is a fundamental problem with GenAI: it is only usable by those who are already internally motivated with strong self-efficacy (i.e. privileged students).
              </p>
              <p className={`${styles.p} reveal`}>
                I believe there are two ways to make Khanamigo an educational tool for all, not just the privileged. The "easier" route is to make assignments more motivating to use AI tools. An example I've explored in depth is how competition will make it so students are extremely motivated to answer correctly, consequentially showing help seeking behaviors (Why Kids Work Hard at Fortnite, Not Frog and Toad). With ThinkCERCA we looked at how feedback could be automated and directly given to a student just in time after they submit an answer, rather than them having to seek out the AI's help.
              </p>
              <p className={`${styles.p} reveal`}>
                The second way to bring equity to Khanamigo is the harder and probably correct option: we need to grow self-efficacy in all learners. I remember pitching to i-Ready that we should first be teaching children how to learn and use digital tools before we ever teach them new skills. How can we help students seek "learning"? How can we train students to be inquisitive? This inquisitive classroom would look a lot different: asking students, "What do you want to learn today?" "It looks like you don't know how to do this, how do you think you should learn it?" "Are you guessing, or did you make a mistake?"
              </p>
              <p className={`${styles.p} reveal`}>
                While I was saddened by Khan's book, as I knew his vision was inaccessible to my students, I was equally excited by the possibility he showed of a reinvented learning environment. What if classrooms were able to move away from skill and drill test prep and students were able to own their learning? What if future assignments had consistent feedback, scaffolding, and resources for students? What if future classes were not telling students what they should know but instead giving them the tools to go out and find the answers on their own? I love this, but also realize it requires work beyond just making a brilliant chat buddy.
              </p>
              <p className={`${styles.p} reveal`}>
                The inquisitive future that Khan proposes (and already sees in his privileged circles) sounds wonderful, and I'm glad Khanamigo is starting that journey. The next step is to look deeply at how students want to use AI, and how to raise the next generation as empowered, help seeking learners.
              </p>
            </div>
          </div>

          <ArticleClosing>
            The next step is to look deeply at how students want to use AI, and how to raise the next generation as empowered, help seeking learners.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing or deploying AI in schools."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
