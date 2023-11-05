import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Login/Register/Register";
import AllJobs from "../Pages/Home/All Jobs/AllJobs";
import AppliedJobs from "../Pages/Home/Applied Jobs/AppliedJobs";
import AddaJobs from "../Pages/Home/Add A Jobs/AddaJobs";
import MyJobs from "../Pages/Home/My Jobs/MyJobs";
import Blogs from "../Pages/Blogs/Blogs";
import UserProfile from "../Pages/Home/User Profile/UserProfile";
import ErrorPage from "./ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/allJobs',
        element: <AllJobs></AllJobs>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/addaJobs',
        element: <AddaJobs></AddaJobs>
      },
      {
        path: '/myJobs',
        element: <MyJobs></MyJobs>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: 'userProfile',
        element: <UserProfile></UserProfile>
      }


    ],
  },
]);

export default router;
