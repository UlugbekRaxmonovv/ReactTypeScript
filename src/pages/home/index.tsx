import React, { useState } from "react";
import { useGetProductsQuery } from "@/context/api/productApi";
import Products from "@/components/product";
import CategoryComponent from "@/components/category";

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
      <CategoryComponent
        isFetching={isFetching}
        setCategory={setCategory}
        category={category}
      />
      <Products
        products={data?.products} 
        setCount={setCount}
      />
    </>
  );
};

export default Home;
