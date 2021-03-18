import { useState, useEffect } from "react";

import "./index.css";
import { Container, Card, CardDeck, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Bakery = () => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Fetch items in products DB
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
      <h3 className="bakery-title">Whats Baking?</h3>
      {/* useEffect Function */}
      {error && <h6 className="bakery-fetching">{error}</h6>}
      {isPending && (
        <h6 className="bakery-fetching">
          <Spinner animation="border" role="status" />
        </h6>
      )}
      {/* CONTENT */}
      <CardDeck className="bakery-deck">
        {products &&
          products.map((product) => (
            <Card key={product.id} className="bakery-card">
              {/* IMAGE */}
              <Link to={`/bakery/${product.id}`}>
                <Card.Img
                  variant="top"
                  src={require("../../Assets/Image" + product.imageURL).default}
                  className="bakery-card-image"
                />
              </Link>
              {/* TITLE */}
              <Card.Body>
                <Link
                  className="bakery-card-title"
                  to={`/bakery/${product.id}`}
                >
                  <Card.Title>{product.title}</Card.Title>
                </Link>
              </Card.Body>
              {/* PRICE */}
              <Card.Footer>
                <Link
                  className="bakery-card-price"
                  to={`/bakery/${product.id}`}
                >
                  Price: ₱{product.price}
                </Link>
              </Card.Footer>
              {/* LINK */}
              <Card.Footer>
                <Link
                  className="bakery-card-order"
                  to={`/bakery/${product.id}`}
                >
                  Order Now!
                </Link>
              </Card.Footer>
            </Card>
          ))}
      </CardDeck>
    </Container>
  );
};

export default Bakery;
