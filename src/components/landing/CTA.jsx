import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-dim/20 to-secondary-dim/5 rounded-[3rem] p-12 md:p-24 text-center relative">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/10 rounded-full blur-[100px]" />

        <h2 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tighter mb-8 relative z-10">
          ¿Listo para elevar
          <br />
          tu operativa?
        </h2>

        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto relative z-10">
          Únete a la comunidad de JP Street y transforma tu trading en un
          negocio profesional respaldado por datos y disciplina.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <Link
            to="/dashboard"
            className="px-12 py-5 bg-on-surface text-surface font-headline font-black text-xl rounded-2xl hover:scale-105 transition-all"
          >
            EMPEZAR AHORA
          </Link>
          <a
            href="#pricing"
            className="px-12 py-5 bg-transparent border-2 border-primary text-primary font-headline font-black text-xl rounded-2xl hover:bg-primary/10 transition-all"
          >
            VER PLANES
          </a>
        </div>
      </div>
    </section>
  );
}
