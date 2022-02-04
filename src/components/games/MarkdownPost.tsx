import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface MarkdownPostProps {
  markdownText: string
}

const MarkdownPost: React.FC<MarkdownPostProps> = (props : MarkdownPostProps) => {
  const { markdownText } = props;

  return (
    <>
      <Link href="/games">Back to Games</Link>
      <article className="post">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownText}
        </ReactMarkdown>
      </article>
      <Link href="/games">Back to Games</Link>
    </>
  );
};

export default MarkdownPost;
