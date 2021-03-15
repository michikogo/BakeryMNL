import "../index.css";
import { Table, Row, Col, Image, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CartSingleItem from "./CartSingleItem";

const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);

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
          cart.map((data) => <CartSingleItem data={data} />)
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
          <td className="order-verticalAlign">P{total}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Cart;
