import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { TweenMax, Power3 } from "gsap";

export default function CardShuffer() {
  let wrapper = useRef(null);
  let card1 = useRef(null);
  let card2 = useRef(null);
  let card3 = useRef(null);
  let card4 = useRef(null);

  let history = useHistory();

  const nextPage = () => {
    TweenMax.to(wrapper, 1, {
      scale: 1,
      ease: Power3.easeInOut
    }).then(() => {
      TweenMax.to(card1, 1, {
        opacity: 0,
        y: 0,
        ease: Power3.easeIn
      });
      TweenMax.to(card2, 1, {
        opacity: 0,
        y: -2400,
        ease: Power3.easeIn
      });
      TweenMax.to(card3, 1, {
        opacity: 0,
        y: 0,
        ease: Power3.easeIn
      });
      TweenMax.to(
        card4,
        1,
        {
          opacity: 0,
          y: -2400,
          ease: Power3.easeIn
        },
        0.5
      ).then(() => {
        setTimeout(() => {
          history.push("/name");
        }, 500);
      });
    });
  };

  useEffect(() => {
    TweenMax.to(card1, 0.8, {
      opacity: 1,
      ease: Power3.easeOut,
      y: -2400
    });
    TweenMax.to(card2, 0.8, {
      opacity: 1,
      ease: Power3.easeOut,
      y: -900
    });
    TweenMax.to(card3, 0.8, {
      opacity: 1,
      ease: Power3.easeOut,
      y: -2300
    });
    TweenMax.to(card4, 0.8, {
      opacity: 1,
      ease: Power3.easeOut,
      y: -800
    });
  }, []);

  return (
    <div
      className="flex-wrapper"
      onClick={nextPage}
      ref={el => {
        wrapper = el;
      }}
    >
      <div
        className="card-bg"
        ref={el => {
          card1 = el;
        }}
      ></div>
      <div
        className="card-bg"
        ref={el => {
          card2 = el;
        }}
      ></div>
      <div
        className="card-bg"
        ref={el => {
          card3 = el;
        }}
      ></div>
      <div
        className="card-bg"
        ref={el => {
          card4 = el;
        }}
      ></div>
    </div>
  );
}
