import React from "react";
import defaultImage from "../../assets/defaultImage.jpg";
import ArticleButtons from "../articleButtons/articleButtons";
import SaveButton from "../saveButton/saveButton";
import "./ArticleCards.css";

function ArticleMD({ article }) {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };
  return (
    <div className="card-MD">
      {/* REGULAR ARTICLE CARD */}
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <img
          src={article.urlToImage || defaultImage}
          alt={article.title || "Article Image"}
          className="img-MD"
          onError={handleImageError}
        />
      </a>
      <div className="content-MD">
        <p className="source-MD">{article.source?.name || "Unknown Source"}</p>
        <h3 className="title-MD">{article.title || "Untitled Article"}</h3>
        <p className="description-MD">
          {article.description || "No description available."}
        </p>
      </div>
      <div className="actions-container">
        <div className="article-buttons">
          <ArticleButtons />
        </div>
        <div className="save-button">
          <SaveButton />
        </div>
      </div>
    </div>
  );
}

export default ArticleMD;
