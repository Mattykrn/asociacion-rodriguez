export default function Herreria() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Herrería Profesional</h1>
          <p>Rejas, portones, barandales, estructuras de hierro y restauración. Trabajos a medida con calidad y compromiso.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Trabajos en Hierro</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Fabricación, reparación y restauración</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Realizamos todo tipo de trabajos en hierro y metal. Desde rejas y portones hasta
              estructuras complejas, pintura y restauración. Presupuesto sin cargo.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: 'grid',
                title: 'Rejas y Portones',
                desc: 'Rejas para ventanas, puertas y portones corredizos o batientes. Diseños clásicos y modernos, con terminación en pintura al horno o esmalte.',
              },
              {
                icon: 'barandales',
                title: 'Barandales y Pasamanos',
                desc: 'Barandales para escaleras, balcones y terrazas. Pasamanos rectos y curvas. Combinamos resistencia con estética.',
              },
              {
                icon: 'estructura',
                title: 'Estructuras Metálicas',
                desc: 'Techos, tinglados, galpones, pérgolas y soportes. Calculamos y fabricamos la estructura que necesitás para tu proyecto.',
              },
              {
                icon: 'pintura',
                title: 'Pintura y Terminaciones',
                desc: 'Pintura al horno, esmalte sintético, antioxidante y acabados especiales. Protegemos el hierro para que dure años.',
              },
              {
                icon: 'restauracion',
                title: 'Restauración',
                desc: 'Recuperamos rejas antiguas, portones históricos y muebles de hierro. Limpieza, soldadura, reparación y pintura completa.',
              },
              {
                icon: 'custom',
                title: 'Trabajos a Medida',
                desc: 'Mesas, sillas, bancos, estantes, camas, estructuras para comercios. Si lo imaginás, lo fabricamos en hierro.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{
                  width: '3.5rem', height: '3.5rem', borderRadius: 'var(--radius)',
                  background: 'rgba(196, 155, 74, 0.1)', color: 'var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}>
                  {icon === 'grid' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
                  {icon === 'barandales' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="21" x2="21" y2="21"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="3 10 3 21"/><polyline points="21 10 21 21"/><line x1="3" y1="15" x2="21" y2="15"/></svg>}
                  {icon === 'estructura' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                  {icon === 'pintura' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.5"/><path d="M12 4v3"/><path d="M10 4h4"/><circle cx="16.5" cy="17.5" r="2.5"/><path d="M18.5 15.5l4-4"/></svg>}
                  {icon === 'restauracion' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>}
                  {icon === 'custom' && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>}
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="tag">Por qué elegirnos</div>
              <div className="accent-line" />
              <h2 className="section-title">Calidad, confianza y precio justo</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Cada trabajo que sale de nuestra herrería lleva el compromiso de la asociación.
                Usamos materiales de primera calidad, soldadura profesional y terminaciones
                que garantizan durabilidad.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Presupuesto sin cargo',
                  'Trabajos a medida',
                  'Materiales de calidad',
                  'Terminaciones profesionales',
                  'Restauración de piezas antiguas',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text)', fontSize: '0.95rem' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
              <div style={{
                width: '5rem', height: '5rem',
                background: 'rgba(37, 211, 102, 0.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.5rem',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                Pedí tu presupuesto
              </h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '320px' }}>
                Contanos qué necesitás, te pasamos un presupuesto sin compromiso. Respondemos rápido por WhatsApp.
              </p>
              <a
                href="https://wa.me/543425428160?text=Hola%2C%20quiero%20cotizar%20un%20trabajo%20de%20herrer%C3%ADa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Cotizá tu trabajo
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="tag" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--gold-light)' }}>
            Servicio rápido
          </div>
          <h2>¿Necesitás un trabajo de herrería?</h2>
          <p>
            Escribinos por WhatsApp, contanos qué necesitás y te pasamos un presupuesto sin cargo.
            Rejas, portones, barandales, estructuras, pintura, restauración.
          </p>
          <a
            href="https://wa.me/543425428160?text=Hola%2C%20quiero%20cotizar%20un%20trabajo%20de%20herrer%C3%ADa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
            style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Cotizá tu trabajo por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
