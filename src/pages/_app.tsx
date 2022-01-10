import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout';

import "../css/about.css";
import "../css/aside.css";
import "../css/art.css";
import "../css/engineering.css";
import "../css/footer.css";
import "../css/header.css";
import "../css/intro.css";
import "../css/post.css";
import "../css/posts-list-item.css";
import "../css/reading.css";
import "../css/scroll.css";
import "../css/sticky.css";
import "../css/travel.css";
import "../css/app.css";
import "../css/posts.css";

const MyApp = ({ Component, pageProps } : AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
