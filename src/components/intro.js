import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import myIntro from '../assets/intro.mp4'

export default function Intro() {
    let history = useHistory();
    let video = useRef(null)
    
    const myHandler = () => {
        setTimeout(() => {
            history.push("/home");
          }, 500);
    }
    return(
        <div className="video-container">
            <video autoPlay id="myVideo" useRef={el => {video = el}} onEnded={myHandler}>
                <source src={myIntro} type="video/mp4"/>
            </video>
        </div>
    )
}