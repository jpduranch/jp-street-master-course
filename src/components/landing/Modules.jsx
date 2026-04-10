const masterModules = [
  { number: "01", title: "Intro a Trading" },
  { number: "02", title: "Foundations Small Caps Market / Long vs Short Mechanics" },
  { number: "03", title: "Stock Selection & Rutina de trading Profesional" },
  { number: "04", title: "Abrir tu negocio de trading : Brokers , Cuenta & Business" },
  { number: "05", title: "Análisis Fundamental (Small Caps)" },
  { number: "06", title: "Análisis Técnico / Charts, Candles y Price Action" },
  { number: "07", title: "Seteando Plataforma (DAS Trader Pro / Sage)" },
  { number: "08", title: "Order Types / Poniendo Órdenes" },
  { number: "09", title: "Quotes: Level 1 / Level 2 / Time & Sales" },
  { number: "10", title: "Trading as a Pro / Big Picture" },
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Estructura Curricular
          </h2>
          <p className="text-4xl md:text-5xl font-headline font-bold">
            Módulos
          </p>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            10 módulos diseñados para dominar el trading de small caps, desde
            fundamentos hasta ejecución profesional.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {masterModules.map((mod) => (
            <div
              key={mod.number}
              className="group flex items-center gap-5 bg-surface-container-low/80 border border-outline-variant/10 rounded-2xl px-6 py-5 hover:border-primary/25 hover:bg-surface-container/80 transition-all"
            >
              <span className="text-primary/40 group-hover:text-primary font-headline font-black text-lg tabular-nums transition-colors min-w-[2rem]">
                {mod.number}
              </span>
              <div className="h-5 w-px bg-outline-variant/20" />
              <span className="material-symbols-outlined text-primary/30 group-hover:text-primary/70 text-xl transition-colors">
                play_circle
              </span>
              <h3 className="text-base font-semibold font-headline text-on-surface/90 group-hover:text-on-surface transition-colors">
                Módulo {mod.number.replace(/^0/, "")} - {mod.title}
              </h3>
              <span className="material-symbols-outlined text-on-surface-variant/40 group-hover:text-primary/60 ml-auto text-xl transition-colors">
                chevron_right
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
