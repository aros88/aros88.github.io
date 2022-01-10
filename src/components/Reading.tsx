import React from "react";

const Reading: React.FC = (props) => {
  return (
    <div className="reading">
      <h2>Reading</h2>
      <div className="reading-main">
        <img src="/images/reading.jpg" alt="reading" />
      </div>
      <div className="reading-secondary">
        <p>
          Not only it is an important activity to improve your knowledge and
          increase your mental capacity, but also as a way to transport yourself
          to amazing new worlds.
        </p>
        <p>
          Among my favorite authors are JRR. Tolkien, George Orwell and Mark
          Twain.
        </p>
        <p>
          Some of my favorite books are: The Old Man and the Sea, The Lord of
          the Rings, How to Win Friends and Influence People, A Brief History of
          Time, Thinking Fast and Slow, among others.
        </p>
      </div>
    </div>
  );
};

export default Reading;
