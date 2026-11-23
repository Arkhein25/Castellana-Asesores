const serviciosGenerales = [
  {
    titulo: "Penal",
    detalle:
      "ASISTENCIA EN COMISARÍA – HURTO – ROBO ALCOHOLEMIA – LESIONES – SALUD PÚBLICA DELITOS GRAVES",
    icono: (
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
    ),
  },
  {
    titulo: "Civil",
    detalle:
      "DIVORCIO PENSIONES DE ALIMENTOS DESAHUCIOS – ACCIDENTES DE TRÁFICO ARRENDAMIENTOS",
    icono: (
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
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    titulo: "Laboral",
    detalle: "DESPIDOS – RECLAMACIONES DE SALARIOS Y DERECHOS",
    icono: (
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
          d="M21 132V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-4zM7 7h10M7 11h10"
        />
      </svg>
    ),
  },
];

const serviciosExtranjeria = [
  {
    titulo: "Arraigos",
    descripcion:
      "Tramitamos tu autorización de residencia por circunstancias excepcionales/ arraigos con total seguridad jurídica.",
  },
  {
    titulo: "Residencia y Trabajo",
    descripcion:
      "Gestionamos tu permiso para trabajar en España, ya sea por cuenta ajena o emprendiendo tu propio negocio.",
  },
  {
    titulo: "Nacionalidad Española",
    descripcion:
      "Tramitamos todo el proceso para obtener la nacionalidad española, desde el examen, jura, hasta que obtener el DNI y pasaporte.",
  },
  {
    titulo: "Reagrupación Familiar",
    descripcion:
      "Facilitamos el proceso legal para reagrupar a tus seres queridos y puedan vivir contigo en España legalmente.",
  },
  {
    titulo: "Visados de Estudiante",
    descripcion:
      "Tramitamos tu estancia por estudios, prórrogas y modificaciones de permisos para trabajar por cuenta ajena y cuenta propia.",
  },
  {
    titulo: "Residencia Comunitaria",
    descripcion:
      "Gestión rápida, permisos de residencia de familiar de ciudadano de la Unión Europea, para cónyuges, parejas de hecho, hijos y adopciones.",
  },
  {
    titulo: "Recursos Administrativos",
    descripcion:
      "Si han denegado tu solicitud y trabajo, interponemos los correspondientes recursos: reposición, alzada y recurso contencioso administrativo.",
  },
  {
    titulo: "Prórrogas de Estancia",
    descripcion:
      "Gestionamos la renovación de tu estancia por estudios o la modificación a un permiso de residencia y trabajo tras finalizar tu formación.",
  },
  {
    titulo: "Asilo y Protección Internacional",
    descripcion: "Asesoramiento en protección internacional.",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="bg-[#faf8f5] text-[#1c1c1c] py-16 border-t border-stone-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nuestros Servicios */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#111111]">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-0.5 bg-[#9e8a6b] mx-auto my-5" />
          <p className="text-stone-600 text-base leading-relaxed">
            Brindamos soluciones integrales a ciudadanos extranjeros que desean
            vivir y trabajar legalmente en España. Nos encargamos de toda la
            complejidad burocrática para que tú puedas centrarte en tu futuro.
          </p>
        </div>

        {/* 3 Servicios Generales */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviciosGenerales.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 p-8 rounded-2xl shadow-md text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#9e8a6b]/15 border border-[#9e8a6b]/40 flex items-center justify-center text-[#9e8a6b] mb-6 shadow-sm">
                {srv.icono}
              </div>
              <h3 className="text-2xl font-serif-title font-semibold text-[#111111] mb-3">
                {srv.titulo}
              </h3>
              <p className="text-xs uppercase tracking-wider text-stone-600 leading-relaxed font-medium">
                {srv.detalle}
              </p>
            </div>
          ))}
        </div>

        {/* Extranjería */}
        <div id="extranjeria" className="mt-28 pt-16 border-t border-stone-300">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#111111]">
              Extranjería
            </h2>
            <div className="w-16 h-0.5 bg-[#9e8a6b] mx-auto mt-5" />
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviciosExtranjeria.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#9e8a6b] transition-all shadow-md group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#9e8a6b]/15 border border-[#9e8a6b]/40 flex items-center justify-center text-[#9e8a6b] mb-6 shadow-sm group-hover:bg-[#9e8a6b] group-hover:text-white transition-colors">
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">
                  {item.titulo}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {item.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
