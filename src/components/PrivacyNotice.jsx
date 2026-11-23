import { useState } from "react";

export default function PrivacyNotice() {
  const [showBanner, setShowBanner] = useState(true);
  const [showConfig, setShowConfig] = useState(false);
  const [preferences, setPreferences] = useState({
    metrics: true,
    promotions: false,
  });

  const handleAcceptAll = () => {
    localStorage.setItem("session_prefs", "all");
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("session_prefs", "minimal");
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("session_prefs", JSON.stringify(preferences));
    setShowBanner(false);
    setShowConfig(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6 bg-[#1a1714]/95 backdrop-blur-md border-t border-[#9e8a6b]/30 shadow-2xl text-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {!showConfig ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-4xl">
              <h3 className="text-lg font-serif-title font-semibold text-white">
                Aviso de Privacidad y Preferencias
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Utilizamos tecnologías propias y de terceros para optimizar
                nuestros servicios y mostrarle información relevante basada en
                sus hábitos de navegación. Puede aceptar todas las opciones,
                rechazarlas o configurar sus preferencias detalladamente.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => setShowConfig(true)}
                className="px-4 py-2.5 bg-transparent hover:bg-white/5 border border-white/20 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Configurar
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2.5 bg-transparent hover:bg-white/5 border border-white/20 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 bg-[#9e8a6b] hover:bg-[#8a7759] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-md"
              >
                Aceptar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4 max-w-3xl">
            <h3 className="text-lg font-serif-title font-semibold text-white">
              Configuración de Privacidad
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Seleccione qué categorías de preferencias desea permitir:
            </p>

            <div className="space-y-3 py-2 border-y border-white/10 my-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Tecnologías Esenciales (Obligatorias)
                  </p>
                  <p className="text-xs text-stone-400">
                    Necesarias para el correcto funcionamiento de la interfaz.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="w-4 h-4 accent-[#9e8a6b] cursor-not-allowed"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Métricas y Rendimiento
                  </p>
                  <p className="text-xs text-stone-400">
                    Permiten medir el tráfico y mejorar la experiencia de
                    navegación.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.metrics}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      metrics: e.target.checked,
                    })
                  }
                  className="w-4 h-4 accent-[#9e8a6b] cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Personalización
                  </p>
                  <p className="text-xs text-stone-400">
                    Utilizadas para adaptar contenidos a sus preferencias.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.promotions}
                  onChange={(e) =>
                    setPreferences({
                      ...preferences,
                      promotions: e.target.checked,
                    })
                  }
                  className="w-4 h-4 accent-[#9e8a6b] cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setShowConfig(false)}
                className="px-4 py-2 bg-transparent hover:bg-white/5 text-xs font-semibold uppercase tracking-wider rounded text-stone-300"
              >
                Volver
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2.5 bg-[#9e8a6b] hover:bg-[#8a7759] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors"
              >
                Guardar Preferencias
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
