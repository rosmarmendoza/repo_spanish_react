import { createContext, useReducer } from "react";

export const initialState = { theme: false, data: [], favs: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const globalReducer = (state, action) => {
    switch (action.type) {
      case "GET_DATA":
        return { ...state, data: action.payload };
      case "GET_THEME":
        return { ...state, theme: !state.theme };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
