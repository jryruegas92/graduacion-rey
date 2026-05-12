const days = [
  { day: "Mar", date: "19", icon: "🌤️", hi: 73, lo: 53, ceremony: false },
  { day: "Mié", date: "20", icon: "🌤️", hi: 75, lo: 54, ceremony: false },
  { day: "Jue", date: "21", icon: "🌤️", hi: 73, lo: 52, ceremony: false },
  { day: "Vie", date: "22", icon: "☀️", hi: 73, lo: 52, ceremony: false },
  { day: "Sáb 🎓", date: "23", icon: "☀️", hi: 74, lo: 54, ceremony: true },
  { day: "Dom", date: "24", icon: "☀️", hi: 75, lo: 54, ceremony: false },
  { day: "Lun", date: "25", icon: "☀️", hi: 75, lo: 53, ceremony: false },
  { day: "Mar", date: "26", icon: "🌤️", hi: 74, lo: 52, ceremony: false },
];

function f2c(f) {
  return Math.round(((f - 32) * 5) / 9);
}

export default function Weather() {
  return (
    <section id="clima" className="bg-cream-gradient py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">El clima</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          Qué <span className="italic text-california-gold-dark">esperar</span>
        </h2>
        <p className="text-ink/70 mt-4 max-w-2xl">
          Finales de mayo en Berkeley es perfecto. Mañanas frescas, tardes
          cálidas, casi nada de lluvia. Traer chamarra ligera para las noches —
          la ceremonia en el Greek Theatre es al aire libre.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-12">
          {days.map((d, i) => (
            <div
              key={i}
              className={`rounded-2xl p-4 text-center border ${
                d.ceremony
                  ? "bg-berkeley-blue text-cream border-california-gold shadow-gold"
                  : "bg-white text-ink border-berkeley-blue/10 shadow-soft"
              }`}
            >
              <div
                className={`text-[10px] uppercase tracking-widest ${
                  d.ceremony ? "text-california-gold" : "text-california-gold-dark"
                }`}
              >
                {d.day}
              </div>
              <div
                className={`font-serif text-2xl mt-1 ${
                  d.ceremony ? "text-cream" : "text-berkeley-blue"
                }`}
              >
                {d.date}
              </div>
              <div className="text-3xl mt-1">{d.icon}</div>
              <div
                className={`text-sm mt-2 ${
                  d.ceremony ? "text-cream/90" : "text-ink/80"
                }`}
              >
                {d.hi}° / {d.lo}°F
              </div>
              <div
                className={`text-xs ${
                  d.ceremony ? "text-cream/60" : "text-ink/55"
                }`}
              >
                {f2c(d.hi)}° / {f2c(d.lo)}°C
              </div>
              {d.ceremony && (
                <div className="text-[10px] uppercase tracking-widest text-california-gold mt-2">
                  Ceremonia
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-ink/55 mt-6">
          Pronóstico aproximado basado en promedios históricos. Se actualizará
          más cerca de la fecha.
        </p>
      </div>
    </section>
  );
}
