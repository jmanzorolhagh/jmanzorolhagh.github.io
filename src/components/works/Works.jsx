import "./works.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
};

export default function Works() {
  const [[slide, direction], setSlide] = useState([0, 0]);

  const data = [
  
    {
      id: "1",
      title: "Venture: ESP32 Secure NFC System",
      desc: "An independent hardware/software venture to securely execute privileged Powershell scripts on Windows systems.",
      points: [
        "Architected a 'vault' system associating NFC Tag IDs with custom scripts.",
        "Implemented MQTT notifications for real-time mobile alerts."
      ],
      tech: "ESP32, Embedded C++, Powershell, MQTT",
      img: "./assets/esp32-1.png",
      rep: "https://github.com/jmanzorolhagh" 
    },
  
    {
      id: "2",
      title: "ACM CHI Student Research Competition",
      desc: "Selected by Professor Mamtaj Akter to represent NYIT in the premier international conference for Human-Computer Interaction (HCI).",
      points: [
        "Conducting user-centered research, including interviewing abuse victims, to analyze app-based spyware detection.",
        "Designing a human-centered mobile security application based on qualitative analysis."
      ],
      tech: "Human-Computer Interaction (HCI), User-Centered Design, Qualitative Analysis",
      img: "./assets/chi26.png", 
      rep: null, 
      repoText: "Academic Research" 
    },
  
    {
      id: "3",
      title: "Firmware & BLE Engineer (goTenna)",
      desc: "Served as a key engineer bridging hardware and software for goTenna's mesh networking devices.",
      points: [
        "Developed and debugged firmware for BLE and WiFi protocols.",
        "Transformed abstract requirements into functional, physical products."
      ],
      tech: "Embedded C/C++, Bluetooth Low Energy (BLE), ESP-IDF",
      img: "./assets/ble.png",
      imgClass: "zoom-image", 
      rep: null, 
      repoText: "Private" 
    },

    {
      id: "4",
      title: "Backend Engineer (J&H Corp)",
      desc: "Engineered and maintained RESTful APIs for all core functions of a productive e-commerce platform.",
      points: [
        "Designed APIs for product listings, cart management, and secure checkouts.",
        "Collaborated with frontend teams using the MERN stack."
      ],
      tech: "Node.js, Express, MongoDB, RESTful APIs, MERN Stack",
      img: "./assets/mern.webp",
      
      rep: null, 
      repoText: "Private" 
    },
  ];

  const paginate = (newDirection) => {
    let newSlide = slide + newDirection;
    if (newSlide < 0) {
      newSlide = data.length - 1;
    } else if (newSlide >= data.length) {
      newSlide = 0;
    }
    setSlide([newSlide, newDirection]);
  };

  const project = data[slide];

  return (
    <div className="Works" id="works">
      <div className="header">
        <h2>Professional Work & Research</h2>
      </div>

      <div className="slider-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={slide}
            className="slide-item"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >

            <div className={`item-image-container ${project.imgClass || ''}`}>
              <div 
                className="item-image"
                style={{ backgroundImage: `url(${project.img})` }}
                aria-label={project.title}
                role="img"
              ></div>
            </div>

            <div className="item-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul>
                {project.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <span className="tech-stack">
                <strong>Tech:</strong> {project.tech}
              </span>

              <div className="repo-link-container">
                {project.rep ? (
                  <a href={project.rep} target="_blank" rel="noopener noreferrer">
                    View Repository
                  </a>
                ) : (
                  <span className="repo-private">
                    {project.repoText}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="nav-arrow next" onClick={() => paginate(1)}>
          <ArrowCircleRightIcon />
        </div>
        <div className="nav-arrow prev" onClick={() => paginate(-1)}>
          <ArrowCircleLeftIcon />
        </div>
      </div>

      <div className="pagination-dots">
        {data.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === slide ? 'active' : ''}`}
            onClick={() => setSlide([index, index > slide ? 1 : -1])}
          />
        ))}
      </div>
    </div>
  );
}