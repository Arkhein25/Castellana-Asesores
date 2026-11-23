import heroImg from "../assets/banner-oficina.png";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-[#0d0d0d] text-white overflow-hidden"
    >
      <div className="relative min-h-[580px] sm:min-h-[640px] flex items-center">
        {/* Imagen con un encuadre más abierto y natural */}
        <img
          src={heroImg}
          alt="Castellana Asesores en Derecho"
          className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-80"
        />
        {/* Degradado lateral suave para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold leading-[1.15] text-white drop-shadow-md">
              Castellana Asesores en Derecho, Líder en Extranjería
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="px-7 py-3.5 bg-[#9e8a6b] hover:bg-[#8a7759] text-white text-xs font-bold uppercase tracking-widest transition-colors rounded shadow-lg"
              >
                Solicitar Cita
              </a>
              <a
                href="#servicios"
                className="px-7 py-3.5 border border-white/80 hover:bg-white hover:text-[#0d0d0d] text-white text-xs font-bold uppercase tracking-widest transition-colors rounded shadow-lg"
              >
                Servicios
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior de 3 beneficios */}
      <div className="relative bg-[#141414] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#9e8a6b]/20 border border-[#9e8a6b]/40 flex items-center justify-center text-[#d4bd99] shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm text-stone-200">
              Agenda una{" "}
              <strong className="text-white font-semibold">cita</strong>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#9e8a6b]/20 border border-[#9e8a6b]/40 flex items-center justify-center text-[#d4bd99] shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-sm text-stone-200">
              Atención{" "}
              <strong className="text-white font-semibold">
                personalizada
              </strong>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#9e8a6b]/20 border border-[#9e8a6b]/40 flex items-center justify-center text-[#d4bd99] shrink-0">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <p className="text-sm text-stone-200">
              Forma de pago{" "}
              <strong className="text-white font-semibold">sencilla</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
