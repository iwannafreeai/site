import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-950/80">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber-500 font-extrabold text-slate-950">
              Т
            </span>
            <span className="text-lg font-bold">{site.brand}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            {site.description}
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
            Навигация
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link to="/" className="hover:text-amber-300">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="hover:text-amber-300">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/colors" className="hover:text-amber-300">
                Карта цветов
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-amber-300">
                Блог
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-300">
                О компании
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
            Каталог
          </h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link
                to="/catalog?category=tesma"
                className="hover:text-amber-300"
              >
                Тесьма
              </Link>
            </li>
            <li>
              <Link
                to="/catalog?category=rezinka"
                className="hover:text-amber-300"
              >
                Резинка
              </Link>
            </li>
            <li>
              <Link
                to="/catalog?category=shnury"
                className="hover:text-amber-300"
              >
                Шнуры
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
            Контакты
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-amber-300" />
              <div>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="block hover:text-amber-300"
                >
                  {site.phone}
                </a>
                <a
                  href={`tel:${site.mobile.replace(/[^+\d]/g, "")}`}
                  className="block hover:text-amber-300"
                >
                  {site.mobile}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-amber-300" />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-amber-300"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-amber-300" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80 py-5">
        <div className="container-page flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.brand}. Все права защищены.
          </span>
          <span>{site.workingHours}</span>
        </div>
      </div>
    </footer>
  );
}
