import React, { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
const App = () => {
  const scrollActive = (sections: NodeListOf<Element>) => {
    const scrollY = window.pageYOffset;
    sections.forEach((el: any) => {
      const sectionHeight = el.offsetHeight,
        sectionTop = el.offsetTop - 70,
        sectionId = el.getAttribute("id");
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`nav a[href*=${sectionId}]`)
          ?.classList.add("active__link");
      } else {
        document
          .querySelector(`nav a[href*=${sectionId}]`)
          ?.classList.remove("active__link");
      }
    });
  };
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => scrollActive(sections));
    return () => {
      window.removeEventListener("scroll", () => scrollActive(sections));
    };
  }, []);

  return (
    <div className="content">
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
