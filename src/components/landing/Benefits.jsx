import { benefits } from "../../data/mockData";
import Icon from "../shared/Icon";

export default function Benefits() {
  const colors = [
    "text-primary",
    "text-tertiary",
    "text-secondary",
    "text-primary",
    "text-tertiary",
    "text-secondary",
  ];

  return (
    <section id="benefits" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Beneficios
          </h2>
          <p className="text-4xl font-headline font-bold">
            ¿Por qué JP Street Master Course?
          </p>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Equipamiento y herramientas validadas por profesionales para ejecutar
            con ventaja competitiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="group bg-surface-container-highest p-[1px] rounded-2xl transition-transform hover:-translate-y-1"
            >
              <div className="bg-surface p-8 rounded-[calc(1rem-1px)] h-full space-y-4">
                <Icon
                  name={benefit.icon}
                  filled
                  className={`${colors[i]} text-4xl`}
                />
                <h4 className="text-xl font-bold font-headline">
                  {benefit.title}
                </h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
