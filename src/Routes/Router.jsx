import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layouts/Main";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import AddMeal from "../pages/AddMeal";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Meal from "../pages/Meal";
import Meals from "../pages/Meals";
import MyReviews from "../pages/MyReviews";
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
          fetch(
            `https://your-kitch-ph-assignment-11-backend.vercel.app/meals/${params.id}`
          ),
      },
      {
        path: "/addmeal",
        element: (
          <PrivetRoute>
            <AddMeal />
          </PrivetRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivetRoute>
            <MyReviews />
          </PrivetRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
