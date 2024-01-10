import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div>
      <h2>Your Post here{posts.length}</h2>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={post.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
