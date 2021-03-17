import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";

const CartSingleItem = ({ data, computeTotal }) => {
  const [totalSingle, setTotalSingle] = useState(null);

  useEffect(() => {
    setTotalSingle(data.quantity * data.price);

    // Function is in CardList.js
    computeTotal(data.quantity * data.price);
  }, []);

  return (
    <tr className="order-textAlign">
      {/* IMAGE */}
      <td className="order-verticalAlign">
        <Image
          src={require("../../../Assets/Image" + data.imageURL).default}
          className="order-image"
        />
      </td>
      {/* TITLE */}
      <td className="order-verticalAlign">
        <div className="order-fontWeight">{data.title}</div>
      </td>
      {/* PRICE */}
      <td className="order-verticalAlign">
        <div>₱{data.price}</div>
      </td>
      {/* QUANTITY */}
      <td className="order-verticalAlign order-quantity">
        <div>{data.quantity}</div>
      </td>
      {/* TOTAL */}
      <td className="order-verticalAlign">
        <div>₱{totalSingle}</div>
      </td>
    </tr>
  );
};

export default CartSingleItem;
