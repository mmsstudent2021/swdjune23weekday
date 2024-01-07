import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCart] = useState([]);

  const [cartBtnInfo, setCartBtnInfo] = useState({});

  const addCart = (newCart) => {
    setCart([...carts, newCart]);
  };

  const toggleCartDrawer = () => setCartDrawer(!cartDrawer);

  return (
    <DataContext.Provider
      value={{
        cartDrawer,
        toggleCartDrawer,
        carts,
        addCart,
        cartBtnInfo,
        setCartBtnInfo,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
