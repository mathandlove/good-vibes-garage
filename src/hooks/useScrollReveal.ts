import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.reveal')
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export function useHeroEntrance() {
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
