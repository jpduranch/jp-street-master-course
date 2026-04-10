# JP Street Master Course

Plataforma web en español para el **Master Course de Trading en Small Caps**. Incluye landing page pública y panel privado del curso, con autenticación y control de acceso por plan.

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React 19 + Vite 8 |
| Estilos | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Backend / Auth / DB | Supabase |
| Despliegue | Vercel |

## Estructura

```
src/
├── components/
│   ├── landing/     # Secciones de la página pública
│   ├── dashboard/   # UI del panel del curso
│   └── shared/      # Componentes reutilizables
├── context/         # AuthContext (Supabase Auth)
├── data/            # mockData.js — contenido del curso
├── lib/             # Cliente Supabase
└── pages/           # LandingPage, DashboardPage, LoginPage, RegisterPage
```

## Correr localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/jp-street-master-course.git
cd jp-street-master-course

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env.local
# Edita .env.local con tus credenciales de Supabase

# 4. Iniciar servidor de desarrollo
npm run dev
```

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR (http://localhost:5173)
npm run build     # Build de producción → dist/
npm run preview   # Vista previa del build local
npm run lint      # ESLint
```

## Variables de entorno

Crea un archivo `.env.local` basado en `.env.example`:

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

> Todas las variables de frontend deben tener el prefijo `VITE_` para que Vite las exponga al navegador.

## Integración con Supabase

- Autenticación manejada via `@supabase/supabase-js`
- Cliente configurado en `src/lib/supabase.js`
- `AuthContext` en `src/context/AuthContext.jsx` provee estado de sesión a toda la app
- Acceso al dashboard protegido por `ProtectedRoute`

## Despliegue en Vercel

El proyecto incluye `vercel.json` con rewrites para SPA routing (evita 404 al refrescar rutas internas).

**En el panel de Vercel:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Agregar las variables `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en Settings → Environment Variables

Cada push a `main` dispara un deploy automático.
