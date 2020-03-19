import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import FadeIn from "react-fade-in";

export default function HandScan() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  let webcamRef = React.useRef(null);
  useEffect(() => {
      console.log(webcamRef);
  })

  const capture = () => {
    console.log(webcamRef);    
  };

  return (
    <div className="container">
      <div className="croper">
        <Webcam
          audio={false}
          ref={el => {
            webcamRef = el;
          }}
          screenshotFormat="image/jpeg"
          height={720}
          width={1280}
          mirrored={true}
          videoConstraints={videoConstraints}
        />
      </div>
      <FadeIn className="overlay" delay={1700}>
        <div className="">
          <img
            width="500"
            //   src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/15850dda-28a6-4ce7-87dc-aec2351cf436/22e1b2a9-d3a3-4649-b0d8-75828feedfa8_rw_1920.png?h=6c559ec20a042b9d17551f97378c8f76"
            src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Very-Basic-Hand-Cursor-icon.png"
          />
          <br />
          <button onClick={capture}>Capture photo</button>
          <span className="ouro ouro3">
            <span className="left">
              <span className="anim"></span>
            </span>
            <span className="right">
              <span className="anim"></span>
            </span>
          </span>
        </div>
      </FadeIn>
      <br />
      <br />
    </div>
  );
}
