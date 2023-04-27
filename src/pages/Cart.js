import React from "react";
import { useProducts } from "../context/ProductProvider";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const {
    state: {cart, loading, error },
  } = useProducts();
  // console.log(cart);

  let content;

  if (loading) {
    content = <h1>Loading..................</h1>;
  }
  if (error) {
    content = <p>Something is wrong !</p>;
  }
  if (!loading && !error && cart.length === 0) {
    content = <h1>Sorry, Don't have any product !</h1>;
  }
  if (!loading && !error && cart.length) {
    content = (
      <>
        {cart.map((cartItem) => (
          <ProductCard key={cartItem.model} product={cartItem}></ProductCard>
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

export default Cart;
