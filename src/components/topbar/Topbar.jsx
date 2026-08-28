import "./topbar.scss"
import {Email, GitHub}  from '@mui/icons-material';
import { motion } from "framer-motion";

export default function Topbar({open, setOpen}) {
  return( 
  <header className={open ? "Topbar active" : "Topbar"} id="topbar">
    <div className="wrapper">
      <div className="left">
        <motion.a href="#intro" className="logo" initial={{x: -100}} animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}>jrm</motion.a>
        <a href="mailto:joshuamanzorolhagh@gmail.com" className="itemContainer">
          <Email className="icon"/>
          <span>joshuamanzorolhagh@gmail.com</span>
        </a>
        <a href="https://github.com/jmanzorolhagh" target="_blank" rel="noopener noreferrer" className="itemContainer">
          <GitHub className="icon"/>
          <span>github.com/jmanzorolhagh</span>
        </a>
      </div>
      <div className="right">
        <button
          type="button"
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </button>
      </div>
    </div>
  </header>);
}
