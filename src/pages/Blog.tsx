import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Tag } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { posts } from "../data/posts";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function Blog() {
  const { slug } = useParams<{ slug?: string }>();

  if (slug) {
    const post = posts.find((p) => p.slug === slug);
    if (!post) {
      return (
        <>
          <PageHeader
            title="Публикация не найдена"
            breadcrumbs={[{ label: "Блог", to: "/blog" }, { label: "—" }]}
          />
          <div className="container-page py-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-amber-300 hover:underline"
            >
              <ArrowLeft size={16} /> Все публикации
            </Link>
          </div>
        </>
      );
    }
    return (
      <>
        <PageHeader
          title={post.title}
          breadcrumbs={[{ label: "Блог", to: "/blog" }, { label: post.title }]}
        />
        <article className="container-page max-w-3xl py-12">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} /> {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Tag size={14} /> {post.tags.join(", ")}
            </span>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-slate-200">
            {post.excerpt}
          </p>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
            {post.body.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-10 inline-flex items-center gap-2 text-amber-300 hover:underline"
          >
            <ArrowLeft size={16} /> Все публикации
          </Link>
        </article>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Блог"
        description="Статьи, советы и новости от производителя шнуров, тесьмы и резинок."
        breadcrumbs={[{ label: "Блог" }]}
      />
      <section className="py-12">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="card flex flex-col gap-3 transition hover:border-amber-400/60"
            >
              <div className="text-xs text-slate-400 inline-flex items-center gap-2">
                <Calendar size={14} /> {formatDate(p.date)}
              </div>
              <h3 className="text-lg font-semibold leading-snug text-white">
                {p.title}
              </h3>
              <p className="text-sm text-slate-400">{p.excerpt}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span className="inline-flex flex-wrap gap-1">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-800 px-2 py-0.5"
                    >
                      #{t}
                    </span>
                  ))}
                </span>
                <span className="inline-flex items-center gap-1 font-medium text-amber-300">
                  Читать <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
