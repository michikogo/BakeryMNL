import "./index.css";
import { useState, useEffect } from "react";
import { Container, Carousel, CardDeck, Card } from "react-bootstrap";
import { promo1, promo2, promo3 } from "../../Assets";
import { Link } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    // Tab title
    document.title = "BakeryMNL | Home";

    fetch("http://localhost:8000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  const imageData = [promo1, promo2, promo3];
  return (
    <Container>
      {/* Header */}
      <h3 className="home-header">Welcome to BakeryMNL!</h3>
      {/* POSTERS */}
      <Carousel fade>
        {imageData.map((data) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={data}
              alt="promo"
              className="home-posters"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* PRODUCTS */}
      <CardDeck className="home-deck" style={{ paddingTop: "30px" }}>
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
