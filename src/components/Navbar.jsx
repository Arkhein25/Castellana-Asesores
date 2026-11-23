import { useState } from "react";
import logoCA from "../assets/LogoCA.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#141414]/90 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src={logoCA}
            Alt="Castellana Asesores"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-200">
          <a href="#inicio" className="hover:text-[#9e8a6b] transition-colors">
            Inicio
          </a>
          <a
            href="#conocenos"
            className="hover:text-[#9e8a6b] transition-colors"
          >
            Conócenos
          </a>
          <a
            href="#servicios"
            className="hover:text-[#9e8a6b] transition-colors"
          >
            Servicios
          </a>
          <a
            href="#extranjeria"
            className="hover:text-[#9e8a6b] transition-colors"
          >
            Extranjería
          </a>
          <a
            href="#contacto"
            className="px-5 py-2.5 bg-[#9e8a6b] hover:bg-[#8c795b] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors"
          >
            Solicitar Cita
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#141414] border-b border-white/10 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            className="block py-2 text-stone-200 hover:text-[#9e8a6b]"
          >
            Inicio
          </a>
          <a
            href="#conocenos"
            onClick={() => setOpen(false)}
            className="block py-2 text-stone-200 hover:text-[#9e8a6b]"
          >
            Conócenos
          </a>
          <a
            href="#servicios"
            onClick={() => setOpen(false)}
            className="block py-2 text-stone-200 hover:text-[#9e8a6b]"
          >
            Servicios
          </a>
          <a
            href="#extranjeria"
            onClick={() => setOpen(false)}
            className="block py-2 text-stone-200 hover:text-[#9e8a6b]"
          >
            Extranjería
          </a>
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="block text-center py-3 bg-[#9e8a6b] text-white font-semibold uppercase text-xs tracking-wider rounded"
          >
            Solicitar Cita
          </a>
        </div>
      )}
    </header>
  );
}
