import styles from './Series.module.css'

export default function Series() {
  return (
    <section className={`${styles.series} section`} id="series">
      <div className="container">
        <div className={styles.intro}>
          <h2 className={`${styles.heading} reveal`}>
            The Show
          </h2>
          <p className={`${styles.body} reveal reveal-delay-1`}>
            Every week, I sit down with someone doing social good &mdash; a
            teacher, a nonprofit director, someone with an idea they can't
            build yet &mdash; and we build it together using AI. I'm just
            getting started, and soon I'll be sharing these sessions.
          </p>
        </div>

        <div className={`${styles.actions} reveal reveal-delay-2`}>
          <p className={styles.guestLink}>
            Want to be one of the first?
          </p>
          <a href="mailto:elliott@goodvibesgarage.ai?subject=I have an idea" className={styles.guestLink}>
            Tell me about your idea &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
