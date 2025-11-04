// src/components/intro/Intro.jsx
import "./intro.scss";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrapper"> 
        <h1>Joshua Manzorolhagh</h1>
        <h3>Software Engineer & Researcher</h3>
        <p>
          I am a results-oriented software engineer with over 3 years of professional
          experience building tangible, real-world applications, from secure
          firmware to full-stack e-commerce platforms. My practical work
          transforming abstract concepts into reliable code sparked a desire
          for a deeper theoretical understanding of computing.
        </p>
        <p>
          I am currently channeling this focus into undergraduate research in
          human-oriented computing at NYIT, where I maintain a 4.0 GPA.
        </p>
        <p className="goal">
          My goal is to <strong>complement extensive practical expertise with the
          advanced theoretical rigor at Columbia University.</strong>
        </p>
        <div className="buttons">
          <a href="#works" className="btn btn-primary">View My Work</a>
          <a href="/Joshua Manzorolhagh Resume.docx" download className="btn btn-outline">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}