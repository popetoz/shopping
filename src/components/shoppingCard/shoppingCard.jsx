import React from "react";
import Product from "../product/product";

const ShoppingCard = (props) => {
  let { products, resetHandler, incHandler, deleteHandler, decHandler } = props;

  products = products.slice().filter((p) => {
    return p.inCart;
  });

  return (
    <div className="Shopping Card container">
      <h1>Your shopping card</h1>
      <button className="btn btn-secondary btn-lg mb-2" onClick={resetHandler}>
        reset
      </button>

      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          incCount={incHandler}
          decCount={decHandler}
          deleteProduct={deleteHandler}
        />
      ))}
    </div>
  );
};

export default ShoppingCard;
