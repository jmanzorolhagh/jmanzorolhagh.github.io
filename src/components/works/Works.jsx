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
      title: "Options Roll Decision Engine with Embedded Risk Terminal",
      desc: "In-progress decision-support tool for multi-leg options positions, pairing a Python/C++ analytics core with an independent STM32 hardware kill switch.",
      points: [
        "Reconstructs positions to canonical leg representation and enumerates 50–100 candidate actions (hold/close/roll) per position across strike–expiry grids.",
        "Computes an EV surface across spot/vol/time scenarios with leg-by-leg bid–ask and ADV-scaled liquidity penalties.",
        "Applies split-conformal calibration on historical forecast errors for distribution-free, downside-adjusted bounds; ranks actions by lower-bound EV vs. the null action.",
        "STM32 kill switch (UART-only) maintains P&L state, gates order submission via permission queries, and fails closed on host crash or link loss — requires a physical button to clear trips."
      ],
      tech: "Python, C++, STM32, Conformal Prediction, Options Pricing, Embedded Systems",
      img: "./assets/options_pl.png",
      imgClass: "light-bg",
      rep: "https://github.com/jmanzorolhagh",
      repoText: "In Progress"
    },

    {
      id: "2",
      title: "Junior Embedded & QA Engineer — goTenna",
      desc: "Developed and debugged C/C++ firmware for mesh networking devices under real-time constraints, working with BLE and WiFi at the register and packet level.",
      points: [
        "Reverse-engineered proprietary BLE hex message formats to decode command sequences triggering device firmware functions.",
        "Built device-to-mobile communication interfaces for command and telemetry.",
        "Automated CI/CD pipelines for embedded test cycles."
      ],
      tech: "Embedded C/C++, BLE, WiFi, Reverse Engineering, CI/CD",
      img: "./assets/ble.png",
      imgClass: "zoom-image",
      rep: null,
      repoText: "Private"
    },

    {
      id: "3",
      title: "Infrastructure & Data Engineer — Columbia CTV",
      desc: "Migrating legacy data from SharePoint and unstructured lists into normalized relational schemas in Dataverse.",
      points: [
        "Designing schemas covering users, projects, collaborators, and document records across thousands of legacy entries.",
        "Building cleaning, validation, and transformation pipelines that enforce referential integrity end-to-end.",
        "Developing the frontend interface for structured data access and supporting network infrastructure and IT operations."
      ],
      tech: "Dataverse, SQL, ETL Pipelines, Data Modeling, Relational Schemas",
      img: "./assets/ctv.png",
      rep: null,
      repoText: "Internal Project"
    },

    {
      id: "4",
      title: "NFC KeyVault — Tap-to-Run Windows Automation",
      desc: "Independent hardware/software venture: tap an NFC tag to launch any Windows script or program — one-tap dev environment setup, workspace launches, and routine workflows.",
      points: [
        "ESP32 firmware in C polls a PN532 reader over UART and reports tag UIDs to the host.",
        "A .NET Windows service authenticates UIDs against a hot-reloaded JSON vault and dispatches scripts across Windows session boundaries.",
        "Full deployment pipeline included for installation, service registration, and updates."
      ],
      tech: "ESP32, C, C#/.NET, PowerShell, PN532, UART",
      img: "./assets/esp32-1.png",
      rep: "https://github.com/jmanzorolhagh"
    },

    {
      id: "5",
      title: "Junior Backend Engineer — J&H Corp",
      desc: "Designed and maintained RESTful APIs powering core e-commerce functions: product catalog, cart management, and checkout.",
      points: [
        "Built backend services in Node.js, Express, and MongoDB.",
        "Collaborated with frontend and infrastructure teams on deployment and integration."
      ],
      tech: "Node.js, Express, MongoDB, RESTful APIs",
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
        <h2>Professional Work</h2>
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