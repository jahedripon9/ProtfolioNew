
import React from 'react';
import {  Container,   Nav, Navbar, NavDropdown, Row,} from 'react-bootstrap';
import { Slide } from 'react-reveal';

const Header = () => {
    return (
        <div>
            <Slide top>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='center' href="#home"><img width="100" height="100"
        className="d-inline-block align-top" src="https://i.ibb.co/JBhrGx2/favicon.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav className=''>
                        <Nav.Link className='px-4 font-weight-bold' href="#home">Home</Nav.Link>
                        <Nav.Link className='px-4 font-weight-bold' href="#Education">Education</Nav.Link>
                        <Nav.Link className='px-4 font-weight-bold' href="#Experience">Experience</Nav.Link>
                        <Nav.Link className='px-4 font-weight-bold' href="#Projects">Projects</Nav.Link>
                        <Nav.Link className='px-4 font-weight-bold' href="#OpenSource">Open Source</Nav.Link>
                        <Nav.Link className='px-4 font-weight-bold' href="#ContactMe">Contact Me
</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                </Slide>
        </div>
    );
};

export default Header;