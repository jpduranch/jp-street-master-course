import { whatYouLearn } from "../../data/mockData";
import Icon from "../shared/Icon";

export default function WhatYouLearn() {
  return (
    <section className="py-24 px-6 md:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Programa Completo
          </h2>
          <p className="text-4xl font-headline font-bold">
            ¿Qué aprenderás?
          </p>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Un recorrido completo desde los fundamentos hasta la ejecución
            profesional en acciones americanas small caps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {whatYouLearn.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container transition-colors"
            >
              <Icon
                name="check_circle"
                filled
                className="text-tertiary text-xl mt-0.5 shrink-0"
              />
              <span className="text-sm text-on-surface/90 leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
