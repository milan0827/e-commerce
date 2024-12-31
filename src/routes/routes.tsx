import AppLayout from "@/layout/AppLayout";
import Featured from "@/pages/Featured";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/featured" />,
      },
      {
        path: "/featured",
        element: <Featured />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
