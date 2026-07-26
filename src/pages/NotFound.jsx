import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>Página no encontrada</h1>
        <p>La página que buscás no existe o fue movida.</p>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
