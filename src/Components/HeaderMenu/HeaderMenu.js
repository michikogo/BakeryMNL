import { Navbar, Nav } from "react-bootstrap";

import { logo } from "../../Assets";

import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
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
          <Nav.Link>
            <Link to="/" style={{ color: "white" }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about" style={{ color: "white", marginLeft: "25px" }}>
              About
            </Link>
          </Nav.Link>
          <Navbar.Brand>
            <img src={logo} />
          </Navbar.Brand>
          <Nav.Link>
            <Link to="/bakery" style={{ color: "white", marginRight: "25px" }}>
              Bakery
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/order" style={{ color: "white" }}>
              Order
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default HeaderMenu;
