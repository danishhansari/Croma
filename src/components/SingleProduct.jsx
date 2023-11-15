import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

const API = "https://fakestoreapi.com/products";
const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetails = async () => {
    try {
      const response = await axios.get(`${API}/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="max-w-[1200px] mx-auto py-6">
      <button className="text-blue-500 m-4 text-xl">
        <NavLink to="/products">Back to Products</NavLink>
      </button>
      {product ? (
        <div className="flex flex-col md:flex-row  md:items-center justify-between">
          <img className="w-48 mx-auto" src={product.image} />
          <div className="md:w-2/3 p-2">
            <h2 className="text-center text-xl">{product.title}</h2>
            <p className="text-gray-800">{product.description}</p>
            <div className="flex items-center px-2 justify-between">
              <p className="text-2xl mt-4 text-red-400">${product.price}</p>
              <p className="ml-auto text-base font-medium text-green-500">
                30% off
              </p>
            </div>
            <p className="mt-4">{product.rating.count} reviews </p>
            <button className="md:block bg-red-500 hidden mt-4 py-2 px-4 text-white hover:bg-red-600">
              <NavLink to="/cart">Add to Cart</NavLink>
            </button>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
      <button className="block bg-red-500 md:hidden mx-2 py-2 px-4 text-white hover:bg-red-500">
        <NavLink to="/cart" >Add to Cart</NavLink>
      </button>
    </div>
  );
};

export default SingleProduct;
