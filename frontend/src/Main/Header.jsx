import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Header() {
    return (
        <div className="container">
            <header id="header" className="header">
                    <Logo colorClass="logo-light" />

                    <div className="menu">
                        {/* <Link to="/">Home</Link>  убираю бо при натиску на лого буде перекидати на home якщо не подобається переговорим в тг*/}
                        <Link to="/Products">Products</Link>
                        <Link to="/AboutUs">AboutUs</Link>
                    </div>

                    <div className="button-right">
                        <button>Basket</button>
                        <button>Acc</button>
                    </div>   
                    <div className="LD">
                        <button>DARK</button>
                        <button>Language</button>
                    </div>
            </header>
        </div>
    )
}
export default Header;