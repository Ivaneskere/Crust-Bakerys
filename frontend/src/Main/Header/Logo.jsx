export function Logo({ className = "" }) {
  return (
    <img
      src="/IMG/Logo/logo.jpg"
      alt="Crust Bakery"
      className={`h-8 w-auto ${className}`}
    />
  );
}