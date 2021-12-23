import React from "react";
import "../css/travel.css";

const Travel: React.FC = (props) => {
  return (
    <div className="travel">
      <h2>Travel</h2>
      <div className="travel-main">
        <img src="/images/travel.jpg" alt="" />
        <div className="travel-secondary">
          <p>
            I would argue that there is no activity more rewarding than
            travelling.
          </p>
          <p>
            Meeting new people and learning about different cultures can open
            your mind to new possibilities.
          </p>
          <p>
            I truly believe that travelling makes you a happier person, and is
            great for your mental health wellbeing.
          </p>
          <p>
            Some of the places I would love to visit are Japan and Australia.
            Maybe some day :).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Travel;
