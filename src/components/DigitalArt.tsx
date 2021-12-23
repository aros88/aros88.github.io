import React from "react";
import "../css/art.css";

const DigitalArt: React.FC = (props) => {
  return (
    <div className="art">
      <h2><span>Digital</span> Art</h2>
      <div className="art-main">
        <img src="/images/art.jpg" alt="art" />
        <div className="art-secondary">
          <p>I have always loved to draw.</p>
          <p>
            Lately I have been exploring the world of digital art, and it is
            amazing!
          </p>
          <p>
            The possibilities are endless and the tools get better each year. It
            almost feels like you are drawing on a piece of paper but with all
            the advantages that the software provides.
          </p>
          <p>
            I am still very new to this, but you can check out my own stuff at{" "}
            <a href="#" target="_blank">
              Instagram
            </a>{" "}
            or at{" "}
            <a href="#" target="_blank">
              ArtStation
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalArt;
