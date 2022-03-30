import React from "react";

import PortfolioItem from "./PortfolioItem.comp";
import "./portfolio.styles.css";

const Portfolio = () => {
  const items = [
    {
      id: 0,
      title: "This is the title",
      imageUrl: "assets/portfolio1.jpg",
      githubUrl: "https://github.com",
      url: "https://vercel.com",
    },
    {
      id: 1,
      title: "This is the title",
      imageUrl: "assets/portfolio2.jpg",
      githubUrl: "https://github.com",
      url: "https://vercel.com",
    },
    {
      id: 2,
      title: "This is the title",
      imageUrl: "assets/portfolio3.jpg",
      githubUrl: "https://github.com",
      url: "https://vercel.com",
    },
    {
      id: 3,
      title: "This is the title",
      imageUrl: "assets/portfolio4.jpg",
      githubUrl: "https://github.com",
      url: "https://vercel.com",
    },
    {
      id: 4,
      title: "This is the title",
      imageUrl: "assets/portfolio5.png",
      githubUrl: "https://github.com",
      url: "https://vercel.com",
    },
    {
      id: 5,
      title: "This is the title",
      imageUrl: "assets/portfolio6.jpg",
      githubUrl: "https://github.com",
      url: "https://vercel.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {items.map((item) => (
          <PortfolioItem {...item} key={item.imageUrl} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
