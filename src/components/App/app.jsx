import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ShoppingCard from "../shoppingCard/shoppingCard";
import Navbar from "../navbar/navabr";
import Home from "../home";
import About from "../about";
import Contact from "../contact";
import ProductDetails from "../productDetails";
import NotFound from "../notFound";
import Login from "../login";
import axios from "axios";
import Admin from "../admin";
import ProductForm from "../productForm";
import { toast, ToastContainer } from "react-toastify";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  // component did mount
  async componentDidMount() {
    const url = "http://localhost:3000/products";
    const { data: products } = await axios.get(url);
    this.setState({ products });
  }

  // inc function
  inc = (id) => {
    let products = this.state.products.map((product) => {
      if (product.id === id) {
        product.count += 1;
      }
      return product;
    });

    this.setState({ products });
  };

  // Add or remove from cart Function
  addToCartToggle = (id) => {
    let products = this.state.products.map((product) => {
      if (product.id === id) {
        product.inCart ? (product.count = 0) : (product.count = 1);
        product.inCart = !product.inCart;
      }
      return product;
    });

    this.setState({ products });
  };

  // dec function
  dec = (id) => {
    let products = this.state.products.map((product) => {
      if (product.id === id) {
        if (product.count > 1) product.count -= 1;
      }
      return product;
    });

    this.setState({ products });
  };

  // delete product
  deleteProduct = (id) => {
    let products = this.state.products.map((product) => {
      if (product.id === id) {
        product.inCart = false;
        product.count = 0;
      }
      return product;
    });
    this.setState({ products });
  };

  // deleteProductAsAdmin
  deleteProductAsAdmin = async (id) => {
    // get the original data for optimistic update
    let oldProducts = [...this.state.products];

    // clone
    let products = [...this.state.products];

    // edit
    products = products.filter((product) => {
      return product.id !== id;
    });

    // set state
    this.setState({ products });

    try {
      // call backend
      await axios.delete(`http://localhost:3000/products/${id}`);
      toast.success("Deleted Successfully!");
    } catch (e) {
      toast.error("can't delete this product!");
      this.setState({ products: oldProducts });
    }
  };

  // reset values
  reset = () => {
    let products = this.state.products.map((product) => {
      product.count = 1;
      return product;
    });

    this.setState({ products });
  };

  // get number of products
  numberOfProducts = () => {
    return this.state.products.filter((product) => product.count !== 0).length;
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Navbar numberOfProducts={this.numberOfProducts} />
        <div className="container">
          <Switch>
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  products={this.state.products}
                  addToCartToggle={this.addToCartToggle}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCard
                  products={this.state.products}
                  incHandler={this.inc}
                  decHandler={this.dec}
                  deleteHandler={this.deleteProduct}
                  resetHandler={this.reset}
                  {...props}
                />
              )}
            />
            <Route path="/notfound" component={NotFound} />
            <Route
              path="/product/:id"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route path="/login" component={Login} />
            <Route
              path="/admin"
              render={(props) => (
                <Admin
                  {...props}
                  products={this.state.products}
                  deleteProductById={this.deleteProductAsAdmin}
                />
              )}
            />
            <Route
              path="/productForm/:id"
              render={(props) => (
                <ProductForm {...props} products={this.state.products} />
              )}
            />
            <Redirect from="/" exact to="/home" />

            <Redirect to="/notfound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
