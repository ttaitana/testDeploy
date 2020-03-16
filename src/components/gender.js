import React, { Component } from "react";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in'

export default class Gender extends Component {
    constructor(){
        super();
        this.slectGender = this.slectGender.bind(this)
    }
    slectGender(e){
        let wrapper = [].slice.call(document.querySelector('.btn-wrapper').children)
        wrapper.forEach(element => {
            element.classList.remove('btn-active')
        });
        console.log(wrapper);
        e.target.classList.add('btn-active')
    }
  render() {
    const { match: { params } } = this.props;
    const { name } = params;
    return (
      <div className="container form">
          
        <h1>HI! {name}</h1>
        <h1>Please choose your gender</h1>
         <div className="btn-wrapper">
             <div className="btn" onClick={this.slectGender}>Male</div>
             <div className="btn" onClick={this.slectGender}>Female</div>
         </div>
        <Link to="/birthdate">Click me</Link>
      </div>
    );
  }
}
