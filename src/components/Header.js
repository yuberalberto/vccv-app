import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/logo_cvvc.png'; // Adjust the path if necessary
import './Header.css'; // Import the CSS file

function Header() {
    return (
        <Navbar className="navbar-custom fixed-top" expand="lg">
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" className="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
                    <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
                    <Nav.Link href="#blog" className="nav-link-custom">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Button href="#contact" className="button-custom">Contact Us</Button>
        </Navbar>
    );
}

export default Header;

