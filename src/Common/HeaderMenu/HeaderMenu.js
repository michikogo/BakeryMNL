import { Navbar, Nav, NavItem } from "react-bootstrap";

import { logo } from "../../Assets";

import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div>
      <Navbar style={{ backgroundColor: "#67697C" }}>
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
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" style={{ color: "white", marginLeft: "25px" }}>
              About
            </Link>
          </NavItem>
          <Navbar.Brand>
            <img alt="Cannot Fetch Logo" src={logo} />
          </Navbar.Brand>
          <NavItem>
            <Link to="/bakery" style={{ color: "white", marginRight: "25px" }}>
              Bakery
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/order" style={{ color: "white" }}>
              Order
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderMenu;
