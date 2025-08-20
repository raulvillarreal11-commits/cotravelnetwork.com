export default function CoTravelNetworkLanding() {
  const LOGO_SRC = "sandbox:/mnt/data/A_logo_for_%22CoTravel_Network,%22_displayed_in_the_im.png";
  const DOMAIN = "https://cotravelnetwork.com";

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const Logo = () => (
    <div className="flex items-center gap-3">
      {/* PNG brand mark (shown when available) */}
      <img
        src={LOGO_SRC}
        alt="CoTravel Network"
        className="h-10 w-auto hidden"
        onLoad={(e) => {
          e.currentTarget.classList.remove('hidden');
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback) fallback.classList.add('hidden');
        }}
      />
      {/* Fallback SVG mark (shows if PNG isn't available in this preview) */}
      <svg className="h-10 w-10 text-[#0A4A8A]" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="29" stroke="#0A4A8A" strokeWidth="4"/>
        <path d="M9 24h46M9 40h34" stroke="#0A4A8A" strokeWidth="4" strokeLinecap="round"/>
        <path d="M32 10c10 8 10 36 0 44" stroke="#0A4A8A" strokeWidth="4"/>
        <path d="M45 20l10 6-6 10" fill="none" stroke="#0A4A8A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="leading-tight">
        <span className="block text-xl font-bold text-slate-900">CoTravel</span>
        <span className="block text-xs tracking-[0.25em] text-slate-600">NETWORK</span>
      </div>
    </div>
  );

  const Stat = ({ value, label }) => (
    <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-black/5">
      <div className="text-2xl font-extrabold text-slate-900">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );

  const FeatureCard = ({ title, description, icon }) => (
    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A4A8A]/10">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Logo />
          <nav className="hidden gap-6 md:flex">
            {[
              ["Inicio", "hero"],
              ["Servicios", "servicios"],
              ["Franquicia", "franquicia"],
              ["Testimonios", "testimonios"],
              ["Contacto", "contacto"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-sm font-medium text-slate-700 hover:text-[#0A4A8A]">
                {label}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <button onClick={() => scrollTo("franquicia")} className="rounded-xl bg-[#FF6A00] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#ff7a1f]">
              Quiero mi franquicia
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#0A4A8A] via-[#0A4A8A]/90 to-[#1b6bd1]" />
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-[#FF6A00]" /> Nuevo modelo de franquicia
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Viajes inteligentes. <span className="text-[#FFCF99]">Negocio rentable.</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/90">
              CoTravel Network es la red de agencias que combina tecnología, tarifas preferenciales y marketing centralizado para crecer tus ventas desde el día uno.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => scrollTo("contacto")} className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A4A8A] shadow hover:bg-slate-100">Cotizar viaje</button>
              <button onClick={() => scrollTo("franquicia")} className="rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Ser franquiciatario</button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat value="Tarifas B2B" label="acceso preferente" />
              <Stat value="Soporte 360°" label="operativo & ventas" />
              <Stat value="> 600" label="hoteles y mayoristas" />
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto aspect-[4/3] w-full max-w-lg rounded-3xl bg-white/5 p-2 ring-1 ring-white/20">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white/70 to-white/40 p-6">
                <div className="text-[#0A4A8A]">
                  <p className="text-sm font-semibold">Panel Demo</p>
                  <h3 className="text-2xl font-extrabold">Dashboard CoTravel</h3>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Vuelos", "Hoteles", "Paquetes", "Autos", "Seguros", "Tours"].map((k) => (
                    <div key={k} className="rounded-xl border border-slate-200 bg-white p-3 text-center text-xs font-medium text-slate-700 shadow-sm">
                      {k}
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-24 rounded-xl border border-dashed border-slate-300 bg-white/70 p-3 text-xs text-slate-500">
                  <p>Gráficas de ventas, reservas activas, margen por producto y metas mensuales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Servicios para viajeros y empresas</h2>
          <p className="mt-2 text-slate-600">Todo lo que necesitas para planear, reservar y gestionar tus viajes con soporte experto.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FeatureCard title="Vuelos" description="Tarifas competitivas y combinaciones inteligentes a todo el mundo." icon={<span className="text-2xl">✈️</span>} />
          <FeatureCard title="Hoteles" description="Acceso B2B a cadenas y propiedades boutique con disponibilidad real." icon={<span className="text-2xl">🏨</span>} />
          <FeatureCard title="Paquetes" description="Diseñamos experiencias completas con traslados, tours y seguros." icon={<span className="text-2xl">🧳</span>} />
          <FeatureCard title="Corporativos" description="Políticas de viaje, reporteo y control de gastos para empresas." icon={<span className="text-2xl">🏢</span>} />
          <FeatureCard title="Grupos & MICE" description="Congresos, incentivos y viajes de graduación con logística end-to-end." icon={<span className="text-2xl">👥</span>} />
          <FeatureCard title="Soporte 24/7" description="Acompañamiento antes, durante y después del viaje." icon={<span className="text-2xl">📞</span>} />
        </div>
      </section>

      {/* Franquicia */}
      <section id="franquicia" className="relative overflow-hidden bg-[#0A4A8A] py-16 text-white">
        <div className="absolute inset-0 -z-10 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, #fff 2px, transparent 2px)",
          backgroundSize: "20px 20px"
        }}/>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold">Franquicia CoTravel Network</h2>
            <p className="mt-3 text-white/90">Únete a una red con marca, procesos y tecnología lista para operar. Te entregamos un modelo llave en mano y acompañamiento constante.</p>
            <ul className="mt-6 space-y-3 text-white/90">
              <li>• Acceso a tarifas preferenciales y plataforma de reservas.</li>
              <li>• Capacitación inicial + continua y playbooks operativos.</li>
              <li>• Marketing centralizado y calendario de campañas.</li>
              <li>• Soporte 360°: operativo, comercial y tecnológico.</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0A4A8A] shadow hover:bg-slate-100">Solicitar información</a>
              <a href="#faq" className="rounded-xl border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Ver preguntas frecuentes</a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <h3 className="text-xl font-bold">Inversión y beneficios (ejemplo)</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/10 p-4"><div className="text-2xl font-extrabold">$180k</div><div className="text-white/80">Cuota inicial</div></div>
              <div className="rounded-xl bg-white/10 p-4"><div className="text-2xl font-extrabold">5–8%</div><div className="text-white/80">Regalías sobre ventas</div></div>
              <div className="rounded-xl bg-white/10 p-4"><div className="text-2xl font-extrabold">6–10m</div><div className="text-white/80">Punto de equilibrio</div></div>
              <div className="rounded-xl bg-white/10 p-4"><div className="text-2xl font-extrabold">ROI 30–45%</div><div className="text-white/80">Rentabilidad anual</div></div>
            </div>
            <p className="mt-4 text-xs text-white/70">*Montos y métricas de referencia. Personalizamos tu plan según ciudad y formato (local u home office).</p>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-slate-900">Clientes que viajan mejor con CoTravel</h2>
          <p className="mt-2 text-slate-600">Historias reales de viajeros y empresas que optimizaron sus viajes con nuestra red.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["María G.", "CDMX", "Me ayudaron a encontrar un vuelo con excelente conexión y hotel céntrico. Todo fácil."],
            ["Grupo Orion", "Monterrey", "Implementamos política de viajes y bajamos 18% el gasto anual."],
            ["Luis R.", "Guadalajara", "Compré paquete a Europa y el soporte durante el viaje fue clave."],
          ].map(([name, city, text]) => (
            <div key={name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="mb-2 text-lg font-semibold text-slate-900">{name} • <span className="text-slate-500 text-sm">{city}</span></div>
              <p className="text-slate-600">“{text}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-4 pb-4">
        <h2 className="text-3xl font-bold text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          {[{
            q: "¿Necesito experiencia previa para operar la franquicia?",
            a: "No es obligatoria. Damos capacitación completa en productos, sistemas y ventas, además de soporte continuo.",
          },{
            q: "¿Puedo operar en modalidad home office?",
            a: "Sí. Contamos con formatos de operación desde casa o con local físico desde 12 m².",
          },{
            q: "¿Qué incluye la cuota inicial?",
            a: "Derecho de uso de marca, onboarding, acceso a plataformas, manuales operativos y kit de lanzamiento.",
          },{
            q: "¿Cómo gano dinero como franquiciatario?",
            a: "Por comisiones y márgenes de venta en vuelos, hoteles, paquetes, seguros, grupos y corporativos.",
          }].map((item) => (
            <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm">
              <summary className="cursor-pointer select-none text-sm font-semibold text-slate-900">{item.q}</summary>
              <p className="mt-2 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="relative bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Hablemos</h2>
              <p className="mt-2 text-slate-600">Cuéntanos tu plan: cotizamos tu próximo viaje o te enviamos el dossier completo de franquicia.</p>
              <div className="mt-6 space-y-2 text-sm text-slate-700">
                <p>📍 México • Atención nacional</p>
                <p>✉️ <a className="underline decoration-[#FF6A00]/40 underline-offset-2 hover:text-[#0A4A8A]" href="mailto:hola@cotravelnetwork.com">hola@cotravelnetwork.com</a></p>
                <p>🕘 L–S 9:00–18:00</p>
              </div>
            </div>
            <form className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5" method="POST" action="mailto:hola@cotravelnetwork.com" encType="text/plain">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Nombre</label>
                  <input required name="nombre" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#0A4A8A] focus:ring-2 focus:ring-[#0A4A8A]/20"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" required name="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#0A4A8A] focus:ring-2 focus:ring-[#0A4A8A]/20"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Teléfono</label>
                  <input name="telefono" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#0A4A8A] focus:ring-2 focus:ring-[#0A4A8A]/20"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Ciudad</label>
                  <input name="ciudad" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#0A4A8A] focus:ring-2 focus:ring-[#0A4A8A]/20"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Interés</label>
                  <select name="interes" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#0A4A8A] focus:ring-2 focus:ring-[#0A4A8A]/20">
                    <option>Quiero cotizar un viaje</option>
                    <option>Quiero información de la franquicia</option>
                    <option>Alianza / Distribución</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Mensaje</label>
                  <textarea name="mensaje" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:border-[#0A4A8A] focus:ring-2 focus:ring-[#0A4A8A]/20"/>
                </div>
                <button className="rounded-xl bg-[#FF6A00] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#ff7a1f]">Enviar</button>
                <p className="text-xs text-slate-500">Al enviar aceptas nuestro aviso de privacidad.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <Logo />
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} CoTravel Network. Todos los derechos reservados.</p>
          <div className="flex gap-4 text-sm">
            <a className="text-slate-600 hover:text-[#0A4A8A]" href={DOMAIN} target="_blank" rel="noopener noreferrer">cotravelnetwork.com</a>
            <a className="text-slate-600 hover:text-[#0A4A8A]" href="/aviso-de-privacidad">Aviso de privacidad</a>
            <a className="text-slate-600 hover:text-[#0A4A8A]" href="/terminos">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
