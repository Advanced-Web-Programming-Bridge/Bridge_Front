import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./style/navbar.css";
import LoginButton from './loginbutton';
import Joinutton from './joinbutton';

function OffcanvasExample() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid className='navbar'>
            <Navbar.Brand href="#">
              <img className="logo" src="./fitlog.png"/> FitLog
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3 align-items-center">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/exercise">Exercise</Nav.Link>
                  <Nav.Link href="/meal">Meal</Nav.Link>
                </Nav>
                <Nav className="sign_up">
                  <Nav.Link href="#action4"><LoginButton/></Nav.Link>
                  <Nav.Link href="#action5"><Joinutton/></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;