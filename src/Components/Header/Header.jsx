import React, { Component, useContext } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Header.css';

const NavComponent = () => {
    return (
        <Navbar fluid>
            <Container fluid>
                <Navbar.Brand href="/">DylanOps</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="/login">Mark Otto</a>
                    </Navbar.Text>
                    <Navbar.Text>
                        Signed out: <a href="/logout">Signout</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const Header = () => {
    return (
        <div className='Header'>
            <NavComponent />
        </div>
    );
}

export default Header;