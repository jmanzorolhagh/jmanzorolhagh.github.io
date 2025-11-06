import "./intro.scss";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrapper">
        <h1>Joshua Manzorolhagh</h1>
        <h3>Software Engineer & Researcher</h3>
        <p>
          I am a results-oriented software engineer with over 4 years of 
          experience building simple, accessible, and user-friendly 
          applications, from secure NFC automation on Windows to BLE 
          communication to full-stack e-commerce development.
        </p>
        <p>
          As I work towards my professional goals of transforming whiteboard 
          ideas into tangible code and tools, I aim to gain a deeper, 
          theoretical grasp of the how and why of engineering as well. 
          Currently, I am pursuing this focus performing undergraduate 
          research on human-oriented computing at NYIT as a CHI 2026 
          representative.
        </p>
        <p className="goal">
          My goal is to combine my professional, practical expertise with 
          the well-rounded theoretical depth and rigor of a 
          well-rounded Columbia University education.
        </p>
        <div className="buttons">
          <a href="#works" className="btn btn-primary">View My Work</a>
          <a href="/assets/joshua-manzorolhagh-resume.docx" download className="btn btn-outline">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}