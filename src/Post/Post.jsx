import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/postDetails/${id}`);
  };
  return (
    <div className="post">
      <h4>{title}</h4>
      <p>{body}</p>
      <h3>{id}</h3>
      <button>
        {" "}
        <Link to={`/postDetails/${id}`}>Post Details</Link>{" "}
      </button>
      <button onClick={handleShowDetails}>Show details</button>
    </div>
  );
};

export default Post;
