import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class AppNavbar extends Component {
  render() {
    return (
      <div className="nav navbar navbar-expand-md navbar-dark bg-info mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ClientPanel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className=" nav-link" to="/">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
