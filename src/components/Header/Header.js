import React from "react";
//import logo_min from "../../media/logo_min.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { toggleBurgerMenu } from "./events/toggleBurgerMenu";
import { useWindowSize } from "./events/disableAnimOnResize";

const Header = () =>
{
    useWindowSize();
    
    return (
        <React.Fragment>
            <div className="header-flex-wrapper">
                <div className="logo-wrapper">
                    <div className="header-logo" alt="logo"/>
                </div>

                <div className="header-links-container">
                    <ul className="links-wrapper">
                        <li>
                            <Link to="/" onClick={() => toggleBurgerMenu(true)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/workspace" onClick={() => toggleBurgerMenu(true)}>Workspace</Link>
                        </li>
                        <li>
                            <Link to="/login" onClick={() => toggleBurgerMenu(true)}>Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="menuContainer">
                    <div className="closeMenuField" onClick={() => toggleBurgerMenu(false)}></div>
                    <div className="burgerWrapper" onClick={() => toggleBurgerMenu(false)}>
                        <div className="burger">
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                        
                        </div>
                    </div>
                </div>
            </div>      
        </React.Fragment>
    );
}

export default Header;