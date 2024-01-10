import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className="post">
      <h4>{title}</h4>
      <p>{body}</p>
      <h3>{id}</h3>
      <button>
        {" "}
        <Link to={`/postDetails/${id}`}>Post Details</Link>{" "}
      </button>
    </div>
  );
};

export default Post;
