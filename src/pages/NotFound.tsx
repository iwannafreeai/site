import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-page text-center">
        <div className="text-7xl font-extrabold text-amber-400">404</div>
        <h1 className="mt-4 text-2xl font-bold">Страница не найдена</h1>
        <p className="mt-2 text-slate-400">
          Возможно, ссылка устарела или адрес введён с ошибкой.
        </p>
        <Link to="/" className="btn-primary mt-6">
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
