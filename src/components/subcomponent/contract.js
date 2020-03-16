import React, { Component } from "react";
import "../../style/main.scss";

export default class Contract extends Component {
  render() {
    return (
      <div className="" id="contract">
        <div className="wrapper">
          <div id="phone">
            <h3>PHONE</h3>
            <p>086-8026801</p>
          </div>
          <div id="mail">
            <h3>E-MAIL</h3>
            <p>support@domore.co.th</p>
          </div>
        </div>
        <h1>CONTACT US</h1>
        <p>เพียงกรอกรายละเอียดด้านล่างเราจะติดต่อกลับเร็วที่สุด</p>
        <form action="" className="form">
          <label htmlFor="Name">YOUR NAME *</label>
          <input type="text" name="Name" required />

          <label htmlFor="email">YOUR E-MAIL ADDRESS *</label>
          <input type="email" name="email" required />

          <label htmlFor="subject">SUBJECT</label>
          <input type="text" name="subject" />

          <label htmlFor="message">YOUR MESSAGE</label>
          <textarea name="message" cols="30" rows="10"></textarea>
          <input type="submit" value="send message" className="send-contract" />
        </form>
        <br/>
      </div>
    );
  }
}
