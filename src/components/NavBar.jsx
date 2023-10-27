import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">YUGI-OH STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Carts</Nav.Link>
            <Nav.Link href="#features">comparation</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    </header>
  );
};
