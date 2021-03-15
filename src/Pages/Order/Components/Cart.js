import "../index.css";
import { Table, Row, Col, Image, Form } from "react-bootstrap";

const Cart = ({ cart }) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Product</th>
          <th></th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {/* GET CONTENTS FROM DB */}
        {cart !== 0 ? (
          cart.map((data) => (
            <tr className="order-textAlign">
              <td className="order-verticalAlign">
                <Image
                  src={require("../../../Assets/Image" + data.imageURL).default}
                  className="order-image"
                />
              </td>
              <td className="order-verticalAlign">
                <div className="order-fontWeight">{data.title}</div>
              </td>
              <td className="order-verticalAlign">
                <div>{data.price}</div>
              </td>
              <td className="order-verticalAlign order-quantity">
                <Row>
                  <Col>
                    <Form.Control type="text" placeholder={data.quantity} />
                  </Col>
                </Row>
              </td>
              <td className="order-verticalAlign">
                <div>{data.price}</div>
              </td>
            </tr>
          ))
        ) : (
          // NO ITEMS IN DB
          <tr className="order-textAlign">
            <td colSpan="5" className="order-empty">
              Cart is Empty
            </td>
          </tr>
        )}
        <tr className="order-textAlign">
          <td colSpan="4" className="order-total">
            Total
          </td>
          <td className="order-verticalAlign">P250</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Cart;
