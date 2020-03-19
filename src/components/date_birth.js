import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Next_btn } from "../assets/next-btn.svg";
import FadeIn from 'react-fade-in'

// What  your  date  of  birth ?

export default class BirthDate extends Component {
  render() {
    return (
      <FadeIn className="container form" delay="150" transitionDuration={500}>
        <h1>What  your  date  of  birth ?</h1>
        <p>(date/month/year)</p>
        <div className="form-control">
          <input type="text" name="name" required/>
        </div>
        {/* <Link to="/handscan">Click me</Link> */}
        <Link to={`/handscan`}>
          <Next_btn width={175} className="main-logo" />
        </Link>
      </FadeIn>
    );
  }
}
