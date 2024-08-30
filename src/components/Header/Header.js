// import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/LOGO.png";
import "../Header/Header.css";

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
            <img className="header_logo" src={logo} alt="logo kasa" />
            </Link>
            <nav className="header_nav">
                <ul className="header-nav-list">
                    <li>
                        <NavLink className="header-link" to="/">
                        Accueil 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="header-link" to="about-us">
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header