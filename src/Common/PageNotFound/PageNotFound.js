import "./index.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { baking } from "../../Assets";

const PageNotFound = () => {
  return (
    <Container>
      <Image alt="baking" src={baking} className="notfound-background" />
      <Row>
        <Col>
          <h1 style={{ textAlign: "center", verticalAlign: "middle" }}>
            Page Not Found
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
