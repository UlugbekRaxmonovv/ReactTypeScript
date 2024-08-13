import React from "react";
import { ProductsSchema } from "@/context/types";
import './Products.css';

interface ProductsProps {
    products: ProductsSchema[] | undefined;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Products: React.FC<ProductsProps> = ({ products, setCount }) => {
    const links: JSX.Element[] | undefined = products?.map((product:ProductsSchema) => (
        <div key={product.id} className="card">
            <div className="img">
                <img src={product.images[0]} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
        </div>
    ));

    return (
        <div className="container">
            <div className="wrapper">
                {links}
            </div>
            <div className="btn">
                <button onClick={() => setCount(prevCount => prevCount + 4)}>Submits</button>
            </div>
        </div>
    );
}

export default Products;
