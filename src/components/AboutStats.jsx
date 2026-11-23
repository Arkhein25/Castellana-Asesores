import { useState, useEffect, useRef } from "react";

export default function AboutStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="conocenos"
      className="bg-[#faf8f5] text-[#1c1c1c] py-14 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera dividida en 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start pb-12 border-b border-stone-300">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight text-[#111111]">
            Especialistas en Derecho de Extranjería
          </h2>
          <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
            Ofrecemos asesoramiento legal integral para que tu proceso de
            residencia sea sencillo y seguro, acompañándote en cada paso para
            asegurar el éxito de tus solicitudes de residencia y trabajo,
            visados y nacionalidad española.
          </p>
        </div>

        {/* 4 pilares en 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 py-12">
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#9e8a6b]/15 border border-[#9e8a6b]/40 flex items-center justify-center text-[#9e8a6b] shrink-0 shadow-sm">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111]">
                Asesoría Legal Especializada
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Expertos y dedicados exclusivamente en resolver tus trámites de
                extranjería con rigor y profesionalidad.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#9e8a6b]/15 border border-[#9e8a6b]/40 flex items-center justify-center text-[#9e8a6b] shrink-0 shadow-sm">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111]">
                Atención Personalizada
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Entendemos que cada caso es único. Te acompañamos en cada paso
                de tu proceso migratorio en España.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#9e8a6b]/15 border border-[#9e8a6b]/40 flex items-center justify-center text-[#9e8a6b] shrink-0 shadow-sm">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111]">
                Precios Asequibles
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Ofrecemos presupuestos cerrados y sin sorpresas, ajustados a tus
                necesidades y con facilidades de pago.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="w-16 h-16 rounded-2xl bg-[#9e8a6b]/15 border border-[#9e8a6b]/40 flex items-center justify-center text-[#9e8a6b] shrink-0 shadow-sm">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#111111]">Gestión Ágil</h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Optimizamos la revisión y presentación de tus documentos para
                evitar retrasos y maximizar las posibilidades de éxito.
              </p>
            </div>
          </div>
        </div>

        {/* Caja de estadísticas con contadores animados */}
        <div className="bg-[#1c1c1c] text-white rounded-2xl py-10 px-6 sm:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-xl">
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#9e8a6b]">
              <Counter target={25} suffix="+" trigger={hasAnimated} />
            </p>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 font-medium">
              Años de Experiencia
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#9e8a6b]">
              <Counter target={98} suffix="%" trigger={hasAnimated} />
            </p>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 font-medium">
              Casos de Éxito
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#9e8a6b]">
              <Counter target={2500} suffix="+" trigger={hasAnimated} />
            </p>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 font-medium">
              Casos Favorables
            </p>
          </div>
          <div>
            <p className="text-4xl sm:text-5xl font-extrabold text-[#9e8a6b]">
              <Counter target={100} suffix="%" trigger={hasAnimated} />
            </p>
            <p className="mt-2 text-xs sm:text-sm text-stone-300 font-medium">
              Compromiso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente auxiliar para animar el conteo de los números
function Counter({ target, suffix, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1500; // 1.5 segundos de animación
    const steps = 40;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [trigger, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}
