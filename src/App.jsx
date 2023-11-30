import Home from "./layouts/main/pages/Home";
import Header from "./layouts/main/components/Header/Header";
import "../src/index.css";
import Details from "./layouts/main/pages/Details";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import { BasketProvider } from "../src/contexts/BasketContext";
import AuthLayout from "./layouts/auth/AuthLayout";
import Login from "./layouts/auth/pages/Login";
import { AuthProvider } from "./contexts/authContext";
import ProtectedRoute from "./helpers/ProtectedRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <MainLayout />,
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/product/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Navigate to={"login"} />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <>
      <AuthProvider>
        <BasketProvider>
          <RouterProvider router={router} />
        </BasketProvider>
      </AuthProvider>
    </>
  );
}

export default App;
