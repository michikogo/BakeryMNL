import "../index.css";
import { Table } from "react-bootstrap";
import { useState } from "react";
import CartSingleItem from "./CartSingleItem";

const Cart = ({ cart }) => {
  let amount = 0;
  const [total, setTotal] = useState(0);

  const computeTotal = (price) => {
    amount = amount + price;
    setTotal(amount);
  };
  // console.log(cart);
  return (
    <Table responsive>
      <thead>
        {/* HEADER */}
        <tr>
          <th>Product</th>
          <th></th>
          <th className="order-table-textAlign">Price</th>
          <th className="order-table-textAlign">Quantity</th>
          <th className="order-table-textAlign">Total</th>
        </tr>
      </thead>
      <tbody>
        {/* GET CONTENTS FROM DB */}
        {cart.length !== 0 ? (
          cart.map((data) => (
            // Reference the function to child
            <CartSingleItem
              key={data.id}
              data={data}
              computeTotal={computeTotal}
            />
          ))
        ) : (
          // NO ITEMS IN DB
          <tr className="order-textAlign">
            <td colSpan="5" className="order-empty">
              Cart is Empty
            </td>
          </tr>
        )}
        {/* SHOW TOTAL */}
        <tr className="order-textAlign">
          <td colSpan="4" className="order-total">
            Total
          </td>
          <td className="order-verticalAlign">₱{total}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Cart;
