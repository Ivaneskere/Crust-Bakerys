import { Page } from "../../../components/Page";

export default function AboutUs() {
    const values = [
        {
            title: "Чесні інгредієнти",
            desc: "Використовуємо лише перевірені продукти без компромісів у якості."
        },
        {
            title: "Готуємо з любов'ю",
            desc: "Кожна страва створюється з турботою, увагою та повагою до смаку."
        },
        {
            title: "Свіжість щодня",
            desc: "Випікаємо та готуємо щодня, щоб ви отримували максимум свіжості."
        },
        {
            title: "Стабільна якість",
            desc: "Дотримуємось стандартів і рецептур, щоб смак завжди був незмінно високим."
        }

    ];

    const timeline = [
        { year: "2019", title: "Перший день роботи", img: "./IMG/Pizza/Pizza_11.png" },
        { year: "2021", title: "Перший аншлаг", img: "./IMG/Pizza/Pizza_11.png" },
        { year: "2024", title: "Найбільше замовлення", img: "./IMG/Pizza//Pizza_11.png" },
    ];

    const team = [
        { name: "Інна", role: "Шеф-кухар", quote: "«Обожнюю нові рецепти»", img: "/IMG/Pizza(img)/Pizza_1.png" },
        { name: "Ганна", role: "Пекар", quote: "«Мій фаворит — хліб»", img: "/IMG/Pizza(img)/Pizza_1.png" },
        { name: "Сергійко", role: "Бариста", quote: "«Готую ідеальний еспресо»", img: "/IMG/Pizza(img)/Pizza_1.png" },
    ];

    const gallery = [
        "/IMG/Pizza(img)/Pizza_10.png",
        "/IMG/Pizza(img)/Pizza_10.png",
        "/IMG/Pizza(img)/Pizza_10.png",
        "/IMG/Pizza(img)/Pizza_10.png",
    ];

    return (
        <Page>
            <main className="bg-[#f7f1e6] text-zinc-900">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/IMG/DifAll(img)/background-bakery.png"
                        alt="background"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#f7f1e6]" />
                </div>

                <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
                    <div className="max-w-2xl">
                        <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur">
                            Про нас
                        </p>

                        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Ми не просто готуємо — ми створюємо настрій
                        </h1>

                        <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                            <b>Levada</b> - Завжди по домашньому смачно
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#story"
                                className="rounded-xl bg-[#7b4a2a] px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-[#6b3f23] focus:outline-none focus:ring-2 focus:ring-[#7b4a2a]/40"
                            >
                                Наша історія
                            </a>

                            <a
                                href="#visit"
                                className="rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15"
                            >
                                Спробувати щось смачненьке😋
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4 pb-20">
                <section id="story" className="-mt-10 rounded-3xl bg-[#f3eadb] p-6 shadow-sm ring-1 ring-black/5 sm:p-10">
                    <div className="flex items-center justify-between gap-6">
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наша історія</h2>
                        <span className="hidden h-px flex-1 bg-zinc-900/10 sm:block" />
                    </div>

                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {timeline.map((t) => (
                            <article key={t.year} className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={t.img}
                                        alt={t.title}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                    />
                                    <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                                        {t.year}
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-lg font-semibold">{t.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                                        Ми більше ніж просто Пекарня❤️
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-10">
                    <div className="flex items-center justify-between gap-6">
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наші цінності</h2>
                        <span className="hidden h-px flex-1 bg-zinc-900/10 sm:block" />
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#7b4a2a]/10 text-[#7b4a2a] ring-1 ring-[#7b4a2a]/15">
                                        <span className="text-sm font-semibold">✦</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{v.title}</h3>
                                        <p className="mt-1 text-sm text-zinc-600">{v.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-10 rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-10">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div>
                            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                Що нас відрізняє
                            </h2>

                            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                                Ми працюємо невеликою командою й готуємо все вручну — від тіста до
                                фінального декору. Для нас важлива не швидкість, а стабільна якість,
                                смак і увага до кожної деталі.
                            </p>

                            <ul className="mt-6 space-y-3 text-sm sm:text-base">
                                {[
                                    "Працюємо без заморожених заготовок",
                                    "Ручна робота на кожному етапі",
                                    "Контроль якості перед кожною подачею",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/20">
                                            ✓
                                        </span>
                                        <span className="text-zinc-800">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a
                                    href="#team"
                                    className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                                >
                                    Познайомитись з командою
                                </a>

                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl">
                            <img
                                src="/IMG/DifAll(img)/background-bakery.png"
                                alt="Baking"
                                className="h-[320px] w-full object-cover sm:h-[380px]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 p-4 text-sm text-zinc-700 ring-1 ring-black/5 backdrop-blur">
                                “Ми готуємо так, як для себе — чесно, уважно й без компромісів.”
                            </div>
                        </div>
                    </div>
                </section>


                <section id="team" className="mt-10">
                    <div className="flex items-center justify-between gap-6">
                        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наша команда</h2>
                        <span className="hidden h-px flex-1 bg-zinc-900/10 sm:block" />
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-3">
                        {team.map((m) => (
                            <article key={m.name} className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
                                <div className="h-56 overflow-hidden">
                                    <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold">{m.name}</h3>
                                    <p className="text-sm font-medium text-[#7b4a2a]">{m.role}</p>
                                    <p className="mt-3 text-sm text-zinc-600">{m.quote}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>


                <section className="mt-10 rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-10">
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Трохи цифр</h2>

                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                        {[
                            { big: "8+", label: "років досвіду" },
                            { big: "500000+", label: "клієнтів" },
                            { big: "100+", label: "рецептів" },
                        ].map((s) => (
                            <div key={s.label} className="rounded-2xl bg-[#f7f1e6] p-6 ring-1 ring-black/5">
                                <div className="text-3xl font-semibold tracking-tight text-zinc-900">{s.big}</div>
                                <div className="mt-1 text-sm text-zinc-600">{s.label}</div>
                            </div>
                        ))}
                    </div>

                    <div
                        id="visit"
                        className="mt-10 flex flex-col gap-4 rounded-2xl bg-zinc-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold">Завітаєш до нас?</h3>
                            <p className="mt-1 text-sm text-white/80">Переглянь меню або напиши — підкажемо найкраще.</p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="/products"
                                className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-white/90"
                            >
                                Menu
                            </a>
                            <a
                                href="/contact"
                                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        </Page>
    );
}
