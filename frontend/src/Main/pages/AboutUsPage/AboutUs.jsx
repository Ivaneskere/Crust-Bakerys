import { Page } from "../../../components/Page";
import { Scroll } from "../../../components/Scroll.jsx";
import { motion } from "framer-motion";

export default function AboutUs() {
  const values = [
    {
      title: "Чесні інгредієнти",
      desc: "Використовуємо лише перевірені продукти без компромісів у якості.",
    },
    {
      title: "Готуємо з любов'ю",
      desc: "Кожна страва створюється з турботою, увагою та повагою до смаку.",
    },
    {
      title: "Свіжість щодня",
      desc: "Випікаємо та готуємо щодня, щоб ви отримували максимум свіжості.",
    },
    {
      title: "Стабільна якість",
      desc: "Дотримуємось стандартів і рецептур, щоб смак завжди був незмінно високим.",
    },
  ];

  const timeline = [
    { year: "2017", title: "Перший день роботи", img: "/IMG/AboutUsPhotos/first.jpg" },
    { year: "2021", title: "Перше найбільше замовлення", img: "/IMG/AboutUsPhotos/biggest.jpg" },
    { year: "2024", title: "Розширення виробництва", img: "/IMG/AboutUsPhotos/sushiUpdate.jpg" },
  ];

  const team = [
    { name: "Інна", role: "SMM менеджер", quote: "«Знімаю, поки не з'їли»", img: "/IMG/AboutUsPhotos/inna.jpg" },
    { name: "Ганна", role: "Керівник-Шеф", quote: "«Не смачно — переробляєм»", img: "/IMG/AboutUsPhotos/ganna.jpg" },
    { name: "Олена", role: "Сушист", quote: "«Якщо рівно — значить я робила»", img: "/IMG/AboutUsPhotos/olena.jpg" },
  ];

  const containerStagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const itemUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

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
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 ring-1 ring-white/15 backdrop-blur">
                Про нас
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Ми не просто готуємо — ми створюємо настрій
              </h1>

              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                <b>Levada</b> — завжди по домашньому смачно
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#story"
                  className="rounded-xl bg-[#7b4a2a] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#6b3f23] focus:outline-none focus:ring-2 focus:ring-[#7b4a2a]/40"
                >
                  Наша історія
                </a>

                <a
                  href="#visit"
                  className="rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                >
                  Спробувати щось смачненьке 😋
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 pb-20">
          <Scroll>
            <section
              id="story"
              className="-mt-10 rounded-3xl bg-[#f3eadb] p-6 shadow-sm ring-1 ring-black/5 sm:p-10"
            >
              <div className="flex items-center justify-between gap-6">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наша історія</h2>
                <span className="hidden h-px flex-1 bg-zinc-900/10 sm:block" />
              </div>

              <motion.div
                variants={containerStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25, margin: "-80px" }}
                className="mt-8 grid gap-6 md:grid-cols-3"
              >
                {timeline.map((t) => (
                  <motion.article
                    key={t.year}
                    variants={itemUp}
                    className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={t.img}
                        alt={t.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                        {t.year}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-semibold">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        Маленькі кроки, великі історії. Ми ростемо разом із вами.
                      </p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>
          </Scroll>

          <Scroll delay={0.05}>
            <section className="mt-10">
              <div className="flex items-center justify-between gap-6">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наші цінності</h2>
                <span className="hidden h-px flex-1 bg-zinc-900/10 sm:block" />
              </div>

              <motion.div
                variants={containerStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25, margin: "-80px" }}
                className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {values.map((v) => (
                  <motion.div
                    key={v.title}
                    variants={itemUp}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
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
                  </motion.div>
                ))}
              </motion.div>
            </section>
          </Scroll>

          <Scroll delay={0.05}>
            <section className="mt-10 rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <Scroll>
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Що нас відрізняє</h2>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      Ми працюємо невеликою командою й готуємо все вручну — від тіста до фінального
                      декору. Для нас важлива не швидкість, а стабільна якість, смак і увага до
                      кожної деталі.
                    </p>

                    <motion.ul
                      variants={containerStagger}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25, margin: "-80px" }}
                      className="mt-6 space-y-3 text-sm sm:text-base"
                    >
                      {[
                        "Працюємо без заморожених заготовок",
                        "Ручна робота на кожному етапі",
                        "Контроль якості перед кожною подачею",
                      ].map((item) => (
                        <motion.li key={item} variants={itemUp} className="flex gap-3">
                          <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 ring-1 ring-emerald-500/20">
                            ✓
                          </span>
                          <span className="text-zinc-800">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href="#team"
                        className="rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                      >
                        Познайомитись з командою
                      </a>
                    </div>
                  </div>
                </Scroll>

                <Scroll direction="right">
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src="/IMG/AboutUsPhotos/vidriz.jpg"
                      alt="Baking"
                      className="h-[320px] w-full object-cover sm:h-[380px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/85 p-4 text-sm text-zinc-700 ring-1 ring-black/5 backdrop-blur">
                      “Ми готуємо так, як для себе — чесно, уважно й без компромісів.”
                    </div>
                  </div>
                </Scroll>
              </div>
            </section>
          </Scroll>

          <Scroll delay={0.05}>
            <section id="team" className="mt-10">
              <div className="flex items-center justify-between gap-6">
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Наша команда</h2>
                <span className="hidden h-px flex-1 bg-zinc-900/10 sm:block" />
              </div>

              <motion.div
                variants={containerStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25, margin: "-80px" }}
                className="mt-6 grid gap-6 md:grid-cols-3"
              >
                {team.map((m) => (
                  <motion.article
                    key={m.name}
                    variants={itemUp}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="overflow-hidden rounded-3xl bg-white ring-1 ring-black/5"
                  >
                    <div className="h-56 overflow-hidden">
                      <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold">{m.name}</h3>
                      <p className="text-sm font-medium text-[#7b4a2a]">{m.role}</p>
                      <p className="mt-3 text-sm text-zinc-600">{m.quote}</p>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </section>
          </Scroll>

          <Scroll delay={0.05}>
            <section className="mt-10 rounded-3xl bg-white p-6 ring-1 ring-black/5 sm:p-10">
              <Scroll>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Трохи цифр</h2>
              </Scroll>

              <motion.div
                variants={containerStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25, margin: "-80px" }}
                className="mt-6 grid gap-4 sm:grid-cols-3"
              >
                {[
                  { big: "8+", label: "років досвіду" },
                  { big: "500k+", label: "клієнтів" },
                  { big: "100+", label: "рецептів" },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    variants={itemUp}
                    className="rounded-2xl bg-[#f7f1e6] p-6 ring-1 ring-black/5"
                  >
                    <div className="text-3xl font-semibold tracking-tight text-zinc-900">{s.big}</div>
                    <div className="mt-1 text-sm text-zinc-600">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              <Scroll delay={0.12}>
                <div
                  id="visit"
                  className="mt-10 flex flex-col gap-4 rounded-2xl bg-zinc-900 p-6 text-white sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold">Завітаєш до нас?</h3>
                    <p className="mt-1 text-sm text-white/80">
                      Переглянь меню або напиши — підкажемо найкраще.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/products"
                      className="rounded-xl bg-white px-5 py-3 text-sm font-medium !text-black ring-1 ring-black/10 transition hover:bg-black hover:!text-white"
                    >
                      Меню
                    </a>
                    <a
                      href="/contact"
                      className="rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
                    >
                      Наші контакти
                    </a>
                  </div>
                </div>
              </Scroll>
            </section>
          </Scroll>
        </div>
      </main>
    </Page>
  );
}
