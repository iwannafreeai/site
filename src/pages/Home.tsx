import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Clock,
  Factory,
  Handshake,
  PackageCheck,
  Palette,
  Truck,
} from "lucide-react";
import ProductCard from "../components/ProductCard";
import { featuredProducts } from "../data/products";
import { site } from "../data/site";

const features = [
  {
    icon: Award,
    title: "Высокое качество",
    text: "Стабильные характеристики каждой партии. Контроль на всех этапах — от сырья до отгрузки.",
  },
  {
    icon: Truck,
    title: "Быстрая отгрузка",
    text: "Собственное производство и склад готовой продукции. Стандартные заказы — 1–3 рабочих дня.",
  },
  {
    icon: Handshake,
    title: "Индивидуальный подход",
    text: "Изготавливаем изделия по чертежам и образцам, подбираем цвет, ширину и состав под вашу задачу.",
  },
];

const stats = [
  { value: `${site.experienceYears}+`, label: "лет на рынке" },
  { value: "150+", label: "артикулов в каталоге" },
  { value: "500+", label: "постоянных клиентов" },
  { value: "100%", label: "контроль качества" },
];

const advantages = [
  {
    icon: Factory,
    title: "Собственное производство",
    text: "Лентоткацкие, плетёные и витые линии в одном цехе.",
  },
  {
    icon: PackageCheck,
    title: "Опт и розница",
    text: "Работаем с заводами, ателье и частными мастерами.",
  },
  {
    icon: Palette,
    title: "Любые цвета",
    text: "Окрашиваем по запросу и подбираем близкий к Pantone оттенок.",
  },
  {
    icon: Clock,
    title: "Чёткие сроки",
    text: "Соблюдаем согласованные сроки и фиксируем их в договоре.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300">
              Производство в Беларуси
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Шнуры, тесьма и резинки —{" "}
              <span className="text-amber-400">прямо с производства</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {site.brand} — белорусский производитель лентоткацких изделий.
              Поставляем продукцию для швейной, обувной, мебельной и
              упаковочной отраслей по всей республике и за её пределами.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/catalog" className="btn-primary">
                Смотреть каталог
                <ArrowRight size={16} />
              </Link>
              <Link to="/contacts" className="btn-secondary">
                Связаться с нами
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-extrabold text-amber-300 sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-amber-500/15 via-transparent to-indigo-500/15 blur-3xl" />
            <div className="grid grid-cols-2 gap-4">
              <div className="card flex flex-col items-start">
                <span className="rounded-full bg-amber-500/15 p-2 text-amber-300">
                  <Award size={20} />
                </span>
                <div className="mt-3 text-2xl font-bold">ISO</div>
                <p className="text-sm text-slate-400">
                  Стандарты качества на всех этапах
                </p>
              </div>
              <div className="card">
                <div className="text-xs uppercase tracking-widest text-amber-300">
                  Цвета
                </div>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {[
                    "#f8fafc",
                    "#facc15",
                    "#f59e0b",
                    "#dc2626",
                    "#7c3aed",
                    "#2563eb",
                    "#16a34a",
                    "#0f172a",
                  ].map((c) => (
                    <span
                      key={c}
                      className="h-6 rounded"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <Link
                  to="/colors"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-300 hover:underline"
                >
                  Карта цветов <ArrowRight size={12} />
                </Link>
              </div>
              <div className="card col-span-2">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-indigo-500/15 p-2 text-indigo-300">
                    <Factory size={20} />
                  </span>
                  <div>
                    <div className="font-semibold">Своё производство</div>
                    <p className="text-sm text-slate-400">
                      Полный цикл: от пряжи до готового рулона
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <div className="font-bold text-white">3</div>
                    <div className="text-slate-400">типа линий</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <div className="font-bold text-white">24/7</div>
                    <div className="text-slate-400">смены</div>
                  </div>
                  <div className="rounded-lg bg-slate-800/60 p-3">
                    <div className="font-bold text-white">1–3</div>
                    <div className="text-slate-400">дня отгрузка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800/80 bg-slate-950/40 py-16">
        <div className="container-page">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Почему выбирают {site.brand}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
            Мы делаем качественную продукцию и помогаем клиентам выбрать
            оптимальное решение для конкретной задачи.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="card">
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-amber-500/15 text-amber-300">
                  <f.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Популярная продукция
              </h2>
              <p className="mt-2 text-slate-400">
                Несколько позиций из нашего каталога. Полный ассортимент —
                в каталоге.
              </p>
            </div>
            <Link
              to="/catalog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-amber-300 hover:underline"
            >
              Весь каталог <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Производство полного цикла
            </h2>
            <p className="mt-4 text-slate-300">
              Мы выпускаем тесьму, эластичные ленты и шнуры на собственных
              лентоткацких и плетёных линиях. Это позволяет контролировать
              качество, гибко подбирать состав сырья и быстро реагировать на
              заказы.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {advantages.map((a) => (
                <div key={a.title} className="card">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-amber-500/15 text-amber-300">
                    <a.icon size={18} />
                  </span>
                  <div className="mt-3 font-semibold">{a.title}</div>
                  <p className="text-sm text-slate-400">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Нужен расчёт?</h3>
            <p className="mt-2 text-slate-400">
              Расскажите о задаче — мы подберём подходящие позиции каталога
              или предложим индивидуальное решение.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              <li>• Подбор продукции под конкретное применение</li>
              <li>• Расчёт оптовой стоимости</li>
              <li>• Образцы материалов по запросу</li>
              <li>• Договоры с юридическими лицами и ИП</li>
            </ul>
            <Link to="/contacts" className="btn-primary mt-6">
              Запросить расчёт
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
