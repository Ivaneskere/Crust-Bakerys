import { Link } from "react-router-dom";


export default function Logo({ colorClass = "logo-light" }) {
  return (
    <Link to={"/"} className={`logo-link ${colorClass}`}>
      <img 
        
        alt="Crust Bakery Logo" 
        className="logo-img"
      />
    </Link>
  )
}
