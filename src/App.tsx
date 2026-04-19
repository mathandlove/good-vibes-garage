import { useEffect } from 'react'
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
