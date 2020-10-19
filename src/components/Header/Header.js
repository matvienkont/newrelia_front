import React from "react";
//import logo_min from "../../media/logo_min.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () =>
{
    return (
        <React.Fragment>
            <div className="header-flex-wrapper">
            <div className="logo-wrapper">
                <div className="header-logo" alt="logo"/>
            </div>

            <div className="header-links-container">
                <ul>
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
            </div>      
        </React.Fragment>
    );
}

export default Header;