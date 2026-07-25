# Manual de Administración — Panel Admin

## Asociación Civil Monseñor Antonio Rodríguez

### Introducción

Este manual está dirigido al personal autorizado que gestiona el panel de administración del sitio. Explica cómo acceder, gestionar inscripciones, registrar ventas y exportar datos.

---

### 1. Acceso al Panel

1. Abrí el navegador y accedé a: `http://localhost:5173/admin`
2. Ingresá tus credenciales:
   - **Usuario:** `admin`
   - **Contraseña:** `admin123`
3. Hacé click en **Ingresar**

> **Roles disponibles:**
> - **Admin Principal:** Acceso completo (gestionar inscripciones, ventas, eliminar registros)
> - **Gestor de Taller:** Puede ver inscripciones y registrar ventas

### 2. Dashboard

Al ingresar verás un resumen con:
- Cantidad total de inscripciones
- Cantidad de ventas registradas
- Ingresos totales acumulados

Hacé click en las tarjetas para ir directamente a la sección correspondiente.

### 3. Gestión de Inscripciones

**Ruta:** `/admin/registrations`

**Ver inscripciones:**
- La tabla muestra todas las inscripciones con su estado actual
- Usá el filtro para ver por estado: Todas / Pendientes / Confirmadas / Canceladas

**Cambiar estado:**
- **Pendiente → Confirmada:** Hacé click en "Confirmar"
- **Confirmada → Cancelada:** Hacé click en "Cancelar"

**Eliminar inscripción:**
- Hacé click en "Eliminar" (solo disponible para Admin Principal)

**Exportar a CSV:**
- Hacé click en "Exportar CSV" para descargar las inscripciones filtradas

### 4. Registro de Ventas

**Ruta:** `/admin/sales`

**Registrar una venta:**
1. Completá el formulario superior:
   - **Item:** Producto vendido (obligatorio)
   - **Cantidad:** Unidades vendidas
   - **Monto:** Precio total (obligatorio)
   - **Cliente:** Nombre del comprador
   - **Notas:** Observaciones
2. Hacé click en **Registrar venta**

**Ver ventas:**
- La tabla inferior muestra todas las ventas registradas
- El total acumulado se actualiza automáticamente

**Eliminar venta:**
- Hacé click en "Eliminar" (solo Admin Principal)

**Exportar a Excel:**
- Hacé click en "Exportar a Excel"
- Descarga un archivo `.xlsx` con todas las ventas y el total general

### 5. Cierre de Sesión

Hacé click en **Salir** en la esquina superior derecha del panel.

### 6. Consejos de Seguridad

- No compartas tus credenciales con nadie
- Cerrá sesión cuando termines de usar el panel
- Las contraseñas se almacenan encriptadas (bcrypt)
- Todas las acciones quedan registradas en los logs de actividad
