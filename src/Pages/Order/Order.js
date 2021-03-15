import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import { Container, Button, Row, Col } from "react-bootstrap";
import Deliver from "./Components/Deliver";
import PickUp from "./Components/PickUp";
import CartList from "./Components/CartList";

const Order = () => {
  const [isPickUp, setIsPickUp] = useState(true);
  const [isDeliver, setIsDeliver] = useState(false);
  const [cart, setCart] = useState(null);

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
      });
  }, []);

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
            variant="outline-info"
            onClick={modePickUp}
            // Conditional Styling
            className={
              isPickUp
                ? "order-mode-btn order-initial-mode-btn"
                : "order-initial-mode-btn"
            }
          >
            Pick Up
          </Button>
        </Col>
        <Col className="order-col">
          <Button
            block
            variant="outline-info"
            onClick={modeDeliver}
            // Conditional Styling
            className={
              isDeliver
                ? "order-mode-btn order-initial-mode-btn"
                : "order-initial-mode-btn"
            }
          >
            Delivery
          </Button>
        </Col>
      </Row>

      {/* SHOW CONTENT OF PICKUP OR DELIVERY */}
      <Row>
        <Col className="order-content">
          {/* if pickup is true */}
          {isPickUp && <PickUp />}
          {/* if deliver is true */}
          {isDeliver && <Deliver />}
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
