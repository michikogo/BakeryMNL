import "./index.css";
import { Form, Col, Button } from "react-bootstrap";

const Deliver = () => {
  return (
    <Form>
      <h3 className="title-padding-bottom">ORDER FOR DELIVERY</h3>

      <h5 className="details-padding-top">Contact Details</h5>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="number" placeholder="Mobile Number" />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control type="email" placeholder="Email (Optional)" />
        </Form.Group>
      </Form.Row>

      <h5 className="details-padding-top">Delivery Address</h5>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="text" placeholder="City/Municipality" />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control as="select" placeholder="Region">
            <option>Manila</option>
            <option>Mandaluyong</option>
            <option>San Juan</option>
            <option>Valenzuela</option>
            <option>Quezon City</option>
            <option>Marikina</option>
            <option>Pasig</option>
            <option>Taguig</option>
            <option>Makati</option>
            <option>Pasay</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control type="number" placeholder="Zip Code" />
        </Form.Group>
      </Form.Row>

      <h5 className="details-padding-top">Add a note to your order</h5>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit" block>
        CHECKOUT
      </Button>
    </Form>
  );
};

export default Deliver;
