import { useProductContext } from "../context/productContext";
import Products from "./Products";

const ProductList = () => {
  const { data } = useProductContext();
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 py-2">
      {data.map((currElem) => (
        <Products key={currElem.id} {...currElem} />
      ))}
    </div>
  );
};

export default ProductList;
