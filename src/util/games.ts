export interface Game {
  title: string;
  description: string;
  date: string;
  tags: string[];
  markdownFile: string;
  image: string;
}

export const games: Game[] = [
  {
    title: "Sum Runner!",
    description: "Casual mobile game for iOS and Android",
    date: "2022-02-01",
    tags: ["Unity", "2D Game", "Mobile Game", "C#", "Game Development"],
    markdownFile: "sum-runner.md",
    image: "/images/sum-runner-icon.png"
  },
];
