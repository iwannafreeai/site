import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHeader({
  title,
  description,
  breadcrumbs,
}: Props) {
  return (
    <section className="border-b border-slate-800/80 bg-slate-950/40">
      <div className="container-page py-12 sm:py-16">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex flex-wrap items-center gap-1 text-xs text-slate-400">
            <Link to="/" className="hover:text-amber-300">
              Главная
            </Link>
            {breadcrumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={12} className="text-slate-600" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-amber-300">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-slate-300">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-400">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
