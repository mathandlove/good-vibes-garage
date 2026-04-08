import styles from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={`${styles.card} reveal`}>
          <blockquote className={styles.quote}>
            "I started with 'this is crazy, there's no way I can do it.' Now I
            actually run my own company where people hire me to build things
            for&nbsp;them."
          </blockquote>
          <div className={styles.attribution}>
            <div>
              <p className={styles.name}>Kristen</p>
              <p className={styles.role}>
                Lawyer turned vibe coder &mdash; built her first app in a single session
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
