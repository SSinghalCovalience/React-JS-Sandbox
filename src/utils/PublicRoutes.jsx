import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../components/auth/authFunction";

const PublicRoutes = () => {
  const auth = isAuthenticated();

  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
