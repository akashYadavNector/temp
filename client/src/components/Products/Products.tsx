import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/HomeHeader";

const Products = () => {
  const { productId } = useParams();
  console.log("below is the product id");
  console.log(productId);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Products;
