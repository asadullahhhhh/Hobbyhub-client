import { createBrowserRouter } from "react-router";
import MainPage from "./Layout/MainPage/MainPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import MyGroup from "../Pages/MyGroup/MyGroup";
import CreateGrp from "../Pages/CreateGrp/CreateGrp";
import AllGroup from "../Pages/AllGroup/AllGroup";

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
        Component: Signup,
      },
      {
        path : "allgroups",
        Component : AllGroup
      },
      {
        path: "myGroups",
        Component: MyGroup,
      },
      {
        path: "createGroups",
        Component : CreateGrp
      },
    ],
  },
]);