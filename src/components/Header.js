import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavbarText
} from 'reactstrap';



function Header({loggedIn}) {
    return (
        <div className="header">
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">reactstrap</Link>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/target-companies-and-applications">Target Companies Applications</Link>
                    <Link className="nav-link" to="/job-search-materials">Job Search Materials</Link>
                    <Link className="nav-link" to="/networking-contacts">Networking Contacts</Link>
                    <Link className="nav-link" to="/resources">Resources</Link>
                </Nav>
                <NavbarText>{loggedIn ? "Log Out" : "Log In"}</NavbarText>
            </Navbar>
        </div>
    );
}

export default Header;
