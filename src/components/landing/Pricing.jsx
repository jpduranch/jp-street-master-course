import { useState } from "react";
import { plans } from "../../data/mockData";
import Icon from "../shared/Icon";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const planOrder = ["free", "vip", "elite"];

  return (
    <section id="pricing" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">
            Planes y Precios
          </h2>
          <p className="text-4xl font-headline font-bold">
            Elige tu plan de formación
          </p>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Empieza gratis en la comunidad, sigue mis movimientos en vivo con
            VIP o accede a coaching 1 a 1 con Elite.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-surface-container-highest/60 border border-surface-container-highest">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-headline font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed shadow-lg shadow-primary/20"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setBillingCycle("quarterly")}
              className={`relative px-6 py-2.5 rounded-full text-sm font-headline font-bold transition-all flex items-center gap-2 ${
                billingCycle === "quarterly"
                  ? "bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed shadow-lg shadow-primary/20"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              Trimestral
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  billingCycle === "quarterly"
                    ? "bg-on-primary-fixed/15 text-on-primary-fixed"
                    : "bg-tertiary/15 text-tertiary"
                }`}
              >
                -10%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {planOrder.map((planKey) => {
            const plan = plans[planKey];
            const cycle = plan[billingCycle];
            const isPopular = plan.badge === "Popular";
            const isBestValue = plan.badge === "Best Value";
            const isHighlighted = isBestValue;
            const isFree = plan.id === "free";

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl transition-transform hover:-translate-y-2 ${
                  isHighlighted
                    ? "bg-gradient-to-b from-primary/40 via-primary/15 to-primary/5 p-[1px]"
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
                  <div className="mb-4">
                    <h3 className="text-xl font-headline font-bold">
                      {plan.name}
                    </h3>
                    {plan.tagline && (
                      <p className="text-xs text-on-surface-variant mt-1">
                        {plan.tagline}
                      </p>
                    )}
                  </div>

                  <div className="mb-6 min-h-[110px] pb-6 border-b border-surface-container-highest/40">
                    {isFree ? (
                      <>
                        <span className="text-5xl font-headline font-extrabold">
                          $0
                        </span>
                        <p className="text-on-surface-variant text-sm mt-2">
                          Para siempre, sin compromiso
                        </p>
                      </>
                    ) : billingCycle === "monthly" ? (
                      <>
                        <span className="text-5xl font-headline font-extrabold">
                          ${cycle.price}
                        </span>
                        <span className="text-on-surface-variant text-sm ml-1">
                          {cycle.period}
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-headline font-extrabold">
                            ${cycle.monthlyEquivalent}
                          </span>
                          <span className="text-on-surface-variant text-sm">
                            / mes
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span className="text-tertiary text-xs font-bold bg-tertiary/10 px-2 py-1 rounded-full">
                            {cycle.savings}
                          </span>
                          <span className="text-on-surface-variant text-xs">
                            ${cycle.price} cada 3 meses
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {plan.inheritsLabel && (
                    <div className="mb-4 flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-highest/40 border border-surface-container-highest/60">
                      <Icon
                        name="add_circle"
                        filled
                        className="text-primary text-base shrink-0"
                      />
                      <span className="text-xs font-bold text-on-surface">
                        {plan.inheritsLabel}
                      </span>
                    </div>
                  )}

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.title} className="flex items-start gap-3">
                        <div
                          className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${
                            isHighlighted
                              ? "bg-primary/15 text-primary"
                              : isPopular
                              ? "bg-secondary/15 text-secondary"
                              : "bg-surface-container-highest text-on-surface-variant"
                          }`}
                        >
                          <Icon name={feature.icon} filled className="text-lg" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-on-surface leading-tight">
                            {feature.title}
                          </p>
                          <p className="text-xs text-on-surface-variant mt-0.5">
                            {feature.description}
                          </p>
                        </div>
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
