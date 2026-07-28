import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    '%c⚠️ Supabase no configurado%c\n' +
    'Creá un archivo .env en la raíz del proyecto con:\n' +
    '  VITE_SUPABASE_URL=https://tu-proyecto.supabase.co\n' +
    '  VITE_SUPABASE_ANON_KEY=tu-anon-key\n\n' +
    'Sin esto, el panel admin y la carga de datos no funcionarán.',
    'font-weight:bold;font-size:1.1rem;color:#C49B4A',
    'font-weight:normal;font-size:0.9rem;color:#6B7280'
  )
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)
