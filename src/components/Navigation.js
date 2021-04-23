import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return <header>
        <ul className="gnb">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </header>
}
export default Navigation;