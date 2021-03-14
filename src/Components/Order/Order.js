import { Container, Nav, Form, Col, Button } from "react-bootstrap";

const Order = () => {
  return (
    <Container fluid="md">
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Order Page</h1>
      <Nav fill variant="tabs" defaultActiveKey="pickup">
        <Nav.Item>
          <Nav.Link eventKey="pickup">Store Pickup</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="delivery">Delivery</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Place Phone Number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Place Email" />
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={3}>
            <Form.Group>
              <Form.Label>Mode of Claim</Form.Label>
              <Form.Control as="select">
                <option>Store Pickup</option>
                <option>Delivery</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Branch</Form.Label>
              <Form.Control as="select">
                <option>America</option>
                <option>Japan</option>
                <option>Philippines</option>
                <option>Singapore</option>
                <option>Hong Kong</option>
                <option>Italy</option>
                <option>France</option>
                <option>Ireland</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col>
            <Form.Group>
              <Form.Label>Delivery</Form.Label>
              <Form.Control as="select">
                <option>America</option>
                <option>Japan</option>
                <option>Philippines</option>
                <option>Singapore</option>
                <option>Hong Kong</option>
                <option>Italy</option>
                <option>France</option>
                <option>Ireland</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
    </Container>
  );
};

export default Order;
