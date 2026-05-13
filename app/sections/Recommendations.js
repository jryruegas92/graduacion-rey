const categories = [
  { emoji: "☕", label: "Café y brunch" },
  { emoji: "🌮", label: "Tacos · Mexicano" },
  { emoji: "🍝", label: "Cenas" },
  { emoji: "🍸", label: "Bares y cocktails" },
  { emoji: "🌅", label: "Vistas y caminatas" },
  { emoji: "🌉", label: "San Francisco" },
];

const LIST_URL = "https://maps.app.goo.gl/9VsD2fr5RXwaVG7A7";

export default function Recommendations() {
  return (
    <section id="recos" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">Mis lugares</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          Recomendaciones de{" "}
          <span className="italic text-california-gold-dark">Rey</span>
        </h2>
        <p className="text-ink/70 mt-4 max-w-2xl">
          Una lista grande en Google Maps que llevo curando hace años. Cafés,
          restaurantes, miradores, bares — todo lo bueno del Bay Area.
        </p>

        {/* Big CTA to Google Maps list */}
        <a
          href={LIST_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 block card bg-gradient-to-br from-berkeley-blue to-berkeley-blue-dark text-cream rounded-2xl p-8 md:p-10 shadow-soft relative overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, #FDB515, transparent 65%)",
            }}
          />
          <div className="relative flex items-start justify-between gap-6 flex-wrap">
            <div className="flex-1 min-w-[240px]">
              <div className="text-xs uppercase tracking-widest text-california-gold">
                Mi lista personal
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mt-2">
                Abrir en Google Maps
              </h3>
              <p className="text-cream/80 mt-3 max-w-md">
                Guárdala en tu cuenta para verla con un toque. Funciona en
                iPhone y Android.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((c, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cream/10 border border-cream/15 px-3 py-1.5 rounded-full"
                  >
                    {c.emoji} {c.label}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-6xl md:text-7xl">📍</div>
          </div>
          <div className="relative mt-8 inline-flex items-center gap-2 bg-california-gold text-berkeley-blue px-5 py-3 rounded-full font-semibold text-sm">
            Abrir lista →
          </div>
        </a>
      </div>
    </section>
  );
}
