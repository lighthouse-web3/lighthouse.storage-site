import React from "react";
import {
  Header,
  Footer,
  Homebanner,
  Homepackage,
  Hometeam,
  Homebackedby,
  Homekeydiffrence,
  Homekeyfeatures,
  Homeroadmap,
} from "./containers";

import { DiscordFloat } from "./components";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* <title>{"TITLE"}</title> */}
      {/* <div className="bg_pattern"></div> */}
      <div className="bg_pattern2"></div>
      <div className="bg_pattern3"></div>
      <div className="bg_pattern4"></div>
      <div className="bg_pattern5"></div>
      <Header />
      <Homebanner />
      <Homepackage />
      <Homekeyfeatures />
      <Homekeydiffrence />
      <Homeroadmap />
      <Hometeam />
      <Homebackedby />
      <Footer />
      <DiscordFloat />
    </div>
  );
}

export default App;
