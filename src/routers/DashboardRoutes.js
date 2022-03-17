import { Routes, Route, Navigate } from "react-router-dom";
import Modificar from "../Components/Modificar";
import Navbar from "../Components/Navbar";
import Principal from "../Components/Principal";

export const DashboardRoutes = () => {
  return (
    <>
    <Navbar />
      <div>
        <Routes>
          <Route path="*" element={<Navigate to="/principal" />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/modificar" element={<Modificar />} />
        </Routes>
      </div>
    </>
  );
};
