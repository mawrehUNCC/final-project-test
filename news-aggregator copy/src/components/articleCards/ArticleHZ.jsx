import React from "react";
import { Link } from "react-router";
import "./ArticleCards.css";
import defaultImage from "../../assets/defaultImage.jpg";

function ArticleHZ({ article }) {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <div>
      {/* HORIZONTAL ARTICLE CARD (E.G. COLLECTIONS OR DISCOVER) */}
      <Link to={article.url}>
        <img
          src={article.urlToImage || defaultImage}
          alt={article.title}
          className="img-HZ"
          onError={handleImageError}
        />
      </Link>
      <h2 className="title-HZ">{article.title}</h2>
      <p className="description-HZ">{article.description}</p>
      <span className="source-HZ">{article.source}</span>
    </div>
  );
}

export default ArticleHZ;
