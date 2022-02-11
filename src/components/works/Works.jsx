import "./works.scss";
import { useState, useRef } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { motion } from "framer-motion";
import lottie from 'lottie-web';

export default function Works() {

  const element = useRef(null)
  const data = [
    {
      id:'1',
      icon: './assets/socket3.png',
      title: 'socket video capture',
      desc: 'a low level implementation of python socket streaming to capture and relay video',
      img: 'https://miro.medium.com/max/1400/1*cnSm2hv0Bk9LZAxKEnrSNw.png',
      rep: 'https://github.com/jmanzorolhagh'
    },
    {
      id:'2',
      icon: './assets/recursive.jpg',
      title: 'recursive web automation',
      desc: 'a recursive depth search of a web page for embedded video links + automated watchtime',
      img: './assets/webbig.jpg',
      rep: 'https://github.com/jmanzorolhagh'
    },
    {
    id: '3',
    icon: './assets/pi-icon.png',
    title: 'network pi streaming',
    desc: 'self hosted arduino based video capture system based on python sockets via local network',
    img: './assets/pibig.png',
    rep: 'htttps://github.com/jmanzorolhagh'
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const playLottie = (way) => {
    lottie.loadAnimation({
      container: element.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: './assets/69030-confetti-full-screen.json'  // the path to the animation json
    });
  }
  return <div className='Works' id="works">
     <motion.h1 initial={{ opacity: 0}} transition={{duration: 2}}
      whileInView={{ opacity: 1}}>
      portfolio
    </motion.h1>
    <motion.div className="imageContainer" initial={{ opacity: 0 , y: 200}} transition={{delay: 2, duration: 3, ease: "easeInOut"}}
        whileInView={{ opacity: 1, y:0}}>
      <div className="element" ref={element}></div>
      <div className="imageWrap">
        <img src="./assets/nook.jpg" alt="" />
      </div>
    <div className="layer">
      <input type="image" src="./assets/bell.jpg" alt="" onClick={playLottie}/>
    </div>
    </motion.div>
    <motion.div className="slider"
    style={{ transform: `translateX(-${currentSlide * 100}vw)` }} >
      {data.map((d) => (
      <div className="container" initial={{ opacity: 0}} transition={{duration: 2}}
      whileInView={{ opacity: 1}}>
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer">
                <img src={d.icon} alt="" />
              </div>
              <h2>{d.title}</h2>
              <p>
                {d.desc} 
              </p>
              <a href={d.rep}>repository</a>
              </div>
          </div>
          <div className="right">
                <img src={d.img} alt="" />
          </div>
        </div>
      </div>
      ))}
    </motion.div>
    <ArrowCircleLeftIcon className="rightArrow"  onClick={() => handleClick('right')}/>
    <ArrowCircleLeftIcon className="leftArrow"  onClick={() => handleClick('left')}/>
  </div>;
}
