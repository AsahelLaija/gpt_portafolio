import React from "react";
//import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt__header section__padding" id="home">
      <div className="gpt__header-content">
        <h1 className="gradient__text">GPT-4 is OpenAI&apos;s most advanced system, Can solve difficult problems with accuracy</h1>
        <p>GPT-4 is more creative and collaborative than ever before. It </p>

        <div className="gpt__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
      
      {/*
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      */}
      </div>

      <div className="gpt__header-image">
        <img src={ai} alt="ai"/>
      </div>
    </div>
  );
};

export default Header;
