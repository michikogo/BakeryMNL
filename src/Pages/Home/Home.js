import "./index.css";
import { useState, useEffect } from "react";
import {
  Spinner,
  Container,
  Carousel,
  CardDeck,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { promo1, promo2, promo3 } from "../../Assets";
import { Link } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Tab title
    document.title = "BakeryMNL | Home";

    fetch("http://localhost:8000/products")
      .then((res) => {
        if (!res.ok) {
          throw Error("Cannot Fetch Data");
        }
        return res.json();
      })
      .then((data) => {
        setItems(data);
        setIsLoading(false);
        setIsError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(err.message);
      });
  }, []);

  const imageData = [promo1, promo2, promo3];
  return (
    <Container>
      {/* Header */}
      <h3 className="home-header">Welcome to BakeryMNL!</h3>
      {/* POSTERS */}
      <Row>
        <Col>
          <Carousel fade>
            {imageData.map((data, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 home-posters"
                  src={data}
                  alt="promo"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      {/* PRODUCTS */}
      <h6 className="home-pastrie-day">Pastrie of the Day:</h6>
      {isError && <h6 className="home-fetching">{isError}</h6>}
      {isLoading && (
        <h6 className="home-fetching">
          <Spinner animation="border" role="status" />
        </h6>
      )}
      <CardDeck className="home-deck">
        {items &&
          items.slice(0, 3).map((product) => (
            <Card key={product.id} className="home-card">
              {/* IMAGE */}
              <Link to={`/bakery/${product.id}`}>
                <Card.Img
                  variant="top"
                  src={require("../../Assets/Image" + product.imageURL).default}
                  alt="image"
                  className="home-image"
                />
              </Link>
              {/* TITLE */}
              <Card.Body>
                <Link className="home-title" to={`/bakery/${product.id}`}>
                  <Card.Title>{product.title}</Card.Title>
                </Link>
              </Card.Body>
              {/* PRICE */}
              <Card.Footer>
                <Link className="home-card-price" to={`/bakery/${product.id}`}>
                  Price: ₱{product.price}
                </Link>
              </Card.Footer>
              {/* LINK */}
              <Card.Footer>
                <Link className="home-card-order" to={`/bakery/${product.id}`}>
                  Order Now!
                </Link>
              </Card.Footer>
            </Card>
          ))}
      </CardDeck>
    </Container>
  );
};

export default Home;
