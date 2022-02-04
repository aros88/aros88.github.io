import React from "react";
import Link from "next/link";

interface GamesListItemProps {
  title: string;
  description: string;
  markdownFile: string;
  image: string;
}

const GamesListItem: React.FC<GamesListItemProps> = (
  props: GamesListItemProps
) => {
  return (
    <div className="games-list-item">
      <div className="games-list-item-card">
        <div className="games-list-item-image">
          <Link href={{ pathname: `/games/${props.markdownFile}` }}>
            <img src={props.image} alt="game-image" />
          </Link>
        </div>
        <div className="games-list-item-content">
          <Link href={{ pathname: `/games/${props.markdownFile}` }}>
            <h4>{props.title}</h4>
          </Link>
          <p>{props.description}</p>
          <Link href={{ pathname: `/games/${props.markdownFile}` }}>
            <span>Read more...</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GamesListItem;
