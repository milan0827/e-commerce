import AppLayout from "@/layout/AppLayout";
import Cart from "@/pages/Cart";
import Featured from "@/pages/Featured";
import Gadgets from "@/pages/Gadgets";
import Kids from "@/pages/Kids";
import Men from "@/pages/Men";
import Women from "@/pages/Women";
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
      {
        path: "/carts",
        element: <Cart />,
      },
      {
        path: "/kids",
        element: <Kids />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/gadgets",
        element: <Gadgets />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
