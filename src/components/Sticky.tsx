import React from "react";
import Engineering from "./Engineering";
import Intro from "./Intro";

import "../css/sticky.css";
import DigitalArt from "./DigitalArt";
import Reading from "./Reading";
import Travel from "./Travel";

const Sticky: React.FC = (props) => {
  return (
    <main className="content">
      <div className="sticky-content container">
        <Intro />
      </div>
      <div className="sticky-content container">
        <Engineering />
      </div>
      <div className="sticky-content container">
        <DigitalArt />
      </div>
      <div className="sticky-content container">
        <Reading />
      </div>
      <div className="sticky-content container">
        <Travel />
      </div>
    </main>
  );
};

export default Sticky;
