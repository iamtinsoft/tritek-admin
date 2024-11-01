import AdminDashboardPage from "../pages/AdminDashboardPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SignUpPage from "../pages/SignUpPage";
import { routerType } from "../types/router-type";
import AdminProtectedRoute from "./AdminProtectedRoute";

const PagesData: routerType[] = [
  {
    path: "/",
    element: <AuthenticationPage />,
  },
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password/:key",
    element: <ResetPasswordPage />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/monitoring",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/incident-management",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/analysis",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/file-manager",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardPage />
      </AdminProtectedRoute>
    ),
  },
  {
    path: "/admin/settings",
    element: (
      <AdminProtectedRoute>
        <AdminDashboardPage />
      </AdminProtectedRoute>
    ),
  },
];

export default PagesData;
