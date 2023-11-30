import React, { useContext, useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { BasketContext } from "../../../../contexts/BasketContext";

const Header = ({ query, setQuery }) => {
  const { basket } = useContext(BasketContext);
  const inputElement = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputElement.current.value);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-white">Products</h1>
        <div className="flex items-center space-x-4 relative">
          <div>
            <span className="absolute bottom-7 left-10 w-5	h-5 bg-violet-400 flex items-center justify-center rounded-3xl text-white">
              {basket.length}
            </span>
          </div>
          <FaCartShopping className="text-white text-3xl cursor-pointer mr-2" />
          <form onSubmit={handleSubmit}>
            <input
              ref={inputElement}
              type="text"
              placeholder="Search..."
              className="ml-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
