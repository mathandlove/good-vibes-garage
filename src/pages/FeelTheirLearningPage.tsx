import { Helmet } from 'react-helmet-async'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {
  ArticleHeader,
  ArticleCard,
  ArticleImage,
  ArticleSectionHeading,
  ArticleClosing,
  ArticleCta,
  articleStyles as styles,
} from '../components/article'
import { useScrollReveal, useHeroEntrance } from '../hooks/useScrollReveal'

import abbeySkinconductance from '../assets/Images/feelingoflearning/abbeyskinconductance.webp'
import childPlayingWithLego from '../assets/Images/feelingoflearning/childPlayingwtihLego.webp'
import dominicGetsHooked from '../assets/Images/feelingoflearning/dominicgetshooked.webp'
import dominicIsExcited from '../assets/Images/feelingoflearning/dominicisexcited.webp'
import instructiveAnimations from '../assets/Images/feelingoflearning/instructiveANimations.webp'

const CANONICAL_URL = 'https://goodvibesgarage.ai/writing/feel-their-learning'
const OG_IMAGE = 'https://goodvibesgarage.ai/og-feel-their-learning.jpg'

export default function FeelTheirLearningPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Helmet>
        <title>7 Ways to Help Kids Feel They're Learning | Elliott Hedman</title>
        <meta name="description" content="Digital lessons aren't delivering the feeling of learning kids need. Elliott Hedman shares research from 200+ students on what actually sparks engagement and growth." />
        <link rel="canonical" href={CANONICAL_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="7 Ways to Help Kids Feel They're Learning" />
        <meta property="og:description" content="Digital lessons aren't delivering the feeling of learning kids need. Research from 200+ students on what actually sparks engagement and growth." />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2018-03-05" />
        <meta property="article:author" content="Elliott Hedman" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="7 Ways to Help Kids Feel They're Learning" />
        <meta name="twitter:description" content="Digital lessons aren't delivering the feeling of learning kids need. Research from 200+ students on what actually sparks engagement and growth." />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* JSON-LD structured data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "7 Ways to Help Kids Feel They're Learning",
          "description": "Digital lessons aren't delivering the feeling of learning kids need. Research from 200+ students on what actually sparks engagement and growth.",
          "author": {
            "@type": "Person",
            "name": "Elliott Hedman",
            "url": "https://goodvibesgarage.ai"
          },
          "datePublished": "2018-03-05",
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
            date="March 5, 2018"
            author="Elliott Hedman"
            readTime="9 min read"
            title="7 Ways to Help Kids Feel They're Learning"
            subtitle="Kids want to feel like they are learning — and digital lessons are not delivering."
          />

          {/* ── SXSW EDU Talk ── */}
          <div className={styles.container}>
            <div className="reveal" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                src="https://player.vimeo.com/video/260646422"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="SXSW EDU Talk: 7 Ways to Help Kids Feel They're Learning"
              />
            </div>
          </div>

          {/* ── Intro prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <p className={`${styles.lead} reveal`}>
                Across several studies over three years, we tracked student responses to digital lessons and prototypes using eye tracking, sensors and interviews with over 200 students.
              </p>
              <p className={`${styles.p} reveal`}>
                We set out to develop a better understanding of the relationship between student engagement, motivation and learning. Our results point to a critical twist on the theory that engagement leads to better learning: the feeling of learning also leads to better engagement.
              </p>
            </div>
          </div>

          {/* ── What the Feeling of Learning Looks Like ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <h2 className={`${styles.h2} reveal`}>What the Feeling of Learning Looks Like</h2>
              <h3 className={`${styles.h3} reveal`}>When Kindergartners feel like they are learning, they are highly engaged</h3>
              <p className={`${styles.p} reveal`}>
                Working in Title One classrooms and the Boys and Girls Club of Metro Denver, we asked children to try various digital learning products while wearing eye tracking glasses and emotional MOXO sensors. These tools helped show what parts of the learning experience engage students and motivate student learning.
              </p>
              <p className={`${styles.p} reveal`}>
                Our MOXO sensors measure children's subconscious, emotional reactions through micro changes in their sweat glands. As spikes occur in the MOXO sensor data, children are becoming more alert, emotionally reacting, and paying attention: they are engaging.
              </p>
              <p className={`${styles.p} reveal`}>
                In previous work, we have used sensors to measure emotional spikes and corresponding engagement with LEGO sets, Minecraft, and board games, like below:
              </p>

              <ArticleImage
                src={childPlayingWithLego}
                alt="A child playing with LEGO: When this child is engaged with the LEGO set they have spikes of around 2 µS — a typical high engagement exercise."
                caption="A child playing with LEGO: When this child is engaged with the LEGO set they have spikes of around 2 µS — a typical high engagement exercise."
              />

              <p className={`${styles.p} reveal`}>
                An engaged child playing with LEGO bricks often shows strong emotional reactions with amplitudes of 2 to 3 µS: it's fun. Compare this emotional reaction to Abbey's, a Kindergarten student solving 26+7 for the first time.
              </p>

              <ArticleImage
                src={abbeySkinconductance}
                alt="Abbey's skin conductance solving 26+7. Abbey has 3 large reactions throughout the lesson. Compared to other play experiences, answering the question correctly is 6 µS — one of the largest reactions we have observed."
                caption="Abbey's skin conductance solving 26+7. Abbey has 3 large reactions throughout the lesson. Compared to other play experiences, answering the question correctly is 6 µS — one of the largest reactions we have observed."
              />

              <p className={`${styles.p} reveal`}>
                When Abbey is asked to solve 26+7 she counts on her fingers and answers incorrectly. But when she answers correctly, Abbey's sensor data jumps (6 µS): she is highly engaged, producing an emotional reaction three times larger than a boy playing with a new LEGO set. Afterwards, Abbey went up to a research colleague and pronounced, "I can add double digits!" When children experience that feeling of learning and growth, they are hooked.
              </p>
            </div>
          </div>

          {/* ── Ornamental divider ── */}
          <div className={styles.container}>
            <div className={`${styles.divider} reveal`}>✦</div>
          </div>

          {/* ── Passive teaching section ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <h2 className={`${styles.h2} reveal`}>Passive teaching fails to create a feeling of learning</h2>
              <p className={`${styles.p} reveal`}>
                During initial research tests, our client's lead hypothesis was that animations would engage students as colorful and charming characters taught them how to add double digits. This model was not far off from a teacher in front of a classroom lecturing.
              </p>
              <p className={`${styles.p} reveal`}>
                But this attempt to engage through passive animations failed. Here is Abbey's skin conductance before she solved 26+7. She becomes increasingly bored as the characters talk, and she starts looking for other stimulation. Only when she was asked to answer 26+7 did she start engaging again. For students like Abbey, digital lecturing was a poor way of instilling a feeling of learning.
              </p>

              <ArticleImage
                src={instructiveAnimations}
                alt="Instructive animations fail to create the feeling of learning. When listening to lectures, students typically do not react to content."
                caption='Instructive animations fail to create the feeling of learning. When listening to lectures, students typically do not react to content. As we discuss later in "7 ways to foster a feeling of learning," without interaction kids cannot see their learning in effect.'
              />

              <p className={`${styles.p} reveal`}>
                When Susie watched these same animations on how to group the number 10, she looked at a digital fishbowl distractor, watched her feet kick back and forth, looked at all fours walls, and watched everything but the screen. Only when Susie was asked to solve 26+7 did she reengage with the software.
              </p>
              <p className={`${styles.p} reveal`}>
                Disengagement with animated characters delivering lectures increases as kids grow older. Some middle school students pulled up other browser tabs and searched the internet while characters talked at them. Many students took off their headphones all together. Our client was ready to substantially invest in animations as the key method for digitally engaging kids, but stories like Abbey's and Susie's helped our clients shift that money from animations to building an experience where kids could feel those moments of learning.
              </p>
            </div>
          </div>

          {/* ── Boys and Girls Club section ── */}
          <div className={styles.container}>
            <div className={styles.body}>
              <h2 className={`${styles.h2} reveal`}>Engaging kids at the Boys and Girls Club with the feeling of learning</h2>
              <p className={`${styles.p} reveal`}>
                Most of the kids at the Boys and Girls Club are one to two grade levels below in math and reading. For many kids, before they tried our learning prototypes they would ask, "Do I have to do this?" Unlike Abbey, many of the Boys and Girls Club children no longer experience or seek that feeling of learning. School and homework became a task they are forced into with no sense of growth or pride in learning attached to it. It was in this setting we created a prototype (after many iterations) that could help students re-experience the feeling of learning.
              </p>

              <ArticleImage
                src={dominicGetsHooked}
                alt="Dominic gets hooked on the feeling of learning — Dominic (left) and a classmate work together learning Roman numerals."
                caption="Dominic gets hooked on the feeling of learning. Dominic (left) and a classmate work together learning Roman numerals."
              />

              <p className={`${styles.p} reveal`}>
                The prototype Dominic used had several features designed to spark engagement and a feeling of learning: he could try as many times as he wanted; a small reward framework, a star for every four correct answers, was carefully implemented; and the software never told Dominic how to solve anything unless he asked — something children in our studies seldom did.
              </p>
              <p className={`${styles.p} reveal`}>
                Dominic answered four questions correctly in a row (with 5 guesses) on difficult questions like "What is 900 in Roman numerals?" and then received a star and an avatar helmet for completion. Most times after receiving these stars, he gave a visible fist pump. His skin conductance showed the same: answering correctly brought him powerfully into the experience. And when getting a question right was tied to a star, that emotional reaction was further enhanced.
              </p>

              <ArticleImage
                src={dominicIsExcited}
                alt='Dominic is excited answering "What is 900 in roman numerals?" Dominic has small emotional reactions every time he answers a question, but the strength of those reactions is substantially enhanced if he got the first question wrong or there is a marker (star and avatar) as a consequence of that correct answer.'
                caption='Dominic is excited answering "What is 900 in roman numerals?" Dominic has small emotional reactions every time he answers a question, but the strength of those reactions is substantially enhanced if he got the first question wrong or there is a marker (star and avatar) as a consequence of that correct answer.'
              />

              <p className={`${styles.p} reveal`}>
                At the Boys and Girls club, this newly created feeling of learning was addicting. Dominic and other children were lining up to play again. Others would watch as their peers started solving how to translate roman numerals. We made learning the game and we hooked kids. Every day, Dominic and his friend asked us when they can play again. We could produce questions fast enough, and now Dominic, a 3rd grader, has already been able to identify MMCMXXIX as 2,929.
              </p>
            </div>
          </div>

          {/* ── Cards ── */}
          <div className={styles.cardsContainer}>

            <ArticleSectionHeading>7 Ways to Foster a Feeling of Learning</ArticleSectionHeading>

            <ArticleCard
              heading="Interactive, Not Passive"
              number="01"
            >
              <p className={styles.p}>
                Children feel learning after actively solving problems. In order to think, solve, and eventually feel that success they have to be the ones clicking, choosing, and getting to the right answer. Dominic skipped past all the text we showed him until a problem was in front of him. Only when he was asked for input did he try to make sense of what the "IV" meant in the question.
              </p>
            </ArticleCard>

            <ArticleCard
              heading="If They Don't Know They Can Fail, They Won't Know They Succeeded"
              reverse
              number="02"
            >
              <p className={styles.p}>
                When Dominic first started out his lesson he clicked through, guessing each question to get the star, but when he found out he had to get the answers right to get the star, he went back and tried again, looking at what the problem was asking. Compare this to older versions where children always "leveled up" regardless of incorrect answers and consequentially never moved beyond rapid guessing.
              </p>
            </ArticleCard>

            <ArticleCard
              heading="Learning Happens When Kids Can Try Until They Get It Right"
              number="03"
            >
              <p className={styles.p}>
                Dominic didn't learn Roman numerals the first time he tried again, either. He had to do the same four questions over and over again until he verbally said, "Oh, I get it." It's after answering a problem wrong, students begin to ask, "What do I not know here?" Good programs capitalize on that moment.
              </p>
            </ArticleCard>

            <ArticleCard
              heading="Try-It-Again Lets Kids Set Goals and Identify as Learners"
              reverse
              number="04"
            >
              <p className={styles.p}>
                Dominic's friend started playing with him, and the two kept trying to figure out the answers together. They had a goal: get that star. But if Dominic was told he failed and couldn't try again, how could we expect him to still care about trying future difficult tasks? After a failed answer, one computer savvy middle school student deleted the browser's history and all of the week's corresponding data to be able to try again and show he "knows" it. Across the spectrum of kids we tested, very seldom did they give up on a problem when given the choice to try again, sometimes trying ten or more times.
              </p>
            </ArticleCard>

            <ArticleCard
              heading="For a Kid to Feel They Learned It, They Have to Feel They Earned It"
              number="05"
            >
              <p className={styles.p}>
                One of the top complaints kids gave us with some of the original lessons was the content was too easy: "baby lessons." When children don't feel that sense of challenge and thinking hard, their pride in accomplishing a task diminishes. The same is true for giving feedback. Natasha told us, "It's not fair they give you the answers," requesting that she still be able to try after two to three guesses — students want to figure things out on their own. Giving students an answer tells the student, "You cannot figure this out on your own."
              </p>
            </ArticleCard>

            <ArticleCard
              heading="Kids Need a Clear Framework to Acknowledge Accomplishments"
              reverse
              number="06"
            >
              <p className={styles.p}>
                Without an external symbol like a badge or a coin or content unlocking to recognize an accomplishment, kids struggle to create actionable goals for their learning. When we gave our initial reading prototype to children, their feelings of learning were weak: "all" they did was read a book. When we attached six coins that lead to a simple badge if they answered every reading question correctly, students who were not reading the passages started rereading to ensure they could answer correctly.
              </p>
              <blockquote className={styles.blockquote}>
                Like the star at the end of a Super Mario level, these coins represented a form of acknowledgement and accomplishment that clearly communicates success criteria. Without these coins, correct answers did not carry meaning or weight.
              </blockquote>
              <p className={styles.p}>
                Video games also create acknowledgement: helping a frog cross the street, surviving for five minutes, or beating a boss are all strong forms of acknowledgement. For struggling learners in particular, external markers can support motivation by making growth visible.
              </p>
            </ArticleCard>

            <ArticleCard
              heading="Grades and Quizzes Can Shift Focus Away from the Feeling of Learning"
              number="07"
            >
              <p className={styles.p}>
                Starting in Middle School, grades and quizzes can be strong motivators. While it is good to see students motivated and engaged during the quiz, these quizzes tend to not be moments of learning: no feedback, scaffolding, or teaching. Our sensors showed that with an increase concentration on passing the quiz, students stopped being excited by the non-graded learning beforehand. In our digital lessons we tie grades and acknowledgement across the lesson — not just at the end when the learning part is done.
              </p>
            </ArticleCard>

          </div>

          {/* ── Closing prose ── */}
          <div className={styles.container}>
            <div className={styles.body}>

              <p className={`${styles.p} reveal`}>
                When we instantiated these design principles into our prototypes, kids started giving fist pumps upon getting correct answers, telling their parents they did not want to leave, and asking us where they could access the prototype online. These principles spark and cultivate a feeling of learning. For struggling students, this may be the only learning context in which they feel a sense of success and growth. Children have that inherent desire to learn, and we as designers owe it to them to nurture and sustain that in our digital learning products.
              </p>

              <p className={`${styles.p} reveal`}>
                What would it look like for educational technology designers to focus design success criteria on cultivating the feeling of learning? Effective classrooms already have teachers who set clear success criteria and corresponding expectations; they cultivate the feeling of learning. At New York Toy Fair recently, education vendors proudly claimed, "The kids learn and they do not even know it!" What would happen if instead, we spark and nurture the feeling of learning, and that feeling is our doorway to engagement?
              </p>

            </div>
          </div>

          <ArticleClosing>
            We see a future where students across all levels can be as excited as Abbey was when she learned 26+7 for the first time, but only after careful application of student-centered design principles focused on cultivating a feeling of learning.
          </ArticleClosing>

          <ArticleCta
            sharePrompt="If this landed, forward it to someone designing for kids."
          />

        </article>
      </main>

      <Footer />
    </>
  )
}
