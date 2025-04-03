import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Saves from "./pages/saves/Saves";
import Discover from "./pages/discover/Discover";
import Collections from "./pages/collections/Collections";
import Friends from "./pages/friends/Friends";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Likes from "./pages/likes/Likes";
import Dislikes from "./pages/dislikes/Dislikes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saves" element={<Saves />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/dislikes" element={<Dislikes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
