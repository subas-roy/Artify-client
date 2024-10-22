import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import App from "../App";
import AddCraft from "../pages/AddCraft";
import All from "../components/All";
import CraftDetail from "../components/CraftDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: "/addCraft",
        element: <AddCraft />
      },
      {
        path: "/all",
        element: <All />,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: "/craftDetail/:id",
        element: <CraftDetail />,
        loader: () => fetch('http://localhost:5000/crafts')
      },
    ]
  },
]);

export default router;