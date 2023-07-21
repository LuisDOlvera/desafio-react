import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login";
import New from "./pages/New";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page Not Found</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: "/post",
    element: <Post />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
