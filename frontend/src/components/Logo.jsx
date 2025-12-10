import { Link } from "react-router-dom";
import logoImg from "../images/logoImg.png";

export default function Logo({ colorClass = "logo-light" }) {
  return (
    <Link to={"/"} className={`logo-link ${colorClass}`}>
      <img 
        src={logoImg} 
        alt="Crust Bakery Logo" 
        className="logo-img"
      />
    </Link>
  )
}
