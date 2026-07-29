import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Impacto */}
      <section className="section" style={{ padding: '3rem 0', background: 'var(--primary)', color: 'var(--white)' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center', gap: '1rem' }}>
            {[
              { num: '+200', label: 'Jóvenes acompañados' },
              { num: '85%', label: 'Consiguió trabajo o volvió a estudiar' },
              { num: '5', label: 'Talleres de formación activos' },
              { num: '2010', label: 'Constitución' },
            ].map(({ num, label }) => (
              <div key={label} style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1, marginBottom: '0.5rem', color: 'var(--gold-light)' }}>
                  {num}
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 500, opacity: 0.8, letterSpacing: '0.02em' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué Hacemos */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Nuestra Misión</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Un oficio puede cambiarlo todo</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              En Santa Fe conseguir trabajo no es fácil. Por eso formamos a jóvenes y adultos
              en oficios con salida laboral real. Herrería, aire acondicionado, cocina,
              alfabetización digital. Les damos herramientas, contención y la oportunidad
              de construir su propio futuro.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: 'tools', color: 'blue',
                title: 'Talleres de oficio',
                desc: 'Herrería y soldadura, instalación de aire acondicionado, cocina, alfabetización digital. Capacitación real para una salida laboral concreta.',
              },
              {
                icon: 'heart', color: 'gold',
                title: 'Contención y acompañamiento',
                desc: 'Un espacio donde no se juzga. Escucha activa, orientación y seguimiento personalizado para cada persona que llega.',
              },
              {
                icon: 'users', color: 'green',
                title: 'Reinserción social y laboral',
                desc: 'Vinculación con empresas, bolsa de trabajo, terminalidad educativa y apoyo para construir un proyecto de vida.',
              },
            ].map(({ icon, color, title, desc }) => (
              <div key={title} className="card" style={{ padding: '2.5rem', textAlign: 'center' }}>
                <div className={`service-icon ${color}`} style={{ margin: '0 auto 1.25rem' }}>
                  {icon === 'tools' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>}
                  {icon === 'heart' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>}
                  {icon === 'users' && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Herrería Profesional */}
      <section className="section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Herrería Profesional</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Trabajos en hierro a medida</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Además de formar en el oficio, producimos y vendemos estructuras de hierro de calidad.
              Rejas, portones, barandales, pintura y restauración. Presupuesto sin cargo.
            </p>
          </div>
          <div className="grid-3">
            {[
              { icon: 'grid', title: 'Rejas y Portones', desc: 'Fabricación e instalación de rejas para ventanas, puertas y portones corredizos o batientes.' },
              { icon: 'barandales', title: 'Barandales y Pasamanos', desc: 'Barandales para escaleras, balcones y terrazas. Diseños clásicos y modernos.' },
              { icon: 'estructura', title: 'Estructuras Metálicas', desc: 'Techos, tinglados, pérgolas y soportes. Calculamos y fabricamos a medida.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: 'var(--radius)', background: 'rgba(196, 155, 74, 0.1)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
                  {icon === 'grid' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
                  {icon === 'barandales' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="3 10 3 21"/><polyline points="21 10 21 21"/><line x1="3" y1="15" x2="21" y2="15"/></svg>}
                  {icon === 'estructura' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="/herreria" className="btn btn-gold" style={{ fontSize: '1.05rem' }}>
              Ver todos los servicios de herrería
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section section-warm">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Historias Reales</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Ellos encontraron una salida. Vos también podés.</h2>
          </div>
          <div className="grid-2">
            {[
              {
                text: 'No tenía trabajo, no tenía oficio, no sabía para dónde agarrar. En el taller de herrería aprendí soldadura y hoy tengo mi propio emprendimiento. La asociación me dio las herramientas y la confianza que nadie me había dado.',
                name: 'Lautaro M.',
                age: '29 años — Emprendedor, ex alumno del taller de herrería',
              },
              {
                text: 'Llegué sin nada, sin estudios, sin experiencia. En la cocina encontré lo que me gusta y encima aprendí un oficio. Hoy trabajo en un comedor y ayudo a formar a otros que están arrancando como yo arranqué.',
                name: 'Sofía R.',
                age: '34 años — Cocinera, egresada del taller de cocina',
              },
            ].map(({ text, name, age }) => (
              <div key={name} className="card" style={{ padding: '2.5rem', position: 'relative' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.15, marginBottom: '1rem' }}>
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{text}"
                </p>
                <div>
                  <strong style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>{name}</strong>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>{age}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA doble: Capacitación + Herrería */}
      <section className="cta-section">
        <div className="container">
          <div className="tag" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--gold-light)' }}>
            Estamos para ayudarte
          </div>
          <h2>¿Querés capacitarte o necesitás un trabajo de herrería?</h2>
          <p>
            Dos servicios, un mismo WhatsApp. Escribinos y te respondemos a la brevedad.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/543425428160?text=Hola%2C%20quiero%20empezar%20un%20oficio%20y%20conseguir%20trabajo."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Quiero capacitarme
            </a>
            <a
              href="https://wa.me/543425428160?text=Hola%2C%20quiero%20cotizar%20un%20trabajo%20de%20herrer%C3%ADa."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ fontSize: '1.1rem', padding: '1.2rem 2.5rem' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Cotizar trabajo de herrería
            </a>
          </div>
        </div>
      </section>
    </>
  )
}