import React, { useState } from "react";
import Header from "../../Components/Home/Header";
import SearchBar from "../../Components/Home/Search-bar";
import BlogList from "../../Components/Home/Blog-posts";
import { blogList } from "../../config/data";
import Emptylist from "../../Components/Common/EmptyList";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        formSubmit={handleSearchBar}
        clearSearch={handleClearSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!blogs.length ? <Emptylist /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
