import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  // get style class for counter badge
  const getClass = () => {
    return props.product.count === 0
      ? "badge bg-warning m-2"
      : "badge bg-primary m-2";
  };

  // get disabled style class for dec button
  const getAdaptiveDisabled = (_) => {
    return props.product.count === 0 ? "disabled" : "";
  };

  return (
    <div className="row">
      <div className="col-2">
        <span style={{ color: "red" }}>
          <Link to={`/product/${props.product.id}`}>{props.product.name}</Link>
        </span>
      </div>

      <div className="col-10">
        <span className={getClass()}>{props.product.count}</span>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={() => props.incCount(props.product.id)}
        >
          +
        </button>
        <button
          className={`btn btn-danger btn-sm m-2 ${getAdaptiveDisabled()}`}
          onClick={() => props.decCount(props.product.id)}
        >
          -
        </button>
        <i
          className="fas fa-trash fa-x m-2"
          onClick={() => props.deleteProduct(props.product.id)}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
};

export default Product;
