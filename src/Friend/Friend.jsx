import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { id, name, email } = friend;
  return (
    <div className="friend">
      <h4>Name:{name}</h4>
      <h3>Email: {email}</h3>
      <Link to={`/friend/${id}`}>Show Friend Details</Link>
    </div>
  );
};

export default Friend;
