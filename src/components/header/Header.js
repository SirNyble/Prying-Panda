import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, InputGroup, InputGroupAddon, Input } from 'reactstrap';
// import { Navbar, FormGroup, FormControl, Button} from "react-bootstrap";
import "./Header.css";
import logo from "./logo.png";

// The Header creates links that can be used to navigate
// between routes. Also displays the Header bar
class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <Navbar className="navbar-light bg-dark" expand="sm">
                <NavbarBrand className="mr-auto" href="/">
                    <img src={logo} className="app-logo" alt="logo"/>
                </NavbarBrand>

                <div className="mr-auto">
                    <h1 class="app-title">Wondering Wolf</h1>
                </div>

                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" >
                        <NavItem>
                            <InputGroup >
                                <InputGroupAddon ><i className="fa fa-search"></i></InputGroupAddon>
                                <Input className="searchBar" placeholder="search" />
                            </InputGroup>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Header;