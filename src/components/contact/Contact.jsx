import "./contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          I am pursuing a dual degree in Statistics and Computer Science at
          Columbia University and am actively targeting quantitative
          development roles in low-latency systems and algorithmic trading.
          I am always open to discussing opportunities, projects, and research
          &mdash; please feel free to reach out.
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