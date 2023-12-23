import React, { useRef, useState } from "react";

const ProductCreateFrom = ({ addProduct }) => {
  // const [productName, setProductName] = useState("");
  // const [productPrice, setProductPrice] = useState("");

  const nameRef = useRef("");
  const priceRef = useRef("");

  const handleAddBtn = () => {
    // console.dir(nameRef.current.value);
    // console.dir(priceRef.current.valueAsNumber);
    // addProduct()
    const newProduct = {
      id: Date.now(),
      name: nameRef.current.value,
      price: priceRef.current.valueAsNumber,
    };
    addProduct(newProduct);
    nameRef.current.value = "";
    priceRef.current.value = "";
  };
  return (
    <div className="border-t-2 p-3">
      <div id="newProductForm">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3">
            <label
              htmlFor="newProductName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Product Name
            </label>
            <input
              type="text"
              id="newProductName"
              name="new_product_name"
              ref={nameRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="newProductPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              type="number"
              id="newProductPrice"
              name="new_product_price"
              ref={priceRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              onClick={handleAddBtn}
              className="w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreateFrom;
