import React, { Component, createRef, useEffect } from "react";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import gsap from "gsap";
import SmoothScrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overflow';
import Scrollbar from 'react-smooth-scrollbar';

SmoothScrollbar.use(OverscrollPlugin);

export default class CardShuffer extends Component {
  constructor() {
    super();
    this.cardScroll = this.cardScroll.bind(this);
  }
  //   card1 = createRef(null);
  //   card2 = createRef(null);
  //   card3 = createRef(null);
  cardScroll() {
    let card_row = [...document.querySelectorAll(".card-bg")];

    // console.log(card_row);
    let even = false;
    let count = 1;
    card_row.forEach(e => {
      if (count == 1) {
        // e.style.transform = `translateY(${window.scrollY-1000}px)`
        gsap.to(e, {
          duration: 0.5,
          ease: "expo.out",
          //   y: window.scrollY - gsap.utils.random(1500, 2000)
          y:
            (-window.scrollY * gsap.utils.random(2, 3)) / 3 -
            gsap.utils.random(1000, 1300)
        });
      } else if (count == 2) {
        // e.style.transform = `translateY(${-window.scrollY+300-700}px)`
        gsap.to(e, {
          duration: 0.5,
          ease: "expo.out",
          y:
            (window.scrollY * gsap.utils.random(2, 3)) / 3 -
            gsap.utils.random(1000, 1300)
        });
      } else if (count == 3) {
        gsap.to(e, {
          duration: 0.5,
          ease: "expo.out",
          y:
            (-window.scrollY * gsap.utils.random(3, 4)) / 3 -
            gsap.utils.random(1000, 1300)
        });
      } else if (count == 4) {
        gsap.to(e, {
          duration: 0.5,
          ease: "expo.out",
          y:
            (window.scrollY * gsap.utils.random(3, 4)) / 3 -
            gsap.utils.random(1000, 1300)
        });
      }
      count++;
      //   console.log(randnum);
      even = !even;
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.cardScroll);
    window.scrollTo(0, 0);
    let card_row = [...document.querySelectorAll(".card-bg")];
    card_row.forEach(e => {
      gsap.to(e, {
        duration: 0.3,
        opacity: 1
      });
    });
  }
  render() {
    return (
      <FadeIn>
        <div className="btn-wrapper">
          <div className="btn" id="card-btn">
            Click
          </div>
        </div>
        <Scrollbar>
          <div className="flex-wrapper">
            <div className="card-bg"></div>
            <div className="card-bg"></div>
            <div className="card-bg"></div>
            <div className="card-bg"></div>
          </div>
          </Scrollbar>
      </FadeIn>
    );
  }
}
