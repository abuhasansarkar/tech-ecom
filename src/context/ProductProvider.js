import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";
import { actionTypes } from "../state/ProductState/actionTypes";

const PRODUCTS_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  console.log(state);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("products.json")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      )
      .catch(() => {
        dispatch({ type: actionTypes.FETCHING_ERROR });
      });
  }, []);

  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCTS_CONTEXT.Provider value={value}>
      {children}
    </PRODUCTS_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCTS_CONTEXT);
  return context;
};

export default ProductProvider;
