// src/pages/Contact.jsx
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
function Contact() {
  return (
    <div className="contact">
      <h2>Contact Seoul's Spice Dynasty 🍜</h2>
      <div className="contact-container">
        <div className="contact-section">
          <h3>Location</h3>
          <p>
            <span className="contact-icon">📍</span>
            Enugu, Nigeria.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.295719795!2d7.512417!3d6.441421!2m3!1f0!2f0!3f0!3m2!111024!21768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnMjkuMSJOIDfCsDMwJzQOLjciRQ!5e0!3m2!1sen!2sus!4v1621435678901!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title=" Seoul's Spice Dynasty Location"
          ></iframe>
        </div>
        <div className="contact-section">
          <h3>Contact Details</h3>
          <p>
            <span className="contact-icon">☎️</span>
            Phone:  +234-816-074-7753
          </p>
          <p>Email: Seoulspicedynasty@gmail.com</p>
        </div>
        <div className="contact-section">
          <h3>Follow Us</h3>
          <p>
            <span className="social-icon">📘</span>
            <a href="https://facebook.com/Seoulspicedynasty" target="_blank" rel="noopener noreferrer">Facebook:  @Seoulspicedynasty</a>
          </p>
          <p>
            <span className="social-icon">📱</span>
            <a href="https://wa.me/2348160747753" target="_blank" rel="noopener noreferrer">WhatsApp:  +234-816-074-7753</a>
          </p>
          <p>
            <span className="social-icon">📸</span>
            <a href="https://instagram.com/Seoul_spice_dynasty" target="_blank" rel="noopener noreferrer">Instagram: @Seoul_spice_dynasty</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;