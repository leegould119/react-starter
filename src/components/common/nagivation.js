import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class componentName extends Component {
  render() {
    return (
      // main navigation
      <header className="header">
        <div className="container">
          <nav>
            <Link to="/"> Home </Link>
            <Link to="page-two"> Page two </Link>
          </nav>
        </div>
      </header>
    );
  }
}
