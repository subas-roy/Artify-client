import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import App from "../App";
import AddCraft from "../pages/AddCraft";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>, 
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/addCraft",
        element: <AddCraft/>
      }
    ]
  },
]);

export default router;