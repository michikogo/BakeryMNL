import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import Deliver from "./Components/Deliver";
import PickUp from "./Components/PickUp";
import CartList from "./Components/CartList";
import { deliver, pickup } from "../../Assets";

const Order = () => {
  const [isPickUp, setIsPickUp] = useState(true);
  const [isDeliver, setIsDeliver] = useState(false);
  const [cart, setCart] = useState(null);
  const [cartLength, setCartLength] = useState(0);

  const modePickUp = () => {
    setIsPickUp(true);
    setIsDeliver(false);
  };

  const modeDeliver = () => {
    setIsPickUp(false);
    setIsDeliver(true);
  };

  useEffect(() => {
    fetch("http://localhost:8000/cart")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCart(data);
        setCartLength(data.length);
      });
  }, []);

  const handleBought = () => {
    if (cart.length != 0) {
      cart.map((itemCart) => {
        fetch("http://localhost:8000/cart/" + itemCart.id, {
          method: "DELETE",
        });
      });
    } else {
      alert("There is no items in the cart");
    }
  };

  return (
    <Container fluid="md">
      {/* TITLE BAR */}
      <Row>
        <Col className="order-title">
          <h3>Your Cart</h3>
          <Link to="/bakery">Continue Shopping</Link>
        </Col>
      </Row>

      {/* TABLE */}
      <Row>{cart && <CartList cart={cart} />}</Row>

      {/* PICKUP OR DELIVERY */}
      <Row style={{ placeContent: "center" }}>
        <Col className="order-col">
          <Button
            block
            variant="secondary"
            onClick={modePickUp}
            // Conditional Styling
            className={
              isPickUp
                ? "order-mode-btn order-initial-mode-btn"
                : "order-initial-mode-btn"
            }
          >
            <img src={pickup} width="25" style={{ marginRight: "5px" }} />
            Pick Up
          </Button>
        </Col>
        <Col className="order-col">
          <Button
            block
            variant="secondary"
            onClick={modeDeliver}
            // Conditional Styling
            className={
              isDeliver
                ? "order-mode-btn order-initial-mode-btn"
                : "order-initial-mode-btn"
            }
          >
            <img src={deliver} width="25" style={{ marginRight: "5px" }} />
            Deliver
          </Button>
        </Col>
      </Row>

      {/* SHOW CONTENT OF PICKUP OR DELIVERY */}
      <Row>
        <Col className="order-content">
          {/* if pickup is true */}
          {isPickUp && (
            <PickUp handleBought={handleBought} cartLength={cartLength} />
          )}
          {/* if deliver is true */}
          {isDeliver && <Deliver handleBought={handleBought} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
