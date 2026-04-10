export default function About() {
  return (
    <section className="py-24 px-6 md:px-8 relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
              Sobre el Programa
            </h2>
            <p className="text-4xl md:text-5xl font-headline font-bold leading-tight">
              ¿Qué es JP Street{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Master Course
              </span>
              ?
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              JP Street Master Course es un programa de formación profesional
              diseñado para traders que quieren dominar el mercado de acciones
              americanas small caps. Desde los fundamentos hasta estrategias
              avanzadas de scalping y momentum, con un enfoque en gestión del
              riesgo y ejecución profesional.
            </p>
            <p className="text-on-surface-variant leading-relaxed">
              Con más de 42 lecciones distribuidas en 10 módulos, aprenderás
              todo lo necesario para operar small caps de forma consistente y
              profesional. Cada lección está diseñada cronológicamente para tu
              evolución como trader.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "10", label: "Módulos", sub: "Estructura completa" },
              { value: "42+", label: "Lecciones", sub: "Video profesional" },
              { value: "20h+", label: "De contenido", sub: "Alta calidad" },
              { value: "24/7", label: "Acceso", sub: "A tu ritmo" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/5 text-center hover:border-primary/20 transition-all"
              >
                <p className="text-3xl font-headline font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm font-bold mt-1">{stat.label}</p>
                <p className="text-xs text-on-surface-variant mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
