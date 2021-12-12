import React from "react";
const Item = (props) => {
  let cartColor = props.inCart ? "blue" : "gray";
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>
        <i
          className={`fas fa-cart-plus fa-2x `}
          onClick={() => props.addToCartToggle(props.id)}
          style={{ cursor: "pointer", color: `${cartColor}` }}
        ></i>
      </td>
    </tr>
  );
};

export default Item;
