import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteProductAsync,
  listProductsAsync,
  registerProductAsync,
} from "../Redux/actions/actionProducts";
import {
  Gen,
  Card,
  Title,
  BtnClo,
  BtnPro,
  BtnPro2,
} from "../styles/Editar_styles";
import {
  Det,
  Esp,
  Pef,
  Priz,
  BtnChe,
  Art,
  Art2,
  Art3,
} from "../styles/Principal_styles";
import { Form, Lab, Inp } from "../styles/New_styles";
import { useForm } from "../hooks/useForm";
import Editar from "../Components/Editar";

const Modificar = () => {
  const dispatch = useDispatch();

  // Estados generales
  const [modal, setModal] = useState(false);
  const [enviarDatosModal, setEnviarDatosModal] = useState([]);

  // Traer productos
  useEffect(() => {
    dispatch(listProductsAsync());
  }, [dispatch]);

  // Traer ingredientes
  const ingredient = useSelector((store) => store.ingredients);

  // Crear nuevo ingrediente
  const [formValues, handleInputChange] = useForm({
    product: "",
    brand: "",
    quantity: "",
    price: "",
  });

  const { product, brand, quantity, price } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registerProductAsync(product, brand, quantity, price));
  };

  // Editar ingrediente

  const editar = (product) => {
    const traerProducto = ingredient.ingredients.find(
      (t) => t.product === product
    );
    setModal(true);
    setEnviarDatosModal(traerProducto);
  };

  return (
    <>
      <Gen>
        <Card>
          <Title>Ingresa más ingredientes</Title>
          <Form onSubmit={handleRegistro}>
            <Lab>Nombre</Lab>
            <Inp
              type="text"
              name="product"
              placeholder="Nombre del ingrediente"
              value={product}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <Lab>Marca</Lab>
            <Inp
              type="text"
              name="brand"
              placeholder="Marca del ingrediente"
              value={brand}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <Lab>Cantidad</Lab>
            <Inp
              type="text"
              name="quantity"
              placeholder="Ingresa la cantidad"
              value={quantity}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <Lab>Precio</Lab>
            <Inp
              type="number"
              name="price"
              placeholder="Ingresa el precio"
              value={price}
              onChange={handleInputChange}
              autoComplete="off"
              required
            />
            <br />
            <BtnClo>Guardar nuevo ingrediente</BtnClo>
          </Form>
        </Card>
        <Card>
          <Title>Edita los ingredientes</Title>
          {ingredient === undefined ? (
            <h5> Loading... </h5>
          ) : (
            ingredient.ingredients.map((e) => (
              <Det key={e.product}>
                <BtnChe>
                  <BtnPro2
                    onClick={() => dispatch(deleteProductAsync(e.product))}
                  >
                    X
                  </BtnPro2>
                  <BtnPro onClick={() => editar(e.product)}>Editar</BtnPro>
                </BtnChe>
                <Esp>
                  <Art>{e.product}</Art>
                  <Art2>{e.brand}</Art2>
                  <Art3>{e.quantity}</Art3>
                </Esp>
                <Pef>
                  <Priz>{e.price} $</Priz>
                </Pef>
              </Det>
            ))
          )}
          <Link to="/principal">
            <BtnClo>Volver a la receta</BtnClo>
          </Link>
        </Card>
        {modal === true ? <Editar modal={enviarDatosModal} /> : ""}
      </Gen>
    </>
  );
};

export default Modificar;
