import React, { useEffect } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import NavMenu from "./components/nav-menu/NavMenu";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
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
    });
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
