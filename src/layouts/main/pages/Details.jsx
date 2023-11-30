import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";

function Details() {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setProduct(result);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="w-screen	h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <div className="flex items-center justify-around gap-8">
            <div>
              <img
                src={product?.image}
                alt="Product Image"
                className="w-full mb-4 rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{product?.title}</h1>
              <p className="text-gray-700 mb-4">{product?.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-xl font-bold text-indigo-700">
                  $ {product?.price}
                </div>
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md">
                  Add to Cart
                </button>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-2">Product Category</h2>
                <p className="text-gray-700">{product?.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
