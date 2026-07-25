import { useState } from 'react'

const IMAGES = [
  { src: '/assets/images/gallery/placeholder-1.jpg', label: 'Actividad institucional' },
  { src: '/assets/images/gallery/placeholder-2.jpg', label: 'Evento comunitario' },
  { src: '/assets/images/gallery/placeholder-3.jpg', label: 'Reunión de trabajo' },
  { src: '/assets/images/gallery/placeholder-4.jpg', label: 'Jornada solidaria' },
  { src: '/assets/images/gallery/placeholder-5.jpg', label: 'Capacitación' },
  { src: '/assets/images/gallery/placeholder-6.jpg', label: 'Entrega de donaciones' },
  { src: '/assets/images/gallery/placeholder-7.jpg', label: 'Taller educativo' },
  { src: '/assets/images/gallery/placeholder-8.jpg', label: 'Celebración especial' },
  { src: '/assets/images/gallery/placeholder-9.jpg', label: 'Visita institucional' },
]

export default function Gallery({ showTitle = true }) {
  const [loaded, setLoaded] = useState({})

  return (
    <section className="section">
      <div className="container">
        {showTitle && (
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Galería</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Proyectos y Acciones</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Compartimos imágenes de los programas, eventos y acciones que llevamos adelante.
            </p>
          </div>
        )}
        <div className="gallery-grid">
          {IMAGES.map(item => (
            <div key={item.src} className="gallery-item">
              {!loaded[item.src] && (
                <div className="gallery-placeholder">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
              )}
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                onLoad={() => setLoaded(p => ({ ...p, [item.src]: true }))}
                onError={e => { e.target.style.display = 'none' }}
                style={{ display: loaded[item.src] ? 'block' : 'none' }}
              />
              <div className="overlay"><span>{item.label}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
