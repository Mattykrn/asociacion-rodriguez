import { useState } from 'react'

// Trabajos de herrería: cada entrada es una sesión de fotos de un encargo
// (todas las tomas de ese trabajo, renombradas herreria-N.jpg en orden).
const HERRERIA_JOBS = [
  { title: 'Trabajo 1', date: 'Diciembre 2018', from: 1, count: 2 },
  { title: 'Trabajo 2', date: 'Agosto 2019', from: 3, count: 8 },
  { title: 'Trabajo 3', date: 'Agosto 2019', from: 11, count: 7 },
  { title: 'Trabajo 4', date: 'Agosto 2020', from: 18, count: 12 },
  { title: 'Trabajo 5', date: 'Octubre 2020', from: 30, count: 11 },
  { title: 'Trabajo 6', date: 'Noviembre 2020', from: 41, count: 11 },
  { title: 'Trabajo 7', date: 'Enero 2021', from: 52, count: 3 },
  { title: 'Trabajo 8', date: 'Septiembre 2021', from: 55, count: 5 },
  { title: 'Trabajo 9', date: 'Diciembre 2021', from: 60, count: 3 },
  { title: 'Trabajo 10', date: 'Selección', from: 63, count: 19 },
  { title: 'Trabajo 11', date: 'Selección manual', from: 82, count: 24 },
  { title: 'Trabajo 12', date: 'Selección', from: 106, count: 7 },
]

// Para reactivar una categoría cuando se carguen sus fotos:
// subí las imágenes a public/assets/images/gallery/{name}/ con el formato
// {name}-1.jpg, {name}-2.jpg, ... y cambiá su `count` de 0 al número real.
// Si la categoría tiene trabajos/encargos identificables, definí un arreglo
// como HERRERIA_JOBS (title, date, from, count) y usá `jobs` en vez de `count`.
const CATEGORIES = [
  {
    name: 'herreria',
    label: 'Herrería y Soldadura',
    jobs: HERRERIA_JOBS,
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

function buildGroups() {
  return CATEGORIES.filter(({ count, jobs }) => (jobs ? jobs.length : count) > 0).map(cat => {
    const groups = cat.jobs
      ? cat.jobs.map(job => ({
          title: `${job.title} · ${job.date}`,
          items: Array.from({ length: job.count }, (_, i) => ({
            src: `/assets/images/gallery/${cat.name}/${cat.name}-${job.from + i}.jpg`,
            label: `${job.title} ${i + 1}`,
          })),
        }))
      : [{
          title: cat.label,
          items: Array.from({ length: cat.count }, (_, i) => ({
            src: `/assets/images/gallery/${cat.name}/${cat.name}-${i + 1}.jpg`,
            label: `${cat.label} ${i + 1}`,
          })),
        }]
    return { name: cat.name, label: cat.label, groups }
  })
}

const GROUPS = buildGroups()

function GalleryItem({ item, loaded, onLoad }) {
  return (
    <div className="gallery-item">
      {!loaded[item.src] && (
        <div className="gallery-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span>{item.label}</span>
        </div>
      )}
      <img
        src={item.src}
        alt={item.label}
        loading="lazy"
        onLoad={onLoad}
        onError={e => { e.target.style.display = 'none' }}
        style={{ display: loaded[item.src] ? 'block' : 'none' }}
      />
      <div className="overlay"><span>{item.label}</span></div>
    </div>
  )
}

const VER_MAS_LIMIT = 6

export default function Gallery({ showTitle = true }) {
  const [loaded, setLoaded] = useState({})
  const [expanded, setExpanded] = useState({})
  const onLoad = src => setLoaded(p => ({ ...p, [src]: true }))
  const toggle = name => setExpanded(p => ({ ...p, [name]: !p[name] }))

  const cats = GROUPS.map(cat => ({
    ...cat,
    allItems: cat.groups.flatMap(g => g.items),
  }))

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
        {cats.map(cat => {
          const visible = expanded[cat.name]
            ? cat.allItems
            : cat.allItems.slice(0, VER_MAS_LIMIT)
          return (
            <div key={cat.name} style={{ marginBottom: '3rem' }}>
              <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '1.75rem' }}>
                {cat.label}
              </h3>
              <div className="gallery-grid">
                {visible.map(item => (
                  <GalleryItem key={item.src} item={item} loaded={loaded} onLoad={() => onLoad(item.src)} />
                ))}
              </div>
              {cat.allItems.length > VER_MAS_LIMIT && (
                <button
                  type="button"
                  className="ver-mas-btn"
                  onClick={() => toggle(cat.name)}
                >
                  {expanded[cat.name] ? 'Ver menos' : `Ver más (${cat.allItems.length - VER_MAS_LIMIT})`}
                </button>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
