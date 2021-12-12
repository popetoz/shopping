import React from "react";
import { Redirect } from "react-router-dom";
import qs from "query-string";

class ProductDeatails extends React.Component {
  saveHandler = () => {
    return this.props.history.replace("/cart");
  };

  render() {
    let productId = this.props.match.params.id;
    let product = this.props.products.filter(
      (p) => p.id === parseInt(productId)
    )[0];

    if (!product) {
      return <Redirect to="/notfound" />;
    }

    console.log(qs.parse(this.props.location.search));

    return (
      <React.Fragment>
        <h1>Some Details</h1>
        <h2>Produc Id: {product.id}</h2>
        <h2>Produc Name: {product.name}</h2>
        <h2>Produc Count: {product.count}</h2>
        <button className="btn btn-primary" onClick={this.saveHandler}>
          Save
        </button>
      </React.Fragment>
    );
  }
}

export default ProductDeatails;
