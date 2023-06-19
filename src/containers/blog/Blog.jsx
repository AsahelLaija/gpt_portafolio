import React from 'react';
import Article from '../../components/article/Article';
import { blog01, gptForFree, chatGPT, gpt4, aiapps } from './imports';
import './blog.css';

const Blog = () => {
    return (
      <div className="gpt__blog section__padding" id="blog">
        <div className="gpt__blog-heading">
          <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
        </div>
        <div className="gpt__blog-container">
          <div className="gpt__blog-container_groupA">
            <Article 
              url={"https://asahellaija.github.io/"} 
              imgUrl={blog01} 
              date="" 
              text="Do you like this site we create one for you and other web services" />
          </div>
          <div className="gpt__blog-container_groupB">
            <Article 
              url={"https://openaimaster.com/how-to-use-gpt-4-for-free/"} 
              imgUrl={gptForFree} 
              date="June 5, 2023" 
              text="How to use GPT-4 for free: 6 easy ways" />
            <Article 
              url={"https://www.analyticsinsight.net/techniques-to-cut-the-costs-of-using-chatgpt-and-gpt-4/"} 
              imgUrl={chatGPT} 
              date="June 17, 2023" 
              text="ChatGPT and GPT4" />
            <Article 
              url={"https://www.freecodecamp.org/news/what-to-know-about-gpt-4/"} 
              imgUrl={gpt4} 
              date="April 6, 2023" 
              text="What to Know About GPT-4 for non-AI Developers" />
            <Article 
              url={"https://www.freecodecamp.org/news/build-ai-apps-with-chatgpt-dall-e-and-gpt-4/"} 
              imgUrl={aiapps} 
              date="June 1, 2023" 
              text="Build Apps with ChatGPT, Dall-E, and GPT-4" />
          </div>
        </div>
      </div>
    )
};

export default Blog;
