import { getCompletedLessons, getTotalLessons } from "../../data/mockData";

export default function DashboardHeader() {
  const completed = getCompletedLessons();
  const total = getTotalLessons();
  const percentage = Math.round((completed / total) * 100);

  return (
    <header className="sticky top-0 z-40 bg-surface-container-low/80 backdrop-blur-xl px-6 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface-container-highest/20">
      <div>
        <h2 className="text-xl md:text-2xl font-headline font-extrabold tracking-tight text-on-surface">
          Master Course: Trading Small Caps
        </h2>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-48 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary-dim rounded-full transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-xs font-label font-bold text-primary">
            {percentage}% Completado
          </span>
        </div>
      </div>
      <button className="bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed px-6 py-3 rounded-xl font-bold text-sm tracking-tight active:scale-95 transition-transform premium-glow">
        Continuar Aprendizaje
      </button>
    </header>
  );
}
