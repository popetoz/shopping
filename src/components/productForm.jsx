import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

class ProductForm extends React.Component {
  state = {
    name: "",
    price: "",
    action: "",
  };

  changeHandler = (e) => {
    const field = e.target.name;
    // clone state
    let state = { ...this.state };

    // edit
    state[field] = e.target.value;

    // set state
    this.setState({ ...state });
  };

  // for adding new item or editing existing item
  handleSubmit = async (e) => {
    // prevent the defult behaviour
    e.preventDefault();

    if (this.state.action === "Add") {
      // add new item case
      let newProduct = {
        name: this.state.name,
        price: this.state.price,
        count: 0,
        inCart: false,
        id: this.props.products[this.props.products.length - 1].id + 1,
      };
      //  call the back end server to save these data
      await axios.post("http://localhost:3000/products", newProduct);
      toast.success("Added Successfully!");
    } else {
      // Edit
      let id = this.props.match.params.id;

      // call backend to update
      await axios.patch(`http://localhost:3000/products/${id}`, {
        price: this.state.price,
        name: this.state.name,
      });
      toast.success("Changed Successfully!");
    }

    // redirect to the admin page
    this.props.history.replace("/admin");
  };

  async componentDidMount() {
    // check for the params in url
    let id = this.props.match.params.id;

    // Edit case
    if (id !== "new") {
      this.setState({ action: "Edit" });
      let { data: product } = await axios.get(
        `http://localhost:3000/products/${id}`
      );

      this.setState({
        name: product.name,
        price: product.price,
      });
    } else {
      // Add case
      this.setState({ action: "Add" });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.action}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mt-4">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="product name"
              value={this.state.name}
              onChange={this.changeHandler}
              required
              autoComplete="false"
            />
          </div>
          <div className="form-group mt-4">
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.changeHandler}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary mt-4">
            {this.state.action}
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default ProductForm;
