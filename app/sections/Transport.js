const modes = [
  {
    emoji: "🚇",
    title: "BART a San Francisco",
    body:
      "~$5 por viaje. La estación más cercana a Hilgard es Downtown Berkeley BART (~15 min caminando). Pagas con tarjeta de crédito o agregas Clipper Card al wallet del celular. Rápido, fácil, recomendado.",
  },
  {
    emoji: "🚗",
    title: "Uber / Lyft",
    body:
      "La mejor opción para el sábado (al Greek Theatre) y para el viernes en Point San Pablo (~25 min en coche). No se preocupen por parking en campus.",
  },
  {
    emoji: "🚲",
    title: "Bay Wheels (bicis compartidas)",
    body:
      "Estación cerca de la casa. Bajar la app Bay Wheels para desbloquear. Recomiendo las eléctricas — Berkeley tiene varias subidas y vale la pena.",
  },
  {
    emoji: "🚶",
    title: "Caminando",
    body:
      "Mi casa en Hilgard está a ~8 min a pie del Greek Theatre y ~12 min de Haas. Para muchos planes en Berkeley no van a necesitar transporte.",
  },
];

export default function Transport() {
  return (
    <section className="bg-cream-gradient py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">Cómo moverse</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          Cuatro formas de{" "}
          <span className="italic text-california-gold-dark">moverse</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {modes.map((m, i) => (
            <div
              key={i}
              className="card bg-white rounded-2xl p-6 shadow-soft border border-berkeley-blue/5"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{m.emoji}</div>
                <div>
                  <h3 className="font-serif text-xl text-berkeley-blue">
                    {m.title}
                  </h3>
                  <p className="text-sm text-ink/75 mt-2 leading-relaxed">
                    {m.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
