import "@testing-library/jest-dom";
import { loginSincrono } from "../Redux/actions/actionLogin";
import { loginReducer } from "../Redux/reducers/loginReducer";
import { productsReducer } from "../Redux/reducers/productsReducer";
import { registerReducer } from "../Redux/reducers/registerReducer";
import { types, typesProducts } from "../Redux/types/types";

describe("Pruebas unitarias", () => {
  // T1 Test de types de estado de usuario
  test("Comparar types1", () => {
    expect(types).toEqual({
      login: "login",
      register: "register",
      logout: "logout",
    });
  });
  // T2 Test de types de productos
  test("Comparar types2", () => {
    expect(typesProducts).toEqual({
      add: "add",
      list: "list",
      edit: "edit",
      delete: "delete",
    });
  });
  // T3 Test de reducers login
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
  // T4 Test de reducers logout
  test("Cerrar sesión - logout", () => {
    const initState = [];

    const action = {
      type: types.logout,
    };

    const state = loginReducer(initState, action);
    expect(state).toEqual([]);
  });
  // T5 Test de registro
  test("Validar registro de usuario", () => {
    const initialState = {};
    const action = {
      type: types.register,
      payload: {
        email: "Camilo@test.com",
        name: "Camilo",
        password: "Camilo123",
      },
    };
    const state = registerReducer(initialState, action);
    expect(state).toEqual({
      email: "Camilo@test.com",
      name: "Camilo",
      password: "Camilo123",
    });
  });
  // T6 Test de actions, activar action por defecto
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
  // T7 Test acciones asíncronas en actionLogin
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
  // T8 Test de agregar ingrediente
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
  // T9 Test de borrar ingrediente
  test("Validar ingrediente borrado", () => {
    const initState = {
      ingredients: [{}],
    };

    const action = {
      type: typesProducts.delete,
      payload: {},
    };

    const state = productsReducer(initState, action);
    expect(state).toEqual({
      ingredients: [{}],
    });
  });
});
