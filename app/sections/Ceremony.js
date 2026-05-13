export default function Ceremony() {
  const greekMaps =
    "https://www.google.com/maps/search/?api=1&query=Greek+Theatre+UC+Berkeley+2001+Gayley+Rd";

  return (
    <section id="ceremonia" className="bg-berkeley-blue text-cream py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -left-40 top-0 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #FDB515, transparent 60%)" }}
      />
      <div className="max-w-6xl mx-auto px-5 relative">
        <p className="eyebrow !text-california-gold">El gran día</p>
        <h2 className="font-serif text-4xl md:text-6xl mt-3 leading-tight">
          Commencement <span className="italic text-california-gold">Ceremony</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-california-gold mb-2">
              Fecha
            </div>
            <div className="text-2xl font-serif">Sábado</div>
            <div className="text-xl">23 de mayo, 2026</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-california-gold mb-2">
              Sede
            </div>
            <a
              href={greekMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-serif underline underline-offset-4 hover:text-california-gold transition-colors"
            >
              Greek Theatre
            </a>
            <div className="text-cream/80">UC Berkeley · 2001 Gayley Rd</div>
            <a
              href={greekMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-california-gold hover:text-cream transition-colors"
            >
              Abrir en Google Maps →
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-california-gold mb-2">
              Hora
            </div>
            <div className="text-2xl font-serif">2:00 – 4:00 PM</div>
            <div className="text-cream/80">Recepción 4:00 – 6:00 PM</div>
            <div className="text-cream/60 text-sm mt-1">Haas Courtyard</div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-cream/[0.04] border border-cream/10 rounded-2xl p-6">
            <div className="text-california-gold text-sm font-semibold uppercase tracking-widest">
              Para invitados
            </div>
            <ul className="mt-4 space-y-3 text-cream/90">
              <li className="flex gap-3">
                <span className="text-california-gold">→</span>
                <span>
                  Llegar entre <strong>1:00 y 1:30 PM</strong> para conseguir
                  buenos lugares.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-california-gold">→</span>
                <span>
                  <strong>Boleto requerido</strong> para entrar al Greek
                  Theatre. Yo se los entrego.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-california-gold">→</span>
                <span>Uber o Lyft al Greek Theatre — no hay parking en campus.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-california-gold">→</span>
                <span>Los asientos son escalones de piedra: traigan una capa ligera.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-california-gold">→</span>
                <span>Cada familia recibe 2 programas impresos como recuerdo.</span>
              </li>
            </ul>
          </div>

          <div className="bg-california-gold text-berkeley-blue rounded-2xl p-6">
            <div className="text-berkeley-blue/70 text-sm font-semibold uppercase tracking-widest">
              Para mí
            </div>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <span>🎓</span>
                <span>
                  Llego al Greek Theatre alrededor de las{" "}
                  <strong>12:30 PM</strong> en regalia completa.
                </span>
              </li>
              <li className="flex gap-3">
                <span>📍</span>
                <span>
                  Entrada por el <strong>lado sur</strong>, cerca de Haas y
                  Memorial Stadium.
                </span>
              </li>
              <li className="flex gap-3">
                <span>⚠️</span>
                <span>
                  No me van a ver antes de que empiece la ceremonia — todo bien.
                </span>
              </li>
              <li className="flex gap-3">
                <span>🤝</span>
                <span>
                  Nos vemos en la recepción del Haas Courtyard a las 4 PM.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
