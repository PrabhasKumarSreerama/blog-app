import React from "react";
import Home from "./pages/home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/blog-page";
import NoPage from "./pages/nopage";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
};

export default App;
