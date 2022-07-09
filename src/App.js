import React from "react";
import "./App.css";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/about";
import Blogs from "./pages/blogs/blogs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutPage />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
    </Routes>
  );
}

export default App;
