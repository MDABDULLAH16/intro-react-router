import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>Here is post Details which you clicked: {post.id}</h3>
      <h2>Title: {post.title}</h2>
      <p>Body :{post.body}</p>
      <button onClick={handleGoBack}>GO Back!!</button>
    </div>
  );
};

export default PostDetails;
