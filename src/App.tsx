import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SXSW from './components/SXSW'
import Series from './components/Series'
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'
import { useScrollReveal, useHeroEntrance } from './hooks/useScrollReveal'

function useMouseGlow() {
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])
}

export default function App() {
  useScrollReveal()
  useHeroEntrance()
  useMouseGlow()

  return (
    <>
      <Helmet>
        <title>Good Vibes Garage — Dr. Elliott Hedman</title>
        <meta name="description" content="Dr. Elliott Hedman writes about learning, play, and the design of motivation. Researcher, game designer, and education technologist." />
        <link rel="canonical" href="https://goodvibesgarage.ai/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Good Vibes Garage — Dr. Elliott Hedman" />
        <meta property="og:description" content="Dr. Elliott Hedman writes about learning, play, and the design of motivation. Researcher, game designer, and education technologist." />
        <meta property="og:url" content="https://goodvibesgarage.ai/" />
        <meta property="og:image" content="https://goodvibesgarage.ai/og-ai-abstinence.jpg" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Good Vibes Garage — Dr. Elliott Hedman" />
        <meta name="twitter:description" content="Dr. Elliott Hedman writes about learning, play, and the design of motivation. Researcher, game designer, and education technologist." />
        <meta name="twitter:image" content="https://goodvibesgarage.ai/og-ai-abstinence.jpg" />

        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Elliott Hedman",
          "url": "https://goodvibesgarage.ai/",
          "jobTitle": "Researcher & Game Designer",
          "description": "Dr. Elliott Hedman researches learning, play, and the design of motivation.",
          "sameAs": []
        })}</script>
      </Helmet>
      <Nav />
      <main>
        <Hero />

        <SXSW />
        <About />
        <Work />
        <Series />

        <section className="pullQuoteSection reveal">
          <div className="pullQuoteInner">
            When our skills don't meet what we want to produce, we lose the
            ability to create. AI flips that switch — now it can help you build
            things you can't even fully imagine yourself.
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
