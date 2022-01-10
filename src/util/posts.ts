export interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  markdownFile: string;
}

export const posts: Post[] = [
  {
    title: "Understanding CSS Flexbox",
    description: "Comprehensive post to try to understand the CSS flexbox feature and all its potential.",
    date: "2022-01-08",
    tags: ["HTML5", "CSS", "flexbox", "web development"],
    markdownFile: "flexbox.md"
  },
  {
    title: "Proximity Detection using Bluetooth Low Energy Technology to Identify Seated People",
    description: "Non-invasive monitoring system to recognize if a person is seated in a chair using Bluetooth Low Energy (BLE) technology.",
    date: "2018-01-12",
    tags: ["bluetooth low energy", "machine learning", "online k-means clustering", "kalman filter", "sensor fusion", "web application", "postgresql", "service oriented architecture", "ruby on rails", "reactjs"],
    markdownFile: "proximity.md",
  },
  {
    title: "Game of Briscola Developed in Android",
    description: "Android game based on the famous Italian card game.",
    date: "2018-01-12",
    tags: ["android game", "briscola", "java", "android studio", "android"],
    markdownFile: "briscola.md",
  }
];
