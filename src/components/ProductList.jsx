import { useProductContext } from "../context/productContext";
import Products from "./Products";


const ProductList = () => {
  const { data } = useProductContext();
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-2 my-4">
      {data.map((currElem) => (
        <Products key={currElem.id} {...currElem} />
      ))}
    </div>
  );
};

export default ProductList;
