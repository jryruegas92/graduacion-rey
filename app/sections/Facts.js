const stats = [
  { value: "122K", label: "Habitantes", note: "US Census 2024" },
  { value: "10.5 mi²", label: "Área", note: "Toda en Alameda County" },
  { value: "74%", label: "Con título universitario", note: "De los más educados de EE.UU." },
  { value: "107", label: "Premios Nobel", note: "Afiliados a UC Berkeley" },
];

const cards = [
  {
    emoji: "🌿",
    title: "10,000 años antes de la universidad",
    body:
      "Los Ohlone — específicamente los Huchiun — vivieron aquí miles de años antes de que llegaran los europeos. Pescaban en la bahía, cazaban en los cerros, y construyeron cientos de shellmounds a lo largo de la costa.",
  },
  {
    emoji: "🐄",
    title: "Empezó como rancho de ganado",
    body:
      "En 1820, España le otorgó esta tierra a la familia Peralta como Rancho San Antonio. Berkeley, Oakland y Emeryville eran parte de él. Sus nombres siguen en las calles: Domingo, Vicente, Peralta.",
  },
  {
    emoji: "🔥",
    title: "El terremoto de 1906 cambió todo",
    body:
      "Mientras SF ardía, Berkeley salió casi intacta. Miles de refugiados cruzaron la bahía — incluyendo casi todos los pintores y escultores de SF. Berkeley duplicó su población de 13,000 a 50,000 en 12 años.",
  },
  {
    emoji: "☕",
    title: "Aquí nació Peet's Coffee (1966)",
    body:
      "Un inmigrante holandés, Alfred Peet, abrió una pequeña cafetería y empezó a tostar más oscuro y rico que cualquiera en EE.UU. Le enseñó la técnica a tres jóvenes de Seattle. Esos tres fundaron Starbucks.",
  },
  {
    emoji: "🎤",
    title: "Free Speech Movement (1964)",
    body:
      "Mario Savio se subió a una patrulla en Sproul Plaza y dio un discurso que paró al país. Hasta hoy, cada edificio del campus tiene una manija de puerta removida — herencia de cuando los estudiantes encadenaban las puertas.",
  },
  {
    emoji: "🍽️",
    title: "Farm-to-table empezó aquí",
    body:
      "Alice Waters abrió Chez Panisse en Shattuck Ave en 1971 y cambió cómo come EE.UU. Fresco, local, de temporada, orgánico — ideas que parecían radicales entonces y son normales hoy.",
  },
  {
    emoji: "⚛️",
    title: "Tienen un elemento químico",
    body:
      "En 1949 los científicos de UC Berkeley descubrieron un nuevo elemento radioactivo y lo llamaron Berkelio — número atómico 97. Está en la tabla periódica.",
  },
  {
    emoji: "🏅",
    title: "107 premios Nobel y contando",
    body:
      "El test PCR (el del COVID) lo inventó un PhD de Berkeley que se orilló en la 128 una noche en 1983 porque la idea le llegó manejando. Ganó el Nobel.",
  },
];

export default function Facts() {
  return (
    <section className="bg-berkeley-blue text-cream py-20 md:py-28 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute -right-40 top-20 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #FDB515, transparent 65%)" }}
      />
      <div className="max-w-6xl mx-auto px-5 relative">
        <p className="eyebrow !text-california-gold">Donde estás</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-3">
          Berkeley, <span className="italic text-california-gold">TLDR</span>
        </h2>
        <p className="text-cream/80 mt-4 max-w-2xl">
          Ciudad chica, huella enorme. Berkeley está en la orilla este de la
          Bahía, con los cerros atrás y el agua al frente. Esto es lo que pasó
          aquí — fuera del campus.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-cream/[0.04] border border-cream/10 rounded-2xl p-5"
            >
              <div className="font-serif text-4xl text-california-gold">
                {s.value}
              </div>
              <div className="mt-1 text-cream/85 text-sm font-medium">
                {s.label}
              </div>
              <div className="text-xs text-cream/55 mt-1">{s.note}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-12">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-cream/[0.04] border border-cream/10 rounded-2xl p-6"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-3xl">{c.emoji}</span>
                <h3 className="font-serif text-xl">{c.title}</h3>
              </div>
              <p className="text-cream/80 text-sm mt-3 leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
