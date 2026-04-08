import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import SXSW from './components/SXSW'
import Series from './components/Series'
import Testimonial from './components/Testimonial'
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

function useHeroEntrance() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el, i) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          setTimeout(() => el.classList.add('visible'), i * 80)
        }
      })
    }, 100)
    return () => clearTimeout(timer)
  }, [])
}

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

        <Series />
        <Testimonial />
        <Work />
        <SXSW />

        <section className="pullQuoteSection reveal">
          <div className="pullQuoteInner">
            When our skills don't meet what we want to produce, we lose the
            ability to create. AI flips that switch.
            <span className="pullQuoteAttr">&mdash; Elliott, SXSW EDU 2025</span>
          </div>
        </section>

        <About />
      </main>
      <Footer />
    </>
  )
}
