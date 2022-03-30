import React from "react";

function PortfolioItem({ title, imageUrl, githubUrl, url }) {
  return (
    <div className="portfolio__item">
      <div className="image">
        <img src={imageUrl} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="buttons">
        <a href={githubUrl} className="btn" target="_blank">
          Github
        </a>
        <a href={url} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default PortfolioItem;
