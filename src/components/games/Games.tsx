import React from "react";
import GamesListItem from "./GamesListItem";
import { games, Game } from "../../util/games";

const Games: React.FC = (props) => {
  return (
    <div className="games container">
      <h2>Games</h2>
      <p>Section that contains games developed by me.</p>
      <br />
      <div className="games-main">
        <ul>
          {games.map((game: Game, i: number) => {
            return (
              <li key={i}>
                <GamesListItem
                  title={game.title}
                  description={game.description}
                  markdownFile={game.markdownFile}
                  image={game.image}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Games;
