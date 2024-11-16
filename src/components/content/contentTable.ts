export type ContentType = {
  title: string;
  itemsArr: ContentItem[];
};

export type ContentItem = {
  text: string;
  tooltip?: string;
  value: number;
};
const backSkillArr: ContentItem[] = [
  {
    text: "Firebase",
    value: 1,
  },
  {
    text: "MongoDB",
    value: 2,
  },
  {
    text: "Express",
    value: 3,
  },
  {
    text: "Nest.js",
    value: 4,
  },
  {
    text: "Websockets",
    value: 3,
  },
  {
    text: "Postrgess",
    value: 2,
  },
  {
    text: "Node.js",
    value: 4,
  },
  {
    text: "Mongoose",
    value: 1,
  },
  {
    text: "REST",
    value: 3,
  },
  {
    text: "Socket.io",
    value: 2,
  },
  {
    text: "Data Grip",
    value: 1,
  },
  {
    text: "GraphQL (SDL)",
    value: 3,
  },
  {
    text: "Swagger/Redoc (OpenAPI)",
    value: 2,
  },
];
const frontSkillArr: ContentItem[] = [
  {
    text: "HTML5",
    value: 2,
  },
  {
    text: "JavaScript (ES6+)",
    value: 3,
  },
  {
    text: "Next.js",
    value: 4,
  },
  {
    text: "CSS3",
    value: 2,
  },
  {
    text: "SCSS",
    value: 3,
  },
  {
    text: "Tailwind CSS",
    value: 4,
  },
  {
    text: "Styled Components",
    value: 1,
  },
  {
    text: "Redux/Toolkit",
    value: 3,
  },
  {
    text: "React",
    value: 4,
  },
  {
    text: "RTK Query",
    value: 3,
  },
  {
    text: "TypeScript",
    value: 4,
  },
  {
    text: "React Query",
    value: 2,
  },
  {
    text: "Zustand",
    value: 1,
  },
  {
    text: "AJAX",
    value: 2,
  },
  {
    text: "Vite",
    value: 3,
  },
  {
    text: "Fetch API",
    value: 2,
  },
  {
    text: "Adaptive responsive layout",
    value: 3,
  },
  {
    text: "React Native",
    value: 2,
  },
  {
    text: "Expo",
    value: 1,
  },
];
const petProjects: ContentItem[] = [
  {
    text: "File Manager",
    value: 2,
  },
  {
    text: "Gem Puzzle",
    value: 2,
  },
  {
    text: "CRUD API",
    value: 2,
  },
  {
    text: "Bomberman",
    value: 2,
  },
  {
    text: "Websocket Backend",
    value: 2,
  },
  {
    text: "Medical Center",
    value: 2,
  },
  {
    text: "Online Store",
    value: 2,
  },
  {
    text: "Async Race",
    value: 2,
  },
  {
    text: "News Api",
    value: 2,
  },
  {
    text: "Song Bird",
    value: 2,
  },
  {
    text: "Online Zoo",
    value: 2,
  },
];

const otherSkills: ContentItem[] = [
  {
    text: "Docker",
    value: 2,
  },
  {
    text: "CI/CD (GitHub Actions)",
    value: 1,
  },
  {
    text: "Postman",
    value: 4,
  },
  {
    text: "Design patterns",
    value: 1,
  },
  {
    text: "Netlify/Vercel",
    value: 2,
  },
  {
    text: "Webpack",
    value: 3,
  },
  {
    text: "Swagger/Redoc",
    value: 4,
  },
  {
    text: "Android Studio",
    value: 1,
  },
  {
    text: "DevTools",
    value: 4,
  },
  {
    text: "Markdown",
    value: 2,
  },
  {
    text: "Git (Github/Gitlab)",
    value: 3,
  },
  {
    text: "VSCode/WebStorm",
    value: 2,
  },
  {
    text: "Babel",
    value: 1,
  },
  {
    text: "Prettier",
    value: 3,
  },
  {
    text: "ESLint",
    value: 2,
  },
  {
    text: "CEO",
    value: 1,
  },
  {
    text: "Cypress/Playwright",
    value: 1,
  },
  {
    text: "Mocha/Chai",
    value: 1,
  },
  {
    text: "React Testiong library",
    value: 1,
  },
  {
    text: "Jest/Vitest",
    value: 2,
  },
  {
    text: "OOP",
    value: 1,
  },
  {
    text: "Figma",
    value: 4,
  },
  {
    text: "Agile (Kanban, Scram",
    value: 2,
  },
];

export const content1: ContentType = {
  title: "Core Frondend Skills",
  itemsArr: frontSkillArr,
};
export const content2: ContentType = {
  title: "Backend Skills",
  itemsArr: backSkillArr,
};
export const content3: ContentType = {
  title: "Pet Projects",
  itemsArr: petProjects,
};
export const content4: ContentType = {
  title: "Developer Fundamentals",
  itemsArr: otherSkills,
};
