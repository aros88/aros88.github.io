import React from "react";
import Link from 'next/link';
import { SiBuymeacoffee } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <Link href="/">
          <h2>World of <span>Daniel</span></h2>
        </Link>
      </div>
      <div className="footer-secondary">
        © 2021 Daniel Rosato. Powered by CSS, ReactJS and Typescript.
        <a href="https://github.com/aros88/aros88.github.io" target="_blank">
          Site's source code
        </a>
        <br />
        <a href="https://www.buymeacoffee.com/aros88" target="_blank">
          buy me a <SiBuymeacoffee title="buy me a coffee" />coffee
        </a>
      </div>
    </footer>
  );
};

export default Footer;
