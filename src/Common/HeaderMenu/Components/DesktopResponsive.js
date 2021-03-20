import "../index.css";
import { logo } from "../../../Assets";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const DesktopResponsive = () => {
  return (
    <Navbar className="header-desktop-responsive">
      <Nav className="header-desktop-nav">
        {/* HOME */}
        <Nav>
          <Link to="/BakeryMNL/" className="header-desktop-route">
            Home
          </Link>
        </Nav>
        {/* ABOUT */}
        <Nav>
          <Link to="/BakeryMNL/about" className="header-desktop-route">
            About
          </Link>
        </Nav>
        {/* IMAGE */}
        <Navbar.Brand style={{ marginRight: "0px" }}>
          <img alt="Cannot Fetch Logo" src={logo} />
        </Navbar.Brand>
        {/* BAKERY */}
        <Nav>
          <Link to="/BakeryMNL/bakery" className="header-desktop-route">
            Bakery
          </Link>
        </Nav>
        {/* ORDER */}
        <Nav>
          <Link to="/BakeryMNL/order" className="header-desktop-route">
            Order
          </Link>
        </Nav>
      </Nav>
    </Navbar>
  );
};

export default DesktopResponsive;
