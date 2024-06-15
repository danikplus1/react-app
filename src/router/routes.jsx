import {
  LoginPage,
  RegistrationPage,
  ForgotPasswordPage,
  DashboardPage,
} from "../pages";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
];
