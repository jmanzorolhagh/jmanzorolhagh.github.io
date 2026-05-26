import "./Skills.scss";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>

        <div className="skills-group">
          <h3>Languages</h3>
          <p>C/C++, Python, R, SQL, Java, JavaScript, Bash</p>
        </div>

        <div className="skills-group">
          <h3>Systems & Tools</h3>
          <p>
            Linux/Unix, Git, Make, TCP/IP, Docker, FreeRTOS, ESP-IDF, PlatformIO
          </p>
        </div>

        <div className="skills-group">
          <h3>Data & Statistics</h3>
          <p>
            pandas, NumPy, scikit-learn, statistical modeling,
            ETL pipelines, relational database design
          </p>
        </div>

        <div className="skills-group">
          <h3>Frameworks</h3>
          <p>Node.js, Express, React, MongoDB, MySQL</p>
        </div>
      </div>
    </section>
  );
}