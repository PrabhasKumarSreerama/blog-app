import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import "./style.css";
import Chip from "../../Components/Common/Chip";
import Emptylist from "../../Components/Common/EmptyList";
import { blogList } from "../../config/data";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link className="blog-goback" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className="blog-date">Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subcategory">
              {blog.subCategory.map((category, index) => (
                <div>
                  <Chip label={category} key={index} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" />
          <p className="blog-desc">{blog.description}</p>
        </div>
      ) : (
        <Emptylist />
      )}
    </>
  );
};

export default Blog;
