import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Register from "../Components/Register";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return (
      <div>
        <h1> Verificando... </h1>;
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRouter isAuth={isLoggedIn}>
              <Login />
            </PublicRouter>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRouter isAuth={isLoggedIn}>
              <Register />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter isAuth={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
