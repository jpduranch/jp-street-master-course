import { plans } from "../../data/mockData";
import Icon from "../shared/Icon";
import { Link } from "react-router-dom";

export default function Pricing() {
  const planOrder = ["free", "quarterly", "semiannual"];

  return (
    <section id="pricing" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Planes y Precios
          </h2>
          <p className="text-4xl font-headline font-bold">
            Elige tu plan de formación
          </p>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Comienza gratis o accede al contenido completo con nuestros planes
            premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {planOrder.map((planKey) => {
            const plan = plans[planKey];
            const isPopular = plan.badge === "Popular";
            const isBestValue = plan.badge === "Best Value";
            const isHighlighted = isBestValue;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-transform hover:-translate-y-2 ${
                  isHighlighted
                    ? "bg-gradient-to-b from-primary/30 via-primary/10 to-primary/5 p-[1px]"
                    : isPopular
                    ? "bg-gradient-to-b from-secondary/30 via-secondary/10 to-secondary/5 p-[1px]"
                    : "bg-surface-container-highest p-[1px]"
                }`}
              >
                {plan.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold z-10 ${
                      isBestValue
                        ? "bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed"
                        : "bg-gradient-to-r from-secondary to-secondary-dim text-on-primary-fixed"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div
                  className={`bg-surface rounded-[calc(1.5rem-1px)] p-8 h-full flex flex-col ${
                    isHighlighted ? "ring-1 ring-primary/20" : ""
                  }`}
                >
                  <h3 className="text-lg font-headline font-bold mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-6">
                    <span className="text-5xl font-headline font-extrabold">
                      ${plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-on-surface-variant text-sm ml-1">
                        {plan.period}
                      </span>
                    )}
                    {plan.savings && (
                      <div className="mt-2">
                        <span className="text-tertiary text-xs font-bold bg-tertiary/10 px-2 py-1 rounded-full">
                          {plan.savings}
                        </span>
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-on-surface-variant"
                      >
                        <Icon
                          name="check_circle"
                          filled
                          className="text-tertiary text-lg shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/register"
                    className={`w-full py-4 rounded-xl font-headline font-bold text-center transition-all block ${
                      isHighlighted
                        ? "bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed btn-primary-glow hover:scale-[1.02]"
                        : isPopular
                        ? "bg-secondary/10 text-secondary border border-secondary/20 hover:bg-secondary/20"
                        : "bg-surface-container-highest text-on-surface hover:bg-surface-bright"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
