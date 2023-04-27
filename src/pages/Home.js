import React from "react";
import { useProducts } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();
  // console.log(products);

  let content;

  if (loading) {
    content = <h1>Loading..................</h1>;
  }
  if (error) {
    content = <p>Something is wrong !</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <h1>Sorry, Don't have any product !</h1>;
  }
  if (!loading && !error && products.length) {
    content = (
      <>
        {products.map((product,) => (
          <ProductCard key={product.model} product={product}></ProductCard>
        ))}
      </>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {content}
      </div>
    </div>
  );
};

export default Home;
