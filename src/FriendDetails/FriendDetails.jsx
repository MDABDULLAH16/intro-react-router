import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  return (
    <div>
      <h1>SHow me Friend Details</h1>
      <p>Name: {friend.name}</p>
      <p>Email: {friend.email}</p>
    </div>
  );
};

export default FriendDetails;
