# Informe — Clasificación de Fotos e Investigación

## 1. Investigación de la Asociación (web)

### Datos legales e institucionales

- **Razón social**: Asociación Civil Monseñor Antonio Rodríguez (A.C.M.A.R.)
- **CUIT**: 30-71164449-7 · **Legajo RPJEC**: Nº 10150 (Santa Fe)
- **Dirección**: Teniente Loza 6093, Santa Fe · **Tel**: (0342) 488-5279
- **Actividad**: "Servicios de asociaciones n.c.p." (ARCA) — IVA exento
- **Rubros en Guía Provincial**: Institutos de Enseñanza y Capacitación + Herrerías
- **Constitución**: Resolución Nº 406 (15-06-2010); contrato social 18-11-2009
- **Autoridades (desde 19-03-2026)**: Pte. Victor Hugo Gervasoni; Sec. Claudia Rodriguez Fiorito; Tes. Miguel Ángel Piquard

### Contexto histórico (barrio Yapeyú)

- Monseñor Antonio Rodríguez (Orense, España, 1902–1992) llegó a Santa Fe en 1911; fundó el barrio Yapeyú y el complejo educativo **Ceferino Namuncurá** (1962–1973): escuelas primaria nocturna, media, jardín y biblioteca pública.
- El sitio se describe en Facebook como institución sin fines de lucro dedicada a la **enseñanza no formal**.
- Coherente con los 5 talleres actuales (herreria, aire-acondicionado, apoyo-escolar, cocina, alfabetizacion-digital). No se halló listado público de otros talleres históricos.

## 2. Clasificación de fotos

**Total de fotos fuente**: 1235 (101APPLE: 649 · 100APPLE: 586). Metadatos sin palabras clave ni GPS; solo fecha.

**Método**: análisis heurístico (ImageMagick: saturación, brillo, bordes, oscuridad) + verificación por IA local (moondream/llava, 40 imágenes).

### Resultado: HERRERÍA (20 fotos confirmadas)

Copiadas a `public/assets/images/gallery/herreria/herreria-1.jpg` … `herreria-20.jpg`

Origen (IMG_XXXX de `Fotos_iPad/DCIM/101APPLE/`): 1041, 1058, 1066, 1068, 1255, 1256, 1257, 1258, 1260, 1261, 1262, 1307, 1359, 1435, 1437, 1554, 1555, 1571, 1572, 1573.

Las 20 fueron validadas por visión como estructuras de metal/hierro (rejas, portones, herrería).

### Estado de las categorías restantes

- Las 5 categorías sin fotos quedaron con `count: 0` y `buildImages()` filtra las que tienen 0 → **solo se muestra herreria** (20 tiles), sin tiles vacíos.
- Comentario en `Gallery.jsx` indica cómo reactivar cada categoría (subir fotos `{name}-N.jpg` y cambiar `count`).
- **En curso**: scan en background (`/tmp/opencode/scan_talleres.py`) clasificando las 629 fotos restantes de 101APPLE con moondream (~2 min/imagen, ~21 h estimadas). Resultados en `/tmp/opencode/talleres_scan.tsv`. Cuando termine permitirá clasificar talleres e institucional.

## 3. Archivos modificados

| Archivo | Cambio |
| --------- | --------- |
| `src/components/Gallery.jsx` | herreria `count`: 6 → 20; resto `count`: 0; `buildImages()` filtra count 0 |
| `public/assets/images/gallery/herreria/` | +20 fotos `herreria-N.jpg` |
| `INFORME_FOTOS_Y_INVESTIGACION.md` | nuevo informe |
| `src/components/ContactInfo.jsx` | (pendiente de revisión; ya tenía mapa A.C.M.A.R.) |

## 4. Build

`npm run build` → ✅ 0 errores (97 módulos, 304 kB JS / 16 kB CSS).

## 5. Nota

`Fotos_iPad/` (1235 JPG) y `JULES_REPORT.md` están fuera de la entrega (untracked, no se commitearon).
