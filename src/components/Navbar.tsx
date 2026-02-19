import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { path: "/", labelEn: "Home", labelAr: "الرئيسية" },
  { path: "/menu", labelEn: "Menu", labelAr: "القائمة" },
  { path: "/reservations", labelEn: "Reserve", labelAr: "احجز" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col items-start">
          <span className="font-serif text-2xl font-bold tracking-wide text-primary">
            Zafran & Co.
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Fine Dining · Dubai
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`group relative font-sans text-sm tracking-widest uppercase transition-colors ${
                location.pathname === item.path
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              <span>{item.labelEn}</span>
              <span className="mx-1.5 text-muted-foreground/40">|</span>
              <span className="font-sans text-xs">{item.labelAr}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-sans text-sm tracking-widest uppercase ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {item.labelEn} <span className="text-xs ml-2">{item.labelAr}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
