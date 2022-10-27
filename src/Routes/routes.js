import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import Error404 from "../Pages/Error404/Error404";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: () =>
          fetch("https://corporate-learning-server-site.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        loader: ({ params }) =>
          fetch(
            `https://corporate-learning-server-site.vercel.app/courses/${params.id}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `https://corporate-learning-server-site.vercel.app/courses/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error404></Error404>,
  },
]);
