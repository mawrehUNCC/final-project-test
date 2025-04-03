import React from "react";
import { Link } from "react-router-dom";
import "./ArticleCards.css";
import defaultImage from "../../assets/defaultImage.jpg";

function ArticleSM({ article }) {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <div>
      {/* SMALLER ARTICLE CARD (E.G. CAROUSELS, COLLECTIONS, DISCOVER*/}
      <Link to={article.url}>
        <img
          src={article.urlToImage || defaultImage}
          alt={article.title}
          className="img-SM"
          onError={handleImageError}
        />
      </Link>
      <h2 className="title-SM">{article.title}</h2>
      <p className="description-SM">{article.description}</p>
      <span className="source-SM">{article.source}</span>
    </div>
  );
}

export default ArticleSM;
