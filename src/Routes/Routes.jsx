import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Login/Register/Register";
import AllJobs from "../Pages/Home/All Jobs/AllJobs";
import AppliedJobs from "../Pages/Home/Applied Jobs/AppliedJobs";
import MyJobs from "../Pages/Home/My Jobs/MyJobs";
import Blogs from "../Pages/Blogs/Blogs";
import ErrorPage from "./ErrorPage";
import Slider from "../Pages/Slider/Slider";
import Details from "../Components/Details";
import AddJobs from "../Pages/Home/Add A Jobs/AddJobs";
import ViewDetails from "./ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : () => fetch('http://localhost:5000/addproducts'),
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
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "addjobs",
        element: <AddJobs></AddJobs>,
      },
      {
        path: "/myJobs",
        element: <MyJobs></MyJobs>,
        loader : () => fetch('http://localhost:5000/addproducts'),

      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "slider",
        element: <Slider></Slider>,
      },
      {
        path: "details",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: '/details/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/addproducts/${params.id}`),
      }
    ],
  },
]);

export default router;
