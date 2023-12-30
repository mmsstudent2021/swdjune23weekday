import React, { useContext, useRef } from "react";
import { GeneralContext } from "../contexts/GeneralContext";

const CheckoutForm = () => {
  const idRef = useRef("");
  const quantityRef = useRef("");

  const { products, addRecord } = useContext(GeneralContext);

  const handleBuyBtn = () => {
    // console.log(idRef.current.value, quantityRef.current.valueAsNumber);
    const currentProduct = products.find(
      (product) => product.id === parseInt(idRef.current.value)
    );

    // console.log(currentProduct);

    const cost = currentProduct.price * quantityRef.current.valueAsNumber;
    const newRecord = {
      id: Date.now(),
      productId: parseInt(idRef.current.value),
      name: currentProduct.name,
      price: currentProduct.price,
      quantity: quantityRef.current.valueAsNumber,
      cost,
    };
    addRecord(newRecord);

    idRef.current.value = 1;
    quantityRef.current.value = "";
  };

  return (
    <section className="mb-10 block print:hidden">
      <div id="recordForm">
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your Product
            </label>
            <select
              id="productSelect"
              ref={idRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              {products.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantityInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantityInput"
              ref={quantityRef}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <button
              type="button"
              onClick={handleBuyBtn}
              className="font-heading w-full h-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
