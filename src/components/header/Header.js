import React from "react";
import {Form, FormControl, Navbar, NavbarBrand, Grid, Nav, NavItem, InputGroup} from "react-bootstrap";
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
        this.searchUser = this.searchUser.bind(this);
    }

    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    searchUser(event) {
        console.log("BLAH");
        console.log(event);
        event.preventDefault();
        window.location.href = '/user/Nyble';
    }

    render() {
        return (
            <Navbar inverse>
                <Grid>
                    <Navbar.Header >
                        <NavbarBrand href="/">
                            <img src={logo} alt="logo"/>
                        </NavbarBrand>
                        <Navbar.Text pullRight  className="app-title"> 
                            Wondering Wolf
                        </Navbar.Text>
                        <Navbar.Toggle pullRight />
                    </Navbar.Header>
                    <Navbar.Collapse pullRight >
                    <Nav pullRight  >
                        <NavItem >
                            <Form onSubmit={this.searchUser} >
                            <InputGroup >
                                <InputGroup.Addon ><i className="fa fa-search"></i></InputGroup.Addon>
                                <FormControl type="text" placeholder="Search"/>
                            </InputGroup>
                            </Form>
                        </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Grid> 
            </Navbar>
        );
    }
}

export default Header;