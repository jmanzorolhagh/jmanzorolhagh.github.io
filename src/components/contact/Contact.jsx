import "./contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          I am actively preparing my application for Columbia GS and am always 
          open to discussing my work and research. Please feel free to reach out.
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