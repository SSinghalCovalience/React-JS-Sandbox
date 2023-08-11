import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Login from "./components/auth/Login";
import HocLanding from "./components/common/HocLanding";
import AddEmployee from "./components/common/AddEmployee";
import EditEmployee from "./components/common/EditEmployee";
import NotFound from "./components/common/NotFound";
import PrivateRoutes from "./utils/PrivateRoutes";
import PublicRoutes from "./utils/PublicRoutes";

import "./App.css";

export default function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<HocLanding />} path="/" exact />
          <Route element={<AddEmployee />} path="/add" exact />
          <Route element={<EditEmployee />} path="/edit/:id" exact />
        </Route>
        <Route element={<PublicRoutes />}>
          <Route element={<Login />} path="/login" exact />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalProvider>
  );
}
