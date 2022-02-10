import { motion } from "framer-motion"
import "./contact.scss"

export default function Contact() {
  return <div className='Contact' id="contact">
    <div className="left">
        <img src="./assets/shake.svg" alt="" />
      </div>
    <div className="right">
    <motion.h1 initial={{ opacity: 0 }} transition={{duration: 2}}
    whileInView={{ opacity: 1 }}>
    my links</motion.h1>
      <div className="container" >
        <motion.div className="item" initial={{ opacity: 0 }} transition={{duration: .5}}
        whileInView={{ opacity: 1 }} >
          <a href="mailto:joshuamanzorolhagh@gmail.com">
            <img src="./assets/email.jpg" alt="" />
          </a>
          <h3>email me</h3>
        </motion.div>
        <motion.div className="item" initial={{ opacity: 0 }} transition={{duration: 1}}
        whileInView={{ opacity: 1 }}>
        <a href="https://github.com/jmanzorolhagh">
            <img src="./assets/github.jpg" alt="" />
          </a>
          <h3>github</h3>
        </motion.div>
        <motion.div className="item" initial={{ opacity: 0 }} transition={{duration: 1.5}}
        whileInView={{ opacity: 1 }}>
        <a href="https://drive.google.com/uc?export=download&id=1FvonycMhN2P_bed2HtHN2_ASu62V5_mp" download={"Joshua MAnzorolhagh's Resume"}>
            <img src="./assets/samresume.jpg" alt="" />
          </a>
          <h3>resume</h3>
        </motion.div>
      </div>
    </div>
  </div>;
}

