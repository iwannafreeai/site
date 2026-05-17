import { Link } from "react-router-dom";
import { ArrowRight, Factory, Layers, Leaf, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { site } from "../data/site";

const milestones = [
  {
    year: "2000",
    text: "Открытие первого участка по производству тесьмы.",
  },
  {
    year: "2008",
    text: "Запуск линии плетёных и витых шнуров, расширение ассортимента.",
  },
  {
    year: "2015",
    text: "Открытие нового цеха с современным оборудованием.",
  },
  {
    year: "2022",
    text: "Внедрение системы контроля качества на каждом этапе.",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Надёжность",
    text: "Стабильные характеристики продукции от партии к партии.",
  },
  {
    icon: Factory,
    title: "Производство",
    text: "Полный цикл — от поставки сырья до отгрузки готовых рулонов.",
  },
  {
    icon: Layers,
    title: "Ассортимент",
    text: "Более 150 артикулов: тесьма, резинки, плетёные и витые шнуры.",
  },
  {
    icon: Leaf,
    title: "Ответственность",
    text: "Бережно относимся к ресурсам, экологии и здоровью сотрудников.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        title={`О компании ${site.brand}`}
        description="Белорусский производитель лентоткацких изделий: тесьма, эластичные ленты и шнуры для лёгкой промышленности."
        breadcrumbs={[{ label: "О компании" }]}
      />

      <section className="py-12">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-slate-300">
            <p>
              Компания «{site.brand}» более {site.experienceYears} лет
              специализируется на производстве тесьмы, эластичных лент и шнуров
              в Республике Беларусь. Наши изделия применяются в швейной,
              обувной, мебельной, упаковочной и рекламной отраслях.
            </p>
            <p>
              Мы развиваем собственное производство, инвестируем в новое
              оборудование и обучение специалистов. Это позволяет выпускать
              продукцию со стабильным качеством и гибко подстраиваться под
              задачи клиентов.
            </p>
            <p>
              Производственная площадка расположена в Могилёвском районе
              (аг. Полыковичи). Мы работаем напрямую с крупными предприятиями,
              малыми ателье и частными мастерами.
            </p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold">Коротко о нас</h3>
            <dl className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Лет на рынке</dt>
                <dd className="font-semibold text-amber-300">
                  {site.experienceYears}+
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Артикулов</dt>
                <dd className="font-semibold text-amber-300">150+</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Клиентов</dt>
                <dd className="font-semibold text-amber-300">500+</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">География</dt>
                <dd className="font-semibold text-amber-300">РБ и СНГ</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800/80 bg-slate-950/40 py-12">
        <div className="container-page">
          <h2 className="text-2xl font-bold">Наши ценности</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="card">
                <span className="inline-grid h-10 w-10 place-items-center rounded-lg bg-amber-500/15 text-amber-300">
                  <v.icon size={18} />
                </span>
                <h3 className="mt-3 font-semibold">{v.title}</h3>
                <p className="text-sm text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <h2 className="text-2xl font-bold">История компании</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.year} className="card">
                <div className="text-3xl font-extrabold text-amber-300">
                  {m.year}
                </div>
                <p className="mt-2 text-sm text-slate-300">{m.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link to="/contacts" className="btn-primary">
              Связаться с нами
              <ArrowRight size={16} />
            </Link>
            <Link to="/catalog" className="btn-secondary">
              Смотреть каталог
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
