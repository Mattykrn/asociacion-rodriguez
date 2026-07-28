import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">M</div>
            <div>
              <strong>Monseñor Antonio Rodríguez</strong>
              <span>Asociación Civil</span>
            </div>
          </div>
          <p>Acompañamos a jóvenes y adultos en situación de vulnerabilidad con formación laboral, contención y una segunda oportunidad. Santa Fe, Argentina.</p>
        </div>
        <div>
          <h4>Enlaces</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Nosotros</Link></li>
            <li><Link to="/courses">Talleres</Link></li>
            <li><Link to="/gallery">Galería</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Santa Fe, Argentina</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>monsenorantoniorodriguez@gmail.com</span>
            </li>
          </ul>
          <div className="social-links">
            <a href="https://www.instagram.com/a.c.m.a.r/" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919C16.584 22.928 16.206 22.94 12 22.94c-4.206 0-4.584-.012-4.85-.07C2.926 22.724.273 20.074.073 15.948.014 14.668 0 14.26 0 12c0-2.26.014-2.668.072-3.948C.272 3.926 2.924 1.272 7.15.072 8.43.014 8.838 0 12 0s3.57.014 4.85.072c4.226.2 6.878 2.854 7.078 7.08.058 1.28.072 1.688.072 3.948 0 2.26-.014 2.668-.072 3.948-.2 4.126-2.852 6.776-7.078 6.976C15.57 22.928 15.162 22.94 12 22.94zm0-5.838a6.162 6.162 0 100-12.324 6.162 6.162 0 000 12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592102715263" target="_blank" rel="noopener noreferrer" className="social-link facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/543425428160" target="_blank" rel="noopener noreferrer" className="social-link whatsapp" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social-row">
            <a href="https://www.instagram.com/a.c.m.a.r/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919C16.584 22.928 16.206 22.94 12 22.94c-4.206 0-4.584-.012-4.85-.07C2.926 22.724.273 20.074.073 15.948.014 14.668 0 14.26 0 12c0-2.26.014-2.668.072-3.948C.272 3.926 2.924 1.272 7.15.072 8.43.014 8.838 0 12 0s3.57.014 4.85.072c4.226.2 6.878 2.854 7.078 7.08.058 1.28.072 1.688.072 3.948 0 2.26-.014 2.668-.072 3.948-.2 4.126-2.852 6.776-7.078 6.976C15.57 22.928 15.162 22.94 12 22.94zm0-5.838a6.162 6.162 0 100-12.324 6.162 6.162 0 000 12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592102715263" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/543425428160" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-1.102-1.025-1.847-2.29-2.063-2.677-.216-.387-.023-.597.163-.79.167-.173.373-.447.56-.671.187-.223.249-.387.373-.645.125-.258.063-.483-.03-.675-.092-.193-.67-1.612-.918-2.208-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.199 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
          <span>&copy; {year} Asociación Civil Monseñor Antonio Rodríguez. Fundada el 4 de marzo de 2008. Todos los derechos reservados.</span>
          <span>CUIT 30-12345678-9 | IGPJ Res. Nº 456/2020</span>
        </div>
      </div>
    </footer>
  )
}
