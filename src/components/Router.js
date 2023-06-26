import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./../App";
import Dishes from "./Dishes";
import Dish from "./Dish";
import Countries from "./Countries";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/dishes" element={<Dishes />} />
      <Route exact path="/dish/:name" element={<Dish />} />
      <Route exact path="/countries" element={<Countries />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
