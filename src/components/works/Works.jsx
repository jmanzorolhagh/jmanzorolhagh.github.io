import "./works.scss";

const projects = [
  {
    id: "2",
    title: "Citi Bike Balancr — Real-Time Mobility Forecasting",
    desc: "In-progress forecasting and decision-support system for Citi Bike rebalancing across New York City.",
    points: [
      "Building a data pipeline that combines live Citi Bike station-status feeds with historical trip data to model short-term station depletion and overflow risk.",
      "Developing probabilistic demand forecasts and split-conformal uncertainty intervals to identify high-risk stations and prioritize rebalancing under operational constraints.",
      "Architecting a Python modeling workflow with a performance-oriented C++ inference layer; evaluating temporal and weather features through backtesting and ablation studies."
    ],
    tech: "Python, C++, pandas, scikit-learn, GBFS, Conformal Prediction",
    img: "./assets/citibike.png",
    imgClass: "light-bg",
    rep: null,
    repoText: "In Progress"
  },
  {
    id: "3",
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
    id: "1",
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
  }
];

function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className={`item-image-container ${project.imgClass || ""}`}>
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
            <span className="repo-private">{project.repoText}</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Works() {
  return (
    <section className="Works" id="works">
      <div className="works-shell">
        <div className="header">
          <h2>Selected Work</h2>
        </div>

        <div className="works-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
