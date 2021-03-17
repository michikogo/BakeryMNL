import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./index.css";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import Deliver from "./Components/Deliver";
import PickUp from "./Components/PickUp";
import CartList from "./Components/CartList";
import { deliver, pickup } from "../../Assets";

const Order = () => {
  const [isPickUp, setIsPickUp] = useState(true);
  const [isDeliver, setIsDeliver] = useState(false);
  const [cart, setCart] = useState(null);
  const [cartLength, setCartLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);

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
        if (!res.ok) {
          throw Error("Cannot Be Fetched");
        }
        return res.json();
      })
      .then((data) => {
        setCart(data);
        setCartLength(data.length);

        setIsLoading(false);
        setErrorMessage(null);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
        setErrorMessage(err.message);
      });
  }, []);

  const handleBought = () => {
    if (cart.length !== 0) {
      cart.forEach((itemCart) => {
        console.log(itemCart);
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

      {errorMessage && <h6 className="order-fetching">{errorMessage}</h6>}

      {/* TABLE */}
      {isLoading && (
        <h6 className="order-fetching">
          <Spinner animation="border" role="status" />
        </h6>
      )}
      {!isLoading && cart && (
        <Row>
          <CartList cart={cart} />
        </Row>
      )}

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
            <img
              src={pickup}
              alt="cant fetch"
              width="25"
              style={{ marginRight: "5px" }}
            />
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
            <img
              src={deliver}
              alt="cant fetch"
              width="25"
              style={{ marginRight: "5px" }}
            />
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
          {isDeliver && (
            <Deliver handleBought={handleBought} cartLength={cartLength} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
