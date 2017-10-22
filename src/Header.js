import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from './logo.png';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Prying Panda</h1>
    </header>
);

export default Header;