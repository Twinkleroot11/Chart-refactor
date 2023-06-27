import { createBrowserRouter } from "react-router-dom";
import Main from "../page/Main";
import Chart from "../page/Chart";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/chart/:name",
        element: <Chart />,
      },
    ],
  },
]);
