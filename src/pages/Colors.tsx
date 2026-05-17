import PageHeader from "../components/PageHeader";
import { colors } from "../data/colors";

export default function Colors() {
  return (
    <>
      <PageHeader
        title="Карта цветов"
        description="Стандартные цвета продукции. По запросу подберём оттенок, близкий к образцу или Pantone."
        breadcrumbs={[{ label: "Карта цветов" }]}
      />
      <section className="py-12">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {colors.map((c) => (
              <div
                key={c.code}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
              >
                <div
                  className="h-28 w-full"
                  style={{ backgroundColor: c.hex }}
                  aria-label={c.name}
                />
                <div className="p-4">
                  <div className="text-sm font-semibold text-slate-100">
                    {c.name}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">{c.code}</div>
                  <div className="mt-1 font-mono text-xs uppercase text-slate-400">
                    {c.hex}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-sm text-slate-400">
            Цвета на экране носят ознакомительный характер и могут отличаться
            от фактических образцов из-за настроек монитора. Для точного
            подбора цвета мы готовы выслать физический образец продукции.
          </p>
        </div>
      </section>
    </>
  );
}
