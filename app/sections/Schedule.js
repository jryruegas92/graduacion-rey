const days = [
  {
    day: "Martes",
    date: "19 mayo",
    title: "Llegan Mamá, Papá, Fabri y Ganesha",
    accent: false,
  },
  {
    day: "Miércoles",
    date: "20 mayo",
    title: "Llega Elisa · Graduation Gala",
    accent: true,
    highlight: "Gala 7–10 PM · SF Melody",
  },
  {
    day: "Jueves",
    date: "21 mayo",
    title: "Día libre",
    accent: false,
  },
  {
    day: "Viernes",
    date: "22 mayo",
    title: "Llegan Julio, Georgette, Remi, Diego, Juan Carlos · Family Welcome Reception",
    accent: true,
    highlight: "5–9 PM · Point San Pablo Harbor",
  },
  {
    day: "Sábado",
    date: "23 mayo",
    title: "🎓 Commencement",
    accent: true,
    highlight: "2–4 PM · Greek Theatre · todo el día",
  },
  {
    day: "Domingo",
    date: "24 mayo",
    title: "Día abierto",
    accent: false,
  },
  {
    day: "Lunes",
    date: "25 mayo",
    title: "Memorial Day",
    accent: false,
  },
  {
    day: "Martes",
    date: "26 mayo",
    title: "Despedidas escalonadas",
    accent: false,
  },
];

export default function Schedule() {
  return (
    <section id="agenda" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">La semana</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          Día por <span className="italic text-california-gold-dark">día</span>
        </h2>
        <p className="text-ink/70 mt-4 max-w-2xl">
          Lo esencial de la semana. Los tres días importantes están resaltados.
        </p>

        <div className="mt-12 space-y-3">
          {days.map((d, i) => (
            <div
              key={i}
              className={`rounded-xl border ${
                d.accent
                  ? "bg-berkeley-blue text-cream border-california-gold/30 shadow-soft"
                  : "bg-white text-ink border-berkeley-blue/10"
              } p-5 grid md:grid-cols-[180px_1fr_auto] gap-4 items-baseline`}
            >
              <div>
                <div
                  className={`text-xs uppercase tracking-widest ${
                    d.accent ? "text-california-gold" : "text-california-gold-dark"
                  }`}
                >
                  {d.day}
                </div>
                <div
                  className={`font-serif text-2xl ${
                    d.accent ? "text-cream" : "text-berkeley-blue"
                  }`}
                >
                  {d.date}
                </div>
              </div>
              <div
                className={`font-serif text-lg ${
                  d.accent ? "text-cream" : "text-berkeley-blue"
                }`}
              >
                {d.title}
              </div>
              {d.highlight && (
                <div
                  className={`text-sm ${
                    d.accent ? "text-california-gold" : "text-ink/60"
                  }`}
                >
                  {d.highlight}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
