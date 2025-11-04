import "./topbar.scss"
import {Email, BusinessCenterOutlined}  from '@mui/icons-material';
import { motion } from "framer-motion";

export default function Topbar({open, setOpen}) {
  return( 
  <div className={'Topbar ' + (open && 'active')} id="topbar">
    <div className="wrapper">
      <div className="left">
        <motion.a href="#intro" className="logo" initial={{x: -100}} animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}>jrm</motion.a>
        <div className="itemContainer">
          <Email className="icon"/>
            <span>joshuamanzorolhagh@gmail.com</span>
        </div>
        <div className="itemContainer">
          <BusinessCenterOutlined className="icon"/>
          <span> github.com/jmanzorolhagh </span>
        </div> 
      </div>
      <div className="right">
        <div className="hamburger" onClick={()=>setOpen(!open)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>);
}
