import React, { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { posts, Post } from "../../../util/posts";
import { GetStaticProps, GetStaticPaths } from 'next'

interface MarkdownPostProps {
  id: string
}

const MarkdownPost: React.FC<MarkdownPostProps> = (props : MarkdownPostProps) => {
  const [markdownText, setMarkdownText] = useState("");
  const { id } = props;

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
      <Link href="/posts">Back to Posts</Link>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postList: Post[] = posts;

  return {
    fallback: false,
    paths: postList.map((post) => ({
      params: { id: post.markdownFile },
    })),
  };
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const postId : string = context.params.id;

  return {
    props: {
      id: postId
    },
  };
}

export default MarkdownPost;
