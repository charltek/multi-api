import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import IP from "./components/pages/IP";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ip" element={<IP />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
