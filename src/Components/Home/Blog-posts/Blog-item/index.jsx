import React from "react";
import Chip from "../../../Common/Chip";
import { Link } from "react-router-dom";
import "./Style.css";

const BlogItem = ({
  blog: {
    id,
    title,
    category,
    description,
    authorName,
    authorAvatar,
    createdAt,
    cover,
  },
}) => {
  return (
    <div className="blogitem">
      <img className="blogitem-img" src={cover} alt="img not present" />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className="blog-desc">{description}</p>
      <footer>
        <div className="blogitem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className="blogitem-link" to={`/blog/${id}`}>
          →
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
