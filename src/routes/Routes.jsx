import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import App from "../App";
import AddCraft from "../pages/AddCraft";
import All from "../pages/All";
import CraftDetail from "../pages/CraftDetail";
import MyList from "../pages/MyList";
import UpdateCraft from "../pages/UpdateCraft";
import AddCategory from "../pages/AddCategory";

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
      {
        path: "/myList",
        element: <MyList />,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: "/updateCraft/:id",
        element: <UpdateCraft />,
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
      },
      {
        path: "/addCategory",
        element: <AddCategory />
      },
    ]
  },
]);

export default router;