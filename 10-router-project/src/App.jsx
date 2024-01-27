import React, { useEffect, useState } from "react";
import { GetBookData } from "./service/book.service";
import useFetch from "./hook/useFetch";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DetailBookPage,
  DashboardPage,
  InventoryPage,
  UserPage,
  AdminPage,
  BlogPage,
} from "./page";
import { NavComponents } from "./components";
import NotFound from "../not-found";

const App = () => {
  const { loading, error, data } = useFetch(GetBookData, "book");

  return (
    <div className="main">
      <NavComponents />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/detail/:id" element={<DetailBookPage />} /> */}
        <Route path="/detail/:slug" element={<DetailBookPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route index element={<InventoryPage />} />
          <Route path="user" element={<UserPage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

// custom hook
// => build in hook => useState,useEffect,useRef,useContext,useReducer,useLayoutEffect,useId,useTransition,useCallback,useMemo etc...
// => lib provide hook => useParams,useNavigate,useLocation,useSearchParams
// => useFetch
