export function Logo({ className = "" }) {
  return (
    <div className={`group flex items-center ${className}`}>
      <img
        src="/IMG/Logo/logo.jpg"
        alt="Crust Bakery"
        className="
          h-9 w-auto
          rounded-xl
          bg-[#f7f1e6]
          p-1.5
          ring-1 ring-[#7b4a2a]/20
          shadow-sm
          transition
          group-hover:ring-[#7b4a2a]/40
          group-hover:scale-[1.03]
        "
      />
    </div>
  );
}
