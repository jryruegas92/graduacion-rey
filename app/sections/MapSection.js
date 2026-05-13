const pins = [
  {
    title: "Mi casa",
    emoji: "🏠",
    address: "2486 Hilgard Ave, Berkeley, CA 94709",
    note: "Punto de referencia para la semana",
    maps: "https://www.google.com/maps/search/?api=1&query=2486+Hilgard+Ave+Berkeley+CA+94709",
  },
  {
    title: "Viernes · Family Reception",
    emoji: "🌅",
    address: "Point San Pablo Harbor",
    note: "Atardecer junto al agua · 5–9 PM",
    maps: "https://www.google.com/maps/search/?api=1&query=Point+San+Pablo+Harbor",
  },
  {
    title: "Sábado · Greek Theatre",
    emoji: "🎓",
    address: "2001 Gayley Rd, Berkeley, CA 94720",
    note: "Ceremonia 2–4 PM · llegar 1:00–1:30 PM",
    maps: "https://www.google.com/maps/search/?api=1&query=Greek+Theatre+UC+Berkeley",
  },
  {
    title: "Sábado · Haas Courtyard",
    emoji: "🥂",
    address: "Haas School of Business, UC Berkeley",
    note: "Recepción 4–6 PM · al lado del Greek",
    maps: "https://www.google.com/maps/search/?api=1&query=Haas+School+of+Business+UC+Berkeley",
  },
];

// Multi-stop embed: renders all four points as numbered pins on the map.
const multiPinEmbed =
  "https://maps.google.com/maps?saddr=2486+Hilgard+Ave+Berkeley+CA+94709" +
  "&daddr=Greek+Theatre+UC+Berkeley" +
  "+to:Haas+School+of+Business+UC+Berkeley" +
  "+to:Point+San+Pablo+Harbor" +
  "&output=embed";

export default function MapSection() {
  return (
    <section id="mapa" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">Logística</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          El <span className="italic text-california-gold-dark">mapa</span>
        </h2>
        <p className="text-ink/70 mt-4 max-w-2xl">
          Cuatro puntos clave en el Bay Area. Toquen cualquier tarjeta para
          abrirlo en Google Maps.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {pins.map((p, i) => (
            <a
              key={i}
              href={p.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="card bg-white rounded-2xl p-6 shadow-soft border border-berkeley-blue/5 flex items-start gap-4 group"
            >
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="text-4xl">{p.emoji}</div>
                <div className="text-[10px] font-bold text-berkeley-blue bg-california-gold rounded-full w-6 h-6 flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-california-gold-dark">
                  {p.title}
                </div>
                <div className="font-serif text-lg text-berkeley-blue mt-1">
                  {p.address}
                </div>
                <div className="text-sm text-ink/70 mt-1">{p.note}</div>
                <div className="mt-3 text-sm text-berkeley-blue group-hover:text-california-gold-dark transition-colors">
                  Abrir en Google Maps →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Embedded map with all four locations pinned */}
        <div className="mt-10 rounded-2xl overflow-hidden shadow-soft border border-berkeley-blue/10">
          <iframe
            title="Puntos clave en Berkeley y Bay Area"
            src={multiPinEmbed}
            width="100%"
            height="480"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-xs text-ink/55 mt-3">
          El mapa muestra las cuatro paradas numeradas (mi casa → Greek Theatre
          → Haas Courtyard → Point San Pablo Harbor). La línea entre ellas es
          solo referencia visual.
        </p>
      </div>
    </section>
  );
}
