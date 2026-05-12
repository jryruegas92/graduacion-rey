const days = [
  {
    day: "Martes",
    date: "19 mayo",
    title: "Llegada familia",
    accent: false,
    items: [
      {
        time: "Noche · SFO",
        head: "Llegan Papá, Mamá, Fabritzio y Ganesha",
        body: "Bienvenidos al Bay Area. ¡Ya están aquí los primeros!",
      },
    ],
  },
  {
    day: "Miércoles",
    date: "20 mayo",
    title: "Más llegadas + Gala",
    accent: false,
    items: [
      {
        time: "Madrugada · SFO",
        head: "Llega Elisa",
        body: "Hermana en territorio.",
      },
      {
        time: "Mediodía · SFO",
        head: "Llega Ana Ceci",
        body: "Mi persona favorita aterriza.",
      },
      {
        time: "7:00 – 10:00 PM",
        head: "Graduation Gala — “One More Time” 🥂",
        body:
          "SF Melody · 906 Broadway, San Francisco. Solo Rey y Ana Ceci. Evento de la MBAA, cocktail attire.",
        highlight: true,
      },
    ],
  },
  {
    day: "Jueves",
    date: "21 mayo",
    title: "Día libre",
    accent: false,
    items: [
      {
        time: "Todo el día",
        head: "Tiempo libre · explorar Berkeley o SF",
        body:
          "Sin agenda fija. Sugerencias: brunch en Rockridge, paseo por Telegraph, BART a San Francisco, Lake Merritt. Revisa la sección de Recomendaciones.",
      },
    ],
  },
  {
    day: "Viernes",
    date: "22 mayo",
    title: "Family Welcome Reception",
    accent: true,
    items: [
      {
        time: "Mediodía · SFO",
        head: "Llegan Julio + Georgette, Remi, Diego, Juan Carlos",
        body: "Vidal + Isa y Hari ya están en el Bay Area y se nos juntan en la noche.",
      },
      {
        time: "5:00 – 9:00 PM",
        head: "“Disorientation” Family Welcome Reception 🌅",
        body:
          "Point San Pablo Harbor · $20/persona. Atardecer junto al agua, comida y bebida en sitio. Casual, traer capa — enfría junto al agua.",
        highlight: true,
      },
    ],
  },
  {
    day: "Sábado",
    date: "23 mayo",
    title: "🎓 Ceremonia",
    accent: true,
    items: [
      {
        time: "12:30 PM",
        head: "Rey sale al Greek Theatre",
        body: "En regalia completa, entrada lado sur.",
      },
      {
        time: "1:00 – 1:30 PM",
        head: "Invitados llegan al Greek Theatre",
        body: "Uber/Lyft. Boleto obligatorio.",
      },
      {
        time: "2:00 – 4:00 PM",
        head: "Commencement Ceremony",
        body: "Greek Theatre, UC Berkeley.",
        highlight: true,
      },
      {
        time: "4:00 – 6:00 PM",
        head: "Commencement Reception",
        body: "Haas Courtyard. Comida, bebidas, fotos.",
      },
      {
        time: "Por confirmar",
        head: "Cena de graduación 🍽️",
        body: "Lugar y hora por confirmar.",
      },
    ],
  },
  {
    day: "Domingo",
    date: "24 mayo",
    title: "Por definir",
    accent: false,
    items: [
      {
        time: "Plan por definir",
        head: "Día abierto",
        body:
          "Buenas opciones: brunch en Berkeley, día en San Francisco, ferry a Sausalito, o relajarse antes de las despedidas.",
      },
    ],
  },
  {
    day: "Lunes",
    date: "25 mayo",
    title: "Memorial Day",
    accent: false,
    items: [
      {
        time: "Todo el día",
        head: "Feriado nacional",
        body:
          "Casi todo abierto. Excelente día para SF (menos tráfico) o un paseo por las colinas.",
      },
    ],
  },
  {
    day: "Martes",
    date: "26 mayo",
    title: "Despedidas",
    accent: false,
    items: [
      {
        time: "Por confirmar",
        head: "Salidas escalonadas",
        body: "Detalles de vuelos por confirmar.",
      },
    ],
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
          Una semana de mayo entre llegadas, un puerto al atardecer, una
          ceremonia, y los que nos importan.
        </p>

        <div className="mt-14 space-y-12">
          {days.map((d, i) => (
            <div key={i} className="grid md:grid-cols-[180px_1fr] gap-6">
              <div className="md:sticky md:top-24 md:self-start">
                <div className="text-xs uppercase tracking-widest text-california-gold-dark">
                  {d.day}
                </div>
                <div className="font-serif text-3xl text-berkeley-blue">
                  {d.date}
                </div>
                <div
                  className={`mt-2 text-sm ${
                    d.accent ? "text-california-gold-dark font-semibold" : "text-ink/60"
                  }`}
                >
                  {d.title}
                </div>
              </div>
              <div className="space-y-4 border-l border-berkeley-blue/15 pl-6">
                {d.items.map((it, j) => (
                  <div
                    key={j}
                    className={`relative ${
                      it.highlight
                        ? "bg-berkeley-blue text-cream"
                        : "bg-white"
                    } rounded-xl p-5 shadow-soft border border-berkeley-blue/5`}
                  >
                    <span
                      className={`absolute -left-[31px] top-6 w-3 h-3 rounded-full ${
                        it.highlight ? "bg-california-gold" : "bg-berkeley-blue/30"
                      } ring-4 ring-cream`}
                    />
                    <div
                      className={`text-xs uppercase tracking-widest ${
                        it.highlight ? "text-california-gold" : "text-california-gold-dark"
                      }`}
                    >
                      {it.time}
                    </div>
                    <div
                      className={`font-serif text-lg mt-1 ${
                        it.highlight ? "" : "text-berkeley-blue"
                      }`}
                    >
                      {it.head}
                    </div>
                    <p
                      className={`text-sm mt-1 ${
                        it.highlight ? "text-cream/85" : "text-ink/70"
                      }`}
                    >
                      {it.body}
                    </p>
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
