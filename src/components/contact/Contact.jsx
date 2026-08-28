import "./contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          I am pursuing a BA in Mathematics-Statistics with a minor in Computer
          Science at Columbia University and plan to continue into an MS in
          Computer Science after graduation. I am open to research
          collaborations and engineering opportunities involving statistical
          computing, real-time systems, forecasting, or data infrastructure.
        </p>
        <div className="links">
          <a href="mailto:joshuamanzorolhagh@gmail.com" className="contact-link">
            joshuamanzorolhagh@gmail.com
          </a>
          <a 
            href="https://github.com/jmanzorolhagh" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
