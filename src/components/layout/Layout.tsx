import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";
import Head from "next/head";

const Layout: React.FC = (props) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autoload=true&amp;skin=sunburst&amp;lang=css"
          defer={true}
        ></script>
        <title>My Website</title>
      </Head>
      <Header />
      <div className="container grid">
        {props.children}
        <Aside />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
