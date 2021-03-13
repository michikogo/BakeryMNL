import "antd/dist/antd.css";
import { Menu, Layout } from "antd";
import { logo } from "../../Assets";

import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const { Header } = Layout;
  return (
    <Layout>
      <Menu
        style={{
          fontFamily: "Patrick Hand",
          textAlign: "center",
          fontWeight: "500",
          padding: "15px 0px",
          fontSize: "20px",
        }}
        mode="horizontal"
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">About</Link>
        </Menu.Item>
        <img src={logo} />
        <Menu.Item key="3">
          <Link to="/bakery">Bakery</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/order">Orders</Link>
        </Menu.Item>
      </Menu>
    </Layout>
  );
};

export default HeaderMenu;
