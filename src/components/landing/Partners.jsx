const partners = [
  {
    name: "La Xavineta",
    initial: "X",
    description: "Curso y comunidad enfocada en ejecución y consistencia.",
    color: "from-primary to-primary-dim",
  },
  {
    name: "Flash Research",
    initial: "F",
    description: "Plataforma de data para análisis de small caps.",
    color: "from-primary-dim to-[#6d28d9]",
  },
  {
    name: "Zimtra",
    initial: "Z",
    description: "Broker para ejecución eficiente.",
    color: "from-[#6d28d9] to-primary-dim",
  },
];

export default function Partners() {
  return (
    <section className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Alianzas
          </h2>
          <p className="text-4xl md:text-5xl font-headline font-bold">
            Partners
          </p>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Socios y herramientas recomendadas para potenciar tu trading. Con link de
            referido con los mejores descuentos del momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group bg-surface-container-low border border-outline-variant/10 rounded-2xl p-8 text-center hover:border-primary/25 transition-all hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center shadow-[0_0_30px_rgba(124,58,237,0.2)]`}>
                <span className="text-2xl font-headline font-black text-white">
                  {partner.initial}
                </span>
              </div>
              <h3 className="text-xl font-bold font-headline mb-3">
                {partner.name}
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                {partner.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-xl text-sm font-headline font-bold hover:bg-primary/20 transition-colors w-full justify-center"
              >
                Link de referido
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
