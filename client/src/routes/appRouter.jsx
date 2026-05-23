import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Signup from "../pages/Signup.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ProtectedRoute from "../components/protectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
        <MainLayout />
     
    ),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
