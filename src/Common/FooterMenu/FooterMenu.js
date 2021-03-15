import { Row, Col } from "react-bootstrap";
import { logo } from "../../Assets/index";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#4A6C6F",
        textAlign: "center",
        padding: "16px 8px",
      }}
    >
      <img src={logo} />
      <div
        style={{
          paddingTop: "15px",
          fontFamily: "Patrick Hand",
          fontSize: "20px",
          color: "white",
        }}
      >
        Created by Aoki Young
      </div>
    </div>
  );
};

export default Footer;
