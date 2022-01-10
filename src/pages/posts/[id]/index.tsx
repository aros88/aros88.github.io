import MarkdownPost from "../../../components/posts/MarkdownPost";
import { GetStaticProps, GetStaticPaths } from "next";
import { posts, Post } from "../../../util/posts";
import { useEffect, useState } from "react";

interface PagePostProps {
  postId: string;
}

const index = (props: PagePostProps) => {
  const [markdownText, setMarkdownText] = useState("");
  const { postId } = props;

  useEffect(() => {
    console.log(`${postId}`);
    fetch(`/markdown/${postId}`)
      .then((file) => file.text())
      .then((markdownText) => setMarkdownText(markdownText));
  }, []);

  return <MarkdownPost markdownText={markdownText} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postList: Post[] = posts;

  return {
    fallback: false,
    paths: postList.map((post) => ({
      params: { id: post.markdownFile },
    })),
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const postId: string = context.params.id;
  console.log(postId);

  return {
    props: {
      postId: postId,
    },
  };
};

export default index;
