import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";

import "./index.css";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  Form,
} from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const history = useHistory();
  const [item, setItem] = useState(null);
  const [cartItem, setCartItem] = useState(null);
  const [order, setOrder] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [buyNow, setBuyNow] = useState(true);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Get specific product DB
    fetch("http://localhost:8000/products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data);
        // Tab title
        document.title = "BakeryMNL | " + data.title;
      });

    // Get cart DB
    fetch("http://localhost:8000/cart")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCartItem(data);
      });
  }, []);

  // Update or add item in DB, if more than 5 alert
  const handleDB = (imageURL, title, price, quantity) => {
    // Get item that is going to be updated
    let singleThing;
    cartItem
      .filter((thing) => thing.imageURL === imageURL)
      .forEach((filteredThing) => {
        singleThing = filteredThing;
      });

    // Check if there is an item to be updated
    if (singleThing != null) {
      console.log("Is in Cart");
      console.log(singleThing);
      // Compute the total of going to buy and the one in cart
      let sum = Number(singleThing.quantity) + Number(quantity);
      // If over than 5 then cant allow
      if (sum > 5) {
        alert(
          "Sorry we cannot give you " +
            quantity +
            " since we make 5 of the same pastry per day\nYou currently have " +
            singleThing.quantity +
            " " +
            singleThing.title
        );
        return true;
      }
      // If not over then add in cart
      else {
        // Update the item in the DB
        const data = { imageURL, title, price, quantity: sum };
        fetch("http://localhost:8000/cart/" + singleThing.id, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
    }
    // Not in cart then Add to cart DB
    else {
      console.log("Not Added In Cart Yet");
      // Place on the cart DB
      const data = { imageURL, title, price, quantity };
      // console.log(data);
      fetch("http://localhost:8000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    return false;
  };

  // Simulating Adding
  const handleOrder = (imageURL, title, price, quantity) => {
    setOrder(false);
    setTimeout(() => {
      handleDB(imageURL, title, price, quantity);
      console.log("Add to Cart");
      setQuantity(0);
      setOrder(true);
    }, 1000);
  };

  // Simulating Buy
  const handleBuyNow = (imageURL, title, price, quantity) => {
    setBuyNow(false);
    setTimeout(() => {
      let overSum = handleDB(imageURL, title, price, quantity);
      setBuyNow(true);
      console.log(overSum);
      // If more than 5 then no redirect
      if (overSum) {
        console.log("Too Much Orders");
        setQuantity(0);
      }
      // Less than 5 redirect to orders page
      else {
        console.log("Redirecting to Orders");
        history.push("/order");
      }
    }, 1000);
  };

  return (
    <Container className="product-container">
      {item && (
        <Card className="product-card">
          <Card.Body>
            <h5 className="product-title">{item.title}</h5>
            <Row>
              <Col sm={4} className="product-image-col">
                {/* IMAGE */}
                <Image
                  src={require("../../Assets/Image" + item.imageURL).default}
                  alt={item.imageURL}
                  fluid
                  width="300px"
                  className="product-image"
                />
              </Col>
              <Col sm={8} className="product-details">
                {/* DESCRIPTION */}
                <Row>
                  <Col>
                    <h6>Description:</h6>
                    <div>{item.desc}</div>
                  </Col>
                </Row>
                {/* PRICE */}
                <Row className="product-price-quantity">
                  <Col>
                    <Row>
                      <Col sm={5} lg={3}>
                        <h6>Price: </h6>
                      </Col>
                      <Col>
                        <h6 style={{ color: "#ed474a" }}>₱{item.price}</h6>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                {/* QUANTITY */}
                <Row>
                  <Col sm={5} lg={3} style={{ placeSelf: "center" }}>
                    <h6 style={{ marginBottom: "0px" }}>Quantity: </h6>
                  </Col>
                  <Col sm={5}>
                    <Form.Control
                      as="select"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      <option></option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                  </Col>
                </Row>
                {/* BUTTONS */}
                <Row className="product-button">
                  <Col sm={6}>
                    {!quantity && (
                      <Button variant="success" block disabled>
                        Add To Order
                      </Button>
                    )}
                    {order && quantity > 0 && (
                      <Button
                        variant="success"
                        block
                        onClick={() =>
                          handleOrder(
                            item.imageURL,
                            item.title,
                            item.price,
                            quantity
                          )
                        }
                      >
                        Add To Order
                      </Button>
                    )}
                    {!order && (
                      <Button variant="success" block disabled>
                        Adding...
                      </Button>
                    )}
                  </Col>

                  <Col sm={6}>
                    {!quantity && (
                      <Button variant="primary" block disabled>
                        Buy Now
                      </Button>
                    )}
                    {buyNow && quantity > 0 && (
                      <Button
                        variant="primary"
                        block
                        onClick={() =>
                          handleBuyNow(
                            item.imageURL,
                            item.title,
                            item.price,
                            quantity
                          )
                        }
                      >
                        Buy Now
                      </Button>
                    )}
                    {!buyNow && (
                      <Button variant="primary" block disabled>
                        Routing to Cart....
                      </Button>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
      {/* <RandomProduct /> */}
    </Container>
  );
};

export default Product;
