import Icon from "../shared/Icon";

export default function VideoPlayer({ lesson, module }) {
  return (
    <div className="space-y-6">
      {/* Video Container */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface-container-lowest premium-glow border border-surface-container-highest/40 group">
        {/* Trading chart background */}
        <div className="w-full h-full bg-gradient-to-br from-surface-container-lowest via-surface-container to-surface-container-low flex items-center justify-center">
          <div className="w-full h-full p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-primary font-headline font-bold">NVDA</span>
              <span className="text-tertiary text-xs font-bold">+8.7%</span>
              <span className="text-on-surface-variant text-[10px]">Level 2 View</span>
            </div>
            <div className="flex-1 flex items-end gap-[2px]">
              {[30,45,35,55,40,60,50,75,45,65,80,50,85,60,70,55,90,65,80,72,88,58,92,68,78,95,62,85,75,98].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-[1px] ${h > 75 ? "bg-tertiary/50" : "bg-primary/30"}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-300">
            <Icon name="play_arrow" filled className="text-primary text-4xl" />
          </button>
        </div>

        {/* Video controls */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4">
          <Icon name="volume_up" className="text-white/70" />
          <div className="flex-1 h-1 bg-white/20 rounded-full">
            <div className="w-1/3 h-full bg-primary rounded-full relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" />
            </div>
          </div>
          <span className="text-[10px] font-mono text-white/70">
            12:45 / {lesson?.duration || "45:00"}
          </span>
          <Icon name="fullscreen" className="text-white/70" />
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant">
        <span>Módulo {module?.number}</span>
        <Icon name="chevron_right" className="text-[14px]" />
        <span>{module?.title}</span>
        <Icon name="chevron_right" className="text-[14px]" />
        <span className="text-primary">{lesson?.title}</span>
      </nav>

      {/* Lesson title & description */}
      <div>
        <h3 className="text-2xl md:text-3xl font-headline font-bold">
          {lesson?.title || "Lectura de Nivel 2 y Time & Sales"}
        </h3>
        <p className="text-on-surface-variant max-w-2xl leading-relaxed mt-3">
          Domina la interpretación de la liquidez oculta y el flujo de órdenes
          en tiempo real. Aprende a identificar "iceberg orders" y trampas
          institucionales antes de que afecten el precio.
        </p>
      </div>
    </div>
  );
}
