import React from "react";
import "./App.css";
import HomePage from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/about";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import NFT from "./pages/NFT/NFT";
import FAQPage from "./pages/FAQPage/FAQPage";

import Blogs from "./pages/blogs/blogs";
import ViewBlog from "./pages/view-blog/ViewBlog";
import CareerPage from "./pages/career/CareerPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about-us" element={<AboutPage />}></Route>

      <Route path="*" element={<PageNotFound />}></Route>
      <Route path="/nft" element={<NFT />}></Route>
      <Route path="/faq" element={<FAQPage />}></Route>

      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/career" element={<CareerPage />}></Route>
      <Route path="/view-blog/:id/:name" element={<ViewBlog />}></Route>
    </Routes>
  );
}

export default App;
