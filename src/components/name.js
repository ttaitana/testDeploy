import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";

export default class GetName extends Component {
  constructor() {
    super();
    this.state = {
      name: "บุคคลปริศนา"
    };
    this.setName = this.setName.bind(this);
  }
  setName(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }
  render() {
    return (
      <FadeIn delay="300" transitionDuration="500" className="container form">
        <h1>What is your name ?</h1>
        <input type="text" name="name" onChange={this.setName} required />
        <Link to={`/gender/${this.state.name}`}>Click me</Link>
      </FadeIn>
    );
  }
}
