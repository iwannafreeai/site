import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import {
  type ProductCategory,
  categoryLabels,
  categoryDescriptions,
  products,
} from "../data/products";

const categoryOrder: (ProductCategory | "all")[] = [
  "all",
  "tesma",
  "rezinka",
  "shnury",
];

export default function Catalog() {
  const [params, setParams] = useSearchParams();
  const activeCategory =
    (params.get("category") as ProductCategory | null) ?? "all";
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeCategory, query]);

  return (
    <>
      <PageHeader
        title="Каталог продукции"
        description="Тесьма, эластичные ленты и шнуры собственного производства. Используйте фильтр по категориям или поиск."
        breadcrumbs={[{ label: "Каталог" }]}
      />

      <section className="py-12">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {categoryOrder.map((c) => {
                const label = c === "all" ? "Все" : categoryLabels[c];
                const isActive = c === activeCategory;
                return (
                  <button
                    type="button"
                    key={c}
                    onClick={() => {
                      const next = new URLSearchParams(params);
                      if (c === "all") next.delete("category");
                      else next.set("category", c);
                      setParams(next, { replace: true });
                    }}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-medium transition",
                      isActive
                        ? "border-amber-400 bg-amber-500/15 text-amber-300"
                        : "border-slate-700 text-slate-300 hover:border-amber-400/60 hover:text-amber-200",
                    ].join(" ")}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <label className="relative block w-full lg:w-80">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по каталогу"
                className="w-full rounded-full border border-slate-700 bg-slate-900/60 py-2.5 pl-9 pr-4 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400 focus:outline-none"
              />
            </label>
          </div>

          {activeCategory !== "all" && (
            <p className="mt-6 max-w-3xl text-slate-400">
              {categoryDescriptions[activeCategory]}
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="mt-12 rounded-2xl border border-dashed border-slate-700 p-10 text-center text-slate-400">
              По вашему запросу ничего не найдено. Попробуйте изменить
              категорию или поисковую фразу.
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
