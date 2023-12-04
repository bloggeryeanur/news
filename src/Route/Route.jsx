import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home";
import Category from "../Component/Category";
import Main from "../Layout/Main";
import NewsDetails from "../Component/NewsDetails";
export const routess = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5555/news`),
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5555/category/${params.id}`),
      },

      {
        path: "/news/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5555/news/${params.id}`),
      },
    ],
  },
]);
