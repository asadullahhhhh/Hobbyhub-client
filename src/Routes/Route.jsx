import { createBrowserRouter } from "react-router";
import MainPage from "./Layout/MainPage/MainPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component : Signup
      },
    ],
  },
]);