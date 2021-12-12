import React from "react";
class Admin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button
          className="btn btn-primary btn-lg mt-2"
          onClick={() => this.props.history.push("/productForm/new")}
        >
          Add
        </button>

        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => {
              return (
                <tr key={`500 + ${product.id}`}>
                  <th scope="row">{product.name}</th>
                  <td>{product.price}</td>
                  <td>
                    <i
                      className="far fa-edit"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        this.props.history.push(`/productForm/${product.id}`)
                      }
                    ></i>
                  </td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.props.deleteProductById(product.id)}
                    ></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Admin;
