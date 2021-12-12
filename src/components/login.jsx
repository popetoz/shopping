import React from "react";
import Joi from "joi-browser";

class Login extends React.Component {
  state = {
    userName: "",
    password: "",
    errors: {},
  };

  schema = {
    userName: Joi.string().required(),
    password: Joi.string().required(),
  };

  // this method will fire on submit
  handleSubmit = (e) => {
    // prevent the default beahviour of submit
    e.preventDefault();

    // validate the inputs
    let validInputs = this.validate();

    // in the case of not valid inputs
    if (!validInputs) return;

    console.log("Ok, Submitted!");
  };

  // validate the inputs of the form
  validate = () => {
    // clone the state to make validation for it
    let inputs = { ...this.state };
    delete inputs.errors;

    // get the result of joi validation for our inputs
    let result = Joi.validate(inputs, this.schema, { abortEarly: false });

    // in the case of no errors in the result of validation
    if (result.error === null) {
      this.setState({ errors: {} });
      return true;
    }

    // setting the errors in the state
    const errors = {};
    for (let err of result.error.details) {
      errors[err.path[0]] = err.message;
    }

    this.setState({ errors });
    return false;
  };

  changeHandler = async (e) => {
    const field = e.target.name;

    // clone
    let newState = { ...this.state };

    // edit
    newState[field] = e.target.value;

    // set state
    this.setState({ ...newState });
  };

  render() {
    return (
      <React.Fragment>
        <form className="mt-3" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              value={this.state.userName}
              name="userName"
              onChange={this.changeHandler}
            />
            {this.state.errors.userName && (
              <div className="alert alert-danger">
                {this.state.errors.userName}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.changeHandler}
              name="password"
            />

            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="check" />
            <label className="form-check-label" htmlFor="check">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
