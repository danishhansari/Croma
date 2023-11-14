import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
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

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default SingleProduct;