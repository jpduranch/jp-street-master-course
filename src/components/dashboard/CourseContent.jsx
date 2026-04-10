import { modules, isModuleAccessible, getTotalLessons } from "../../data/mockData";
import Icon from "../shared/Icon";
import { Link } from "react-router-dom";

export default function CourseContent({ userPlan }) {
  const totalLessons = getTotalLessons();

  return (
    <div className="bg-surface-container-low rounded-2xl border border-outline-variant/10 overflow-hidden sticky top-28">
      <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
        <h4 className="font-bold text-sm">Contenido del Curso</h4>
        <span className="text-[10px] font-bold px-2 py-1 bg-surface-container-highest rounded-full text-on-surface-variant">
          {totalLessons} Lecciones
        </span>
      </div>

      <div className="max-h-[calc(100vh-250px)] overflow-y-auto">
        {modules.map((mod) => {
          const accessible = isModuleAccessible(mod.id, userPlan);

          return (
            <div
              key={mod.id}
              className={`p-4 ${
                mod.lessons.some((l) => l.current)
                  ? ""
                  : "bg-surface-container-highest/30"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <p
                  className={`text-[10px] font-black uppercase tracking-widest ${
                    mod.lessons.some((l) => l.current)
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  Módulo {mod.number}: {mod.title}
                </p>
                {!accessible && (
                  <Icon name="lock" className="text-on-surface-variant text-sm" />
                )}
              </div>

              <div className="space-y-1">
                {mod.lessons.map((lesson) => {
                  if (!accessible) {
                    return (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 p-3 rounded-xl opacity-40 cursor-not-allowed"
                      >
                        <Icon
                          name="play_circle"
                          className="text-on-surface-variant text-lg"
                        />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-on-surface">
                            {lesson.title}
                          </p>
                          <p className="text-[10px] text-on-surface-variant">
                            {lesson.duration} min
                          </p>
                        </div>
                        <Icon
                          name="lock"
                          className="text-[16px] text-on-surface-variant"
                        />
                      </div>
                    );
                  }

                  if (lesson.current) {
                    return (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/20"
                      >
                        <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-bold text-on-surface">
                            {lesson.title}
                          </p>
                          <p className="text-[10px] text-primary">
                            Viendo ahora &bull; {lesson.duration} min
                          </p>
                        </div>
                      </div>
                    );
                  }

                  if (lesson.completed) {
                    return (
                      <div
                        key={lesson.id}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer"
                      >
                        <Icon
                          name="check_circle"
                          filled
                          className="text-tertiary text-lg"
                        />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-on-surface">
                            {lesson.title}
                          </p>
                          <p className="text-[10px] text-on-surface-variant">
                            {lesson.duration} min
                          </p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={lesson.id}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-container-highest transition-colors cursor-pointer opacity-60"
                    >
                      <Icon
                        name="play_circle"
                        className="text-on-surface-variant text-lg"
                      />
                      <div className="flex-1">
                        <p className="text-xs font-medium text-on-surface">
                          {lesson.title}
                        </p>
                        <p className="text-[10px] text-on-surface-variant">
                          {lesson.duration} min
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Upgrade CTA for locked modules */}
              {!accessible && userPlan === "free" && mod.id === 2 && (
                <div className="mt-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/5 rounded-xl border border-primary/20">
                  <p className="text-xs font-bold text-primary mb-1">
                    Desbloquea todos los módulos
                  </p>
                  <p className="text-[10px] text-on-surface-variant mb-3">
                    Mejora tu plan para acceder al contenido completo.
                  </p>
                  <Link
                    to="/"
                    className="inline-block px-4 py-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary-fixed rounded-lg text-xs font-bold hover:scale-[1.02] transition-transform"
                  >
                    Ver Planes
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
