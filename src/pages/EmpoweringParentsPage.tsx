import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHero,
  ArticleCard,
  ArticleProjectMeta,
  ArticleSectionHeading,
  ArticleTimeline,
  ArticleTimelineItem,
  ArticlePullQuote,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'
import heroImg from '../assets/Images/empowering-parents/header.webp'
import examplesImg from '../assets/Images/empowering-parents/examples.webp'
import brainstormingImg from '../assets/Images/empowering-parents/brainstorming.webp'
import appFlowImg from '../assets/Images/empowering-parents/appflow.webp'
import codeImg from '../assets/Images/empowering-parents/code.webp'
import captureImg from '../assets/Images/empowering-parents/capture.webp'
import testingImg from '../assets/Images/empowering-parents/testing.webp'
import pilotweekImg from '../assets/Images/empowering-parents/pilotweek.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/empowering-parents'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-empowering-parents.jpg'

export default function EmpoweringParentsPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>Empowering Parents as Teachers | Elliott Hedman</title>
        <meta name="description" content="Ask a mother if she wants to help her child read and she'll say yes. Give her a teaching app and it will likely never be used. What we learned building for Dreamer parents." />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Empowering Parents as Teachers" />
        <meta property="og:description" content="Ask a mother if she wants to help her child read and she'll say yes. Give her a teaching app and it will likely never be used." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2019-01-01" />
        <meta property="article:author" content="Elliott Hedman" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Empowering Parents as Teachers" />
        <meta name="twitter:description" content="What we learned building a literacy app for Dreamer parents — the majority who want to help but abandon when obstacles arise." />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Empowering Parents as Teachers",
          "description": "Ask a mother if she wants to help her child read and she'll say yes. Give her a teaching app and it will likely never be used.",
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

          <ArticleHero
            img={heroImg}
            imgAlt="Toddlers Can Read app prototype interface"
            layout="below"
            title="Empowering Parents as Teachers"
            subtitle="The app worked. The parents didn't use it. Those are two different problems."
            type="Case Study"
            date="2019"
            author="Elliott Hedman"
            readTime="5 min read"
          />

          <ArticleProjectMeta items={[
            { label: 'Client',  value: 'Toddlers Can Read' },
            { label: 'Sector',  value: 'App Design, Education, Parents, Motivation' },
            { label: 'My Role', value: 'Design and Development Lead' },
            { label: 'Scope',   value: 'Early literacy app for parent-led instruction' },
          ]} />

          {/* ── Intro ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                Spencer, founder of Toddlers Can Read, has a strong vision: empower parents to help their children with literacy. He had an educational video library, but he wanted to see higher adoption and success rates. He believed an interactive app would help inspire parents to action.
              </p>
            </div>
          </div>

          <ArticleSectionHeading>Design Review of Current Offering</ArticleSectionHeading>

          <div className={styles.cardsContainer}>
            <ArticleCard
              img={examplesImg}
              imgAlt="Examples of design principles applied to the current offering"
              caption="Design review findings — opportunities identified in the existing product."
              heading="Example Design Principles"
              reverse
            >
              <p className={styles.p}>
                We started with a design review. With my decade of experience building introductions to online tools, I could see some clear opportunities for improvement.
              </p>
              <ul className={styles.list}>
                <li><strong>People Learn by Doing</strong> — Asking mothers to watch two hours of video before they begin can be daunting.</li>
                <li><strong>Make Parent Actions Tangible</strong> — A video was provided with a montage of activities, but it was unclear which activity parents should do and how.</li>
                <li><strong>Badges Only Work with Meaningful Goals</strong> — The video site gave more videos as parents completed videos, but parents do not have goals around completing videos. Their goals are around teaching reading.</li>
              </ul>
            </ArticleCard>
          </div>

          <ArticleSectionHeading>Brainstorming and Designing Prototype #1</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                All staff met in Dallas and brainstormed what an ideal app might look like. I emphasized listening to team members and making their ideas tangible. At the end of the brainstorming, we had Prototype #1.
              </p>
            </div>
          </div>

          <div className={styles.cardsContainer}>
            <ArticleCard
              img={brainstormingImg}
              imgAlt="Brainstorming session with the Toddlers Can Read team"
              caption="Collaborative brainstorming session that produced Prototype #1."
              heading="The Brainstorm"
            >
              <p className={styles.p}>
                All staff met in Dallas and brainstormed what an ideal app might look like. I emphasized listening to team members and making their ideas tangible. At the end of the brainstorming, we had Prototype #1.
              </p>
            </ArticleCard>
            <ArticleCard
              img={appFlowImg}
              imgAlt="App flow diagram on a whiteboard showing the prototype structure"
              caption="The app flow mapped out on a whiteboard — the skeleton of Prototype #1."
              heading="The App Flow"
              reverse
            >
              <p className={styles.p}>
                Using HTML, CSS, and JavaScript, I built a digital prototype of the team's idea. We needed an app that could be easily shareable (which meant it needed to be on the web) and we needed the app to adapt to the child's diagnostic test — so it could not be static (e.g. Figma).
              </p>
            </ArticleCard>
          </div>

          <ArticleSectionHeading>Build Digital Prototype</ArticleSectionHeading>

          <div className={styles.cardsContainer}>
            <ArticleCard
              img={codeImg}
              imgAlt="Code for the digital prototype"
              caption="Built in HTML, CSS, and JavaScript — shareable on the web and adaptive to each child's diagnostic results."
              heading="The Prototype"
            >
              <p className={styles.p}>
                Using HTML, CSS, and JavaScript, I built a digital prototype of the team's idea. We needed an app that could be easily shareable (which meant it needed to be on the web) and we needed the app to adapt to the child's diagnostic test — so it could not be static (e.g. Figma).
              </p>
              <p className={styles.p}>
                <a href="https://wonder.io/tcr/intro" target="_blank" rel="noopener noreferrer">Link to prototype app we sent to parents</a> (best viewed on mobile)
              </p>
            </ArticleCard>
          </div>

          <ArticleSectionHeading>At-Home Prototype Testing</ArticleSectionHeading>

          <ArticlePullQuote>
            "Ask a mother if she wants to help her child read, and she will most likely say yes. Give a teaching app to a mother, and it will most likely never be used."
          </ArticlePullQuote>

          <div className={styles.cardsContainer}>
            <ArticleCard
              img={testingImg}
              imgAlt="At-home testing session — interviewing a parent in their living room"
              caption="At-home testing — prototypes distributed without instructions to surface genuine pain points."
              heading="Testing at Home"
            >
              <p className={styles.p}>
                I knew mothers' social bias (they want to be good parents) would prevent us from understanding their real pain points. We also knew if we instructed parents to use the app, they would, as they would have felt forced to perform. So we sent the app to parents "as a bonus" for helping us, never asking them to use the app.
              </p>
              <p className={styles.p}>
                During our open-ended interviews, we asked parents to tell us what happened and why they did or did not use the app.
              </p>
            </ArticleCard>
          </div>

          <ArticleSectionHeading>Co-Creation During Interviews</ArticleSectionHeading>

          <div className={styles.cardsContainer}>
            <ArticleCard
              img={pilotweekImg}
              imgAlt="Pilot week results diagram showing the 6 design principles mapped onto the app"
              caption="Pilot week results — design principles labeled on the prototype interface."
              heading="Co-Creation"
              reverse
            >
              <p className={styles.p}>
                For many parents, they did not use the app daily. In prototyping, this was to be expected. We wanted to discover what was getting in the parents' way. We worked with each parent to redesign the app in a way where they would want to use it each day.
              </p>
            </ArticleCard>
          </div>

          <ArticleSectionHeading>Research Findings</ArticleSectionHeading>

          <div className={styles.cardsContainer}>
            <ArticleCard
              img={captureImg}
              imgAlt="Dreamers vs Planners spectrum — ability to teach child to read"
              caption="Two distinct user profiles emerged from the research."
              heading="Planners vs. Dreamers"
            >
              <p className={styles.p}>
                Spencer's product had two distinct user profiles. Planner parents were masters at realizing their goals with their children: the type of parents who have the whole day scheduled, have looked at every teaching reading service, and most likely are stay-at-home. Spencer's first product (and, in many ways, Prototype #1) was geared toward the planners — giving them a flood of information to help with their master plan.
              </p>
              <p className={styles.p}>
                The much larger profile are dreamers. They want to help their children prepare for school, but when an obstacle arises (e.g. "I don't know where to start"), they give up. Their path needs to be clear to proceed. The vast majority of Spencer's potential users are dreamers.
              </p>
            </ArticleCard>
          </div>

          {/* ── Design principles ── */}
          <ArticleSectionHeading>Design Principles to Help Dreamer Parents</ArticleSectionHeading>

          <div className={styles.container}>
            <ArticleTimeline>
              <ArticleTimelineItem step="01" heading="Drips, Not Firehoses" continueLine>
                <p className={styles.p}>
                  There are a million things we need to know to be the perfect parents, and we can't learn them all at once. The best way to learn is in the moment, through practice, and in bite-sized chunks. On Day 1, the parent may watch an introduction video. On Day 2, they may make flashcards. On Day 3, they may play a fun game with the flashcards with no learning objectives. What is the minimal learning a parent has to do each day to feel successful?
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="02" heading="Soft Starts" continueLine>
                <p className={styles.p}>
                  When I worked with i-Ready, we first introduced how to play a game before we taught a new skill (teach one thing at a time). Not only does a parent have to teach a new skill (phonics), but they also have to learn how to create structure around new learning games. Parent apps should have parents practice creating routine and game structures before starting to introduce educational content. Start by having kids practice animal sounds or shapes.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="03" heading="Eliminate Parent Choice" continueLine>
                <p className={styles.p}>
                  When I was designing a medical manual that instructed patients to "Insert 3 to 5 ml of insulin in the needle," the patients became confused. "Is it 3 or 4 or 5? How am I supposed to make a choice?" While choice may feel empowering as a designer, it often paralyzes and removes parents' confidence.
                </p>
                <p className={styles.p}>
                  In our app, we asked parents to choose between four different games to play with their child (it didn't matter which one they chose). Parents had to watch videos for all the games and then were not sure which one they should do. What sound should they work on? How long should they play? Are they making the right choices? None of these questions were critical, but they each created a moment of doubt for the "dreamers."
                </p>
                <p className={styles.p}>
                  Parents wanted the opposite of choice: "Just tell me that I am playing The Floor Is Lava while working on the 'B' sound." They wanted to open up the app and have an activity ready to go with their child — no thinking or choices required.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="04" heading="Hackable Tasks" continueLine>
                <p className={styles.p}>
                  There's no way for Spencer to know every parent's situation. A common worry was "My kid has a lot of energy, and you probably did not account for that." While mothers do not want to have to think about daily exercises, when they do see the need for a change, they need to be empowered. If the activity today is "Teach your doll" but Mom needs her son to run around, she needs to be able to switch activities. So while everything starts as directed, parents need to be able to modify the lesson with additional, optional effort.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="05" heading="Leave AI in the Background" continueLine>
                <p className={styles.p}>
                  The TCR team thought a helper bot could answer questions parents might have, such as, "My child is not engaging; what should I do?"
                </p>
                <p className={styles.p}>
                  We put a FAQ section in the app, and no parents read it. Asking an app for help is like making a choice — it requires thinking, energy, and planning, which our "dreamer" parents didn't want.
                </p>
                <p className={styles.p}>
                  However, they were all excited about the app working in the background making those activity choices for them. "Our algorithm sees that your child has mastered the 'S' sound, and we recommend you to move on to 'M.'" This type of AI that doesn't require input but provides clear, intelligent direction was viewed as the best feature for our future prototype.
                </p>
              </ArticleTimelineItem>
              <ArticleTimelineItem step="06" heading="Mandatory Fun">
                <p className={styles.p}>
                  Parents don't want to fight with their kids to learn how to read. The #1 determinant of if a parent will use the app is if their child loves it and asks to play again.
                </p>
                <p className={styles.p}>
                  In reality, many things that make learning fun are on the parent. Is Mom excited? How does Mom handle failure? How does she celebrate successes? We need to help Mom sell our app. We know this "fun factor" is critical for the app and will be prototyping new ways for apps to empower parents to make learning fun.
                </p>
              </ArticleTimelineItem>
            </ArticleTimeline>
          </div>


          <ArticleSectionHeading>Empowering Parents Requires Critical Design Research</ArticleSectionHeading>

          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.p} reveal`}>
                This research study was a small, weeklong study looking at how to empower parents. What I have learned is that the future of learning can and should be in parents' hands. While parents are not expert teachers, that one-on-one time with early readers is so much more impactful than in the classrooms I work at with 30 children who are all behind and don't want to be there.
              </p>
              <p className={`${styles.p} reveal`}>
                But the future of reading can only be in parents' hands if they are empowered. Future design should look to remove the requirement of having to be an expert in academics, planning, and entertaining. We need parents to feel that they can just push Play and they will be the Supermom. And I 100% believe moms can be the Supermoms when it comes to literacy — we just need design apps to help them believe in themselves.
              </p>
            </div>
          </div>

          <ArticleClosing>
            We need parents to feel that they can just push Play and they will be the Supermom.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone building tools for parents or caregivers."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
