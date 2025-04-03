import React from "react";
import { Link } from "react-router";
import "./ArticleCards.css";
import defaultImage from "../../assets/defaultImage.jpg";

function ArticleLG({ article }) {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <div>
      {/* LARGER ARTICLE CARD (E.G. COLLECTIONS OR DISCOVER) */}
      <Link to={article.url}>
        <img
          src={article.urlToImage || defaultImage}
          alt={article.title}
          className="img-LG"
          onError={handleImageError}
        />
      </Link>
      <h2 className="title-LG">{article.title}</h2>
      <p className="description-LG">{article.description}</p>
      <span className="source-LG">{article.source}</span>
    </div>
  );
}

export default ArticleLG;
