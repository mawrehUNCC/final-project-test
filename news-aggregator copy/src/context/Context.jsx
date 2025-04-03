import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export const NewsContext = createContext();
export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const API_KEY = "10b209bf20b7445da3d310ac1354cbec";
  const BASE_URL = "https://newsapi.org/v2";

  const [articles, setArticles] = useState([]);
  const [recommendedArticles, setRecommendedArticles] = useState([]);
  const [popularArticles, setPopularArticles] = useState([]);
  const [worthyArticles, setWorthyArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [category, setCategory] = useState("");
  const [query, setQuery] = useState("");

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          apiKey: API_KEY,
          country: "us",
          page: currentPage,
          category,
          totalResults: 20,
          q: query,
        },
      });

      const allArticles = response.data.articles || [];
      setArticles(allArticles);
      setTotalResults(response.data.totalResults);

      // Categorize articles
      setRecommendedArticles(allArticles.slice(0, 3)); // First 3 articles as recommended
      setPopularArticles(allArticles.slice(4, 7)); // Next 3 articles as popular
      setWorthyArticles(allArticles.slice(8, 14)); // Next 6 articles as popular

      setLoading(false);
    } catch (error) {
      setError(
        `Could not fetch articles, please try again later. Error: ${error.message}`
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage, category, query]);

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <NewsContext.Provider
      value={{
        articles,
        recommendedArticles,
        popularArticles,
        worthyArticles,
        loading,
        error,
        fetchNews,
        currentPage,
        setCurrentPage,
        totalResults,
        category,
        changeCategory,
        setQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
