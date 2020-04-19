import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavbarText
} from 'reactstrap';



function Header({loggedIn, setLoggedIn, setCreateModal}) {

    function logUserOut() {
        localStorage.removeItem("token")
        setLoggedIn(false)
    }

    function loadSignIn() {
        setCreateModal(false)
    }

    const logIn = <NavbarText onClick={loadSignIn}>Log In</NavbarText>;

    const logOut = <NavbarText onClick={logUserOut} >Log Out</NavbarText>;

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
               {loggedIn ? logOut : logIn}
            </Navbar>
        </div>
    );
}

export default Header;
