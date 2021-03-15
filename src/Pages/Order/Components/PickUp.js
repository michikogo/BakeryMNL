import "../index.css";
import { Form, Col, Button } from "react-bootstrap";

const PickUp = () => {
  return (
    <Form>
      <h3 className="title-padding-bottom">ORDER FOR PICKUP</h3>

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

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Label>Where do you like to pickup your order?</Form.Label>
          <Form.Control as="select" multiple>
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

      <h4 className="details-padding-top">Select Date and Time</h4>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control as="select" placeholder="Date">
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control as="select" placeholder="Time">
            <option>11:00</option>
            <option>12:00</option>
            <option>1:00</option>
            <option>2:00</option>
            <option>3:00</option>
            <option>4:00</option>
            <option>5:00</option>
          </Form.Control>
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

export default PickUp;
