import React, { useState } from "react";
import Header from "./components/Header";
import CheckoutForm from "./components/CheckoutForm";
import RecordTable from "./components/RecordTable";
import Footer from "./components/footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  const [products, setProduct] = useState([
    { id: 1, name: "Apple", price: 1.99 },
    { id: 4, name: "Grapes", price: 3.99 },
    { id: 5, name: "Mango", price: 2.25 },
  ]);

  const [records, setRecord] = useState([]);

  // console.table(records);

  const [openDrawer, setOpenDrawer] = useState(false);

  const addProduct = (newProduct) => {
    setProduct([...products, newProduct]);
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const addRecord = (newRecord) => {
    const isExitedRecord = records.find(
      (el) => el.product_id === newRecord.product_id
    );
    if (isExitedRecord) {
      updateRecordQuantity(isExitedRecord.id, newRecord.quantity);
    } else {
      setRecord([...records, newRecord]);
    }
  };

  const updateRecordQuantity = (id, addQuantity) => {
    setRecord(
      records.map((el) => {
        if (el.id === id) {
          const newQuantity = el.quantity + addQuantity;
          const newCost = el.price * newQuantity;
          return { ...el, quantity: newQuantity, cost: newCost };
        }
        return el;
      })
    );
  };

  const removeRecord = (id) => {
    setRecord(records.filter((el) => el.id != id));
  };

  return (
    <div className="max-w-[700px] px-5 lg:px-0 mx-auto min-h-screen flex flex-col">
      <Header />
      <CheckoutForm addRecord={addRecord} products={products} />
      <RecordTable
        updateRecordQuantity={updateRecordQuantity}
        records={records}
        removeRecord={removeRecord}
      />
      <Footer handleDrawer={handleDrawer} />
      <ProductDrawer
        products={products}
        addProduct={addProduct}
        handleDrawer={handleDrawer}
        openDrawer={openDrawer}
      />
    </div>
  );
};

export default App;
