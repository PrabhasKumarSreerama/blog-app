import React from "react";
import Header from "../../Components/Home/Header";
import SearchBar from "../../Components/Home/Search-bar";
import BlogList from "../../Components/Home/Blog-posts";
import { blogList } from "../../config/data";

const Home = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <BlogList blogs={blogList} />
    </div>
  );
};

export default Home;
