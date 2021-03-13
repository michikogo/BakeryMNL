import { useState, useEffect } from "react";

import "./index.css";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";

const Bakery = () => {
  const { Meta } = Card;
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
    <div className="site-card-wrapper">
      <h1>Bakery Page</h1>
      <Row style={{ placeContent: "center" }}>
        {products &&
          products.map((product) => (
            <Col sm={5}>
              <Card
                hoverable
                style={{
                  width: 240,
                  borderRadius: "8px",
                  marginBottom: "20px",
                }}
                cover={
                  <img
                    src={
                      require("../../Assets/Image" + product.imageURL).default
                    }
                    style={{
                      width: "240px",
                      height: "240px",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <Meta title={product.title} description={product.price} />
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Bakery;
