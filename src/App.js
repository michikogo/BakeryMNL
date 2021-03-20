import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HeaderMenu from "./Common/HeaderMenu/HeaderMenu";
import FooterMenu from "./Common/FooterMenu/FooterMenu";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Bakery from "./Pages/Bakery/Bakery";
import Order from "./Pages/Order/Order";
import Product from "./Pages/Product/Product";
import PageNotFound from "./Common/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <HeaderMenu />
      <div
        style={{
          padding: 24,
          paddingTop: 50,
          paddingBottom: 50,
          minHeight: "80vh",
        }}
      >
        <Switch>
          <Route exact path="/BakeryMNL/">
            <Home />
          </Route>
          <Route path="/BakeryMNL/about">
            <About />
          </Route>
          <Route exact path="/BakeryMNL/bakery">
            <Bakery />
          </Route>
          <Route path="/BakeryMNL/order">
            <Order />
          </Route>
          <Route path="/BakeryMNL/bakery/:id">
            <Product />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
      <FooterMenu />
    </Router>
  );
}

export default App;
