import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Phone, X } from "lucide-react";
import { site } from "../data/site";

const navItems = [
  { to: "/", label: "Главная", end: true },
  { to: "/catalog", label: "Каталог" },
  { to: "/colors", label: "Карта цветов" },
  { to: "/blog", label: "Блог" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-500 text-base font-extrabold text-slate-950">
            Т
          </span>
          <div className="leading-tight">
            <div className="text-base font-bold tracking-wide">
              {site.brand}
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
              Производство
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-amber-500/15 text-amber-300"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-amber-300"
          >
            <Phone size={16} />
            {site.phone}
          </a>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          className="rounded-md p-2 text-slate-300 hover:bg-slate-800/60 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-3 py-2 text-sm font-medium",
                    isActive
                      ? "bg-amber-500/15 text-amber-300"
                      : "text-slate-200 hover:bg-slate-800/60",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-amber-300"
            >
              <Phone size={16} />
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
