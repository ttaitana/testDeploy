import React, { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function HandScan() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };

  let webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  return (
    <div className="">
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
      <div className="overlay">
        <img
          width="1300"
          src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/15850dda-28a6-4ce7-87dc-aec2351cf436/22e1b2a9-d3a3-4649-b0d8-75828feedfa8_rw_1920.png?h=6c559ec20a042b9d17551f97378c8f76"
        />
        <br />
        <button onClick={capture}>Capture photo</button>
        <span class="ouro ouro3">
          <span class="left">
            <span class="anim"></span>
          </span>
          <span class="right">
            <span class="anim"></span>
          </span>
        </span>
      </div>
      <br />
      <br />
    </div>
  );
}
