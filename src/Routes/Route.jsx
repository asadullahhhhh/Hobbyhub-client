import { createBrowserRouter } from "react-router";
import MainPage from "./Layout/MainPage/MainPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import MyGroup from "../Pages/MyGroup/MyGroup";
import CreateGrp from "../Pages/CreateGrp/CreateGrp";
import AllGroup from "../Pages/AllGroup/AllGroup";
import Homepage from "../Pages/Homepage/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
      {
        index : true,
        loader :async ()=> {
          const [banners] = await Promise.all([
            fetch("http://localhost:3000/banners"),
          ]);

          const [bannerData] = await Promise.all([
            banners.json()
          ])

          return {bannerData}
        } ,
        Component : Homepage
      },
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