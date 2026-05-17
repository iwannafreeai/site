import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ProductImage from "../components/ProductImage";
import { categoryLabels, products } from "../data/products";

export default function Product() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <PageHeader
          title="Товар не найден"
          description="Возможно, позиция была переименована или удалена из каталога."
          breadcrumbs={[{ label: "Каталог", to: "/catalog" }, { label: "—" }]}
        />
        <div className="container-page py-12">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 text-amber-300 hover:underline"
          >
            <ArrowLeft size={16} /> Вернуться в каталог
          </Link>
        </div>
      </>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={product.name}
        breadcrumbs={[
          { label: "Каталог", to: "/catalog" },
          {
            label: categoryLabels[product.category],
            to: `/catalog?category=${product.category}`,
          },
          { label: product.name },
        ]}
      />

      <section className="py-12">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <ProductImage
            variant={product.image}
            label={product.name}
            className="aspect-[4/3]"
          />
          <div>
            <span className="inline-flex items-center rounded-full bg-amber-500/15 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-300">
              {categoryLabels[product.category]}
            </span>
            <h2 className="mt-4 text-3xl font-bold">{product.name}</h2>
            <p className="mt-3 text-slate-300">{product.description}</p>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Detail label="Материал" value={product.material} />
              <Detail label="Состав" value={product.composition} />
              {product.width && (
                <Detail label="Размер" value={product.width} />
              )}
              {product.length && (
                <Detail label="Длина" value={product.length} />
              )}
              <Detail label="Минимальный заказ" value={product.minOrder} />
              <Detail
                label="Доступные цвета"
                value={`${product.colors.length} вариантов`}
              />
            </dl>

            <div className="mt-6">
              <div className="text-sm font-semibold text-slate-200">
                Цвета
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacts" className="btn-primary">
                Заказать <ArrowRight size={16} />
              </Link>
              <Link to="/catalog" className="btn-secondary">
                В каталог
              </Link>
            </div>

            <ul className="mt-8 space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-amber-300"
                />
                Изготовление по индивидуальным размерам и цветам
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-amber-300"
                />
                Отгрузка по Беларуси и СНГ
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-amber-300"
                />
                Договор с юридическими лицами и ИП
              </li>
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-slate-800/80 py-12">
          <div className="container-page">
            <h3 className="text-2xl font-bold">Похожая продукция</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/catalog/${p.slug}`}
                  className="card transition hover:border-amber-400/60"
                >
                  <ProductImage
                    variant={p.image}
                    label={p.name}
                    className="aspect-[4/3]"
                  />
                  <div className="mt-4 font-semibold">{p.name}</div>
                  <div className="mt-1 text-sm text-slate-400">
                    {p.shortDescription}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <dt className="text-xs uppercase tracking-wider text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm font-medium text-slate-100">{value}</dd>
    </div>
  );
}
