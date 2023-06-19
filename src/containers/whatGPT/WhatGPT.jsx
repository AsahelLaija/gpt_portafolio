import React from 'react';
import Feature from '../../components/features/Features';
import './whatGPT.css';

const WhatGPT = () => {
    return(
      <div className="gpt__whatgpt section__margin" id="wgpt">
        <div className="gpt__whatgpt-feature">
          <Feature title="What is GPT-4" text="Is the latest milestone in OpenAI’s effort in scaling up deep learning. GPT-4 is a large multimodal model (accepting image and text inputs, emitting text outputs) that, while less capable than humans in many real-world scenarios, exhibits human-level performance on various professional and academic benchmarks." />
        </div>
        <div className="gpt__whatgpt-heading">
          <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt__whatgpt-container">
          <Feature title="Capabilities" text="In a casual conversation, the distinction between GPT-3.5 and GPT-4 can be subtle. The difference comes out when the complexity of the task reaches a sufficient threshold—GPT-4 is more reliable, creative, and able to handle much more nuanced instructions than GPT-3.5." />
          <Feature title="Steerability" text="We've been actively working on all aspects of our plan to define AI behavior, including steerability. Instead of the traditional fixed personality, tone, and style of ChatGPT, developers and soon users can now specify their AI's style and task through the system message." />
          <Feature title="Risks & mitigations" text="We’ve been iterating on GPT-4 to make it safer and more aligned from the beginning of training, with efforts including selection and filtering of the pretraining data, evaluations and expert engagement, model safety improvements, and monitoring and enforcement." />
        </div>
      </div>
    )
};

export default WhatGPT;
