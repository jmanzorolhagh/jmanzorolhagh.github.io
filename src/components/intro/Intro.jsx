import "./intro.scss";

export default function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="wrapper">
        <h1>Joshua Manzorolhagh</h1>
        <h3>Mathematics-Statistics @ Columbia | C++/Python &amp; Real-Time Systems</h3>
        <p>
          I am a Columbia University Mathematics-Statistics candidate with a
          minor in Computer Science and 3+ years of professional experience
          across embedded systems, backend development, and data infrastructure.
          My core strengths are in C/C++, Python, and statistical computing.
        </p>
        <p>
          I build systems with strong consideration of statistical modeling and
          performance-oriented software. My current project, Citi Bike Balancr,
          combines live station feeds with historical trip data to forecast
          short-term depletion and overflow risk and support real-time
          rebalancing decisions.
        </p>
        <p className="goal">
          I am especially interested in low-latency systems, short-horizon
          forecasting, risk management, and performance modeling. PLease reach out with any
          research collaborations and engineering opportunities in these areas!
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
