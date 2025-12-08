
import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";




function Header() {
    return (
        <div className="container">
            <header id="header" className="header">
                    <div className="logo">
                        <img src="/Pictures/logo.png" alt="" />
                    </div>

                    <div className="menu">
                        <Link to="/">Home</Link>
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