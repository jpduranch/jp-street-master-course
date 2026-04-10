import { modules } from "../../data/mockData";

export default function Modules() {
  const displayModules = modules.slice(0, 4);

  return (
    <section id="modules" className="py-24 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Estructura Curricular
          </h2>
          <p className="text-4xl font-headline font-bold">
            10 Módulos de Maestría
          </p>
        </div>
        <p className="text-on-surface-variant max-w-md">
          Desde fundamentos hasta estrategias avanzadas de scalping y momentum,
          diseñadas cronológicamente para tu evolución profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayModules.map((mod) => (
          <div
            key={mod.id}
            className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5 hover:border-primary/20 transition-all"
          >
            <div className="text-primary-dim font-headline font-black text-4xl mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
              {mod.number}
            </div>
            <h3 className="text-xl font-bold font-headline mb-2">
              {mod.title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {mod.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">play_circle</span>
              {mod.lessons.length} lecciones
            </div>
          </div>
        ))}

        {/* Trading Patterns Visualizer - Large Card */}
        <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-xl font-bold font-headline mb-6">
              Trading Patterns Visualizer
            </h3>
            <div className="flex gap-3 mb-8 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-bold border border-tertiary/20">
                BULL FLAG
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                VWAP BOUNCE
              </span>
              <span className="px-3 py-1 rounded-full bg-outline-variant/10 text-on-surface-variant text-xs font-bold">
                REVERSAL
              </span>
              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20">
                GAP & GO
              </span>
            </div>
          </div>
          <div className="h-48 w-full flex items-end gap-1">
            {[60, 45, 85, 30, 55, 95, 40, 70, 50, 80, 35, 90, 65, 75, 88].map(
              (h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t-sm hover:opacity-100 transition-all ${
                    h > 70
                      ? "bg-tertiary/50 hover:bg-tertiary"
                      : "bg-primary/40 hover:bg-primary"
                  }`}
                  style={{ height: `${h}%` }}
                />
              )
            )}
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/5 to-transparent" />
        </div>

        {/* Remaining modules preview */}
        {modules.slice(4, 6).map((mod) => (
          <div
            key={mod.id}
            className="group bg-surface-container-low p-8 rounded-2xl border border-outline-variant/5 hover:border-primary/20 transition-all"
          >
            <div className="text-primary-dim font-headline font-black text-4xl mb-4 opacity-20 group-hover:opacity-100 transition-opacity">
              {mod.number}
            </div>
            <h3 className="text-xl font-bold font-headline mb-2">
              {mod.title}
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {mod.description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">play_circle</span>
              {mod.lessons.length} lecciones
            </div>
          </div>
        ))}
      </div>

      {/* Show remaining modules count */}
      <div className="text-center mt-8">
        <p className="text-on-surface-variant text-sm">
          + {modules.length - 6} módulos más incluyendo Gestión del Riesgo,
          Estrategias Pro, Pre-Market y Trading Journal
        </p>
      </div>
    </section>
  );
}
