import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";

// The Header creates links that can be used to navigate
// between routes. Also displays the Header bar
class Header extends React.Component {
    render() {
        return <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Alliteration With Wolf</h1>
        </header>
    }
}

export default Header;