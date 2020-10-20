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
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/workspace">Workspace</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                <div className="burgerWrapper" onClick={toggleBurgerMenu}>
                    <div className="burger">
                            <div className="line1"></div>
                            <div className="line2"></div>
                            <div className="line3"></div>
                    
                    </div>
                </div>
            </div>      
        </React.Fragment>
    );
}

export default Header;