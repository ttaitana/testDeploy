import React, { Component } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Contract from "./contract";
import { ReactComponent as Letter } from "../../assets/letter.svg";
import { ReactComponent as Shop } from "../../assets/shop.svg";
import { ReactComponent as Logo } from "../../assets/nav_logo.svg";
import "../../style/navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div class="nav">
        <div class="nav-header">
          <div class="nav-title">
            <Logo width={65} />
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div class="nav-links">
          <Link to="/">
            <Shop width={65} id="shop-logo" />
          </Link>
            <Popup
              trigger={<Letter width={90} id="letter-logo" />}
              modal
              closeOnDocumentClick
              repositionOnResize
              lockScroll
            >
              <Contract />
            </Popup>
        </div>
      </div>
    );
  }
}
