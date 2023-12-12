import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import "./styles/App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route_item) => (
          <Route
            key={route_item.path}
            path={route_item.path}
            element={<route_item.component/>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
