import { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [page, setPage] = useState();

  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
