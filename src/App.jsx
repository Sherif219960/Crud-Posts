import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RoutLayOut from "./Pages/RoutLayOut";
import AddPosts from './Pages/AddPosts'
import EditPosts from './Pages/EditPosts'
import Details from './Pages/Details'
import TablePosts from "./Pages/TablePosts";

const router = createBrowserRouter([{
  path: '/', element: <RoutLayOut />, children: ([
    { index: true, element: <TablePosts /> },
    { path: 'AddPosts', element: <AddPosts /> },
    { path: ':id/EditPosts', element: <EditPosts /> },
    { path: ':id', element: <Details /> },
  ])
}])
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
