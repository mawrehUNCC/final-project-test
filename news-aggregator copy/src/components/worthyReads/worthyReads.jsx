import { useNewsContext } from "../../context/Context";
import Loader from "../loader/Loader";
import ErrorMessage from "../errorMessage/ErrorMessage";
import ArticleMD from "../articleCards/ArticleMD";
import "./worthyReads.css";

function WorthyReads() {
  const { worthyArticles, loading, error } = useNewsContext();

  if (loading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="WR-feed">
      {!worthyArticles || worthyArticles.length === 0 ? (
        <p className="no-news-message">
          No recommended articles found. Please try again later!
        </p>
      ) : (
        <div className="WR-grid">
          {worthyArticles.map((article, index) => (
            <ArticleMD key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default WorthyReads;