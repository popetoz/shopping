import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Team from "./team";
import Company from "./company";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>About Us</h1>
        <div className="row">
          <div className="col-3">
            <ul>
              <li>
                <Link to="/about/team">Team</Link>
              </li>
              <li>
                <Link to="/about/company">Company</Link>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <Route path="/about/team" component={Team}></Route>
            <Route path="/about/company" component={Company}></Route>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
