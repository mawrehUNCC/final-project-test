import React from 'react';
import { useNavigate } from "react-router-dom";
import './TagMenu.css';

function TagMenu() {
  const navigate = useNavigate();
  return (
    <div className ="tag-menu-container">
      <button className="tag-button" onClick={() => navigate("/business")}>Business</button>
      <button className="tag-button" onClick={() => navigate("/career")}>Career</button>
      <button className="tag-button" onClick={() => navigate("/education")}>Education</button>
      <button className="tag-button" onClick={() => navigate("/entertainment")}>Entertainment</button>
      <button className="tag-button" onClick={() => navigate("/food")}>Food</button>
      <button className="tag-button" onClick={() => navigate("/gaming")}>Gaming</button>
      <button className="tag-button" onClick={() => navigate("/health")}>Health & Fitness</button>
      <button className="tag-button" onClick={() => navigate("/parenting")}>Parenting</button>
      <button className="tag-button" onClick={() => navigate("/finance")}>Personal Finance</button>
      <button className="tag-button" onClick={() => navigate("/politics")}>Politics</button>
      <button className="tag-button" onClick={() => navigate("/science")}>Science</button>
      <button className="tag-button" onClick={() => navigate("/self-improvement")}>Self-Improvement</button>
      <button className="tag-button" onClick={() => navigate("/sports")}>Sports</button>
      <button className="tag-button" onClick={() => navigate("/technology")}>Technology</button>
      <button className="tag-button" onClick={() => navigate("/travel")}>Travel</button>
    </div>
  );
};

export default TagMenu;