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
      <img src={logo} alt="logo" />
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
      <div
        style={{
          paddingTop: "15px",
          // fontFamily: "Patrick Hand",
          fontStyle: "italic",
          color: "white",
        }}
      >
        Note: The server used was my-json-server, which cannot do POST, PUT or
        DELETE method. Clone master or localJSON branch to see the DB updating.
      </div>
    </div>
  );
};

export default Footer;
