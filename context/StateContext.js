import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  return (
    <Context.Provider value={{ pages, setPages, setTotalPages, totalPages }}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
