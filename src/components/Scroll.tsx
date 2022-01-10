import React, { useEffect } from "react";
import Intro from "./Intro";
import Engineering from "./Engineering";
import DigitalArt from "./DigitalArt";
import Reading from "./Reading";
import Travel from "./Travel";

const Scroll: React.FC = (props) => {
  const reveal = () => {
    const reveals: NodeListOf<Element> =
      document.querySelectorAll(".content-scrollable");
    if (reveals == null) return;

    for (var i = 1; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 750 || windowWidth >= 1600) return;

    const content = document.querySelector(".content");
    if (content == null) return;

    content.addEventListener("scroll", reveal);

    return () => content.removeEventListener("scroll", reveal);
  });

  return (
    <main className="content">
      <div className="content-scrollable fade-in container">
        <Intro />
      </div>
      <div className="content-scrollable fade-in container">
        <Engineering />
      </div>
      <div className="content-scrollable fade-in container">
        <DigitalArt />
      </div>
      <div className="content-scrollable fade-in container">
        <Reading />
      </div>
      <div className="content-scrollable fade-in container">
        <Travel />
      </div>
    </main>
  );
};

export default Scroll;
