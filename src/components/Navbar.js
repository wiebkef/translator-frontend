import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Button from "react-bootstrap/Button";

function NavaBar() {
  return (
    <Navbar bg="dark" expand="sm">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Love for Words
        </Navbar.Brand>
        <img
          alt=""
          src="https://static.vecteezy.com/ti/gratis-vektor/p3/4297596-bildung-logo-open-book-dictionary-lehrbuch-oder-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vektor.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="warning">login</Button>
      </Container>
    </Navbar>
  );
}

export default NavaBar;
