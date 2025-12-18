
import { Link } from "react-router-dom";
import Logo from "../../components/Logo.jsx";

function Header() {
    return (

        <header className="w-full h-16 flex items-center justify-between px-8 bg-black text-white">
            <Logo colorClass="logo-light" />
            <nav className="flex gap-6">

                {/* <Link to="/">Home</Link>  убираю бо при натиску на лого буде перекидати на home якщо не подобається переговорим в тг*/}

                <Link to="/Products" className="hover:text-yellow-400">Products</Link>
                <Link to="/AboutUs" className="hover:text-yellow-400">AboutUs</Link>

            </nav>

           <div className="flex gap-4">
                <button>Basket</button>
                <button>Acc</button>
                
           </div>
        </header>

    )
}
export default Header;