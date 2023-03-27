import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import "./square.css"
import { color } from 'd3';
gsap.registerPlugin(ScrollTrigger);

const Square = () => {

  useEffect(() => {
    console.log("hit")
    const handleScrollAnimation = () => {
      console.log("hit2")
      gsap.to(".square__shape svg", {
        scrollTrigger: {
          trigger: ".square__shape",
          start: 'top 25%',
          end: 'bottom 25%',
          scrub: true,
          // pin: true,
          markers: true
        },
        width: "100vw",
        height: "150vh",
        left: 0,
        top: 0,
        margin: 0,
        fill: "#deb887",
        duration: 5
      })
    }
    handleScrollAnimation()
  }, [])

  return (
    <div className='square'>
      <span className='square__shape'>
        <svg width="300" height="300">
          <rect width="100%" height="100%" />
        </svg>
      </span>
      <p>
        Square
      </p>
    </div>
  )
}

export default Square