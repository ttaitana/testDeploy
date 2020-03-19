import React, { Component } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { ReactComponent as Next_btn } from "../assets/next-btn.svg";

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
    // console.log(this.state.name);
  }
  componentDidMount(){
    // console.log("start");
    document.querySelector('#username').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        document.querySelector('#sendName').click()
      }
  });
  }
  render() {
    return (
      <FadeIn delay="150" transitionDuration="500" className="container">
        <h1>What is your name ?</h1>
        <br/>
        <div className="form-control">
          <input type="text" id="username" name="name" onChange={this.setName} required />
        </div>
        {/* <Link to={`/gender/${this.state.name}`}>Click me</Link> */}
        <br/>
        <Link to={`/gender/${this.state.name}`} id="sendName">
          <Next_btn width={175} className="main-logo"/>
        </Link>
      </FadeIn>
    );
  }
}
