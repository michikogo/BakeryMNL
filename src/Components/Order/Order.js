import { useState } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import {
  Container,
  Table,
  Button,
  Row,
  Col,
  Image,
  Form,
} from "react-bootstrap";
import { item1, item2 } from "../../Assets/index";
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
      <Row>
        <Col className="order-title">
          <h3>Your Cart</h3>
          <Link to="/bakery">Continue Shopping</Link>
        </Col>
      </Row>
      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th></th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td style={{ verticalAlign: "middle" }}>
                <Image
                  src={item1}
                  style={{
                    height: "150px",
                    width: "150px",
                    objectFit: "cover",
                  }}
                />
              </td>
              <td style={{ verticalAlign: "middle" }}>
                <div style={{ fontWeight: "bold" }}>
                  Dark Chocolate Peanut Butter Mini Tarts
                </div>
              </td>
              <td style={{ verticalAlign: "middle" }}>
                <div>P250</div>
              </td>
              <td style={{ verticalAlign: "middle", width: "15vh" }}>
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder="1" />
                  </Col>
                </Row>
              </td>
              <td style={{ verticalAlign: "middle" }}>
                <div>P250</div>
              </td>
            </tr>

            <tr style={{ textAlign: "center" }}>
              <td
                colSpan="4"
                style={{
                  verticalAlign: "middle",
                  textAlignLast: "right",
                }}
              >
                Total
              </td>
              <td style={{ verticalAlign: "middle" }}>P250</td>
            </tr>
          </tbody>
        </Table>
      </Row>

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
