import React from 'react';
import './footer.css';

const Footer = () => {
    return(
      <div className="gpt__footer section__padding">
        <div className="gpt__footer-heading">
          <h1 className="gradient__text">Do you want a website like this make your request</h1>
        </div>

        <div className="gpt__footer-btn">
          <a href="https://asahellaija.github.io/">
            <p>Request Early Access</p>
          </a>
        </div>

        <div className="gpt__footer-links">
          <div className="gpt__footer-links_logo">
            <h1>GPT-4</h1>
          </div>
          <div className="gpt__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className="gpt__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt__footer-links_div">
            <h4>Get in touch with the develper </h4>
            <p>laija.xyz</p>
            <p>+1 785-317-8080</p>
            <p>asahellaija@gmail.com</p>
          </div>
        </div>

        <div className="gpt__footer-copyright">
          <p>@GPT-4. All rights reserved.</p>
        </div>
      </div>
    )
};

export default Footer;
