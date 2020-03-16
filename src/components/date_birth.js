import React, { Component } from "react";
import { Link } from "react-router-dom";

// What  your  date  of  birth ?

export default class BirthDate extends Component {
  render() {
    return (
      <div className="container form">
        <h1>What  your  date  of  birth ?</h1>
        <p>(00/00/199x)</p>
        <input type="text" name="name" required/>
        <Link to="/home">Click me</Link>
      </div>
    );
  }
}
