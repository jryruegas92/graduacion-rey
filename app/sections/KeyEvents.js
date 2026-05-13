const columns = [
  {
    weekday: "Miércoles",
    date: "20 de mayo",
    accent: "from-berkeley-blue to-berkeley-blue-dark",
    headerText: "text-cream",
    eyebrow: "text-california-gold",
    events: [
      {
        time: "7:00 – 10:00 PM",
        title: "Graduation Gala",
        subtitle: "“One More Time”",
        place: "SF Melody · 906 Broadway, San Francisco",
        note: "Evento de la MBAA · solo Rey y Ana Ceci",
        emoji: "🥂",
      },
    ],
  },
  {
    weekday: "Viernes",
    date: "22 de mayo",
    accent: "from-california-gold-dark to-california-gold",
    headerText: "text-berkeley-blue",
    eyebrow: "text-berkeley-blue/70",
    events: [
      {
        time: "5:00 – 9:00 PM",
        title: "Family Welcome Reception",
        subtitle: "“Disorientation”",
        place: "Point San Pablo Harbor",
        note: "Atardecer junto al agua · todos invitados",
        emoji: "🌅",
      },
    ],
  },
  {
    weekday: "Sábado",
    date: "23 de mayo",
    accent: "from-berkeley-blue to-berkeley-blue-dark",
    headerText: "text-cream",
    eyebrow: "text-california-gold",
    badge: "EL día",
    events: [
      {
        time: "2:00 – 4:00 PM",
        title: "Commencement Ceremony",
        place: "Greek Theatre · UC Berkeley",
        note: "Boleto requerido · llegar 1:00–1:30 PM",
        emoji: "🎓",
      },
      {
        time: "4:00 – 6:00 PM",
        title: "Commencement Reception",
        place: "Haas Courtyard",
        note: "Brindis post-ceremonia",
        emoji: "🥂",
      },
      {
        time: "Por confirmar",
        title: "Cena de graduación",
        place: "Lugar por confirmar",
        note: "Detalles próximamente",
        emoji: "🍽️",
      },
    ],
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
          Tres días con plan. Todo lo demás de la semana es opcional.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {columns.map((col, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-berkeley-blue/5 flex flex-col"
            >
              <div
                className={`bg-gradient-to-br ${col.accent} ${col.headerText} px-5 py-5`}
              >
                <div
                  className={`text-[11px] uppercase tracking-widest ${col.eyebrow}`}
                >
                  {col.weekday}
                </div>
                <div className="font-serif text-3xl mt-1">{col.date}</div>
                {col.badge && (
                  <div className="mt-2 inline-block text-[10px] uppercase tracking-widest bg-cream/15 px-2 py-1 rounded-full">
                    {col.badge}
                  </div>
                )}
              </div>
              <div className="px-5 py-5 space-y-5 flex-1">
                {col.events.map((e, j) => (
                  <div
                    key={j}
                    className="border-l-2 border-california-gold/60 pl-4"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="text-xs uppercase tracking-widest text-california-gold-dark">
                        {e.time}
                      </div>
                      <div className="text-xl" aria-hidden>
                        {e.emoji}
                      </div>
                    </div>
                    <h3 className="font-serif text-lg text-berkeley-blue mt-1">
                      {e.title}
                    </h3>
                    {e.subtitle && (
                      <div className="text-sm italic text-ink/60">
                        {e.subtitle}
                      </div>
                    )}
                    <p className="text-sm text-ink/75 mt-1">{e.place}</p>
                    <p className="text-xs text-ink/55 mt-0.5">{e.note}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
