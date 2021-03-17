import { useState, useEffect } from "react";
import { useParams } from "react-router";

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
  const [item, setItem] = useState(null);
  const [order, setOrder] = useState(true);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/products/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data);
        console.log(item);
      });
  }, []);

  // Simulating Adding
  const handleOrder = (imageURL, title, price, quantity) => {
    setOrder(false);
    setTimeout(() => {
      const data = { imageURL, title, price, quantity };
      console.log(data);
      fetch("http://localhost:8000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => {
        console.log("Add to Cart");
        setQuantity(0);
        setOrder(true);
      });
    }, 1000);
  };

  return (
    <Container className="product-container">
      {item && (
        <Card className="product-card">
          <Card.Body>
            <h5 className="product-title">{item.title}</h5>
            <Row>
              <Col sm={4}>
                {/* IMAGE */}
                <Image
                  src={require("../../Assets/Image" + item.imageURL).default}
                  alt={item.imageURL}
                  fluid
                  width="300px"
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
                      <Col sm={3}>
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
                  <Col sm={3} style={{ placeSelf: "center" }}>
                    <h6 style={{ marginBottom: "0px" }}>Quantity: </h6>
                  </Col>
                  <Col sm={2}>
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
                    {order && (
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
                    <Button variant="primary" block>
                      Buy Now
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default Product;
