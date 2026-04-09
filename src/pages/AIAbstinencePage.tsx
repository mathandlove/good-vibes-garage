import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleCard,
  ArticleSectionHeading,
  ArticleClosing,
  ArticleCta,
  ArticleSources,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import borderpolicy from '../assets/Images/aiabstinence/borderpolicy.webp'
import paraphrase from '../assets/Images/aiabstinence/paraphrase.webp'
import sciencefair from '../assets/Images/aiabstinence/sciencefair.webp'
import goblind from '../assets/Images/aiabstinence/goblind.webp'
import underground from '../assets/Images/aiabstinence/underground.webp'
import marriage from '../assets/Images/aiabstinence/marriage.webp'
import robotgym from '../assets/Images/aiabstinence/robotgym.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/ai-abstinence'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-ai-abstinence.jpg'

export default function AIAbstinencePage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Why AI Abstinence Policies Are Backfiring | Elliott Hedman</title>
        <meta name="description" content="Blanket school bans on AI are failing — students use it anyway. Elliott Hedman surveyed 200 students to find out what's really happening, and what should come next." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Why AI Abstinence Policies Are Backfiring" />
        <meta property="og:description" content="Blanket school bans on AI are failing — students use it anyway. Based on interviews with 200 high school and college students." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2025-04-08" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Why AI Abstinence Policies Are Backfiring" />
        <meta name="twitter:description" content="Blanket school bans on AI are failing — students use it anyway. Based on interviews with 200 students." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Why AI Abstinence Policies Are Backfiring",
          "description": "Blanket school bans on AI are failing — students use it anyway. The more important conversation is about when AI helps thinking and when it replaces it.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2025-04-08",
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
            type="Essay"
            date="April 8, 2025"
            author="Elliott Hedman"
            readTime="7 min read"
            title="Why AI Abstinence Policies Are Backfiring"
            subtitle="Blanket school bans on AI are failing — students use it anyway. The more important conversation is about when AI helps thinking and when it replaces it."
          />

          {/* ── Intro prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                I believe we need a new term in our conversations about AI in education: <strong>AI Abstinence</strong>.
              </p>
              <p className={`${styles.p} reveal`}>
                When I read through school districts' AI policies, they often read more like legal protection documents than visionary statements about learning. Typically, they state that students can't use AI without parental permission. Then comes the blanket requirement: all writing must be the student's original work or else there will be consequences.
              </p>
              <p className={`${styles.p} reveal`}>
                As an AI interaction researcher, I had to ask: <strong>Is AI Abstinence actually working? Or do students have a different perspective?</strong>
              </p>
              <p className={`${styles.p} reveal`}>
                I surveyed 200 high school and college students and interviewed 20 in-depth about how they use AI in schoolwork.
              </p>
            </div>
          </div>

          {/* ── Ornamental divider ── */}
          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Cards ── */}
          <div className={styles.cardsContainer}>

            <ArticleCard
              img={borderpolicy}
              imgAlt="A diagram illustrating a border-style AI policy"
              caption="Policy as barrier"
              heading="What Is AI Abstinence?"
            >
              <p className={styles.p}>
                After interviewing both teachers and students, I started calling this approach <strong>AI Abstinence</strong> — a directive telling students to stop doing something that's incredibly tempting.
              </p>
              <p className={styles.p}>
                These policies often label AI use as "cheating," despite the fact that a growing number of people, teachers included, use it daily. At their core, these policies reflect a power dynamic: <em>"You must do what I say."</em> But much like traditional abstinence programs, students simply aren't following the script.
              </p>
              <blockquote className={styles.blockquote}>
                "My students don't use AI. And if they did, I would know."
              </blockquote>
            </ArticleCard>

            <ArticleCard
              img={sciencefair}
              imgAlt="Students using AI for every assignment"
              caption="Every assignment, every student"
              heading="AI Use Is Prolific"
              reverse
            >
              <p className={styles.p}>
                Every student I interviewed had used AI for classwork. In fact, most were using it for <strong>every</strong> assignment.
              </p>
              <blockquote className={styles.blockquote}>
                "Pretty much all of my friends use AI every time."
              </blockquote>
              <blockquote className={styles.blockquote}>
                "I don't drink, but it's like testing alcohol. You try it once, then the next day you want more. Soon, it's just how you do things."
              </blockquote>
              <p className={styles.p}>
                I asked one student to show me an assignment he had written without AI. He couldn't think of one. AI had written his entire paper on "Why Integrity Is Important for Leadership."
              </p>
            </ArticleCard>

            <ArticleSectionHeading>Why Are Students Using AI So Much?</ArticleSectionHeading>

            <ArticleCard
              img={paraphrase}
              imgAlt="Example of paraphrasing AI-generated text to avoid detection"
              caption="Paraphrase as camouflage"
              heading="AI Detectors Aren't Catching AI Use"
              number="01"
            >
              <p className={styles.p}>
                Students often start by asking ChatGPT to write their essay, then paraphrase it line by line. They talk about this process casually, like running spell check.
              </p>
              <blockquote className={styles.blockquote}>
                "I just used AI for the rest of the paper. I try to change some words so it doesn't look like AI in my teacher's eyes."
              </blockquote>
              <p className={styles.p}>
                Tools like Turnitin claim to detect AI with 99% accuracy, but that number only applies to unedited, fully AI-generated text. Once a student paraphrases it, the detection fails. It's human writing, technically, but not human thought.
              </p>
            </ArticleCard>

            <ArticleCard
              img={underground}
              imgAlt="The underground economy of AI use in schools"
              caption="The invisible economy"
              heading="AI Is Improving Students' Grades and Efficiency"
              reverse
              number="02"
            >
              <blockquote className={styles.blockquote}>
                "ChatGPT helps me sound more intelligent — like I really know what I'm talking about."
              </blockquote>
              <p className={styles.p}>
                Many students don't feel guilty about using AI. One student turned in a fully AI-written paper, and the teacher praised it in front of the class for going "above and beyond."
              </p>
              <blockquote className={styles.blockquote}>
                "My teacher wants 300 words. I can't even think of that. So I use AI. It helps me get stuff in."
              </blockquote>
            </ArticleCard>

            <ArticleCard
              img={goblind}
              imgAlt="Illustration of going blind — missing what's right in front of you"
              caption="Missing what's right in front of you"
              heading="The Ethics of AI Abstinence Don't Register"
              number="03"
            >
              <p className={styles.p}>
                AI Abstinence is built on the idea that AI is harmful to students. But their lived experiences tell a different story: their papers are stronger, they have more free time, and they're getting better grades.
              </p>
              <blockquote className={styles.blockquote}>
                "In the end, I'm now a better student, a better person, because this is the future. This is how things are done now."
              </blockquote>
              <p className={styles.p}>
                Of course, teachers know the difference between reading something and <em>knowing</em> it. And generating your own ideas is an entirely different level of learning.
              </p>
            </ArticleCard>

            <ArticleCard
              img={marriage}
              imgAlt="The strained relationship between schools and AI reality"
              caption="A relationship under strain"
              heading="We're Not Having Transparent Conversations with Students"
              reverse
              number="04"
            >
              <p className={styles.p}>
                Under AI Abstinence, teachers aren't allowed to talk openly about when and how AI should or shouldn't be used. Many teachers told me they're afraid to accuse students of AI use for fear of damaging the student-teacher relationship.
              </p>
              <p className={styles.p}>
                As a result, students are left to formulate their own AI ethics. They don't know when AI is helping them learn or when it's doing the thinking for them. They don't see that writing is about developing higher-level skills like critical thinking and voice.
              </p>
            </ArticleCard>

            <ArticleCard
              img={robotgym}
              imgAlt="Building cognitive strength — the robot gym metaphor"
              caption="The cognitive workout you skip"
              heading="Rampant AI Use Is Preventing Critical Thinking"
            >
              <p className={styles.p}>
                A blank page is intimidating. AI can eliminate that anxiety with the push of a button. But it's in that struggle with the blank page that real learning happens.
              </p>
              <p className={styles.p}>
                Writing about <em>"Why I want to go to college"</em> requires self-reflection and voice. Writing about environmental protection according to a textbook helps internalize those lessons. The real learning is in the writing: grappling with ideas, clarifying arguments, and shaping a message.
              </p>
            </ArticleCard>

          </div>

          {/* ── Closing prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>

              <h2 className={`${styles.h2} reveal`}>Moving Beyond AI Abstinence</h2>

              <p className={`${styles.p} reveal`}>
                One method I tested was using an AI-powered Socratic tool that asked students to explain the reasoning behind their AI-written papers. Every student failed.
              </p>

              <p className={`${styles.p} reveal`}>
                One senior planning to study environmentalism could only say the word <em>"deforestation"</em> when asked to explain climate change. But the important part isn't that I "caught" her — it's that <em>she caught herself</em>. She realized she didn't internalize the reading. She didn't <em>know</em> the material.
              </p>

              <h3 className={`${styles.h3} reveal`}>What Could Come Next?</h3>

              <p className={`${styles.p} reveal`}>What other tools can we build to make critical thinking more tangible? I have been experimenting with:</p>

              <ul className={`${styles.list} reveal`}>
                <li>A final paper that's a documented conversation with Socrates himself.</li>
                <li>An AI-led podcast where students must <em>own</em> their voice.</li>
                <li><strong>Level Up</strong>, a free tool that acts like Grammarly but helps students self-reflect instead of giving answers.</li>
              </ul>

              <p className={`${styles.p} reveal`}>
                If you're interested in exploring or building these new approaches together, please reach out. I'm actively looking to partner with schools and districts.
              </p>

            </div>
          </div>

          <ArticleClosing>
            Let's move beyond AI Abstinence — and into a more honest, innovative, and empowering future for student learning.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to a teacher or administrator you know."
          />

          <ArticleSources>
            <li>Elbow, P. (1998). <em>Writing with power: Techniques for mastering the writing process.</em> Oxford University Press.</li>
            <li>Vygotsky, L. S. (1978). <em>Mind in Society: The Development of Higher Psychological Processes.</em></li>
            <li>Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem-solving. <em>Journal of Child Psychology and Psychiatry, 17</em>(2), 89–100.</li>
          </ArticleSources>

        </article>
      </main>

      <Footer />
    </>
  )
}
