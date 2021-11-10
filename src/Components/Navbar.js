import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Styles/header.css";
import "../Components/Styles/navbar.css";

function Navbar() {
  return (
    <>
        <nav className="navbar navbar2">
            <ul>
                <li><NavLink exact activeClassName="active_li" to="/">Home</NavLink></li>
                <li><NavLink exact activeClassName="active_li" to="/Bollywood">Bollywood</NavLink></li>
                <li><NavLink exact activeClassName="active_li" to="/Technology">Technology</NavLink></li>
                <li><NavLink exact activeClassName="active_li" to="/Hollywood">Hollywood</NavLink></li>
                <li><NavLink exact activeClassName="active_li" to="/Fitness">Fitness</NavLink></li>
                <li><NavLink exact activeClassName="active_li" to="/Food">Food</NavLink></li>
            </ul>
        </nav>
    </>
  );
}

export default Navbar;
