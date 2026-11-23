import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "Extranjería",
    asunto: "",
    mensaje: "",
    privacidad: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const textoWhatsApp = `Hola Castellana Asesores, soy ${formData.nombre}. Consulto por: ${formData.servicio} (${formData.asunto}). ${formData.mensaje}`;
    window.open(
      `https://wa.me/34618184769?text=${encodeURIComponent(textoWhatsApp)}`,
      "_blank",
    );
  };

  return (
    <section
      id="contacto"
      className="bg-[#0d0d0d] text-white py-24 border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Columna Izquierda: Datos del Despacho */}
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold leading-tight">
            Solicita una Consulta Personalizada
          </h2>

          <div className="space-y-6 pt-4">
            <div className="flex items-start gap-4">
              <span className="text-[#c5b08e] mt-1">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-white">Dirección</h3>
                <p className="text-sm text-stone-300 mt-1">
                  Calle Bravo Murillo 377 piso 7 puerta A – C. P. 28020 Madrid.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#c5b08e] mt-1">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-white">Email</h3>
                <a
                  href="mailto:jose@extranjeriaasesores.es"
                  className="text-sm text-stone-300 hover:text-[#c5b08e] mt-1 block"
                >
                  jose@extranjeriaasesores.es
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#c5b08e] mt-1">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-bold text-white">Horario</h3>
                <p className="text-sm text-stone-300 mt-1">
                  Lunes – Viernes 9 am – 6pm
                </p>
                <p className="text-sm text-stone-300">Sábados 11am – 4pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario Blanco */}
        <div className="lg:col-span-7 bg-white text-[#1a1a1a] rounded-xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Nombre *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu Nombre"
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-[#9e8a6b]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Tu teléfono(+34 987654321)"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-[#9e8a6b]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tucorreo@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-[#9e8a6b]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Servicio a consultar
                </label>
                <select
                  value={formData.servicio}
                  onChange={(e) =>
                    setFormData({ ...formData, servicio: e.target.value })
                  }
                  className="w-full px-4 py-2.5 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-[#9e8a6b]"
                >
                  <option>Extranjería</option>
                  <option>Nacionalidad Española</option>
                  <option>Arraigos</option>
                  <option>Residencia y Trabajo</option>
                  <option>Penal</option>
                  <option>Civil</option>
                  <option>Laboral</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Asunto
              </label>
              <input
                type="text"
                placeholder="Asunto"
                value={formData.asunto}
                onChange={(e) =>
                  setFormData({ ...formData, asunto: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-[#9e8a6b]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                Texto *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Cuéntanos brevemente tu caso..."
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-[#9e8a6b]"
              />
            </div>

            <label className="flex items-center gap-2.5 text-xs text-stone-600 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.privacidad}
                onChange={(e) =>
                  setFormData({ ...formData, privacidad: e.target.checked })
                }
                className="rounded border-stone-300 text-[#9e8a6b] focus:ring-[#9e8a6b]"
              />
              <span>He leído y acepto la Política de Privacidad</span>
            </label>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#9e8a6b] hover:bg-[#8a7759] text-white text-xs font-bold uppercase tracking-widest rounded transition-colors cursor-pointer"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
