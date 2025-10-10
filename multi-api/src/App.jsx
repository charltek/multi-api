import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import IP from "./components/pages/IP";
import Pokemon from "./components/pages/Pokemon";
import Starwars from "./components/pages/Starwars";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ip" element={<IP />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/starwars" element={<Starwars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
