export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Nuestra Historia</h1>
          <p>De dónde venimos y por qué cada día luchamos por los que quedaron atrás.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="tag">Nuestro Origen</div>
              <div className="accent-line" />
              <h2 className="section-title">Nacimos para dar una segunda oportunidad</h2>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                La Asociación Civil Monseñor Antonio Rodríguez fue constituida legalmente el 15 de junio de 2010
                por un grupo de ciudadanos de Santa Fe que entendieron que la falta de oportunidades
                y la exclusión no se combaten con indiferencia. Se combaten con oficio, con
                contención y con oportunidad.
              </p>
              <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                Desde entonces trabajamos con jóvenes y adultos en situación de vulnerabilidad.
                No preguntamos de dónde vienen. Les damos herramientas para construir un futuro
                distinto. Cada taller, cada plato de comida, cada palabra de aliento es un ladrillo
                en esa segunda oportunidad que todos merecen.
              </p>
              <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1.05rem', borderLeft: '3px solid var(--gold)', paddingLeft: '1rem', marginBottom: '1.5rem' }}>
                "No hay persona irrecuperable. Hay personas que todavía no encontraron su oficio."
              </p>
              <div className="data-list" style={{ marginTop: '2rem' }}>
                {[
                  { label: 'Constitución', value: '15 de junio de 2010' },
                  { label: 'CUIT', value: '30-71164449-7' },
                  { label: 'IGPJ', value: 'Resolución Nº 406' },
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
                <img
                  src="/assets/images/about.jpg"
                  alt="Trabajo de herrería de la Asociación Civil Monseñor Antonio Rodríguez"
                  style={{ width: '100%', aspectRatio: '16 / 10', objectFit: 'cover', borderRadius: 'var(--radius)', marginBottom: '1.5rem', border: '1px solid var(--border)' }}
                />
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center' }}>
                  "Cada persona que sale adelante es una victoria de toda la comunidad."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Cómo trabajamos</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Tres pilares, un solo objetivo</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Que cada persona que llega pueda irse con un oficio, una red de contención y
              la certeza de que su vida puede cambiar.
            </p>
          </div>
          <div className="grid-2" style={{ marginBottom: '2.5rem' }}>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="principle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h3 className="principle-title">Formación en oficios</h3>
              <p className="principle-desc">Talleres prácticos con salida laboral real. Herrería y soldadura, instalación de aire acondicionado, cocina y alfabetización digital. Cada taller está diseñado para que el alumno pueda emprender o insertarse en el mercado laboral.</p>
            </div>
            <div className="card" style={{ padding: '2.5rem' }}>
              <div className="principle-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </div>
              <h3 className="principle-title">Contención emocional</h3>
              <p className="principle-desc">Sabemos que arrancar de cero no es fácil. Acompañamos con escucha activa, orientación y seguimiento personalizado. Sin juzgar. Sin plazos. Sin condiciones.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://wa.me/543425428160" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Quiero sumarme — escribime
            </a>
          </div>
        </div>
      </section>
    </>
  )
}