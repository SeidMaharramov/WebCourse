import React,{useState}from 'react'
import './header.scss'
import { FaBars } from "react-icons/fa6";
import {motion} from 'framer-motion'


const Header = () => {


  const [showDiv, setShowDiv] = useState(true); // Başlangıçta div gizli

  const toggleDiv = () => {
    setShowDiv(!showDiv); // State'i tersine çevir (toggle işlemi)
  };

  return (
    <motion.div className='header'
    initial={{y:-100,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:1}}>
    

    {!showDiv && (
      <div className="gizli">
      <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Design</li>
          <li>Contact</li>
        </ul>
      </div>
      )}

      <div className="hisse">

      <div className="logo">
      <h1>PraRoz</h1></div>

      <i onClick={toggleDiv}><FaBars/></i>
      <div className="header_ul">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Design</li>
          <li>Contact</li>
        </ul>
      </div>

      {showDiv && (
      <div className="search">
        <input type="text" placeholder='Axtar..' />
        <button>Axtar</button>
      </div>)}
      
      </div>

    </motion.div>
  )
}

export default Header
