import { useEffect, useState } from "react";
import { CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const RandomProduct = ({ refreshPage }) => {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    console.log(counter);
    let randomItem = Math.ceil(1 + Math.random() * (22 - 1));
    console.log(randomItem);
    if (counter < 3) {
      fetch("http://localhost:8000/products/" + randomItem)
        .then((res) => {
          return res.json();
        })
        .then((item) => {
          setProduct((product) => [...product, item]);
        });
      setCounter(counter + 1);
    }
  }, [counter]);

  // const refreshPage = (id) => {
  //   history.push(`/bakery/${id}`);
  // };
  // console.log(product);

  return (
    <div style={{ paddingTop: "30px" }}>
      <CardDeck className="random-product-deck">
        {product &&
          product.map((product) => (
            <Card key={product.id} className="random-product-card">
              {/* IMAGE */}
              <Link to={`/bakery/${product.id}`}>
                <Card.Img
                  variant="top"
                  src={
                    require("../../../Assets/Image" + product.imageURL).default
                  }
                  alt="image"
                  className="random-product-image"
                  onClick={() => refreshPage(product.id)}
                />
              </Link>
              {/* TITLE */}
              <Card.Body>
                <Link
                  className="random-product-title"
                  to={`/bakery/${product.id}`}
                >
                  <Card.Title>{product.title}</Card.Title>
                </Link>
              </Card.Body>
              {/* PRICE */}
              <Card.Footer>
                <Link
                  className="random-product-card-price"
                  to={`/bakery/${product.id}`}
                >
                  Price: ₱{product.price}
                </Link>
              </Card.Footer>
              {/* LINK */}
              <Card.Footer>
                <Link
                  className="random-product-card-order"
                  to={`/bakery/${product.id}`}
                  onClick={refreshPage}
                >
                  Order Now!
                </Link>
              </Card.Footer>
            </Card>
          ))}
      </CardDeck>
    </div>
  );
};

export default RandomProduct;
