import React from 'react'
import './login.scss'
import {FaInstagram,FaFacebook,FaTwitter,FaGoogle,FaSkype} from 'react-icons/fa6'
import {motion} from 'framer-motion'
import { duration } from '@mui/material'
const Login = () => {
  return (
    <motion.div className='login'
    initial={{x:100,opacity:0}}
    animate={{x:0,opacity:1}}
    transition={{duration:1}}
    >
      <h2>Login Here</h2>
      <div className="giris">
        <input type="Email"  placeholder='Emailiniz Daxil edin'/>
        <input type="Password" placeholder='Sifrenizi daxil edin'/>
        <button>Login</button>
        <p>Don't have an account?</p>
        <a href="">Click here</a>
        <div className="extra">
        <p>
            Login with 
        </p>
        <div className="iconlar">
            <i><FaInstagram/></i>
            <i><FaFacebook/></i>
            <i><FaGoogle/></i>
            <i><FaTwitter/></i>
            <i><FaSkype/></i>
        </div>
      </div>
      </div>
      
    </motion.div>
  )
}

export default Login
