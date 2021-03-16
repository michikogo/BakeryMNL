import { useState, useEffect } from "react";
import { useParams } from "react-router";

import "./index.css";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [order, setOrder] = useState(true);

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
  const handleOrder = () => {
    setOrder(false);
    setTimeout(() => {
      setOrder(true);
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
                <Image
                  src={require("../../Assets/Image" + item.imageURL).default}
                  alt={item.imageURL}
                  fluid
                  width="300px"
                />
              </Col>
              <Col sm={8} className="product-details">
                <Row>
                  <Col>
                    <h6>Description:</h6>
                    <div>{item.desc}</div>
                  </Col>
                </Row>
                <Row className="product-price-quantity">
                  <Col>
                    <h6>Quantity: </h6>
                  </Col>
                  <Col>
                    <h6>Price: ₱{item.price}</h6>
                  </Col>
                </Row>
                <Row className="product-button">
                  <Col sm={6}>
                    {order && (
                      <Button variant="success" block onClick={handleOrder}>
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
