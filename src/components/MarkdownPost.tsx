import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from 'rehype-raw'

const MarkdownPost: React.FC = (props) => {
  const [markdownText, setMarkdownText] = useState("");
  const { id } = useParams();

  useEffect(() => {
    console.log(`${id}`);
    fetch(`/markdown/${id}`)
      .then((file) => file.text())
      .then((markdownText) => setMarkdownText(markdownText));
  }, []);

  return (
    <main className="content container">
      <article className="post">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownText}
        </ReactMarkdown>
      </article>
      <Link to="/posts">Back to Posts</Link>
    </main>
  );

};
export default MarkdownPost;
