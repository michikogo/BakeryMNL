import { useState } from "react";
import { useHistory } from "react-router";
import "../index.css";
import { Form, Col, Button, Modal, Row } from "react-bootstrap";

const Deliver = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [note, setNote] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const delivery = {
      firstName,
      lastName,
      mobileNumber,
      email,
      city,
      zipCode,
      note,
    };
    // console.log(delivery);
    setIsPending(true);
    fetch("http://localhost:8000/delivery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(delivery),
    });
  };

  const handleClose = () => {
    // Close Modal
    setShow(false);
    // Button enabled
    setIsPending(false);
    // Clear Form
    setFirstName("");
    setLastName("");
    setMobileNumber("");
    setEmail("");
    setCity("");
    setZipCode("");
    setNote("");
    // Go back home
    history.push("/");
  };
  const handleShow = () => setShow(true);

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="title-padding-bottom">ORDER FOR DELIVERY</h3>

      <h5 className="details-padding-top">Contact Details</h5>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control
            type="text"
            placeholder="First Name"
            require
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="text"
            placeholder="Last Name"
            require
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control
            type="text"
            placeholder="Mobile Number"
            require
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Control
            type="email"
            placeholder="Email (Optional)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      <h5 className="details-padding-top">Delivery Address</h5>

      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Address
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            require
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="2">
          City
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="select"
            require
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option></option>
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
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Zip Code
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="number"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </Col>
      </Form.Group>

      <h5 className="details-padding-top">Add a note to your order</h5>
      <Form.Row>
        <Form.Group as={Col}>
          <Form.Control
            as="textarea"
            rows="4"
            require
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </Form.Group>
      </Form.Row>

      {!isPending && (
        <Button variant="primary" type="submit" onClick={handleShow} block>
          CHECKOUT
        </Button>
      )}
      {isPending && (
        <div>
          <Button variant="primary" type="submit" block disabled>
            Processing Payment
          </Button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            size="lg"
          >
            <Modal.Header>
              <Modal.Title>Processing Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Thank You {firstName} for ordering from BakeryMNL! <br />
              We will inform you when your item has been shipped.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </Form>
  );
};

export default Deliver;
