import { typesProducts } from "../types/types";

const initialState = {
  ingredients: [],
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case typesProducts.list:
      return {
        ingredients: [...action.payload],
      };
    case typesProducts.add:
      return {
        ingredients: [action.payload],
      };
    case typesProducts.edit:
      return {
        ingredients: [...action.payload],
      };
    case typesProducts.delete:
      return {
        ingredients: state.ingredients.filter(
          (emp) => emp.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
