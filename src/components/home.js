import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FadeIn from "react-fade-in";
import "../style/main.scss";
import { ReactComponent as Mlogo } from "../assets/main_logo.svg";
import Navbar from "./subcomponent/navbar";
import { TweenMax, Expo } from "gsap";

export default function Home() {
  let box = useRef(null);
  useEffect(() => {
    TweenMax.to(box, 0, {
      height: '100vh',
      opacity: 1
    }).then(() => {
      TweenMax.to(box, .6, {
        y: box.offsetHeight,
        delay: .1
      }).then(() => {
        TweenMax.to(
          box, 0, {
            display: 'none'
          }
        )
      });
    })
  });

  return (
    <div>
      <div
        className="box-transition"
        ref={el => {
          box = el;
        }}
      ></div>
      <FadeIn delay="300" transitionDuration="500">
        <div className="">
          <Navbar />
          <div className="" id="home">
            <FadeIn delay="300" transitionDuration="500">
              <h1>
                <span className="highlight">DO MORE</span>
              </h1>
              <h2>A tool for success</h2>
              <Link to="/card">
                <Mlogo width={280} className="main-logo" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
