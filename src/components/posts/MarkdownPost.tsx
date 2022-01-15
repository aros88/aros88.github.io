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
      <Link href="/posts">Back to Posts</Link>
      <article className="post">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdownText}
        </ReactMarkdown>
      </article>
      <Link href="/posts">Back to Posts</Link>
    </>
  );
};

export default MarkdownPost;
