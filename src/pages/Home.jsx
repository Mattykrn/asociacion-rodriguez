import Hero from '../components/Hero'
import Gallery from '../components/Gallery'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Quiénes Somos */}
      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="tag">Quiénes Somos</div>
              <div className="accent-line" />
              <h2 className="section-title">Nuestra Historia</h2>
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
              <a href="/about" className="btn btn-outline-primary">
                Conocé más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
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

      {/* Misión + Visión */}
      <section className="section section-warm">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Nuestros Principios</div>
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

      {/* Qué Hacemos */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Áreas de Trabajo</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Qué Hacemos</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Desarrollamos programas integrales para acompañar a las familias y personas de nuestra comunidad.
            </p>
          </div>
          <div className="grid-4">
            {[
              { icon: 'food', color: 'gold', title: 'Ayuda Alimentaria', desc: 'Asistimos a familias en situación de vulnerabilidad con alimentos nutritivos y refuerzo escolar para niños.' },
              { icon: 'health', color: 'green', title: 'Salud y Bienestar', desc: 'Promovemos jornadas de salud, controles médicos y campañas de prevención en barrios de Santa Fe.' },
              { icon: 'education2', color: 'blue', title: 'Educación', desc: 'Brindamos apoyo escolar, becas y talleres de formación para niños, jóvenes y adultos.' },
              { icon: 'family', color: 'gold', title: 'Apoyo a Familias', desc: 'Acompañamos a familias con orientación social, contención emocional y gestión de recursos.' },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} className="card service-card">
                <div className={`service-icon ${color}`}>
                  {icon === 'food' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>}
                  {icon === 'health' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
                  {icon === 'education2' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5"/></svg>}
                  {icon === 'family' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería (preview) */}
      <Gallery />

      {/* Contacto CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Sumate a nuestra causa</h2>
          <p>
            Comunicate con nosotros por WhatsApp. Queremos escucharte y trabajar juntos
            por una comunidad más justa y solidaria.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/a.c.m.a.r/" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'linear-gradient(135deg,#833AB4,#FD1D1D,#FCAF45)', color: 'var(--white)', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592102715263" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: '#1877F2', color: 'var(--white)', fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
            <a href="https://wa.me/543425428160" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="/contact" className="btn btn-gold" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Más datos de contacto
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
