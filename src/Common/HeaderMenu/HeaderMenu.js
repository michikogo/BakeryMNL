import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./index.css";
import { logo } from "../../Assets";

const HeaderMenu = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#4A6C6F" }}>
        <Nav
          style={{
            width: "100%",
            placeContent: "center",
            alignItems: "center",
            fontFamily: "Patrick Hand",
            fontSize: "25px",
            color: "white",
          }}
        >
          <NavItem>
            <Link to="/" className="header-route">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="header-route">
              About
            </Link>
          </NavItem>
          <Navbar.Brand style={{ marginRight: "0px" }}>
            <img alt="Cannot Fetch Logo" src={logo} />
          </Navbar.Brand>
          <NavItem>
            <Link to="/bakery" className="header-route">
              Bakery
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/order" className="header-route">
              Order
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderMenu;
