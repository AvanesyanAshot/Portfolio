import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import NavMenu from "./components/nav-menu/NavMenu";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

const App = () => {
  return (
    <div className="content">
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <NavMenu />
    </div>
  );
};

export default App;
