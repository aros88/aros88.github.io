import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
import Avatar from "./Avatar";
import Links from "./Links";
import Stack from "./Stack";

const About: React.FC = (props) => {
  return (
    <div className="about container">
      <h2>About</h2>
      <div className="about-info">
        <div className="about-info-avatar">
          <Avatar />
        </div>
      </div>
      <div className="about-main">
        <img src="/images/about.jpg" alt="" />
      </div>
      <div className="about-description">
        <p>
          Thank you for visiting my website, as you probably noticed by now, web
          design is not one of my strenghts. This site was built as a way to
          practice my CSS and ReactJS skills.
        </p>
        <p>
          If you check the{" "}
          <a href="https://github.com/aros88/aros88.github.io" target="_blank">
            source code
          </a>
          , you will find that it is mostly CSS code that gives life to the
          site. This is intentional, the ReactJS components are mostly to avoid
          HTML duplication and to organize better the code.
        </p>
        <p>
          This site was built with a mobile first approach. It should look
          "decent" in every possible screen size available.
        </p>
        <p>
          If you liked the website and would like to give a donation (thank
          you!), feel free to{" "}
          <a href="https://www.buymeacoffee.com/aros88" target="_blank">
            buy me a <SiBuymeacoffee title="buy me a coffee" />
            coffee
          </a>{" "}
          ;)
        </p>
      </div>
      <div className="about-info">
        <div className="about-info-stack">
          <Stack />
        </div>
        <Links />
      </div>
    </div>
  );
};

export default About;
