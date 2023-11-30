import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../../../contexts/BasketContext";

const ProductCard = ({ product }) => {
  const { basket, setBasket } = useContext(BasketContext);
  const addToBasket = (id) => {
    const isExist = basket.find((item) => {
      return item.id == id;
    });
    if (!isExist) {
      let arr = [...basket];
      arr.push({ id });
      setBasket(arr);
    }
  };

  return (
    <Link
      Link
      to={`/product/${product.id}`}
      className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-1/2 p-3 mb-10 mr-6"
    >
      <img
        className="w-full h-96  object-center"
        src={product?.image}
        alt="Product"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {product.title.slice(0, 20)}...
        </h2>
        <p className="text-gray-600 text-base">
          {product.description.slice(1, 70)}...
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {product.price} $
          </span>
          <button
            onClick={() => {
              addToBasket(product.id);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
