function Footer() {
  return (
    <footer className="bg-[#1c1c1c] mt-100 text-zinc-300">
  <div className="h-px w-full bg-white/10" />

  <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <h4 className="text-white font-semibold mb-4 tracking-wide">
        Crust Bakery
      </h4>
      <p className="text-sm text-zinc-400 leading-relaxed">
        Щодня свіжа випічка та десерти, приготовані з любов'ю.
      </p>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4 tracking-wide">
        Меню
      </h4>
      <ul className="space-y-2 text-sm text-zinc-400">
        <li className="hover:text-white transition">Піца</li>
        <li className="hover:text-white transition">Випічка</li>
        <li className="hover:text-white transition">Торти</li>
        <li className="hover:text-white transition">Суші</li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4 tracking-wide">
        Компанія
      </h4>
      <ul className="space-y-2 text-sm text-zinc-400">
        <li className="hover:text-white transition">Про нас</li>
        <li className="hover:text-white transition">Контакти</li>
        <li className="hover:text-white transition">Доставка</li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4 tracking-wide">
        Контакти
      </h4>
      <p className="text-sm text-zinc-400">Київ, Україна</p>
      <p className="text-sm text-zinc-400">+380 00 000 00 00</p>
    </div>
  </div>

  <div className="border-t border-white/10 text-center py-4 text-xs text-zinc-500">
   © 2025 Crust Bakery. Всі права захищені.
  </div>
</footer>

  )
}

export default Footer
