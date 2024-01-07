import React, { useContext, useEffect, useRef } from "react";
import Container from "./Container";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const { toggleCartDrawer, carts,setCartBtnInfo } = useContext(DataContext);

  const cartBtnRef = useRef();

  useEffect(() => {

    setCartBtnInfo(cartBtnRef.current.getBoundingClientRect())
    
  },[])

  return (
    <header className="border-b-2 z-40 fixed w-full bg-white border-neutral-600">
      <Container>
        <div className="flex justify-between items-center py-3">
          <div className="brand">
            <h1 className="font-heading font-bold text-2xl">MMS Solutions</h1>
            <p className="text-neutral-500">E-commerce App</p>
          </div>
          <div className="control-btn flex gap-2">
            <div
              id="searchBar"
              className="border border-neutral-600 h-12 w-60 flex gap-3 px-2 items-center opacity-0 -translate-y-full"
            >
              <input
                id="searchBarInput"
                type="text"
                className="flex-grow focus-visible:outline-none"
              />
              <button id="clearSearchBarInput">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 stroke-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                  />
                </svg>
              </button>
            </div>
            <button
              className="border border-neutral-600 duration-100 active:scale-90 h-12 w-12 flex justify-center items-center"
              id="searchBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            <button
            ref={cartBtnRef}
              onClick={toggleCartDrawer}
              className="border duration-100 active:scale-90 border-neutral-600 bg-neutral-600 text-neutral-200 h-12 w-12 flex justify-center items-center animate__animated relative"
              id="cartBtn"
            >
              <span
                id="cartCountBadge"
                className="absolute bg-red-500 text-white flex justify-center items-center text-xs w-6 h-6 top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
              >
                {carts.length}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 stroke-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
