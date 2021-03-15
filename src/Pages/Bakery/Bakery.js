import { useState, useEffect } from "react";

import "./index.css";
import { Container, Card, CardDeck, Spinner } from "react-bootstrap";

const Bakery = () => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => {
        if (!res.ok) {
          throw Error("Cannot Fetch Data");
        }
        return res.json();
      })
      .then((products) => {
        setProducts(products);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
        console.log(err);
      });
  }, []);

  return (
    <Container fluid>
      <h3 style={{ textAlign: "center", marginBottom: "45px" }}>
        Whats Baking?
      </h3>
      {error && (
        <h6 style={{ textAlign: "center", marginBottom: "25px" }}>{error}</h6>
      )}
      {isPending && (
        <h6 style={{ textAlign: "center", marginBottom: "25px" }}>
          <Spinner animation="border" role="status" />
        </h6>
      )}
      <CardDeck style={{ placeContent: "center", textAlign: "-webkit-center" }}>
        {products &&
          products.map((product) => (
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
                  Price: ₱{product.price}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Order Now!</small>
              </Card.Footer>
            </Card>
          ))}
      </CardDeck>
    </Container>
  );
};

export default Bakery;
