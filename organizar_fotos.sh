#!/usr/bin/env bash
#
# organizar_fotos.sh — Mueve, renombra y sincroniza las fotos seleccionadas
# manualmente con la galería del sitio.
#
# Entradas:
#   /tmp/seleccion_herreria/          -> public/assets/images/gallery/herreria/
#   /tmp/seleccion_talleres/<cat>/    -> public/assets/images/gallery/<cat>/
#
# Comportamiento:
#   - Las fotos se renombran secuencialmente: {cat}-1.jpg, {cat}-2.jpg, ...
#   - La galería de una categoría se REEMPLAZA por la nueva selección.
#   - Los `count` en src/components/Gallery.jsx se actualizan automáticamente.
#   - Para herrería se conserva el agrupado por fecha (EXIF) en HERRERIA_JOBS.
#   - Solo se procesan carpetas de selección NO vacías; las demás quedan intactas.
#
# Uso:
#   ./organizar_fotos.sh            # procesa herrería + talleres
#   ./organizar_fotos.sh herreria   # solo herrería
#
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export PROJECT_DIR

if ! command -v python3 >/dev/null 2>&1; then
  echo "ERROR: se requiere python3" >&2
  exit 1
fi

python3 - <<'PY'
import os, re, shutil, subprocess, sys, glob

PROJECT = os.environ["PROJECT_DIR"]
GALLERY = os.path.join(PROJECT, "public/assets/images/gallery")
JSX = os.path.join(PROJECT, "src/components/Gallery.jsx")
SEL_HERR = "/tmp/seleccion_herreria"
SEL_TALL = "/tmp/seleccion_talleres"

VALID = ["herreria","aire-acondicionado","apoyo-escolar","cocina",
         "alfabetizacion-digital","institucional"]
MESES = ["enero","febrero","marzo","abril","mayo","junio","julio",
         "agosto","septiembre","octubre","noviembre","diciembre"]

scope = sys.argv[1] if len(sys.argv) > 1 else "all"

def imagen(f):
    return f.lower().endswith((".jpg", ".jpeg", ".png"))

def exif_date(path):
    try:
        out = subprocess.run(["exiftool","-DateTimeOriginal","-s3",path],
                             capture_output=True, text=True, timeout=30).stdout.strip()
        m = re.match(r"(\d{4}):(\d{2})", out)
        if m:
            return int(m.group(1)), int(m.group(2))
    except Exception:
        pass
    return None

def reemplazar_fotos(cat, sel_dir):
    dest = os.path.join(GALLERY, cat)
    os.makedirs(dest, exist_ok=True)
    for f in glob.glob(os.path.join(dest, f"{cat}-*.jpg")):
        os.remove(f)
    files = sorted(f for f in glob.glob(os.path.join(sel_dir, "*")) if imagen(f))
    n = 0
    for f in files:
        n += 1
        shutil.copy2(f, os.path.join(dest, f"{cat}-{n}.jpg"))
    return n

def herreria_jobs(dest):
    photos = sorted(glob.glob(os.path.join(dest, "herreria-*.jpg")),
                    key=lambda p: int(re.search(r"(\d+)", os.path.basename(p)).group(1)))
    if not photos:
        return []
    grupos = {}
    for p in photos:
        grupos.setdefault(exif_date(p), []).append(p)
    orden = sorted(grupos.items(),
                   key=lambda kv: kv[0] if kv[0] else (9999, 99))
    jobs = []
    n = 0
    for i, (fecha, ps) in enumerate(orden, start=1):
        fecha_txt = f"{MESES[fecha[1]-1].capitalize()} {fecha[0]}" if fecha else "Sin fecha"
        jobs.append(f"  {{ title: 'Trabajo {i}', date: '{fecha_txt}', from: {n+1}, count: {len(ps)} }},")
        n += len(ps)
    return jobs

def contar_fotos(cat):
    return len(glob.glob(os.path.join(GALLERY, cat, f"{cat}-*.jpg")))

resumen = {}

if scope in ("all", "herreria") and os.path.isdir(SEL_HERR) and glob.glob(os.path.join(SEL_HERR, "*")):
    n = reemplazar_fotos("herreria", SEL_HERR)
    resumen["herreria"] = n
    print(f"[organizar_fotos] herreria: {n} fotos copiadas/renombradas")

if scope in ("all", "talleres") and os.path.isdir(SEL_TALL):
    for cat in os.listdir(SEL_TALL):
        if cat not in VALID:
            continue
        sub = os.path.join(SEL_TALL, cat)
        if not os.path.isdir(sub) or not glob.glob(os.path.join(sub, "*")):
            continue
        n = reemplazar_fotos(cat, sub)
        resumen[cat] = n
        print(f"[organizar_fotos] {cat}: {n} fotos copiadas/renombradas")

if not resumen:
    print("[organizar_fotos] Sin selecciones para procesar "
          "(carpetas vacías o inexistentes). Nada que hacer.")
    sys.exit(0)

if not os.path.exists(JSX):
    print(f"ERROR: no se encontró {JSX}", file=sys.stderr)
    sys.exit(1)

jsx = open(JSX).read()

if "herreria" in resumen:
    jobs = herreria_jobs(os.path.join(GALLERY, "herreria"))
    if jobs:
        bloque = "const HERRERIA_JOBS = [\n" + "\n".join(jobs) + "\n]\n"
        jsx = re.sub(r"const HERRERIA_JOBS = \[.*?\n\]\n", bloque, jsx, flags=re.S)
        print(f"[organizar_fotos] herreria: HERRERIA_JOBS actualizado ({len(jobs)} trabajos)")

for cat, n in resumen.items():
    if cat == "herreria":
        continue
    real = contar_fotos(cat)
    if real == 0:
        continue
    pat = r"(\{\s*name:\s*'" + re.escape(cat) + r"'\s*,.*?count:\s*)\d+"
    nuevo, k = re.subn(pat, lambda m: m.group(1) + str(real), jsx, count=1, flags=re.S)
    if k:
        jsx = nuevo
        print(f"[organizar_fotos] {cat}: count -> {real}")

open(JSX, "w").write(jsx)

print("\n[organizar_fotos] RESUMEN:")
for cat, n in resumen.items():
    print(f"  {cat}: {contar_fotos(cat)} fotos en galería")
print("[organizar_fotos] OK. Revisá el sitio y luego commit/push.")
PY
