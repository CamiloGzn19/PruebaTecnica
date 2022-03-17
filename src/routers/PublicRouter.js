import { Navigate } from "react-router-dom";

export const PublicRouter = ({ isAuth, children }) => {
  return !isAuth ? children : <Navigate to="/*" />;
};
