export default function Hero() {
  return (
    <section id="top" className="bg-hero text-cream relative overflow-hidden">
      {/* decorative seal */}
      <div
        aria-hidden
        className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, #FDB515 0%, transparent 60%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-5 pt-20 pb-24 md:pt-28 md:pb-32 relative">
        <p className="eyebrow !text-california-gold mb-6">
          UC Berkeley Haas · Class of 2026
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
          Graduación{" "}
          <span className="italic-accent">Rey Yruegas</span>
        </h1>
        <p className="mt-8 text-cream/90 text-lg md:text-xl max-w-2xl">
          MBA 2026 · Bienvenidos a Berkeley
        </p>
        <p className="mt-2 text-california-gold font-medium text-lg md:text-xl">
          19 – 30 de mayo, 2026 · Ceremonia sábado 23
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="#eventos"
            className="px-5 py-3 rounded-full bg-california-gold text-berkeley-blue font-semibold text-sm hover:bg-california-gold-dark hover:text-cream transition-colors shadow-gold"
          >
            Ver eventos →
          </a>
          <a
            href="#agenda"
            className="px-5 py-3 rounded-full border border-cream/30 text-cream font-medium text-sm hover:bg-cream/10 transition-colors"
          >
            Agenda completa
          </a>
        </div>

        <div className="mt-16 inline-flex items-center gap-2 text-xs text-cream/70 tracking-widest uppercase">
          <span className="inline-block w-8 h-px bg-california-gold"></span>
          Scroll
        </div>
      </div>

      {/* sticky address banner */}
      <div className="bg-california-gold text-berkeley-blue">
        <div className="max-w-6xl mx-auto px-5 py-3 text-sm md:text-base flex items-center gap-2 flex-wrap">
          <span aria-hidden>📍</span>
          <span>
            Mi casa:{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=2486+Hilgard+Ave+Berkeley+CA+94709"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 font-semibold hover:text-berkeley-blue-dark"
            >
              2486 Hilgard Ave, Berkeley, CA 94709
            </a>{" "}
            — punto de referencia para la semana.
          </span>
        </div>
      </div>

      {/* Welcome copy block */}
      <div className="bg-cream text-ink">
        <div className="max-w-3xl mx-auto px-5 py-20 md:py-28 text-center">
          <p className="eyebrow mb-6">Bienvenidos</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-berkeley-blue">
            Lo logramos.{" "}
            <span className="italic text-california-gold-dark">
              Llegamos hasta aquí.
            </span>
          </h2>
          <p className="mt-6 text-lg text-ink/80 leading-relaxed">
            Familia, amigos — esta pequeña guía tiene todo lo que necesitan para
            disfrutar Berkeley, estar presentes en el gran día, y aprovechar la
            semana. Si tienen dudas, me escriben directo. Gracias por venir
            desde tan lejos para acompañarnos.
          </p>
          <p className="mt-8 font-serif text-2xl text-berkeley-blue italic">
            — Rey
          </p>
        </div>
      </div>
    </section>
  );
}
