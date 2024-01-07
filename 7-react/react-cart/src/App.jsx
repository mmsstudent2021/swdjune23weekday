import React, { useContext } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import ProductGroup from "./components/ProductGroup";
import Footer from "./components/Footer";
import CategoryGroup from "./components/CategoryGroup";
import Spacer from "./components/Spacer";
import CartDrawer from "./components/CartDrawer";
import { DataContext } from "./context/DataContext";

const App = () => {

  const {cartDrawer} = useContext(DataContext)
  return (
    <Layout>
      <Header />
      <Spacer size={100} />
      <CategoryGroup />
      <ProductGroup />
      <Footer />
      {cartDrawer && <CartDrawer />}
    </Layout>
  );
};

export default App;
