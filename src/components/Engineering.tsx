import React from "react";
// import src from "../resources/programming.jpeg";
import "../css/engineering.css";

const Engineering: React.FC = () => {
  return (
    <div className="career">
      <h2>Engineering</h2>
      <div className="career-main">
        <img src="/images/engineering.jpg" alt="career" />
      </div>
      <div className="career-secondary">
        <div className="text">
          <p>I am a systems engineer with several years of experience.</p>
          <p>
            I love testing out new technologies and always trying to stay up to
            date with the latest trends of the field.
          </p>
          <p>
            What I like most about IT is that, you can use your skills to have
            an impact in people's lives for the better, improve their quality of
            life with technology.
          </p>
          <p>
            Here you can find my{" "}
            <a
              href="https://docs.google.com/document/d/1KsBUzuq1yEyNMH401huHguZ26BNXvFTGhRA0u6Kx8gQ/edit?usp=sharing"
              target="_blank"
            >
              CV
            </a>{" "}
            and my{" "}
            <a href="https://www.linkedin.com/in/drosatom" target="_blank">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Engineering;
