import "./intro.scss";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrapper">
        <h1>Joshua Manzorolhagh</h1>
        <h3>Aspiring Quantitative Developer | Statistics & CS @ Columbia</h3>
        <p>
          I am a Columbia University dual-degree candidate in Statistics and
          Computer Science with 3+ years of professional experience across
          embedded systems, backend development, and data infrastructure.
          My core strengths are in C/C++, Python, and statistical computing.
        </p>
        <p>
          At the intersection of my interests is quantitative development, specifically
          low-latency systems and algorithmic trading. My current focus is
          building tooling that incorporates statistical
          inference and systems engineering. This includes calibration of options portfolios,
          but also the hardware kill switch that fail closed on link loss.
        </p>
        <p className="goal">
          My production software development experience,
          combined with the theoretical depth of a Columbia Statistics education,
          enable me to build trading and risk systems where latency and statistical
          correctness both matter.
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