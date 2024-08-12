import React from "react";
import { useGetProductCategoriesQuery } from '../../context/api/productApi';
import './Category.css'
interface CategoryComponentProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  isFetching: boolean;
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  setCategory,
  category: item,
  isFetching,
}) => {
  const { data } = useGetProductCategoriesQuery();

  const handleCategorySort: (e: React.MouseEvent<HTMLDataElement>) => void = (
    e
  ) => {
    const { value } = e.currentTarget;
    setCategory(value);
    sessionStorage.setItem("category", value);
  };

  const categoryItem: JSX.Element[] | undefined = data?.map(
    (category: string, inx: number) => (
      <li key={inx}>
        <data
          onClick={handleCategorySort}
          value={category}
          style={{
            background: item === category ? "#E4A16F" : "#fff",
            color: item === category ? "#fff" : "#000",
          }}
        >
          {item == category ? (isFetching ? "Loading..." : category) : category}
        </data>
      </li>
    )
  );

  return (
    <section id="category ">
      <div className="category container">
        <ul className="category__items">
          <li>
            <data
              onClick={() => {
                setCategory("")
                sessionStorage.setItem("category", "");
              }}
              value={""}
              style={{
                background: item === "" ? "#E4A16F" : "#fff",
                color: item === "" ? "#fff" : "#000",
              }}
            >
              All
            </data>
          </li>
          {categoryItem}
        </ul>
      </div>
    </section>
  );
};

export default CategoryComponent;
