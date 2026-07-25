export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Nuestra Institución</h1>
          <p>Conocé quiénes somos, qué hacemos y cómo trabajamos por la comunidad.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="tag">Identidad</div>
              <div className="accent-line" />
              <h2 className="section-title">Sobre la Asociación</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                La Asociación Civil Monseñor Antonio Rodríguez nace del compromiso de un grupo de
                ciudadanos de Santa Fe que comparten los valores de solidaridad, inclusión y desarrollo
                comunitario inspirados en la figura de Monseñor Antonio Rodríguez.
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Desde nuestra fundación trabajamos articulando esfuerzos con organizaciones públicas y
                privadas para generar un impacto positivo en la calidad de vida de los sectores más
                vulnerables de nuestra comunidad.
              </p>
              <div className="data-list" style={{ marginTop: '2rem' }}>
                {[
                  { label: 'Constitución', value: '2020' },
                  { label: 'CUIT', value: '30-XXXXXXXX-X' },
                  { label: 'IGPJ', value: 'Resolución Nº XXXX' },
                  { label: 'Ubicación', value: 'Santa Fe, Argentina' },
                ].map(({ label, value }) => (
                  <div key={label} className="data-item">
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="card" style={{ height: '100%' }}>
                <div className="about-image-placeholder">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-light)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center' }}>
                  "Trabajando por el bienestar y desarrollo de nuestra comunidad"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Principios</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Misión, Visión y Valores</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Los pilares que guían cada una de nuestras acciones y programas.
            </p>
          </div>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="principle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="principle-title">Misión</h3>
              <p className="principle-desc">Promover el desarrollo integral de la comunidad, con especial énfasis en sectores vulnerables, a través de programas de inclusión social, educativos y culturales que fortalezcan el tejido comunitario.</p>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="principle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 className="principle-title">Visión</h3>
              <p className="principle-desc">Ser una organización de referencia en la provincia de Santa Fe por la calidad de sus programas, la transparencia de su gestión y el impacto positivo en la calidad de vida de las personas.</p>
            </div>
          </div>
          <div className="values-grid">
            {[
              { label: 'Solidaridad', desc: 'Trabajamos por el bien común con empatía y compromiso genuino.' },
              { label: 'Inclusión', desc: 'Promovemos la participación de todos sin distinción.' },
              { label: 'Transparencia', desc: 'Gestionamos con honestidad y rendición de cuentas.' },
              { label: 'Compromiso', desc: 'Asumimos cada proyecto con responsabilidad y dedicación.' },
            ].map(({ label, desc }) => (
              <div key={label} className="card value-card">
                <div className="value-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h4 style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{label}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
