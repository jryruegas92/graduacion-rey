// Mood board "look" cards rendered with CSS color swatches + outfit checklist.
// Visual replacement for photo-based moodboards so the site is self-contained.

function ColorPalette({ colors }) {
  return (
    <div className="flex gap-2">
      {colors.map((c, i) => (
        <div
          key={i}
          className="w-7 h-7 rounded-full ring-2 ring-cream"
          style={{ background: c.hex }}
          title={c.name}
          aria-label={c.name}
        />
      ))}
    </div>
  );
}

function Look({ title, who, palette, yes, no, tip, accent = "blue" }) {
  const bg =
    accent === "gold"
      ? "bg-gradient-to-br from-[#FFF6DC] to-[#FBE7A8]"
      : "bg-gradient-to-br from-[#E9EEF7] to-[#CBD8EC]";
  const header = accent === "gold" ? "text-berkeley-blue" : "text-berkeley-blue";
  return (
    <div className={`rounded-2xl overflow-hidden shadow-soft card ${bg}`}>
      <div className="p-6 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-berkeley-blue/60">
            {who}
          </div>
          <h4 className={`font-serif text-2xl mt-1 ${header}`}>{title}</h4>
        </div>
        <ColorPalette colors={palette} />
      </div>

      <div className="px-6 pb-6 grid grid-cols-2 gap-4">
        <div className="bg-white/70 rounded-xl p-4">
          <div className="text-xs uppercase tracking-widest text-emerald-700 mb-2">
            Sí
          </div>
          <ul className="space-y-1.5 text-sm text-ink/85">
            {yes.map((y, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-emerald-600">✓</span>
                <span>{y}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white/70 rounded-xl p-4">
          <div className="text-xs uppercase tracking-widest text-rose-700 mb-2">
            No
          </div>
          <ul className="space-y-1.5 text-sm text-ink/85">
            {no.map((n, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-rose-500">✕</span>
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {tip && (
        <div className="bg-berkeley-blue text-cream px-6 py-3 text-sm">
          <span className="text-california-gold">Tip · </span>
          {tip}
        </div>
      )}
    </div>
  );
}

export default function DressCode() {
  return (
    <section id="dress-code" className="bg-cream-gradient py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <p className="eyebrow">Dress code</p>
        <h2 className="font-serif text-4xl md:text-5xl text-berkeley-blue mt-3">
          Qué <span className="italic text-california-gold-dark">ponerse</span>
        </h2>
        <p className="text-ink/70 mt-4 max-w-2xl">
          Dos eventos, dos vibras distintas. Nada de stress — abajo está la
          guía rápida para cada uno.
        </p>

        {/* Friday */}
        <div className="mt-14">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl">🌅</span>
            <div>
              <div className="eyebrow">Viernes 22</div>
              <h3 className="font-serif text-2xl text-berkeley-blue">
                Family Welcome Reception
              </h3>
              <p className="text-ink/65 text-sm">
                Sunset junto al agua · casual con onda.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Look
              who="Para él"
              title="Coastal casual"
              palette={[
                { name: "Crema", hex: "#F1E9D2" },
                { name: "Olivo", hex: "#7A8455" },
                { name: "Denim", hex: "#5D7791" },
                { name: "Cuero", hex: "#7E5B3A" },
              ]}
              yes={[
                "Chino o jeans de buen corte",
                "Camisa de lino o polo",
                "Suéter ligero o overshirt",
                "Sneakers limpios o loafers",
              ]}
              no={[
                "Traje completo",
                "Shorts deportivos",
                "Sandalias chanclas",
              ]}
              tip="Trae chamarra ligera — al meterse el sol enfría junto al puerto."
              accent="gold"
            />
            <Look
              who="Para ella"
              title="Sunset breezy"
              palette={[
                { name: "Crema", hex: "#F1E9D2" },
                { name: "Coral", hex: "#D88A6B" },
                { name: "Verde sage", hex: "#A6B89A" },
                { name: "Caramelo", hex: "#A4733E" },
              ]}
              yes={[
                "Vestido midi de tela ligera",
                "Pantalón ancho + blusa",
                "Cardigan o pashmina",
                "Sandalia con plataforma o flat",
              ]}
              no={[
                "Tacones aguja (piso de muelle)",
                "Algo demasiado formal",
                "Telas pesadas",
              ]}
              tip="El puerto es de tablas — zapato cómodo gana siempre."
              accent="gold"
            />
          </div>
        </div>

        {/* Saturday */}
        <div className="mt-20">
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl">🎓</span>
            <div>
              <div className="eyebrow">Sábado 23</div>
              <h3 className="font-serif text-2xl text-berkeley-blue">
                Ceremonia + Recepción
              </h3>
              <p className="text-ink/65 text-sm">
                Business casual elegante · al aire libre.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Look
              who="Para él"
              title="Smart casual (sin traje)"
              palette={[
                { name: "Navy", hex: "#1F2A44" },
                { name: "Blanco", hex: "#F6F4EE" },
                { name: "Gris piedra", hex: "#A8A39B" },
                { name: "Cuero", hex: "#5C3D24" },
              ]}
              yes={[
                "Camisa de vestir (oxford o lino)",
                "Pantalón formal o chino oscuro",
                "Blazer opcional",
                "Mocasín, oxford o sneaker limpio",
              ]}
              no={[
                "Jeans rotos",
                "Tenis deportivos",
                "Shorts",
              ]}
              tip="Como yo no voy de traje (estoy en regalia), no se sientan obligados — camisa + pantalón formal es perfecto."
              accent="blue"
            />
            <Look
              who="Para ella"
              title="Garden party"
              palette={[
                { name: "Marfil", hex: "#EFE7D8" },
                { name: "Azul Berkeley", hex: "#003262" },
                { name: "Dorado Cali", hex: "#FDB515" },
                { name: "Rosa palo", hex: "#D7B5A4" },
              ]}
              yes={[
                "Vestido midi o largo elegante",
                "Jumpsuit elegante",
                "Blazer ligero o chal",
                "Zapato cómodo (van a caminar)",
              ]}
              no={[
                "Tacones de aguja altísimos",
                "Algo demasiado revelador (es ceremonia)",
                "Sneakers casuales",
              ]}
              tip="El Greek Theatre tiene asientos de piedra. Trae capa, enfría al final."
              accent="blue"
            />
          </div>
        </div>

        {/* Rey */}
        <div className="mt-16 bg-berkeley-blue text-cream rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="text-5xl">🎩</div>
          <div className="flex-1">
            <div className="text-california-gold text-xs uppercase tracking-widest">
              Rey
            </div>
            <h4 className="font-serif text-2xl mt-1">
              Regalia completa de UC Berkeley
            </h4>
            <p className="text-cream/80 mt-1 text-sm">
              Gorro, toga, capucha. Llego al Greek Theatre 90 minutos antes,
              entrada por el lado sur. No me esperen antes de la ceremonia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
