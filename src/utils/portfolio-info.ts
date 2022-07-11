import { PortfolioItem } from "./interfaces";

export const portfolioInfo: PortfolioItem[] = [
  {
    id: 1,
    title: "Art Gallery Online",
    desc: "An e-commerce platform that allows users to post their homemade art for sale, and purchase art posted by other users.",
    tools: [
      { id: 1, name: "MERN" },
      { id: 2, name: "GraphQL" },
      { id: 3, name: "Stripe" },
      { id: 4, name: "Firebase Auth" },
      { id: 5, name: "Firebase Storage" },
    ],
    github: "https://github.com/Stevtm/art-gallery-online",
    link: "https://shrouded-sands-03163.herokuapp.com/",
  },
  {
    id: 2,
    title: "TLNT",
    desc: "A Talent repository that can be used by talent to create profiles and by agents to search and filter talent profiles.",
    tools: [
      { id: 1, name: "Sequelize" },
      { id: 2, name: "Firebase Auth" },
      { id: 3, name: "Handlebars" },
    ],
    github: "https://github.com/Stevtm/talent-agency",
    link: "https://evening-reaches-27279.herokuapp.com/login",
  },
  {
    id: 3,
    title: "Budget Tracker",
    desc: "A simple budget tracker PWA that visualizes transactions and handles offline submissions.",
    tools: [
      { id: 1, name: "Mongoose" },
      { id: 2, name: "Express" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "IndexedDB" },
    ],
    github: "https://github.com/Stevtm/budget-tracker",
    link: "https://sheltered-river-01501.herokuapp.com/",
  },
  {
    id: 4,
    title: "Tech Blog",
    desc: "CMS-style blog site that allows users to create accounts, create, modify, and delete blog posts, and comment on existing posts.",
    tools: [
      { id: 1, name: "Sequelize" },
      { id: 2, name: "Handlebars" },
      { id: 3, name: "Express-Session" },
      { id: 4, name: "Express" },
    ],
    github: "https://github.com/Stevtm/tech-blog",
    link: "https://stark-harbor-07287.herokuapp.com/",
  },
  {
    id: 5,
    title: "React TypeScript Quiz",
    desc: "Quiz app built using Open Trivia Database API using React, TypeScript, and styled-components. ",
    tools: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "styled-components" },
    ],
    github: "https://github.com/Stevtm/react-typescript-quiz",
    link: "https://stevtm.github.io/react-typescript-quiz/",
  },
];
