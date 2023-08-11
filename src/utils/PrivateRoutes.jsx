import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../components/auth/authFunction";
import Appbar from "../components/common/Appbar";
import HocLanding from "../components/common/HocLanding";

const PrivateRoutes = () => {
  let auth = isAuthenticated();

  const HocWrapper = () => {
    return (
      <>
        <Appbar />
        <Outlet />
      </>
    );
  };

  return auth ? <HocWrapper /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
