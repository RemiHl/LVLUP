import '../../style/ContactPage.css';
import { FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">📬 Contact</h1>
        <p className="contact-intro">
          Une question, une suggestion, une collaboration ? Voici comment me joindre alors n'hésitez pas !
        </p>

        <div className="contact-links">
          <a
            href="https://github.com/RemiHl"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FiGithub className="contact-icon" />
            <span>Mon GitHub</span>
          </a>

          <a
            href="mailto:tonadresse@mail.com"
            className="contact-card disabled"
          >
            <FiMail className="contact-icon" />
            <span>Envoyer un mail (Bientôt disponible)</span>
          </a>

          <a
            href="https://www.linkedin.com/in/rémi-hlynski-88464123a"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FiLinkedin className="contact-icon" />
            <span>Mon LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
