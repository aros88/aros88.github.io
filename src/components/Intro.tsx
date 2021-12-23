import React from "react";
import "../css/intro.css";

const Intro: React.FC = (props) => {
  return (
    <div className="container intro">
      <div className="subtitle">
        <h2>Welcome!</h2>
      </div>
      <div className="content-intro">
        <p>Thank you for stopping by!</p>
        <p>
          Here you can find a little about myself, what I do, my interests,
          hobbies, among other things about me.
        </p>
        <p>Feel free to explore.</p>
        <p><b>Scroll down</b> for more details</p>
      </div>
    </div>
  );
};

export default Intro;
