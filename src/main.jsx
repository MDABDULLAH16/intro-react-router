import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Contact from "./Contact/Contact.jsx";
import Order from "./Order/Order.jsx";
import Login from "./Login/Login.jsx";
import Friends from "./Friends/Friends.jsx";
import Fast from "./Fast/Fast.jsx";
import FriendDetails from "./FriendDetails/FriendDetails.jsx";
import Posts from "./Posts/Posts.jsx";
import PostDetails from "./PostDetails/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      { path: "/", element: <Fast></Fast> },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friend/:friendId",
        element: <FriendDetails></FriendDetails>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/post/",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "postDetails/:postId",
        element: <PostDetails></PostDetails>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
