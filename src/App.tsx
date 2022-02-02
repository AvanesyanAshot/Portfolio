import React from "react";
import About from "./components/about/About";
import Home from "./components/home/Home";
import NavMenu from "./components/nav-menu/NavMenu";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div className="content">
      <Home />
      <About />
      <Skills />
      <NavMenu />
    </div>
  );
};

export default App;
