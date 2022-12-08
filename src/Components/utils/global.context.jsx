import { createContext, useMemo, useReducer } from "react";
import { actions, reducer } from "./globalReducer";

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = useMemo(
    () => ({
      theme: state.theme,
      setDarkTheme: () => {
        dispatch({ type: actions.SET_THEME_DARK });
      },
      setLightTheme: () => {
        dispatch({ type: actions.SET_THEME_LIGHT });
      },
    }),
    [state.theme]
  );
  console.log(providerState)
  return (
    <ContextGlobal.Provider value={{theme: providerState.theme, setDarkTheme: providerState.setDarkTheme, setLightTheme: providerState.setLightTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
