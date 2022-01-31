import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import NavMenu from "./components/nav-menu/NavMenu";

const App = () => {
  return (
    <>
      <Home />
      <About />

      <NavMenu />
    </>
  );
};

export default App;
