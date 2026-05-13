export default function Nav() {
  const links = [
    { href: "#eventos", label: "Eventos" },
    { href: "#clima", label: "Clima" },
    { href: "#ceremonia", label: "Ceremonia" },
    { href: "#agenda", label: "Agenda" },
    { href: "#dress-code", label: "Dress Code" },
    { href: "#mapa", label: "Mapa" },
    { href: "#recos", label: "Recos" },
  ];
  return (
    <nav className="sticky top-0 z-50 nav-blur bg-cream/85 border-b border-berkeley-blue/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-5 py-3">
        <a
          href="#top"
          className="font-serif text-berkeley-blue tracking-tight text-lg shrink-0"
        >
          Graduación{" "}
          <span className="italic text-california-gold-dark">Rey</span>
        </a>
        {/* Desktop: full menu */}
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
        {/* Mobile: horizontally scrollable chips */}
        <div className="md:hidden flex-1 overflow-x-auto -mx-2 px-2">
          <div className="flex gap-2 text-xs text-berkeley-blue/80 whitespace-nowrap">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full bg-berkeley-blue/5 hover:bg-berkeley-blue hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
