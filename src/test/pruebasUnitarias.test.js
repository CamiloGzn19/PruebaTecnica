import "@testing-library/jest-dom";
import { loginSincrono } from "../Redux/actions/actionLogin";
import { registerProductAsync } from "../Redux/actions/actionProducts";
import { loginReducer } from "../Redux/reducers/loginReducer";
import { productsReducer } from "../Redux/reducers/productsReducer";
import { types, typesProducts } from "../Redux/types/types";

describe("Pruebas unitarias", () => {
  // 1 Test de types de estado de usuario
  test("Comparar types1", () => {
    expect(types).toEqual({
      login: "login",
      register: "register",
      logout: "logout",
    });
  });
  // 2 Test de types de productos
  test("Comparar types2", () => {
    expect(typesProducts).toEqual({
      add: "add",
      list: "list",
      edit: "edit",
      delete: "delete",
    });
  });
  // 3 Test de reducers login
  test("Debe funcionar el login", () => {
    const initialState = {};
    const action = {
      type: types.login,
      payload: {
        id: "abc",
        displayname: "Camilo",
      },
    };
    const state = loginReducer(initialState, action);
    expect(state).toEqual({
      id: "abc",
      name: "Camilo",
    });
  });
  // 4 Test de reducers logout
  test("Cerrar sesión - logout", () => {
    const initState = [];

    const action = {
      type: types.logout,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual([]);
  });
  // 5 Test de actions, activar action por defecto
  test("Revisar el state por default", () => {
    const initState = {
      id: "abc",
      name: "Camilo",
    };
    // Este no existe
    const action = {
      type: types.Hola,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual(initState);
  });
  // 6 Test acciones asíncronas en actionLogin
  test("Validar login sincronico", () => {
    const id = "ABC";
    const displayname = "Camilo";

    const loginAction = loginSincrono(id, displayname);

    expect(loginAction).toEqual({
      type: types.login,
      payload: {
        id,
        displayname,
      },
    });
  });
  // 7 Test de agregar ingrediente
  test("Validar adición de ingredientes", () => {
    const initState = [];

    const action = {
      type: typesProducts.add,
      payload: {
        product: "Cebolla",
        brand: "Marcella",
        items: 1,
        price: 2.5,
        quantity: "1 Kg",
      },
    };

    const state = productsReducer(initState, action);
    expect(state).toEqual({
      ingredients: [
        {
          product: "Cebolla",
          brand: "Marcella",
          items: 1,
          price: 2.5,
          quantity: "1 Kg",
        },
      ],
    });
  });
  // 8 Test 
});
