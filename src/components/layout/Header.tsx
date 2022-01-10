import React from "react";
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-title">
        <Link href="/">
          <h1>World of <span>Daniel</span></h1>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
