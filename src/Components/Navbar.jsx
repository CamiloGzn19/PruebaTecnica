import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAsync } from "../Redux/actions/actionLogin";
import { Main, Title, BtnSes } from "../styles/Navbar_styles";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Cambio de pestañas

  const comeBack =  () => {
    navigate("/principal")
  }

  // Cerrar sesión

  const handleLogout = () => {
    dispatch(logoutAsync());
  };

  return (
    <Main>
      <Title onClick={comeBack}>Veg Kitchen</Title>
      <BtnSes onClick={() => handleLogout()}>Cerrar Sesión</BtnSes>
    </Main>
  );
};

export default Navbar;
