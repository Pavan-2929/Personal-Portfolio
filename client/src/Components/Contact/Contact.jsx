import React, { useState } from "react";
import "./Contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGeeksforgeeks } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactfunc = async () => {
    try {
      const userInfo = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (userInfo.ok) {
        console.log("User data saved successfully");
      } else {
        console.error("Failed to save user data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="contact-container" id="Contact">
        <div className="c-left">
          <div className="c-heading">
            <h1>Contact Me</h1>
          </div>
          <div className="c-inputs">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter yout Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            ></textarea>
          </div>
          <div className="submit-btn">
            <button
              type="submit"
              className="btn cv s-btn"
              onClick={contactfunc}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="c-right">
          <div className="media-heading">
            <h1>Social-Media Links</h1>
          </div>
          <div className="social-icons contact-i">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/pavan-kapadiya-6b7789273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="social-i" />
              </a>
              <a
                href="https://github.com/Pavan14075"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="social-i" />
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/kapadiya_pavan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGeeksforgeeks className="social-i" />
              </a>
            </div>
          </div>
          <div className="email">
            <div className="email-heading">
              <h1>Direct Contact me</h1>
            </div>
            <div className="soical-icons contact-icons">
              <a
                href="mailto:kapadiyapavan14@gmail.com"
                className="media-a responsive-icons"
              >
                <MdEmail className="social-i mail" />
                <h2>kapadiyapavan14@gmail.com</h2>
              </a>
            </div>
            <div className="social-icons contact-icons">
              <a className="media-a responsive-icons" href="tel:+917574808971">
                <BiSolidPhoneCall className="social-i mail" />
                <h2>(+91) XXXXXXXXXXX</h2>
              </a>
            </div>
          </div>

          <div className="location email">
            <div className="location-heading">
              <h1>My Destination</h1>
            </div>
            <div className="contact-icons">
              <div className="media-a responsive-icons">
                <FaMapMarkerAlt className="social-i mail-icon" />
                <h2>
                  Nikol, Ahmedabad <br /> Gujarat, India
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
