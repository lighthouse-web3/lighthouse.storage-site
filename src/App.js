import React from "react";
import "./App.css";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/about";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutPage />}></Route>
      <Route path="/page-not-found" element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default App;
