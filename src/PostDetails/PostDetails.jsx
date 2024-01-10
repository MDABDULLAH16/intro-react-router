import React from "react";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  return (
    <div>
      <h3>Here is post Details which you clicked</h3>
      <h2>Title: {post.title}</h2>
      <p>Body :{post.body}</p>
    </div>
  );
};

export default PostDetails;
