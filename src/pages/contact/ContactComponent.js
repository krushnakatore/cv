import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import { TbMailForward } from "react-icons/tb";
import axios from "axios";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

function Contact(props) {
  const theme = props.theme;

  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);
      setUserInput({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-main" style={{ backgroundColor: theme.body, color: theme.text }}>
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <div>
                <p className="contact-title" style={{ color: theme.text }}>
                  Contact Me
                </p>
                <div className="contact-card" style={{ backgroundColor: theme.projectCard, borderColor: theme.dark }}>
                  <p className="contact-description" style={{ color: theme.secondaryText }}>
                    If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
                  </p>
                  <div className="contact-form">
                    <div className="contact-field">
                      <label style={{ color: theme.text }}>Name: *</label>
                      <input
                        type="text"
                        maxLength="100"
                        required
                        onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                        onBlur={checkRequired}
                        value={userInput.name}
                        style={{ backgroundColor: theme.body, color: theme.text, borderColor: theme.dark }}
                      />
                    </div>

                    <div className="contact-field">
                      <label style={{ color: theme.text }}>Email: *</label>
                      <input
                        type="email"
                        maxLength="100"
                        required
                        value={userInput.email}
                        onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                        onBlur={checkRequired}
                        style={{ backgroundColor: theme.body, color: theme.text, borderColor: theme.dark }}
                      />
                      {error.email && <p className="error-text">Please provide a valid email!</p>}
                    </div>

                    <div className="contact-field">
                      <label style={{ color: theme.text }}>Message: *</label>
                      <textarea
                        maxLength="500"
                        name="message"
                        required
                        onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                        onBlur={checkRequired}
                        rows="4"
                        value={userInput.message}
                        style={{ backgroundColor: theme.body, color: theme.text, borderColor: theme.dark }}
                      />
                    </div>

                    <div className="contact-action">
                      {error.required && <p className="error-text">All fields are required!</p>}
                      <button
                        className="send-button"
                        onClick={handleSendMail}
                        disabled={isLoading}
                        style={{
                          backgroundColor: theme.accentColor,
                          color: theme.text,
                          boxShadow: `0 4px 8px ${theme.accentBright}`,
                        }}
                      >
                        {isLoading ? "Sending Message..." : <><span>Send Message</span> <TbMailForward size={20} /></>}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-heading-text-div">
              {/* <h1 className="contact-heading-text" style={{ color: theme.text }}>
                {ContactData["title"]}
              </h1> */}
              <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;