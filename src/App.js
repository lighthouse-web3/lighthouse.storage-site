import React from "react";
import "./App.css";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/about";
import Blogs from "./pages/blogs/blogs";
import ViewBlog from "./pages/view-blog/ViewBlog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutPage />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/view-blog/:id" element={<ViewBlog />}></Route>
    </Routes>
  );
}

export default App;
