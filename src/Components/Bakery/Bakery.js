import { useState, useEffect } from "react";

import "./index.css";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";

const Bakery = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        console.log("Data:", products);
        setProducts(products);
        console.log(products);
      });
  }, []);

  return (
    <Container fluid>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Bakery</h1>
      <CardDeck style={{ placeContent: "center", textAlign: "-webkit-center" }}>
        {products &&
          products.map((product) => (
            // <Row>
            //   <Col mds={3}>
            <Card
              key={product.id}
              style={{
                minWidth: "15rem",
                maxWidth: "15rem",
                marginBottom: "25px",
              }}
            >
              <Card.Img
                variant="top"
                src={require("../../Assets/Image" + product.imageURL).default}
                style={{
                  height: "252.4px",
                  objectFit: "cover",
                }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ color: "coral" }}>
                  {product.price}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Order Now!</small>
              </Card.Footer>
            </Card>
            //   </Col>
            // </Row>
          ))}
      </CardDeck>
    </Container>
  );
};

export default Bakery;
