import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Image } from "antd";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderMenu from "./Components/HeaderMenu/HeaderMenu";
import FooterMenu from "./Components/FooterMenu/FooterMenu";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Bakery from "./Components/Bakery/Bakery";
import Order from "./Components/Order/Order";
import Product from "./Components/Product/Product";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  const { Content } = Layout;
  return (
    <Router>
      <Layout>
        <HeaderMenu />
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "70vh", backgroundColor: "white" }}
          >
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/bakery">
                <Bakery />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/bakery/:id">
                <Product />
              </Route>
              <Route path="*">
                <PageNotFound />
              </Route>
            </Switch>
          </div>
        </Content>
        <FooterMenu />
      </Layout>
    </Router>
  );
}

export default App;
