import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adm from "./pages/Adm";
import Responsavel from "./pages/Responsavel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adm" element={<Adm />} />
      <Route path="/responsavel" element={<Responsavel />} />
    </Routes>
  );
}

export default App;