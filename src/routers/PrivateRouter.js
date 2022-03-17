import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};
