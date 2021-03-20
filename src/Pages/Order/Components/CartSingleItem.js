import { Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const CartSingleItem = ({ data, computeTotal }) => {
  const history = useHistory();
  const [totalSingle, setTotalSingle] = useState(null);

  useEffect(() => {
    setTotalSingle(data.quantity * data.price);

    // Function is in CardList.js
    computeTotal(data.quantity * data.price);
  }, []);

  const handleRemove = () => {
    console.log(data);
    fetch("http://localhost:8000/cart/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.go(0);
      window.scrollTo(0, 0);
    });
  };
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
        <div className="order-fontWeight">
          <span className="order-remove" onClick={handleRemove}>
            Remove
          </span>
        </div>
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
