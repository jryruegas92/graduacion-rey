const events = [
  {
    date: "Mié 20",
    time: "7–10 PM",
    title: "Gala \"One More Time\"",
    emoji: "🥂",
    who: "Rey + Ana Ceci",
    place: "SF Melody · 906 Broadway, SF",
    accent: "from-berkeley-blue to-berkeley-blue-dark",
    label: "Solo nosotros dos",
  },
  {
    date: "Vie 22",
    time: "5–9 PM",
    title: "Family Welcome Reception",
    emoji: "🌅",
    who: "Todos · $20 por persona",
    place: "Point San Pablo Harbor",
    accent: "from-california-gold-dark to-california-gold",
    label: "Todos invitados",
  },
  {
    date: "Sáb 23",
    time: "2–4 PM",
    title: "Commencement Ceremony",
    emoji: "🎓",
    who: "Todos · boleto requerido",
    place: "Greek Theatre · UC Berkeley",
    accent: "from-berkeley-blue to-berkeley-blue-dark",
    label: "EL día",
  },
  {
    date: "Sáb 23",
    time: "4–6 PM",
    title: "Commencement Reception",
    emoji: "🥂",
    who: "Todos",
    place: "Haas Courtyard",
    accent: "from-california-gold-dark to-california-gold",
    label: "Brindis post-ceremonia",
  },
  {
    date: "Sáb 23",
    time: "Por confirmar",
    title: "Cena de graduación",
    emoji: "🍽️",
    who: "Por confirmar",
    place: "Lugar por confirmar",
    accent: "from-berkeley-blue to-berkeley-blue-dark",
    label: "Detalles próximamente",
  },
];

export default function KeyEvents() {
  return (
    <section id="eventos" className="bg-cream-gradient py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow text-center">Lo importante</p>
        <h2 className="font-serif text-4xl md:text-5xl text-center mt-3 text-berkeley-blue">
          Eventos <span className="italic text-california-gold-dark">clave</span>
        </h2>
        <p className="text-center text-ink/70 mt-4 max-w-xl mx-auto">
          Los cinco momentos importantes de la semana. Todo lo demás es opcional.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {events.map((e, i) => (
            <div
              key={i}
              className={`card bg-white rounded-2xl overflow-hidden shadow-soft border border-berkeley-blue/5`}
            >
              <div
                className={`bg-gradient-to-br ${e.accent} text-cream px-5 py-4 flex items-baseline justify-between`}
              >
                <div>
                  <div className="text-xs uppercase tracking-widest opacity-80">
                    {e.date}
                  </div>
                  <div className="text-lg font-semibold mt-0.5">{e.time}</div>
                </div>
                <div className="text-3xl" aria-hidden>
                  {e.emoji}
                </div>
              </div>
              <div className="px-5 py-5">
                <div className="inline-block text-[10px] uppercase tracking-widest bg-berkeley-blue/5 text-berkeley-blue px-2 py-1 rounded-full mb-3">
                  {e.label}
                </div>
                <h3 className="font-serif text-xl text-berkeley-blue">
                  {e.title}
                </h3>
                <p className="text-sm text-ink/70 mt-2">{e.place}</p>
                <p className="text-sm text-ink/60 mt-1">{e.who}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
