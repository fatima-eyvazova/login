import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
const Home = ({ query }) => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(
      data.filter((item) => {
        if (item.title.toLowerCase().includes(query.toLowerCase())) {
          return item;
        }
      })
    );
  }, [query]);

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap my-20 w-4/5">
          {data?.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
