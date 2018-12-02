import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import './Navbar.sass'

export default class AppNavbar extends React.Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
  
    render() {
        return (
            <Navbar className="navbar_style_custom" sticky="top" fixed="true" color="dark" dark expand="md">
                <NavbarBrand href="/">SheremetyevoDashboard</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                    <NavItem>
                    <NavLink className="nav-link" to='/departing_flights' active>Вылет</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className="nav-link" to='/arriving_flights'>Прилет</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
        );
    }
}