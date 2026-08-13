import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-pattern" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Asociación Civil · Santa Fe · Desde 2010
          </div>
          <h1>
            Una <span>segunda oportunidad</span><br />
            para los jóvenes de Santa Fe
          </h1>
          <p style={{ fontSize: '1.2rem', fontWeight: 500, marginBottom: '1rem' }}>
            Capacitación en oficios. Trabajos de herrería profesional. Una comunidad que te apoya.
          </p>
          <p>
            En la Asociación Monseñor Antonio Rodríguez formamos a jóvenes y adultos en
            oficios con salida laboral. También producimos y vendemos estructuras de hierro:
            rejas, portones, barandales y restauración. Todo a través de un mismo WhatsApp.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/543425428160?text=Hola%2C%20quiero%20capacitarme%20en%20un%20oficio.%20Necesito%20una%20oportunidad." target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quiero capacitarme
            </a>
            <Link to="/herreria" className="btn btn-outline">
              Cotizar herrería
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
          <div style={{ marginTop: '1rem' }}>
            <Link to="/courses" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', textDecoration: 'underline' }}>
              Ver talleres disponibles →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
