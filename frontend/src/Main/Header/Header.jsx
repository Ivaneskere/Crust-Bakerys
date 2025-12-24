import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo.jsx";
import { useState, useEffect } from "react";

function Header() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const count = cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
    setCartCount(count);
  };

  useEffect(() => {
    // Отримати кількість товарів з localStorage на початку
    updateCartCount();

    // Слухати custom event при зміні кошика в тому ж табу
    window.addEventListener('cartUpdated', updateCartCount);
    
    // Слухати storage event для інших табів
    window.addEventListener('storage', updateCartCount);

    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
      window.removeEventListener('storage', updateCartCount);
    };
  }, []);

  const linkBase =
    "rounded-2xl px-4 py-2 text-sm font-medium transition-all duration-200";
  const linkActive =
    "bg-[#2f241a] text-[#f7f1e6] shadow-sm ring-1 ring-black/10";
  const linkIdle =
    "text-zinc-800 hover:bg-[#2f241a]/5 hover:text-[#2f241a]";

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="h-1 w-full bg-gradient-to-r from-[#7b4a2a] via-[#caa27a] to-[#7b4a2a]" />

      <div className="border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="group flex items-center gap-3">
            <div className="rounded-2xl bg-[#f7f1e6] p-2 ring-1 ring-black/5 shadow-sm transition group-hover:shadow-md">
              <Logo className="h-9 w-auto" />
            </div>

            <div className="hidden leading-tight sm:block">
              <div className="text-sm font-semibold tracking-wide text-[#2f241a]">
                Пекарня Левада
              </div>
              <div className="text-xs text-zinc-600">Завжди по домашньому смачно</div>
            </div>
          </Link>

          <nav className="hidden rounded-3xl bg-[#f7f1e6] p-1 ring-1 ring-black/5 md:flex md:items-center md:gap-1">
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
              Продукція
            </NavLink>

            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkIdle}`
              }
            >
               Про нас
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/Cart"
              className="relative inline-flex items-center gap-2 rounded-2xl bg-[#f7f1e6] px-4 py-2 text-sm font-semibold text-[#2f241a] ring-1 ring-black/5 transition hover:bg-[#f2e6d2]"
            >
              <span className="text-base leading-none">🛒</span>
              <span className="hidden sm:inline">Кошик</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center h-6 w-6 rounded-full bg-red-500 text-white text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link
              to="/Account"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#2f241a] px-4 py-2 text-sm font-semibold text-[#f7f1e6] shadow-sm ring-1 ring-black/10 transition hover:bg-[#241b13] focus:outline-none focus:ring-2 focus:ring-[#caa27a]/50"
            >
              <span className="text-base leading-none">👤</span>
              <span className="hidden sm:inline">Акаунт</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
