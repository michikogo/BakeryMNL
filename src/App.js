import "./App.css";

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
  return (
    <Router>
      <HeaderMenu />
      <div style={{ padding: 24, minHeight: "80vh", backgroundColor: "grey" }}>
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
      <FooterMenu />
    </Router>
  );
}

export default App;
