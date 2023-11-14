import { useContext, useEffect, createContext, useState } from "react";
import axios from "axios";
const AppContext = createContext();

const API = "https://fakestoreapi.com/products";
const AppProvider = ({ children }) => {
  const [data, setData] = useState([])
  const getProducts = async (url) => {
    const res = await axios.get(url);
    setData(await res.data)
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return <AppContext.Provider value={{ data }}>{children}</AppContext.Provider>;
};
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
