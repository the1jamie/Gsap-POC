import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './textGlide.css'

gsap.registerPlugin(ScrollTrigger);

const TextGlide = () => {

  useEffect(() => {
    const startAnimation = () => {
      gsap.to(".line_1", {
        scrollTrigger: {
          trigger: ".line_1",
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        x: -800,
        duration: 3
      });

      gsap.to(".line_2", {
        scrollTrigger: {
          trigger: ".line_2",
          start: 'top bottom',
          end: ' top',
          scrub: true,
        },
        x: 400,
        duration: 3
      });

      gsap.to(".line_3", {
        scrollTrigger: {
          trigger: ".line_3",
          start: 'top bottom',
          end: ' top',
          scrub: true,
        },
        x: -600,
        duration: 3
      });

      gsap.to(".line_4", {
        scrollTrigger: {
          trigger: ".line_4",
          start: 'top bottom',
          end: ' top',
          scrub: true,
        },
        x: 800,
        duration: 3
      });
    }
    startAnimation()
  }, [])

  return (
    <div className='text-glide'>
      <p className="line_1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p className="line_2">Suspendisse volutpat justo quis quam sodales vestibulum.</p>
      <p className="line_3">Aliquam et nibh eu odio ullamcorper viverra.</p>
      <p className="line_4">Integer pulvinar lacus eu orci semper, et ornare odio consequat.</p>
    </div>
  )
}

export default TextGlide