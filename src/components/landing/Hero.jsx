import { Link } from "react-router-dom";
import InteractiveChart from "./InteractiveChart";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10" />

      <div className="max-w-4xl text-center space-y-8 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tighter text-on-background leading-[1.05]">
          Educación Profesional{" "}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
            de Trading
          </span>
        </h1>

        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Domina la volatilidad de Small Caps y el momentum del mercado con una
          gestión de riesgo institucional. Formación de élite para traders que
          buscan resultados consistentes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed font-headline font-extrabold text-lg rounded-xl btn-primary-glow hover:scale-[1.02] transition-all text-center"
          >
            Entrar al Master Course
          </Link>
          <a
            href="#modules"
            className="w-full sm:w-auto px-10 py-4 bg-surface-container-highest border border-outline-variant/30 text-on-surface font-headline font-bold text-lg rounded-xl hover:bg-surface-container-high transition-colors text-center"
          >
            Ver programa
          </a>
        </div>
      </div>

      <InteractiveChart />
    </section>
  );
}
