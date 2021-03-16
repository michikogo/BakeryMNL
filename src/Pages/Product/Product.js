import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import "./index.css";
const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

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

  return (
    <Container style={{ padding: "0vh 30px" }}>
      {item && (
        <Card style={{ padding: "30px" }}>
          <Card.Body>
            <h5 style={{ textAlign: "center", paddingBottom: "30px" }}>
              {item.title}
            </h5>
            <Row>
              <Col sm={4} style={{ textAlign: "right" }}>
                <Image
                  src={require("../../Assets/Image" + item.imageURL).default}
                  alt={item.imageURL}
                  fluid
                  width="300px"
                />
              </Col>
              <Col sm={8} style={{ paddingLeft: "30px", alignSelf: "center" }}>
                <Row>
                  <Col>
                    <h6>Description:</h6>
                    <div>{item.desc}</div>
                  </Col>
                </Row>
                <Row style={{ paddingTop: "20px" }}>
                  <Col>
                    <h6>Price: ₱{item.price}</h6>
                  </Col>
                  <Col>
                    <h6>Quantity: </h6>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center", paddingTop: "20px" }}>
                  <Col sm={6}>
                    <Button variant="success" block>
                      Add To Order
                    </Button>
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
