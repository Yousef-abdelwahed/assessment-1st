import React from "react";

//ui utilities
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "../Component/Layout";
import Movies from "../Component/padges/Movies";
import TvShow from "../Component/padges/TvShow";
import Auth from "../Component/padges/Auth";
import NotFound from "../Component/padges/NotFound";
let router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <Movies /> },
      { path: "people", element: <Auth /> },
      { path: "tvshow", element: <TvShow /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
