import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './lazyGallery.css'

const LazyGallery = () => {
  // gsap.registerPlugin(ScrollTrigger);
  
  const list = Array(16).fill()
  const items = list.map((item, i) => {
    return (
      <div className='item' key={i}></div>
    )
  })

  useEffect(() => {
    const itemList = document.querySelectorAll(".item")
    
    ScrollTrigger.batch(".item", {
        onEnter: elements => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: -100,
            stagger: 0.15,
          });
        },
        // once: true
      });
  
    return () => {
      
    }
  }, [])
  


  return (
    <div className='lazy-gallery'>
      {items}
    </div>
  )
}

export default LazyGallery