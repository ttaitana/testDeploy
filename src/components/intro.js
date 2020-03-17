import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import myIntro from "../assets/intro.mp4";
import { TweenMax, Expo } from "gsap";

export default function Intro() {
  let history = useHistory();
  let box = useRef(null);

  useEffect(() => {
    TweenMax.to(box, 0, {
      transform: "skewY(-10deg)",
      y: (-box.offsetHeight * 3) / 2,
      ease: Expo.easeOut
    }).then(() => {
      TweenMax.to(box, 0, {
        opacity: 1
      });
    });
  });

  const myHandler = () => {
    TweenMax.to(box, 1, {
      transform: "skewX(0deg)",
      y: 0,
      height: '140vh',
      ease: Expo.easeOut
    }).then(() => {
      setTimeout(() => {
        history.push("/home");
      }, 0);
    });
  };
  return (
    <div className="video-container">
      <div
        className="box-transition"
        ref={el => {
          box = el;
        }}
      ></div>
      <video autoPlay id="myVideo" onEnded={myHandler}>
        <source src={myIntro} type="video/mp4" />
      </video>
    </div>
  );
}
