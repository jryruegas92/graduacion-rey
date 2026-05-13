const week = [
  {
    weekday: "Mar",
    date: 19,
    events: [
      {
        time: "Noche",
        title: "Llegan Mamá, Papá, Fabri y Ganesha",
        kind: "arrival",
      },
    ],
  },
  {
    weekday: "Mié",
    date: 20,
    accent: true,
    events: [
      { time: "Madrugada", title: "Llega Elisa", kind: "arrival" },
      { time: "Mediodía", title: "Llega Ana Ceci", kind: "arrival" },
      {
        time: "7 – 10 PM",
        title: "Graduation Gala",
        place: "SF Melody",
        kind: "event",
        emoji: "🥂",
      },
    ],
  },
  {
    weekday: "Jue",
    date: 21,
    events: [
      {
        time: "Todo el día",
        title: "Tiempo libre",
        kind: "free",
      },
    ],
  },
  {
    weekday: "Vie",
    date: 22,
    accent: true,
    events: [
      {
        time: "Mediodía",
        title: "Llegan Julio, Georgette, Remi, Diego, Juan Carlos",
        kind: "arrival",
      },
      {
        time: "5 – 9 PM",
        title: "Family Welcome Reception",
        place: "Point San Pablo",
        kind: "event",
        emoji: "🌅",
      },
    ],
  },
  {
    weekday: "Sáb 🎓",
    date: 23,
    accent: true,
    ceremony: true,
    events: [
      {
        time: "2 – 4 PM",
        title: "Commencement Ceremony",
        place: "Greek Theatre",
        kind: "event",
        emoji: "🎓",
        primary: true,
      },
      {
        time: "4 – 6 PM",
        title: "Reception",
        place: "Haas Courtyard",
        kind: "event",
        emoji: "🥂",
      },
      {
        time: "Noche",
        title: "Cena de graduación",
        place: "Por confirmar",
        kind: "event",
        emoji: "🍽️",
      },
    ],
  },
  {
    weekday: "Dom",
    date: 24,
    events: [{ time: "Todo el día", title: "Día abierto", kind: "free" }],
  },
  {
    weekday: "Lun",
    date: 25,
    events: [
      { time: "Todo el día", title: "Memorial Day", kind: "free" },
    ],
  },
  {
    weekday: "Mar",
    date: 26,
    events: [
      {
        time: "Por confirmar",
        title: "Despedidas escalonadas",
        kind: "arrival",
      },
    ],
  },
];

function EventBlock({ e, ceremony }) {
  // Visual tiers: ceremony day primary > regular event > arrival > free.
  if (e.kind === "free") {
    return (
      <div className="rounded-lg bg-cream/60 border border-berkeley-blue/10 px-2 py-2">
        <div className="text-[9px] uppercase tracking-widest text-ink/50">
          {e.time}
        </div>
        <div className="text-xs text-ink/70 italic mt-0.5">{e.title}</div>
      </div>
    );
  }

  if (e.kind === "arrival") {
    return (
      <div className="rounded-lg bg-white border border-berkeley-blue/15 px-2 py-2">
        <div className="text-[9px] uppercase tracking-widest text-california-gold-dark">
          {e.time}
        </div>
        <div className="text-xs text-berkeley-blue font-medium mt-0.5 leading-snug">
          ✈️ {e.title}
        </div>
      </div>
    );
  }

  // event
  const bg = e.primary
    ? "bg-california-gold text-berkeley-blue border-california-gold-dark"
    : ceremony
    ? "bg-cream text-berkeley-blue border-cream/40"
    : "bg-berkeley-blue text-cream border-berkeley-blue";
  return (
    <div className={`rounded-lg border px-2 py-2 ${bg}`}>
      <div className="flex items-baseline justify-between gap-1">
        <span className="text-[9px] uppercase tracking-widest opacity-80">
          {e.time}
        </span>
        {e.emoji && <span className="text-sm">{e.emoji}</span>}
      </div>
      <div className="text-xs font-semibold mt-0.5 leading-snug">{e.title}</div>
      {e.place && (
        <div className="text-[10px] opacity-75 mt-0.5">{e.place}</div>
      )}
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="agenda" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">La semana</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          Día por <span className="italic text-california-gold-dark">día</span>
        </h2>
        <p className="text-ink/70 mt-4 max-w-2xl">
          Vista de calendario para las dos semanas. Los tres días resaltados son
          los que sí tienen plan fijo.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {week.map((d, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-2xl overflow-hidden border ${
                d.accent
                  ? "border-california-gold/50 shadow-gold"
                  : "border-berkeley-blue/10 shadow-soft"
              } bg-white`}
            >
              <div
                className={`px-3 py-2 text-center ${
                  d.ceremony
                    ? "bg-berkeley-blue text-cream"
                    : d.accent
                    ? "bg-california-gold/15 text-berkeley-blue"
                    : "bg-cream/60 text-berkeley-blue"
                }`}
              >
                <div className="text-[10px] uppercase tracking-widest opacity-70">
                  {d.weekday}
                </div>
                <div className="font-serif text-xl leading-tight">{d.date}</div>
              </div>
              <div className="p-2 space-y-1.5 flex-1">
                {d.events.map((e, j) => (
                  <EventBlock key={j} e={e} ceremony={d.ceremony} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
