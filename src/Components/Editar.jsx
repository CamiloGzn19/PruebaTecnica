import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import {
  editAsyn
} from "../Redux/actions/actionProducts";
import {
  Card,
  Title,
  BtnClo,
} from "../styles/Editar_styles";
import { Form, Lab, Inp, Art } from "../styles/New_styles";


const Editar = ({ modal }) => {
  console.log(modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  // Crear nuevo ingrediente
  const [values, handleInputChange] = useForm({
    product: modal.product,
    brand: modal.brand,
    quantity: modal.quantity,
    price: modal.price,
  });

  const { product, brand, quantity, price } = values;

  console.log(values);

  // Editar un producto

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    dispatch(editAsyn(product, values));
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  // Cerrar ventana de edición
  const handleClose = () => {
    navigate("principal");
    setShow(false)
  };

  return (
    <>
      <Card show={show}>
        <Form onSubmit={handleSubmit}>
          <Title>Edita el ingrediente</Title>
          <Lab>Nombre</Lab>
          <Inp
            type="text"
            name="product"
            placeholder="Nombre del ingrediente"
            value={product}
            onChange={handleInputChange}
          />
          <Lab>Marca</Lab>
          <Inp
            type="text"
            name="brand"
            placeholder="Marca del ingrediente"
            value={brand}
            onChange={handleInputChange}
          />
          <Lab>Cantidad</Lab>
          <Inp
            type="text"
            name="quantity"
            placeholder="Ingresa la cantidad"
            value={quantity}
            onChange={handleInputChange}
          />
          <Lab>Precio</Lab>
          <Inp
            type="number"
            name="price"
            placeholder="Ingresa el precio"
            value={price}
            onChange={handleInputChange}
          />
          <br />
          <BtnClo
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
          >
            Guardar ingrediente
          </BtnClo>
          <Art>* Al guardar la página recargará en 2 segundos</Art>
          <BtnClo type="button" onClick={() => handleClose()}>
            Volver a la receta
          </BtnClo>
        </Form>
      </Card>
    </>
  );
};

export default Editar;
