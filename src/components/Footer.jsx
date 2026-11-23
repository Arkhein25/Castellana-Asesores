import logoCA from "../assets/LogoCA.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#201d18] text-stone-300 pt-20 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          {/* Columna 1: Logo, descripción e iconos de redes sociales */}
          <div className="space-y-5">
            <img
              src={logoCA}
              alt="Castellana Asesores"
              className="h-14 w-auto object-contain"
            />
            <p className="text-sm text-stone-400 leading-relaxed">
              Abogados especialistas en Derecho de Extranjería y Nacionalidad en
              Madrid. Comprometidos con tu seguridad jurídica y el éxito de tus
              trámites migratorios.
            </p>
            {/* Iconos de Redes Sociales */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#2a2620] hover:bg-[#38332b] flex items-center justify-center text-stone-300 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-[#2a2620] hover:bg-[#38332b] flex items-center justify-center text-stone-300 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#2a2620] hover:bg-[#38332b] flex items-center justify-center text-stone-300 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="17.5"
                    x2="17.51"
                    y1="6.5"
                    y2="6.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-[#2a2620] hover:bg-[#38332b] flex items-center justify-center text-stone-300 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-white font-serif-title font-bold text-lg mb-5 tracking-wide">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-[#9e8a6b] transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#conocenos"
                  className="hover:text-[#9e8a6b] transition-colors"
                >
                  Conócenos
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-[#9e8a6b] transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-[#9e8a6b] transition-colors"
                >
                  Contáctanos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información */}
          <div>
            <h4 className="text-white font-serif-title font-bold text-lg mb-5 tracking-wide">
              Información
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#9e8a6b] transition-colors"
                >
                  Preguntas Frecuentes (FAQ)
                </a>
              </li>
              <li>
                <a
                  href="#privacidad"
                  className="hover:text-[#9e8a6b] transition-colors"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#cookies"
                  className="hover:text-[#9e8a6b] transition-colors"
                >
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Oficina con los botones idénticos a la captura */}
          <div>
            <h4 className="text-white font-serif-title font-bold text-lg mb-5 tracking-wide">
              Oficina
            </h4>
            <p className="text-sm text-stone-400 leading-relaxed mb-5">
              Calle Bravo Murillo 377 piso 7 puerta A – C. P. 28020 Madrid.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+34618184769"
                className="flex items-center gap-3 px-4 py-3 bg-[#2a2620] hover:bg-[#342f28] border border-white/5 rounded-lg text-white font-semibold text-sm transition-colors shadow-sm"
              >
                <svg
                  className="w-4 h-4 text-[#9e8a6b] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+34 618 18 47 69</span>
              </a>
              <a
                href="mailto:jose@extranjeriaasesores.es"
                className="flex items-center gap-3 px-4 py-3 bg-[#2a2620] hover:bg-[#342f28] border border-white/5 rounded-lg text-stone-200 text-sm transition-colors shadow-sm overflow-hidden"
              >
                <svg
                  className="w-4 h-4 text-[#9e8a6b] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="truncate">jose@extranjeriaasesores.es</span>
              </a>
            </div>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-stone-400 gap-4">
          <p>
            Copyright © 2026 Castellana Asesores. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#terminos" className="hover:text-white transition-colors">
              Términos & Condiciones
            </a>
            <span>|</span>
            <a
              href="#privacidad"
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </a>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp con el icono exacto y estilizado */}
      <a
        href="https://wa.me/34618184769"
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl shadow-black/70 transition-transform hover:scale-110"
      >
        <svg className="w-11 h-11 fill-current" viewBox="0 0 32 32">
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.647 4.802 1.776 6.824L2 29.5l6.892-1.748A13.937 13.937 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.454c-2.19 0-4.258-.57-6.052-1.574l-.434-.252-4.498 1.142 1.166-4.384-.282-.45A11.59 11.59 0 014.545 16c0-6.335 5.12-11.455 11.455-11.455 6.336 0 11.455 5.12 11.455 11.455 0 6.336-5.119 11.454-11.455 11.454zm6.276-8.583c-.343-.172-2.03-.998-2.344-1.112-.314-.114-.543-.172-.772.172-.228.343-.886 1.112-1.086 1.342-.2.228-.4.257-.743.085s-1.44-.531-2.744-1.694c-1.014-.904-1.698-2.02-1.899-2.363-.2-.343-.021-.529.15-.7.155-.155.343-.4.514-.6.172-.2.228-.343.343-.571.114-.228.057-.428-.028-.6-.086-.172-.772-1.862-1.058-2.548-.28-.675-.564-.584-.772-.595l-.658-.011c-.228 0-.6.086-.914.428s-1.2 1.171-1.2 2.856 1.228 3.313 1.4 3.542c.172.228 2.414 3.686 5.855 5.168.818.353 1.457.564 1.956.721.821.261 1.567.224 2.158.136.658-.098 2.03-.83 2.316-1.632.285-.802.285-1.488.2-1.631-.085-.143-.314-.228-.657-.4z" />
        </svg>
      </a>
    </>
  );
}
