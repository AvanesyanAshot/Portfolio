import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import NavMenu from "./components/nav-menu/NavMenu";

const App = () => {
  return (
    <div className="content">
      <Home />
      <About />
      <NavMenu />
    </div>
  );
};

export default App;
