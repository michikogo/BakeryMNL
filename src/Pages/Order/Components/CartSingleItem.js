import { Table, Row, Col, Image, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const CartSingleItem = ({ data }) => {
  const [totalSingle, setTotalSingle] = useState(null);

  useEffect(() => {
    setTotalSingle(data.quantity * data.price);
  }, []);

  return (
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
        <div>P{data.price}</div>
      </td>
      <td className="order-verticalAlign order-quantity">
        {/* <Row>
                  <Col>
                    <Form>
                      <Form.Control type="text" value={data.quantity} />
                    </Form>
                  </Col>
                </Row> */}
        <div>{data.quantity}</div>
      </td>
      <td className="order-verticalAlign">
        <div>P{totalSingle}</div>
      </td>
    </tr>
  );
};

export default CartSingleItem;
