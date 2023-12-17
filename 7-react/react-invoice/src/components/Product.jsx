import React from "react";

const Product = ({ product: { id, name, price } }) => {
  // console.log(product);
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center mb-3">
      <p className="product-name">{name}</p>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default Product;
