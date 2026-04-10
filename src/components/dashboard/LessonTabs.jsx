import { useState } from "react";
import Icon from "../shared/Icon";

export default function LessonTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Resumen" },
    { id: "materials", label: "Materiales (4)" },
    { id: "notes", label: "Notas" },
    { id: "qa", label: "Comunidad Q&A" },
  ];

  return (
    <div>
      {/* Tab headers */}
      <div className="border-b border-outline-variant/20">
        <div className="flex gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary font-bold"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-6">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
              <h4 className="text-sm font-bold text-primary mb-3">
                Objetivos de Aprendizaje
              </h4>
              <ul className="space-y-3">
                {[
                  "Identificar absorción en el bid/ask.",
                  'Diferenciar entre "spoofing" y liquidez real.',
                  "Calibrar entradas de precisión quirúrgica.",
                ].map((obj) => (
                  <li
                    key={obj}
                    className="flex gap-3 text-sm text-on-surface-variant"
                  >
                    <Icon
                      name="check_circle"
                      filled
                      className="text-tertiary text-lg shrink-0"
                    />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
              <h4 className="text-sm font-bold text-primary mb-3">
                Recursos Destacados
              </h4>
              <div className="flex items-center gap-4 p-3 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Icon name="description" className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold">Guía de Niveles.pdf</p>
                  <p className="text-[10px] text-on-surface-variant">
                    2.4 MB &bull; PDF
                  </p>
                </div>
                <Icon
                  name="download"
                  className="text-on-surface-variant text-sm"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "materials" && (
          <div className="space-y-3">
            {[
              { name: "Guía de Niveles.pdf", size: "2.4 MB", type: "PDF" },
              { name: "Cheat Sheet - Level 2.pdf", size: "1.1 MB", type: "PDF" },
              { name: "Template de Análisis.xlsx", size: "340 KB", type: "Excel" },
              { name: "Video Complementario.mp4", size: "45 MB", type: "Video" },
            ].map((file) => (
              <div
                key={file.name}
                className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center">
                  <Icon name="description" className="text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{file.name}</p>
                  <p className="text-xs text-on-surface-variant">
                    {file.size} &bull; {file.type}
                  </p>
                </div>
                <Icon
                  name="download"
                  className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === "notes" && (
          <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/10">
            <textarea
              placeholder="Escribe tus notas para esta lección..."
              className="w-full h-40 bg-transparent text-on-surface text-sm resize-none outline-none placeholder:text-on-surface-variant/50"
            />
          </div>
        )}

        {activeTab === "qa" && (
          <div className="text-center py-12 text-on-surface-variant">
            <Icon name="forum" className="text-4xl text-primary/30 mb-3" />
            <p className="text-sm">No hay preguntas aún para esta lección.</p>
            <button className="mt-4 px-6 py-2 bg-primary/10 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors">
              Hacer una pregunta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
