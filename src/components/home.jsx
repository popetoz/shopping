import React, { Component } from "react";
import Item from "./element";
class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Home page</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">In Cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <Item
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  count={product.count}
                  addToCartToggle={this.props.addToCartToggle}
                  inCart={product.inCart}
                  key={product.id}
                />
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Home;
