import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  socket: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;
