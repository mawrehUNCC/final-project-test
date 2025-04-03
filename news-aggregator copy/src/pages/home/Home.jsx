import React from "react";
import { NewsProvider } from "../../context/Context";
import TagMenu from "../../components/tagMenu/TagMenu";
import RecommendedReads from "../../components/recommendedReads/recommendedReads";
import PopularCollections from "../../components/popularCollections/popularCollections";
import WorthyReads from "../../components/worthyReads/worthyReads";
import "./Home.css";

function Home() {
  const todayDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="home-container">
      {/* Greeting */}
      <div className="greeting-container">
        <p className="greeting">Hello! Welcome to Pocket</p>
        <hr className="divider" />
      </div>
      {/* Recent Saves */}
      <div className="recent-saves-header">
        <h1>Recent Saves</h1>
        <a href="/saves">Go to Saves</a>
        <hr className="divider" />
      </div>
      {/* Recommended Reads */}
      <div className="recommended-reads-header">
        <h1>Recommended Reads</h1>
        <p>Based on your likes</p>
        <div className="recommended-reads-container">
          <NewsProvider>
            <RecommendedReads />
          </NewsProvider>
        </div>
        <hr className="divider" />
      </div>
      {/* Tag Menu */}
      <div className="tag-menu-header">
        <h1>Popular Tags</h1>
        <p>Filter by your favorite topic.</p>
      </div>
      <div className="tag-menu-container">
        <TagMenu />
        <hr className="divider" />
      </div>
      {/* Today's Pocket Hits */}
      <div className="pocket-hits-header">
        <h1>Today's Pocket Hits</h1>
        <p>{todayDate}</p>
        <hr className="divider" />
      </div>
      {/* Popular Collections */}
      <div className="popular-collections-header">
        <h1>Popular Collections</h1>
        <p>Curated guides to the best reads on the web</p>
        <hr className="divider" />
      </div>
      <div className="popular-collections-container">
      <NewsProvider>
            <PopularCollections />
          </NewsProvider>
      </div>
      {/* Pocket-Worthy Reads */}
      <div className="worthy-reads-header">
        <h1>Pocket-Worthy Reads</h1>
        <p>Stories to fuel your mind</p>
        <hr className="divider" />
      </div>
      <div className="worthy-reads-container">
        <NewsProvider>
            <WorthyReads />
          </NewsProvider>
        </div>
      </div>
  );
}

export default Home;
