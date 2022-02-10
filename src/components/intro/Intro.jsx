import "./intro.scss"
import { init } from 'ityped';
import { motion } from "framer-motion"
import { useEffect, useRef } from 'react';

const svgVariants = {
  hidden: { rotate: -180 },
  visible: { 
    rotate: 0,
    transition: { duration : 1 }
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { 
      duration: 3,
      ease: "easeInOut",
    }
  }
};
let array_list = ["devicon-react-original-wordmark", "devicon-javascript-plain", 
"devicon-python-plain-wordmark", "devicon-java-plain-wordmark", "devicon-csharp-line", 
"devicon-cplusplus-line", "devicon-arduino-plain-wordmark", "devicon-bitbucket-original-wordmark", 
"devicon-electron-original", "devicon-html5-plain", "devicon-jest-plain", "devicon-materialui-plain", 
"devicon-mongodb-plain-wordmark", "devicon-npm-original-wordmark", "devicon-nodejs-plain",
"devicon-numpy-original", "devicon-pandas-original-wordmark", "devicon-php-plain", 
"devicon-putty-plain", "devicon-sass-original", "devicon-vscode-plain", "devicon-redux-original",
"devicon-pycharm-plain"];

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      startDelay: 1000,
      backDelay: 1000,
      backSpeed:60,
      strings: ["diverse", "equitable", "inclusive"],
    });
  }, []);
  
  return <div className='Intro' id='intro'>
    <motion.h1 initial={{ opacity: 0 }} transition={{duration: 2}}
  whileInView={{ opacity: 1 }}>
    introduction</motion.h1>
    <div className="left">
      <div className="imageContainer">
        <div className="imageSource">
        <motion.svg className="logo" xmlns="http://www.w3.org/2000/svg" width= '200' height= '200' viewBox="-100 -100 200 200"
          variants={svgVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.path
            stroke="coral"
            fill= "none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={pathVariants}
          />
          <motion.path
            stroke="coral"
            fill= "none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={pathVariants}
          />
        </motion.svg>
          {/*<img src="assets/nook.jpg" alt=""/>
        </div>
        <div className="layer">
            <a href='#portfolio'><img src="assets/bell.jpg" alt="" /></a>
          </div>*/}
          
        </div>
      </div>
      <p>can say hello world in</p>
      <div className="languageIcons">
      <motion.ul id= "list" initial={{ opacity: 0 , x: -100}} transition={{duration: 2, ease: "easeInOut"}}
        whileInView={{ opacity: 1, x:0}}>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-react-original-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-javascript-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-python-plain-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-java-plain-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-csharp-line"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-cplusplus-line"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-arduino-plain-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-bitbucket-original-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-electron-original"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-html5-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-jest-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-materialui-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-mongodb-plain-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-npm-original-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-nodejs-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-numpy-original"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-pandas-original-wordmark"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-php-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-putty-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-sass-original"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-vscode-plain"></i>
        </motion.li>
        <motion.li whileHover={{scale: 1.2, color: "white"}}>
        <i class="devicon-redux-original"></i>
          </motion.li>
          <motion.li whileHover={{scale: 1.2, color: "white"}}>
          <i class="devicon-pycharm-plain"></i>
        </motion.li>
        <motion.li whileHover={{color: "white"}}>
          <i class="devicon-kubernetes-plain-wordmark"></i>
        </motion.li>
      </motion.ul>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
      <h2>software engineer commited to implementing</h2>
        <h3>artificial intelligence</h3>
        <h2>and</h2>
        <h3>non-biased techniques</h3>
        <h2>to create a workplace that is <span ref={textRef}></span></h2> 
      </div>
    </div>
    </div>;
}
