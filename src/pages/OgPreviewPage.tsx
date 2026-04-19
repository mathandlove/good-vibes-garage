const OG_IMAGES = [
  { slug: 'adding-rewards', label: 'Adding Rewards' },
  { slug: 'ai-abstinence', label: 'AI Abstinence' },
  { slug: 'death-of-curiosity', label: 'Death of Curiosity' },
  { slug: 'designing-wonder-io', label: 'Designing Wonder.io' },
  { slug: 'digital-math', label: 'Digital Math' },
  { slug: 'education-com-gamification', label: 'Education.com Gamification' },
  { slug: 'empowering-parents', label: 'Empowering Parents' },
  { slug: 'feel-their-learning', label: 'Feel Their Learning' },
  { slug: 'khanmigo', label: 'Khanmigo' },
  { slug: 'lego-reading', label: 'Lego Reading' },
  { slug: 'lego-technic', label: 'Lego Technic' },
  { slug: 'level-up', label: 'Level Up' },
  { slug: 'lowes-vacuum', label: "Lowe's Vacuum" },
  { slug: 'middle-school-tests', label: 'Middle School Tests' },
  { slug: 'personalized-learning', label: 'Personalized Learning' },
  { slug: 'question-based-reading', label: 'Question-Based Reading' },
  { slug: 'remote-classrooms', label: 'Remote Classrooms' },
  { slug: 'rubric-for-engaging-educational-games', label: 'Rubric for Educational Games' },
  { slug: 'teacher-adoption', label: 'Teacher Adoption' },
]

export default function OgPreviewPage() {
  return (
    <div style={{ background: '#111', minHeight: '100vh', padding: '40px 24px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#fff', fontSize: '20px', marginBottom: '8px', fontWeight: 600 }}>OG Image Preview</h1>
      <p style={{ color: '#888', fontSize: '13px', marginBottom: '40px' }}>
        {OG_IMAGES.length} images · 1200×630 target · internal only
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
        gap: '32px',
      }}>
        {OG_IMAGES.map(({ slug, label }) => (
          <div key={slug}>
            <img
              src={`/og-${slug}.jpg`}
              alt={label}
              style={{
                width: '100%',
                aspectRatio: '1200 / 630',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '6px',
                border: '1px solid #333',
              }}
              onError={(e) => {
                const el = e.currentTarget
                el.style.background = '#2a0a0a'
                el.style.border = '1px solid #7f1d1d'
                el.alt = `MISSING: og-${slug}.jpg`
              }}
            />
            <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ color: '#e5e5e5', fontSize: '13px', fontWeight: 500 }}>{label}</span>
              <span style={{ color: '#555', fontSize: '11px', fontFamily: 'monospace' }}>og-{slug}.jpg</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
