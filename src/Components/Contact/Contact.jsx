import { useState } from "react";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import Title from "../Title/Title";
import "./Contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "5a31c26f-6536-457f-98ff-b93d262c5f35");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    setLoading(false);
    if (res.success) {
      alert("Form submitted successfully");
      event.target.reset();
    } else {
      alert("There was an error submitting the form");
    }
  };

  return (
    <div id="contact" className="contact">
      <Title>Get in Touch</Title>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I’m currently open to exciting new opportunities and collaborations.
            If you have a project or role in mind that matches my skills, feel
            free to reach out — I’d be happy to connect and discuss how I can
            contribute.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail" />
              <p>kishorekj523@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="Call" />
              <p>+91-8098303180</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Chennai, Tamilnadu , India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows={6}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            {loading ? <span className="spinner"></span> : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
