import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Classic Passion Restoration</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#AboutUs">About Us</Nav.Link>
                <Nav.Link href="#MediaBlasting">Media Blasting</Nav.Link>
                <Nav.Link href="#Blog">Blog</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default NavBar;