import React from "react";

import { Route, Routes } from "react-router-dom";
import LoginAndSignUp from "./../Pages/LoginAndSignUp";
import Deals from "./../Pages/Deal";
import Inventory from "./../Pages/InventoryPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginAndSignUp />}></Route>
      <Route path="/signin" element={<LoginAndSignUp />}></Route>
      <Route path="/deals" element={<Deals />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="*" element={<h1>Page not found</h1>}></Route>
    </Routes>
  );
};

export default AllRoutes;
