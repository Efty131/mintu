import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';

import "../Components/styles/Header.css";
const Header = () => {
  return (
    <div>
       <Navbar bg="light" expand="lg" fixed='top'>
  <Container>
    <Navbar.Brand href="#home" id="name">AIC</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="#home" className="text-info">Home</Nav.Link>
        <Nav.Link href="#link">Admission</Nav.Link>
        <Nav.Link href="#link">Contact</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Syllabus</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Exam</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Class</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
export default Header;