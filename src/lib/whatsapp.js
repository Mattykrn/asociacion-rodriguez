const PHONE = '543425428160'

function waLink(text) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`
}

export function waCourse(course) {
  return waLink(
    `Hola, quiero inscribirme al taller "${course.title}".\n\n` +
    `¿Cuándo arranca el próximo? ¿Qué requisitos tiene?`
  )
}

export function waProduct(product) {
  return waLink(
    `Hola, me interesa la estructura "${product.title}".\n\n` +
    `${product.dimensions ? `Medidas: ${product.dimensions}\n` : ''}` +
    `${product.price ? `Precio: $${product.price}\n` : ''}` +
    `¿Tienen stock? ¿Se puede encargar?`
  )
}

export function waQuote(product) {
  return waLink(
    `Hola, quiero solicitar un presupuesto para:\n` +
    `"${product.title}"\n\n` +
    `Por favor necesito: dimensiones personalizadas, plazo de entrega y precio.`
  )
}

export function waTestimonial() {
  return waLink(
    `Hola, quiero compartir mi experiencia en la asociación.`
  )
}

export function waGeneral(msg) {
  return waLink(msg || 'Hola, quiero consultar sobre los talleres.')
}
