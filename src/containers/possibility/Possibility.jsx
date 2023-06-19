import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
    return(
      <div className="gpt__possibility section__padding" id="possibility">
        <div className="gpt__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt__possibility-content">
          <h1 className="gradient__text">We spent 6 months making GPT-4 safer and more aligned. GPT-4 is 82% less likely to respond to requests for disallowed content and 40% more likely to produce factual responses than GPT-3.5 on our internal evaluations.</h1>
          <p>We incorporated more human feedback, including feedback submitted by ChatGPT users, to improve GPT-4’s behavior. We also worked with over 50 experts for early feedback in domains including AI safety and security.</p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    )
};

export default Possibility;
