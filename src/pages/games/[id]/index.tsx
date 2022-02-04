import MarkdownPost from "../../../components/games/MarkdownPost";
import { GetStaticProps, GetStaticPaths } from "next";
import { games, Game } from "../../../util/games";
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
  const gameList: Game[] = games;

  return {
    fallback: false,
    paths: gameList.map(game => ({
      params: { id: game.markdownFile },
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
