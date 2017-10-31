import React from "react";
 import { Container, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, InputGroup, InputGroupAddon, Input } from 'reactstrap';
 
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
            <Navbar  className="navbar-light bg-dark sticky-top" expand="sm">
                <Container>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src={logo} className="app-logo" alt="logo"/>
                    </NavbarBrand>

                    <Col className="mr-auto" sm={4}>
                        <h1 className="app-title">Wondering Wolf</h1>
                    </Col>

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
                </Container>
            </Navbar>
        );
    }
}

export default Header;