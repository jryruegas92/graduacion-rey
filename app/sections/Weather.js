// Berkeley coordinates
const LAT = 37.8716;
const LON = -122.2727;

// Days we care about — Mar 19 → Mar 26 in May 2026
const range = [
  { date: "2026-05-19", weekday: "Mar" },
  { date: "2026-05-20", weekday: "Mié" },
  { date: "2026-05-21", weekday: "Jue" },
  { date: "2026-05-22", weekday: "Vie" },
  { date: "2026-05-23", weekday: "Sáb 🎓", ceremony: true },
  { date: "2026-05-24", weekday: "Dom" },
  { date: "2026-05-25", weekday: "Lun" },
  { date: "2026-05-26", weekday: "Mar" },
];

// Fallback (used if the live fetch fails) — historical averages.
const fallback = {
  "2026-05-19": { hiC: 23, loC: 12, code: 2 },
  "2026-05-20": { hiC: 24, loC: 12, code: 2 },
  "2026-05-21": { hiC: 23, loC: 11, code: 2 },
  "2026-05-22": { hiC: 23, loC: 11, code: 0 },
  "2026-05-23": { hiC: 23, loC: 12, code: 0 },
  "2026-05-24": { hiC: 24, loC: 12, code: 0 },
  "2026-05-25": { hiC: 24, loC: 12, code: 0 },
  "2026-05-26": { hiC: 23, loC: 11, code: 2 },
};

function iconFor(code) {
  if (code === 0) return "☀️";
  if (code <= 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "🌨️";
  if (code >= 80 && code <= 82) return "🌦️";
  if (code >= 95) return "⛈️";
  return "🌤️";
}

function c2f(c) {
  return Math.round((c * 9) / 5 + 32);
}

async function loadForecast() {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${LAT}&longitude=${LON}` +
    `&daily=temperature_2m_max,temperature_2m_min,weather_code` +
    `&temperature_unit=celsius&timezone=America%2FLos_Angeles` +
    `&start_date=2026-05-19&end_date=2026-05-26`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) throw new Error("forecast unavailable");
    const data = await res.json();
    const map = {};
    data.daily.time.forEach((d, i) => {
      map[d] = {
        hiC: Math.round(data.daily.temperature_2m_max[i]),
        loC: Math.round(data.daily.temperature_2m_min[i]),
        code: data.daily.weather_code[i],
      };
    });
    return { map, live: true };
  } catch {
    return { map: fallback, live: false };
  }
}

export default async function Weather() {
  const { map, live } = await loadForecast();

  return (
    <section id="clima" className="bg-cream-gradient py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">El clima</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          Qué <span className="italic text-california-gold-dark">esperar</span>
        </h2>
        <p className="text-ink/70 mt-4 max-w-2xl">
          Finales de mayo en Berkeley es perfecto. Mañanas frescas, tardes
          cálidas, casi nada de lluvia. El <strong>sábado 23</strong> —
          ceremonia al aire libre en el Greek Theatre — debería estar soleado y
          alrededor de los 23 °C. Traigan chamarra ligera para las noches.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-12">
          {range.map((d, i) => {
            const f = map[d.date] || fallback[d.date];
            return (
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
                  {d.weekday}
                </div>
                <div
                  className={`font-serif text-2xl mt-1 ${
                    d.ceremony ? "text-cream" : "text-berkeley-blue"
                  }`}
                >
                  {parseInt(d.date.slice(-2), 10)}
                </div>
                <div className="text-3xl mt-1">{iconFor(f.code)}</div>
                <div
                  className={`text-sm mt-2 font-medium ${
                    d.ceremony ? "text-cream/95" : "text-ink/85"
                  }`}
                >
                  {f.hiC}° / {f.loC}°C
                </div>
                <div
                  className={`text-xs ${
                    d.ceremony ? "text-cream/55" : "text-ink/50"
                  }`}
                >
                  {c2f(f.hiC)}° / {c2f(f.loC)}°F
                </div>
                {d.ceremony && (
                  <div className="text-[10px] uppercase tracking-widest text-california-gold mt-2">
                    Ceremonia
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="text-xs text-ink/55 mt-6">
          {live
            ? "Pronóstico en vivo desde Open-Meteo, actualizado cada hora."
            : "Promedios históricos (no hay pronóstico en vivo disponible aún)."}
        </p>
      </div>
    </section>
  );
}
