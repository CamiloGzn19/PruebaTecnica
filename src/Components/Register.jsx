import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { registroEmailPasswordNombre } from "../Redux/actions/actionRegister";
import {
  Main,
  Logo,
  Form,
  Title,
  Lab,
  Inp,
  Check,
} from "../styles/Login_styles";

const Register = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    nombre: "User",
    email: "user@email.com",
    pass1: "123",
    pass2: "123",
  });

  const { nombre, email, pass1, pass2 } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    console.log(email, pass1, nombre);
    dispatch(registroEmailPasswordNombre(email, pass1, nombre));
  };

  return (
    <Main>
      <Form onSubmit={handleRegistro}>
        <Title>Regístrate</Title>
        <Lab>Nombre</Lab>
        <Inp
          type="text"
          name="nombre"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleInputChange}
        />
        <Lab>Correo</Lab>
        <Inp
          type="email"
          name="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={handleInputChange}
        />
        <Lab>Clave</Lab>
        <Inp
          type="password"
          name="pass1"
          placeholder="Ingresa tu contraseña"
          value={pass1}
          onChange={handleInputChange}
        />
        <Lab>Repite la clave</Lab>
        <Inp
          type="password"
          name="pass2"
          placeholder="Repite la contraseña"
          value={pass2}
          onChange={handleInputChange}
        />
        <br />
        <Check type="submit">Registrarme</Check>
      </Form>
    </Main>
  );
};

export default Register;
