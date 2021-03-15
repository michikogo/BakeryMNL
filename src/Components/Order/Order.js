import { useState } from "react";
import "./index.css";
import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";

import Deliver from "./Deliver";
import PickUp from "./PickUp";

const Order = () => {
  const [isPickUp, setIsPickUp] = useState(true);
  const [isDeliver, setIsDeliver] = useState(false);

  const modePickUp = () => {
    setIsPickUp(true);
    setIsDeliver(false);
  };

  const modeDeliver = () => {
    setIsPickUp(false);
    setIsDeliver(true);
  };

  return (
    <Container fluid="md">
      <h1 className="order-title">Order Page</h1>
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
