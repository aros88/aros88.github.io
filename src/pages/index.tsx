import React from "react";
import Engineering from "../components/Engineering";
import Intro from "../components/Intro";

import DigitalArt from "../components/DigitalArt";
import Reading from "../components/Reading";
import Travel from "../components/Travel";

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
