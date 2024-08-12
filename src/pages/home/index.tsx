import React, { useState } from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/product";
import Category from "../../components/category";

// No need to redefine Product interface as it's already defined in productApi
const Home: React.FC = () => {
  const [count, setCount] = useState<number>(4);
  const params = { limit: count };

  const [category, setCategory] = useState<string>(
    sessionStorage.getItem("category") || ""
  );

  const path = category ? `/category/${category}` : "";
  const { data, isFetching } = useGetProductsQuery({ url: path, ...params });

  return (
    <>
      <Category
        isFetching={isFetching}
        setCategory={setCategory}
        category={category}
      />
      <Products
        products={data?.products || []} // Safely access products array
        setCount={setCount}
      />
    </>
  );
};

export default Home;
