import { useState } from "react";
import { useHistory } from "react-router";

import "../index.css";
import { Form, Col, Button, Modal } from "react-bootstrap";

const PickUp = ({ handleBought, cartLength }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pickupData = {
      firstName,
      lastName,
      mobileNumber,
      email,
      city,
      date,
      time,
      note,
    };
    // console.log(pickupData);
    setIsPending(true);
    fetch("http://localhost:8000/pickup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pickupData),
    });
  };

  // console.log("cartLength=" + cartLength);

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
    setDate("");
    setTime("");
    setNote("");
    handleBought();
    // Go back home
    history.push("/");
  };

  const handleShow = () => setShow(true);

  return (
    <div>
      <h3 className="title-padding-bottom">ORDER FOR PICKUP</h3>

      <Form onSubmit={handleSubmit}>
        <h5 className="details-padding-top">Contact Details</h5>
        <Form.Row>
          {/* FIRST NAME */}
          <Form.Group as={Col} column sm="12" md="6">
            <Form.Control
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          {/* LAST NAME */}
          <Form.Group as={Col} column sm="12" md="6">
            <Form.Control
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {/* MOBILE NUMBER */}
          <Form.Group as={Col} column sm="12" md="6">
            <Form.Control
              type="text"
              placeholder="Mobile Number"
              required
              value={mobileNumber}
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setMobileNumber(e.target.value);
                }
              }}
            />
          </Form.Group>
          {/* EMAIL */}
          <Form.Group as={Col} column sm="12" md="6">
            <Form.Control
              type="email"
              placeholder="Email (Optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          {/* CITY */}
          <Form.Group as={Col}>
            <h5>Where do you like to pickup your order?</h5>
            <Form.Control
              as="select"
              required
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
          </Form.Group>
        </Form.Row>
        <h5 className="details-padding-top">Select Date and Time</h5>
        <Form.Row>
          {/* DATE */}
          <Form.Group as={Col}>
            <Form.Control
              as="select"
              placeholder="Date"
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              <option></option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
            </Form.Control>
          </Form.Group>
          {/* TIME */}
          <Form.Group as={Col}>
            <Form.Control
              as="select"
              placeholder="Time"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option></option>
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
          {/* NOTE */}
          <Form.Group as={Col}>
            <Form.Control
              as="textarea"
              rows="3"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        {/* DISABLE BUTTON WHEN EMPTY CART */}
        {!cartLength && (
          <div>
            <Button variant="primary" type="submit" block disabled>
              Add Orders in Cart
            </Button>
          </div>
        )}
        {/* ENABLE BUTTON WHEN THERE ARE ITEMS */}
        {!isPending && cartLength !== 0 && (
          <Button variant="primary" type="submit" onClick={handleShow} block>
            CHECKOUT
          </Button>
        )}
        {/* DISABLE WHEN PROCESSING */}
        {isPending && cartLength && (
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
                Thank You <b>{firstName}</b> for ordering from BakeryMNL! <br />
                We will inform you in text when your item has been shipped.{" "}
                <br />
                Click <b>Confirm Payment</b> for the items to be processed.
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

export default PickUp;
