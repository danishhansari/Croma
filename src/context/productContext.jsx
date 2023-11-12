import { useContext, useEffect } from "react";
import { createContext } from "react";
import axios from "axios"
import { data } from "autoprefixer";

const AppContext = createContext();

const API = "https://fakestoreapi.com/products";
const AppProvider = ({ children }) => {
    const getProducts = async(url) => {
        const res = await axios.get(url);
        const data = await res.data;
        console.log(data)
    }
    useEffect(() => {
        getProducts(API)
    },[])

  return <AppContext.Provider value="Danish">{children}</AppContext.Provider>;
};
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
