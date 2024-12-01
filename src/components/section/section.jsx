import React from 'react'
import './section.scss'
import {motion} from 'framer-motion'
const Section = () => {
  return (
    <motion.div className='section'
    initial={{x:-100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1}}>
      <div className="hlar">
        <h2>Web</h2>
        <h2>Design &</h2></div>
        <h1>Development</h1>
        <h2>Course</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, ea odio provident vitae quo fugit nam nulla sint! Ipsum, at?</p>
        <button>Join Us</button>
    </motion.div>
  )
}

export default Section;
