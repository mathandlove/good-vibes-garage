import { useEffect } from 'react'
import Nav from '../components/Nav'
import Writing from '../components/Writing'
import Footer from '../components/Footer'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function useHeroEntrance() {
  useEffect(() => {
    const timer = setTimeout(() => {
      let seq = 0
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          setTimeout(() => el.classList.add('visible'), seq * 80)
          seq++
        }
      })
    }, 150)
    return () => clearTimeout(timer)
  }, [])
}

export default function WritingPage() {
  useScrollReveal()
  useHeroEntrance()

  return (
    <>
      <Nav />
      <main>
        <Writing />
      </main>
      <Footer />
    </>
  )
}
