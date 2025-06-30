import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CreateList from "./pages/CreateList";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import ResetPassword from './pages/ResetPassword'; // reset password page
import ForgotPassword from './pages/ForgotPassword'; // forgot password page
import "./scss/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "homepage",
    element: <HomePage />,
  },
  {
    path: "createlist",
    element: <CreateList />,
  },
  {
    path: "mainpage",
    element: <MainPage />
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "signup",
    element: <SignUp />
  },  
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
  path: "forgot-password",
  element: <ForgotPassword />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
