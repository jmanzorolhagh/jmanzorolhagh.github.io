import "./Skills.scss";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>

        <div className="skills-group">
          <h3>Languages</h3>
          <p>C++, C, SQL, Python, Java, JavaScript (ES6+), VBA</p>
        </div>

        <div className="skills-group">
          <h3>Frameworks & Hardware</h3>
          <p>
            Embedded C/C++, ESP32, Bluetooth Low Energy (BLE), ESP-IDF, 
            STM32CubeIDE, MERN Stack (MongoDB, Express, React, Node.js)
          </p>
        </div>

        <div className="skills-group">
          <h3>Databases & Tools</h3>
          <p>
            Git, Docker, Heroku, Azure, MongoDB (Atlas), MySQL, 
            Powershell, Visual Basic
          </p>
        </div>
      </div>
    </section>
  );
}