import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductsAsync } from "../Redux/actions/actionProducts";
import {
  Gen,
  Card,
  Rec,
  Opt,
  Det,
  Esp,
  Pef,
  Pag,
  Prop,
  Fina,
  Fina2,
  Utl,
  Not,
  Title,
  Title2,
  Priz,
  Lit,
  Lit2,
  Lit3,
  BtnChe,
  BtnChe2,
  BtnSel,
  BtnPro,
  BtnBuy,
  Art,
  Sep,
  Sep2,
  Art2,
  Art3,
  Item,
  Inp,
  Imag,
  BtnEdit,
} from "../styles/Principal_styles";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Principal = () => {
  // Utilidades
  const dispatch = useDispatch();

  // Estados
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [items, setItems] = useState(0);
  const [mul, setMul] = useState(1);

  // Traer productos
  useEffect(() => {
    dispatch(listProductsAsync());
  }, [dispatch]);

  const ingredient = useSelector((store) => store.ingredients);

  // Sumar a la cuenta

  const checked = ({ target }) => {
    const checked = target.checked;
    const price = target.value;
    if (checked) {
      if (total >= 0) {
        setTotal(total + Number(price));
        setSubtotal(total + Number(price));
        setItems(items + 1);
      }
    } else if (total <= 0) {
      setTotal(0);
    } else {
      setTotal(total - Number(price));
      setSubtotal(total - Number(price));
      setItems(items - 1);
    }
  };

  // Seleccionar todos los ingredientes

  const selectAll = () => {
    const select = document.getElementsByName("selected");
    for (let i = 0, n = select.length; i < n; i++) {
      select[i].checked = checked;
    }
    const totalIng = ingredient.ingredients.reduce(
      (sum, value) =>
        typeof Number(value.price) == "number"
          ? sum + Number(value.price)
          : sum,
      0
    );
    setTotal(totalIng);
    setSubtotal(totalIng);
    setItems(select.length);
  };

  // Resetear la cuenta

  const resetAll = () => {
    const select = document.getElementsByName("selected");
    for (let i = 0, n = select.length; i < n; i++) {
      select[i].checked = !checked;
    }
    setTotal(0);
    setSubtotal(0);
    setItems(0);
    setMul(1)
  };

  // Multiplicar n veces el valor

  const sumItem = (e) => {
    let start = e.target.value;
    console.log(start);
    setMul(start);
  };

  // Acción comprar

  const comprarProductos = () => {
    Swal.fire({
      icon: "success",
      title: "Compra exitosa",
      text: "Disfruta de tu pedido",
    });
  };

  return (
    <>
      <Gen>
        {/* Descripción de la receta */}
        <Card>
          <Title>Risotto de setas (Vegano)</Title>
          <Rec>
            <Imag
              src="https://res.cloudinary.com/dilwbkj5s/image/upload/v1647460017/Prueba%20Tec/rice_hv6xxq.jpg"
              alt="image"
            />
            <Title2>Instrucciones</Title2>
            <Not>PREPARACIÓN</Not>
            <Lit3>
              <ul>
                <li>
                  Calienta el aceite de oliva junto con la margarina o
                  mantequilla vegetal en una sartén honda.
                </li>
                <li>
                  Fríe la cebolla y el ajo, luego agrega el arroz y remueve bien
                  hasta que el arroz se vuelva vidrioso, desde ese momento el
                  arroz está listo para absorber humedad.
                </li>
                <li>
                  Echa el vino blanco al y sigue removiendo hasta que el arroz
                  lo haya absorbido.
                </li>
                <li>
                  En el momento en el que el arroz ha absorbido la humedad,
                  agrega, siempre removiendo, una pizca de caldo de verduras y
                  repite hasta que todo el caldo haya sido absorbido. Esto lleva
                  de quince a veinte minutos.
                </li>
                <li>
                  Mientras tanto, calienta un poco de aceite en la sartén y fríe
                  las setas hasta que estén doradas.
                </li>
                <li>Sazona con un poco de sal y pimienta.</li>
                <li>
                  Agrega, aproximadamente cinco minutos antes de que el arroz
                  esté listo, los guisantes y los tomates secados al sol.
                </li>
                <li>
                  Cocina el arroz hasta que esté listo. Lo ideal es que el arroz
                  esté “al dente”.
                </li>
                <li>
                  Termina de cocinar las setas y añade una pizca de zumo de
                  limón, un poco de ralladura, el perejil fresco y
                  (opcionalmente) algunos copos de levadura nutricional.
                </li>
              </ul>
            </Lit3>
            <Link to="/modificar">
              <BtnEdit>Modifica los ingredientes</BtnEdit>
            </Link>
          </Rec>
        </Card>
        {/* Cuenta de los ingredientes */}
        <Card>
          <Title>Risotto de setas (Vegano)</Title>
          <Not>INGREDIENTES</Not>
          <Opt>
            <BtnSel>
              <Utl onClick={() => selectAll()}>Seleccionar todo</Utl>
            </BtnSel>
            <BtnSel>
              <Utl onClick={() => resetAll()}>Deseleccionar todo</Utl>
            </BtnSel>
          </Opt>
          <Sep />
          {ingredient === undefined ? (
            <h5> Loading... </h5>
          ) : (
            ingredient.ingredients.map((e) => (
              <Det key={e.product}>
                <BtnChe>
                  <BtnPro
                    type="checkbox"
                    name="selected"
                    value={e.price * mul}
                    onClick={checked}
                  ></BtnPro>
                </BtnChe>
                <BtnChe2>
                  <Inp
                    type="number"
                    min="0"
                    value={mul}
                    onChange={(e) => sumItem(e)}
                  />
                </BtnChe2>
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
          <Sep2 />
          <Item>
            <Lit>Items {items}</Lit>
          </Item>
          <Prop>
            <Fina>
              <Lit>Subtotal</Lit>
              <Lit>Gastos de envío</Lit>
              <Lit2>Total</Lit2>
            </Fina>
            <Fina2>
              <Lit>{subtotal.toFixed(2)}$</Lit>
              <Lit>7,00$</Lit>
              <Priz>{7 + Number(total.toFixed(2))}$</Priz>
            </Fina2>
          </Prop>
          <Pag>
            <BtnBuy onClick={() => comprarProductos()}>
              Comprar ingredientes: {7 + Number(total.toFixed(2))}
            </BtnBuy>
          </Pag>
        </Card>
      </Gen>
    </>
  );
};

export default Principal;
