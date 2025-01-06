import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutLayOut from "./Pages/RoutLayOut";
import TablePosts from "./Pages/TablePosts";
import Add from "./Pages/Add/Add";
import Details from "./Pages/Details/Details";
import Edit from "./Pages/Edit/Edit";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayOut />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TablePosts /> },
      { path: "post/add", element: <Add /> },
      {
        path: "post/:id",
        element: <Details />,
        loader: ({ params }) => {
          if (isNaN(params.id)) {
            throw new Response("Bad Request", { status: 400 });
          }
        },
      },
      { path: "post/edit", element: <Edit /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
