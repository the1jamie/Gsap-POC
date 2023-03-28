import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import "./square.css"
gsap.registerPlugin(ScrollTrigger);

const Square = () => {

  useEffect(() => {
    const handleScrollAnimation = () => {
      gsap.to(".square__shape svg", {
        scrollTrigger: {
          trigger: ".square__shape",
          start: 'top 25%',
          end: 'bottom 25%',
          scrub: true,
          // pin: true,
          // markers: true
        },
        width: "100vw",
        height: "150vh",
        left: 0,
        top: 0,
        margin: 0,
        fill: "#deb887",
        duration: 5,
        pin: true
      })
    }
    handleScrollAnimation()
  }, [])

  return (
    <div className='square'>
      <span className='square__shape'>
        <svg width="100" height="100">
          <rect width="100%" height="100%" />
        </svg>
      </span>
      <p>
        marks
      </p>
    </div>
  )
}

export default Square