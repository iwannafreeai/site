import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { site } from "../data/site";

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const empty: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

export default function Contacts() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [sent, setSent] = useState(false);

  function validate(state: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (state.name.trim().length < 2) e.name = "Введите имя";
    if (!state.phone.trim() && !state.email.trim())
      e.phone = "Укажите телефон или email";
    if (state.email && !/^\S+@\S+\.\S+$/.test(state.email))
      e.email = "Некорректный email";
    if (state.message.trim().length < 5) e.message = "Опишите задачу подробнее";
    return e;
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const e = validate(form);
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm(empty);
    }
  }

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  }

  return (
    <>
      <PageHeader
        title="Контакты"
        description="Свяжитесь с нами удобным способом или оставьте заявку — менеджер ответит в рабочее время."
        breadcrumbs={[{ label: "Контакты" }]}
      />

      <section className="py-12">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Реквизиты и адрес</h2>
            <ul className="mt-6 space-y-5 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 text-amber-300" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    Телефон
                  </div>
                  <a
                    href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                    className="font-medium hover:text-amber-300"
                  >
                    {site.phone}
                  </a>
                  <div>
                    <a
                      href={`tel:${site.mobile.replace(/[^+\d]/g, "")}`}
                      className="font-medium hover:text-amber-300"
                    >
                      {site.mobile}
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 text-amber-300" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </div>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium hover:text-amber-300"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-amber-300" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    Адрес
                  </div>
                  <span>{site.address}</span>
                </div>
              </li>
            </ul>

            <div className="card mt-8">
              <h3 className="font-semibold">Часы работы</h3>
              <p className="mt-2 text-sm text-slate-400">{site.workingHours}</p>
            </div>

            <div className="card mt-4">
              <h3 className="font-semibold">Как мы работаем</h3>
              <ol className="mt-3 space-y-2 text-sm text-slate-300">
                <li>1. Принимаем заявку и согласуем характеристики.</li>
                <li>2. Готовим коммерческое предложение и образцы.</li>
                <li>3. Производим и отгружаем заказ в согласованный срок.</li>
              </ol>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold">Оставьте заявку</h2>
            <p className="mt-2 text-slate-400">
              Заполните форму — мы свяжемся, уточним детали и подготовим
              расчёт.
            </p>

            {sent ? (
              <div className="mt-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-5 text-emerald-200">
                <CheckCircle2 className="mb-2" />
                Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в
                ближайшее рабочее время.
                <button
                  type="button"
                  className="mt-4 inline-flex text-sm font-semibold text-emerald-200 underline"
                  onClick={() => setSent(false)}
                >
                  Отправить ещё одну
                </button>
              </div>
            ) : (
              <form
                className="mt-6 grid gap-4"
                onSubmit={handleSubmit}
                noValidate
              >
                <Field
                  label="Имя"
                  required
                  value={form.name}
                  onChange={(v) => update("name", v)}
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  label="Компания"
                  value={form.company}
                  onChange={(v) => update("company", v)}
                  autoComplete="organization"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Телефон"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    error={errors.phone}
                    autoComplete="tel"
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    error={errors.email}
                    autoComplete="email"
                  />
                </div>
                <Field
                  label="Сообщение"
                  textarea
                  required
                  value={form.message}
                  onChange={(v) => update("message", v)}
                  error={errors.message}
                />
                <button type="submit" className="btn-primary justify-center">
                  Отправить заявку
                  <Send size={16} />
                </button>
                <p className="text-xs text-slate-500">
                  Нажимая «Отправить», вы соглашаетесь на обработку
                  персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea,
  required,
  error,
  autoComplete,
}: FieldProps) {
  const base =
    "w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none";
  const border = error
    ? "border-red-400 focus:border-red-400"
    : "border-slate-700 focus:border-amber-400";
  return (
    <label className="block">
      <span className="mb-1 inline-block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-amber-300">*</span>}
      </span>
      {textarea ? (
        <textarea
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={5}
          className={[base, border].join(" ")}
        />
      ) : (
        <input
          required={required}
          type={type}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={[base, border].join(" ")}
        />
      )}
      {error && (
        <span className="mt-1 inline-block text-xs text-red-400">{error}</span>
      )}
    </label>
  );
}
