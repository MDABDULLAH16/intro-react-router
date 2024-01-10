import React from "react";
import "./NotFound.css"; // Import the CSS file

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
