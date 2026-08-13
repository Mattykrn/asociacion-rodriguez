import { useState, useEffect, useCallback } from 'react'

// Categorías de la galería.
// Para agregar fotos: subí imágenes a public/assets/images/gallery/{name}/
// con formato {name}-1.jpg, {name}-2.jpg, ... y cambiá su `count`.
const CATEGORIES = [
  {
    name: 'herreria',
    label: 'Herrería y Soldadura',
    count: 24,
  },
  {
    name: 'aire-acondicionado',
    label: 'Aire Acondicionado',
    count: 0,
  },
  {
    name: 'apoyo-escolar',
    label: 'Apoyo Escolar',
    count: 0,
  },
  {
    name: 'cocina',
    label: 'Cocina y Salida Laboral',
    count: 0,
  },
  {
    name: 'alfabetizacion-digital',
    label: 'Alfabetización Digital',
    count: 0,
  },
  {
    name: 'institucional',
    label: 'Actividades institucionales',
    count: 0,
  },
]

function buildItems() {
  return CATEGORIES.filter(c => c.count > 0).map(cat => ({
    name: cat.name,
    label: cat.label,
    items: Array.from({ length: cat.count }, (_, i) => ({
      src: `/assets/images/gallery/${cat.name}/${cat.name}-${i + 1}.jpg`,
      label: `${cat.label} ${i + 1}`,
    })),
  }))
}

const GALLERY_DATA = buildItems()
const ALL_ITEMS = GALLERY_DATA.flatMap(c => c.items)

/* ── Lightbox ── */
function Lightbox({ item, onClose, onPrev, onNext }) {
  // Close on Escape, navigate with arrows
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Cerrar">✕</button>

      <button
        className="lightbox-nav lightbox-prev"
        onClick={e => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
      >
        ‹
      </button>

      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <img src={item.src} alt={item.label} />
        <p className="lightbox-caption">{item.label}</p>
      </div>

      <button
        className="lightbox-nav lightbox-next"
        onClick={e => { e.stopPropagation(); onNext() }}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  )
}

/* ── Gallery ── */
const VER_MAS_LIMIT = 6

export default function Gallery({ showTitle = true }) {
  const [expanded, setExpanded] = useState({})
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const toggle = name => setExpanded(p => ({ ...p, [name]: !p[name] }))

  const openLightbox = src => {
    const idx = ALL_ITEMS.findIndex(i => i.src === src)
    if (idx !== -1) setLightboxIdx(idx)
  }
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const goPrev = useCallback(() => setLightboxIdx(i => (i - 1 + ALL_ITEMS.length) % ALL_ITEMS.length), [])
  const goNext = useCallback(() => setLightboxIdx(i => (i + 1) % ALL_ITEMS.length), [])

  return (
    <section className="section">
      <div className="container">
        {showTitle && (
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="tag">Galería</div>
            <div className="accent-line centered" />
            <h2 className="section-title">Proyectos y Acciones</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Compartimos imágenes de los talleres, eventos y acciones que llevamos adelante.
            </p>
          </div>
        )}
        {GALLERY_DATA.map(cat => {
          const visible = expanded[cat.name]
            ? cat.items
            : cat.items.slice(0, VER_MAS_LIMIT)
          return (
            <div key={cat.name} style={{ marginBottom: '3rem' }}>
              <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.75rem' }}>
                {cat.label}
              </h3>
              <div className="gallery-grid">
                {visible.map(item => (
                  <div
                    className="gallery-item"
                    key={item.src}
                    onClick={() => openLightbox(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.label}
                      loading="lazy"
                      onError={e => { e.target.parentElement.style.display = 'none' }}
                    />
                    <div className="overlay"><span>{item.label}</span></div>
                  </div>
                ))}
              </div>
              {cat.items.length > VER_MAS_LIMIT && (
                <button
                  type="button"
                  className="ver-mas-btn"
                  onClick={() => toggle(cat.name)}
                >
                  {expanded[cat.name] ? 'Ver menos' : `Ver más (${cat.items.length - VER_MAS_LIMIT})`}
                </button>
              )}
            </div>
          )
        })}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          item={ALL_ITEMS[lightboxIdx]}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}
