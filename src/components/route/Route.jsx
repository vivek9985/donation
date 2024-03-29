import { createBrowserRouter } from "react-router-dom";
import Donation from "./../../pages/donation/Donation";
import Statistics from "./../../pages/statistics/Statistics";
import Layout from "../layout/Layout";
import Details from "../donations/Details";
import Home from "./../../pages/home/Home";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: () => fetch("/donations.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      }
    ]
  }
]);
export default myRouter;
