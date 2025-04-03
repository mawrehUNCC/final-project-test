import React from "react";
import { Link } from "react-router";
import "./ArticleCards.css";
import defaultImage from "../../assets/defaultImage.jpg";

function ArticleRS({ article }) {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <div>
      {/* RECENT SAVES ARTICLE CARD (E.G. HOME*/}
      <Link to={article.url}>
        <img
          src={article.urlToImage || defaultImage}
          alt={article.title}
          className="img-RS"
          onError={handleImageError}
        />
      </Link>
      <h2 className="title-RS">{article.title}</h2>
      <span className="source-RS">{article.source}</span>
    </div>
  );
}

export default ArticleRS;
