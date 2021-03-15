import { useState, useEffect } from "react";

import "./index.css";
import { Container, Card, CardDeck } from "react-bootstrap";

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
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Bakery</h1>
      {error && (
        <h5 style={{ textAlign: "center", marginBottom: "25px" }}>{error}</h5>
      )}
      {isPending && (
        <h5 style={{ textAlign: "center", marginBottom: "25px" }}>
          Loading...
        </h5>
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
                  {product.price}
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
