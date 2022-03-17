import React from "react";
import {
  Main,
  Form,
  Title,
  Lab,
  Inp,
  Red,
  Stam,
  Check,
  Reg,
} from "../styles/Login_styles";
import { useDispatch } from "react-redux";
import { loginEmailPassword, loginFacebook, loginGoogle } from "../Redux/actions/actionLogin";
import { useForm } from "../hooks/useForm";
import { Link } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <Main>
      <Form onSubmit={handleLogin}>
        <Title>Iniciar sesión</Title>
        <Lab>Correo</Lab>
        <Inp
          type="email"
          placeholder="Ingresa tu correo"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <Lab>Clave</Lab>
        <Inp
          type="password"
          placeholder="Contraseña"
          autoComplete="true"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <br />
        <div>
          <Red>
            <Stam
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646793760/Sprint%203/googl_voyr6f.png"
              alt="Google"
              onClick={handleGoogle}
            />
          </Red>
          <Red>
            <Stam
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1646793759/Sprint%203/facebook_dcsx7u.png"
              alt="Facebook"
              onClick={handleFacebook}
            />
          </Red>
        </div>
        <Check>Continuar</Check>
      </Form>
      <h3>¿Eres nuevo?</h3>
      <Link to="/register">
        <Reg>Crea tu cuenta</Reg>
      </Link>
    </Main>
  );
};

export default Login;
