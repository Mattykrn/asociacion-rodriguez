-- ============================================================
-- Esquema completo para Asociación Civil Monseñor Antonio Rodríguez
-- Ejecutar en Supabase SQL Editor
-- ============================================================

-- 1. Tabla de perfiles (extiende auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT NOT NULL DEFAULT '',
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Categorías
CREATE TABLE public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('course', 'product', 'news')),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Cursos / Talleres
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  schedule TEXT,
  duration TEXT,
  capacity INT,
  instructor TEXT,
  category_id UUID REFERENCES public.categories(id),
  cover_url TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Productos (herrería)
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  dimensions TEXT,
  material TEXT,
  price DECIMAL(10,2),
  category_id UUID REFERENCES public.categories(id),
  images TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Testimonios
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  student_age TEXT,
  quote TEXT NOT NULL,
  avatar_url TEXT,
  course_id UUID REFERENCES public.courses(id),
  featured BOOLEAN DEFAULT false,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Noticias
CREATE TABLE public.news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_url TEXT,
  category_id UUID REFERENCES public.categories(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  author_id UUID REFERENCES public.profiles(id)
);

-- 7. Documentos (actas, comunicados)
CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('acta', 'comunicado', 'informe', 'reglamento')),
  published_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;

-- Política: público puede leer solo activos
CREATE POLICY "Public read active courses" ON public.courses
  FOR SELECT USING (active = true);

CREATE POLICY "Public read active products" ON public.products
  FOR SELECT USING (active = true);

CREATE POLICY "Public read featured testimonials" ON public.testimonials
  FOR SELECT USING (true);

CREATE POLICY "Public read published news" ON public.news
  FOR SELECT USING (published = true);

CREATE POLICY "Public read documents" ON public.documents
  FOR SELECT USING (true);

CREATE POLICY "Public read categories" ON public.categories
  FOR SELECT USING (true);

-- Política: admins/editors tienen acceso completo
CREATE POLICY "Admin full access courses" ON public.courses
  USING (auth.role() = 'authenticated' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','editor')));

CREATE POLICY "Admin full access products" ON public.products
  USING (auth.role() = 'authenticated' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','editor')));

CREATE POLICY "Admin full access testimonials" ON public.testimonials
  USING (auth.role() = 'authenticated' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','editor')));

CREATE POLICY "Admin full access news" ON public.news
  USING (auth.role() = 'authenticated' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','editor')));

CREATE POLICY "Admin full access documents" ON public.documents
  USING (auth.role() = 'authenticated' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','editor')));

CREATE POLICY "Admin full access categories" ON public.categories
  USING (auth.role() = 'authenticated' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','editor')));

CREATE POLICY "Admin full access profiles" ON public.profiles
  USING (auth.role() = 'authenticated' 
    AND EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin','editor')));

-- ============================================================
-- SEED DATA: categorías y cursos iniciales
-- ============================================================
INSERT INTO public.categories (name, slug, type, sort_order) VALUES
  ('Herrería y Soldadura', 'herreria', 'course', 1),
  ('Climatización', 'climatizacion', 'course', 2),
  ('Cocina', 'cocina', 'course', 3),
  ('Alfabetización Digital', 'alfabetizacion-digital', 'course', 4),
  ('Apoyo Escolar', 'apoyo-escolar', 'course', 5),
  ('Estructuras Metálicas', 'estructuras', 'product', 1),
  ('Noticias', 'noticias', 'news', 1);

INSERT INTO public.courses (title, slug, description, schedule, duration, capacity, instructor, active) VALUES
  ('Taller de Herrería y Soldadura', 'herreria-soldadura',
   'Aprendé soldadura básica, forjado de metales y fabricación de estructuras. Un oficio con alta demanda laboral para emprender tu propio taller.',
   'Martes y jueves de 15:00 a 17:00', '12 semanas', 15, 'Roberto Gómez', true),
  ('Instalación y Reparación de Aire Acondicionado', 'instalacion-aire-acondicionado',
   'Formate en instalación, mantenimiento y reparación de equipos de aire acondicionado y refrigeración. Salida laboral inmediata.',
   'Lunes y miércoles de 10:00 a 12:00', '10 semanas', 12, 'Diego Fernández', true),
  ('Apoyo Escolar y Terminalidad Educativa', 'apoyo-escolar-terminalidad',
   'Refuerzo en matemáticas, lengua y ciencias para niños y adultos que retoman sus estudios.',
   'Lunes a viernes de 17:00 a 19:00', 'Ciclo lectivo completo', 30, 'Equipo docente', true),
  ('Taller de Cocina y Salida Laboral', 'cocina-salida-laboral',
   'Recetas nutritivas y económicas. Manipulación de alimentos, planificación de menús y prácticas para insertarse en el rubro gastronómico.',
   'Viernes de 16:00 a 18:00', '4 semanas', 15, 'Ana Martínez', true),
  ('Alfabetización Digital y Oficios', 'alfabetizacion-digital-oficios',
   'Curso básico de computación, internet y herramientas digitales. Orientado a la búsqueda de empleo, trámites online y desarrollo laboral.',
   'Martes y jueves de 9:00 a 11:00', '10 semanas', 20, 'Pedro Sánchez', true);

INSERT INTO public.testimonials (student_name, student_age, quote, featured, sort_order) VALUES
  ('Lautaro M.', '29 años',
   'No tenía trabajo, no sabía para dónde agarrar. En el taller de herrería aprendí soldadura y hoy tengo mi propio emprendimiento.',
   true, 1),
  ('Sofía R.', '34 años',
   'Llegué sin nada, sin estudios, sin experiencia. En la cocina encontré lo que me gusta y hoy trabajo de lo que aprendí.',
   true, 2);
