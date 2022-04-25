import React from "react";
import "./App.css";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/about";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutPage />}></Route>
    </Routes>
  );
}

export default App;
