import React from 'react';
import './article.css';

const Article = ({ url, imgUrl, date, text }) => {
    return(
      <div className="gpt__blog-container_article">
        <div className="gpt__blog-container_article-image">
          <a href={url}>
            <img src={imgUrl} alt="blog_image" />
          </a>
        </div>
        <div className="gpt__blog-container_article-content">
          <div>
            <p>{date}</p>
            <h3>{text}</h3>
          </div>
          <p>Read Full Article</p>
        </div>
      </div>
    )
};

export default Article;
