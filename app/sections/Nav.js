export default function Nav() {
  const links = [
    { href: "#eventos", label: "Eventos" },
    { href: "#ceremonia", label: "Ceremonia" },
    { href: "#agenda", label: "Agenda" },
    { href: "#dress-code", label: "Dress Code" },
    { href: "#mapa", label: "Mapa" },
    { href: "#recos", label: "Recos" },
    { href: "#clima", label: "Clima" },
  ];
  return (
    <nav className="sticky top-0 z-50 nav-blur bg-cream/70 border-b border-berkeley-blue/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <a href="#top" className="font-serif text-berkeley-blue tracking-tight text-lg">
          Graduación <span className="italic text-california-gold-dark">Rey</span>
        </a>
        <div className="hidden md:flex gap-6 text-sm text-berkeley-blue/80">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-california-gold-dark transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#mapa"
          className="md:hidden text-xs px-3 py-1.5 rounded-full bg-berkeley-blue text-cream"
        >
          Mapa
        </a>
      </div>
    </nav>
  );
}
