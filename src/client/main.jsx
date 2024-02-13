import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Tasks from "./features/tasks/Tasks";
import Root from "./layout/Root.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Expense from "./features/expense/Expense.jsx";
import Analysis from "./features/analysis/Analysis.jsx";
import Need from "./features/expense/need/Need.jsx";
import Want from "./features/expense/want/Want.jsx";
import Saving from "./features/expense/saving/Saving.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <p>Home</p> },
      {
        path: "/expense/",
        element: <Expense />,
        children: [
          { path: "need", element: <Need /> },
          { path: "want", element: <Want /> },
          { path: "saving", element: <Saving /> },
        ],
      },
      { path: "/login", element: <AuthForm /> },
      { path: "/analysis", element: <Analysis /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
