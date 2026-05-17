import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "../data/products";
import { categoryLabels } from "../data/products";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/catalog/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:border-amber-400/60 hover:shadow-lg hover:shadow-amber-500/10"
    >
      <ProductImage
        variant={product.image}
        label={product.name}
        className="aspect-[4/3]"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs uppercase tracking-wider text-amber-300/90">
          <span>{categoryLabels[product.category]}</span>
          {product.width && <span>{product.width}</span>}
        </div>
        <h3 className="text-lg font-semibold leading-snug text-white group-hover:text-amber-200">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-slate-400">
          {product.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3 text-sm text-slate-400">
          <span>{product.minOrder}</span>
          <span className="inline-flex items-center gap-1 font-medium text-amber-300 group-hover:translate-x-1 transition">
            Подробнее <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
