import { useNewsContext } from "../../context/Context";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import ArticleMD from "../articleCards/ArticleMD";
import "./popularCollections.css";

function PopularCollections() {
  const { popularArticles, loading, error } = useNewsContext();

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="PC-feed">
      {!popularArticles || popularArticles.length === 0 ? (
        <p className="no-news-message">
          No popular articles found. Please try again later!
        </p>
      ) : (
        <div className="PC-grid">
          {popularArticles.map((article, index) => (
            <ArticleMD key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularCollections;