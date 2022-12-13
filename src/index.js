import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Post from "./pages/Post";
import PageError from "./pages/PageError";
import { Provider } from "react-redux";
import store from './store'
import Modal from "./Modal/Modal";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageError />,
    children: [
      { index: true, element: <Home /> },
      { path: "post/:id", element: <Post /> },
      { path: "post", element: <Post /> },
    ],
  },
]);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <Modal/>
  </Provider>
);
