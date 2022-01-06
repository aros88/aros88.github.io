export interface Post {
  title: string;
  description: string;
  date: string;
  tags: string[];
  markdownFile: string;
}

export const posts: Post[] = [
  {
    title: "Proximity Detection using Bluetooth Low Energy Technology to Identify Seated People",
    description: "Non-invasive monitoring system to recognize if a person is seated in a chair using Bluetooth Low Energy (BLE) technology.",
    date: "2018-01-12",
    tags: ["bluetooth low energy", "machine learning", "online k-means clustering", "kalman filter", "sensor fusion", "web application", "postgresql", "service oriented architecture", "ruby on rails", "reactjs"],
    markdownFile: "proximity.md",
  },
  // {
  //   title: "Administrative System with REST API using Rails and React.js + Redux for the frontend",
  //   description: "Administrative system for a textile company using a web oriented architecture with Ruby on Rails for the backend API and React.js with Redux for the frontend.",
  //   date: "2018-01-12",
  //   tags: ["ruby", "ruby on rails", "react.js", "redux", "jwt", "web application", "postgresql", "database triggers", "service oriented architecture"],
  //   markdownFile: "tejidos.md",
  // },
  {
    title: "Game of Briscola Developed in Android",
    description: "Android game based on the famous Italian card game.",
    date: "2018-01-12",
    tags: ["android game", "briscola", "java", "android studio", "android"],
    markdownFile: "briscola.md",
  }
];