import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Meal from "../pages/Meal";
import Meals from "../pages/Meals";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/meals",
        element: <Meals />,
      },
      {
        path: "/meals/:id",
        element: <Meal />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/meals/${params.id}`),
      },
    ],
  },
]);

export default router;
