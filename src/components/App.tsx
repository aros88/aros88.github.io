import React, { useRef } from "react";
import Header from "./Header";
import About from "./About";
import Posts from "./Posts";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Aside from "./Aside";
import MarkdownPost from "./MarkdownPost";
import "../css/app.css";
import Sticky from "./Sticky";

const App: React.FC = (props) => {
  return (
    <>
      <Header />
      <div className="container grid">
        <Routes>
          <Route path="/" element={<Sticky />} />
          <Route path="/home" element={<Sticky />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/post/:id" element={<MarkdownPost />} />
        </Routes>
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default App;
