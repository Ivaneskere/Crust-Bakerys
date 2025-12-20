import { Link } from "react-router-dom";


export default function Logo({ colorClass = "logo-light" }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center ${colorClass} ml-2`} // сдвиг вправо
    >
      <img
        src="/IMG/Logo/logoImg.png"
        alt="Logo"
        className="w-24 h-auto" // меньше
      />
    </Link>
  )
}
