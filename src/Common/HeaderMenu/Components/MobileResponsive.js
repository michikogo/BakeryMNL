import "../index.css";
import { logo } from "../../../Assets";
import { Navbar, Nav } from "react-bootstrap";

const MobileResponsive = () => {
  return (
    <Navbar className="header-mobile-responsive" expand="lg">
      {/* LOGO */}
      <Navbar.Brand className="header-mobile-margin">
        <img alt="logo" src={logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* HOME */}
        <Nav className="mr-auto">
          <Nav.Link href="/" className="header-mobile-route">
            Home
          </Nav.Link>
          {/* ABOUT */}
          <Nav.Link href="/about" className="header-mobile-route">
            About
          </Nav.Link>
          {/* BAKERY */}
          <Nav.Link href="/bakery" className="header-mobile-route">
            Bakery
          </Nav.Link>
          {/* ORDER */}
          <Nav.Link href="/order" className="header-mobile-route">
            Order
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileResponsive;
