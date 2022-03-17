import { typesProducts } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import {
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  query,
  where,
} from "@firebase/firestore";

//Listar

export const listProductsAsync = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "Ingredients"));
    const ingrediente = [];
    querySnapshot.forEach((doc) => {
      ingrediente.push({
        ...doc.data(),
      });
    });
    dispatch(listSync(ingrediente));
  };
};

export const listSync = (ingrediente) => {
  return {
    type: typesProducts.list,
    payload: ingrediente,
  };
};

// Agregar

export const registerProductAsync = (product, brand, quantity, price) => {
  return (dispatch) => {
    const newProduct = {
      product,
      brand,
      quantity,
      price,
    };
    addDoc(collection(db, "Ingredients"), newProduct)
      .then((resp) => {
        dispatch(registerProductSync(newProduct));
        dispatch(listProductsAsync());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerProductSync = (product) => {
  return {
    type: typesProducts.add,
    payload: product,
  };
};

// Editar

export const editAsyn = (product, values) => {
  console.log(values);
  return async (dispatch) => {
    const traerCollection = collection(db, "Ingredients");
    const q = query(traerCollection, where("product", "==", product));
    const datosQ = await getDocs(q);
    let id;
    datosQ.forEach(async (docu) => {
      id = docu.id;
    });
    console.log(id);

    const docRef = doc(db, "Ingredients", id);
    console.log(docRef);
    await updateDoc(docRef, values).then(() => listProductsAsync());
  };
};

export const editSyn = (product, values) => {
  return {
    type: typesProducts.edit,
    payload: values,
  };
};

// Eliminar

export const deleteProductAsync = (product) => {
  return async (dispatch) => {
    const estCollection = collection(db, "Ingredients");
    console.log(estCollection);
    const q = query(estCollection, where("product", "==", product));
    const datos = await getDocs(q);
    console.log(datos);
    datos.forEach((docu) => {
      deleteDoc(doc(db, "Ingredients", docu.id));
    });
    dispatch(deleteSync(product));
  };
};

export const deleteSync = (product) => {
  return {
    type: typesProducts.delete,
    payload: product,
  };
};
