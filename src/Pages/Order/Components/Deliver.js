import { useState } from "react";
import { useHistory } from "react-router";
import "../index.css";
import { Form, Col, Button, Modal, Row } from "react-bootstrap";

const Deliver = ({ handleBought, cartLength }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [note, setNote] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Array placed in db
    const delivery = {
      firstName,
      lastName,
      mobileNumber,
      email,
      city,
      zipCode,
      note,
    };
    // Buttion is enabled
    setIsDisabled(true);
    // Place in db
    fetch("http://localhost:8000/delivery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(delivery),
    });
  };

  // CLOSE MODAL
  const handleClose = () => {
    // Close Modal
    setShow(false);
    // Button enabled
    setIsDisabled(false);
    // Clear Form
    setFirstName("");
    setLastName("");
    setMobileNumber("");
    setEmail("");
    setCity("");
    setZipCode("");
    setNote("");
    handleBought();
    // Go back home
    history.push("/");
  };

  // SHOW MODAL
  const handleShow = () => setShow(true);

  return (
    <div>
      <h3 className="title-padding-bottom">ORDER FOR DELIVERY</h3>

      <Form onSubmit={handleSubmit}>
        <h5 className="details-padding-top">Contact Details</h5>
        <Form.Row>
          {/* FIRST NAME */}
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="First Name"
              require
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          {/* LAST NAME */}
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Last Name"
              // require
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {/* MOBILE NUMBER */}
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              // require
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Group>
          {/* EMAIL */}
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
        {/* ADDRESS */}
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            Address
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="text"
              // require
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
        </Form.Group>
        {/* CITY */}
        <Form.Group as={Row}>
          <Form.Label column sm="2">
            City
          </Form.Label>
          <Col sm="10">
            <Form.Control
              as="select"
              // require
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
        {/* ZIP CODE */}
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
          {/* NOTE */}
          <Form.Group as={Col}>
            <Form.Control
              as="textarea"
              rows="4"
              // require
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Form.Group>
        </Form.Row>

        {/* DISABLE EMPTY CART */}
        {!cartLength && (
          <div>
            <Button variant="primary" type="submit" block disabled>
              Add Orders in Cart
            </Button>
          </div>
        )}
        {/* ENABLE CHECKOUT */}
        {cartLength !== 0 && !isDisabled && (
          <Button variant="primary" type="submit" onClick={handleShow} block>
            CHECKOUT
          </Button>
        )}
        {/* DISABLE CHECKOUT PROCESSING */}
        {cartLength !== 0 && isDisabled && (
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
                <Button variant="success" onClick={handleClose}>
                  Confirm Payment
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}
      </Form>
    </div>
  );
};

export default Deliver;
