export type ContentType = {
  title: string;
  itemsArr: ContentItem[];
};

export type ContentItem = {
  text: string;
  tooltip?: string;
  value: number;
};

const skillsArr: ContentItem[] = [
  {
    text: "JavaScript (ES6+)",
    value: 1,
  },
  {
    text: "TypeScript",
    value: 2,
  },
  {
    text: "React",
    value: 1,
  },
  {
    text: "Next.js",
    value: 3,
  },
  {
    text: "HTML5",
    value: 1,
  },
  {
    text: "CSS3",
    value: 2,
  },
  {
    text: "SCSS",
    value: 1,
  },
  {
    text: "Tailwind CSS",
    value: 3,
  },
  {
    text: "Styled Components",
    value: 1,
  },
  {
    text: "Redux/Toolkit",
    value: 2,
  },
  {
    text: "RTK Query",
    value: 1,
  },
  {
    text: "React Query",
    value: 3,
  },
  {
    text: "Zustand",
    value: 1,
  },
  {
    text: "Axios",
    value: 2,
  },
  {
    text: "Fetch API",
    value: 1,
  },
  {
    text: "Git",
    value: 3,
  },
  {
    text: "Webpack",
    value: 1,
  },
  {
    text: "GitHub/GitLab",
    value: 2,
  },
  {
    text: "Docker",
    value: 3,
  },
  {
    text: "CI/CD (GitHub Actions)",
    value: 1,
  },
  {
    text: "Postman",
    value: 3,
  },
  {
    text: "Swagger",
    value: 2,
  },
  {
    text: "DevTools",
    value: 1,
  },
  {
    text: "Vite",
    value: 3,
  },
  {
    text: "VSCode/WebStorm",
    value: 2,
  },
  {
    text: "MVC",
    value: 1,
  },
  {
    text: "ESLint",
    value: 2,
  },
  {
    text: "CEO",
    value: 3,
  },
  {
    text: "Responsice Layout",
    value: 1,
  },
];
const otherSkills: ContentItem[] = [
  {
    text: "WebSockets",
    value: 2,
  },
  {
    text: "Socket.io",
    value: 1,
  },
  {
    text: "Node.js",
    value: 1,
  },
  {
    text: "Express",
    value: 1,
  },
  {
    text: "Nest.js",
    value: 2,
  },
  {
    text: "MongoDB",
    value: 3,
  },
  {
    text: "Mongoose",
    value: 1,
  },
  {
    text: "GraphQL",
    value: 1,
  },
  {
    text: "Postgress",
    value: 2,
  },
  {
    text: "REST API",
    value: 3,
  },
  {
    text: "Socket.io",
    value: 1,
  },
  {
    text: "Jest",
    value: 2,
  },
  {
    text: "Cypress",
    value: 3,
  },
  {
    text: "Mocha",
    value: 2,
  },
  {
    text: "Istanbul",
    value: 3,
  },
  {
    text: "Firebase",
    value: 2,
  },
  {
    text: "Vitest",
    value: 3,
  },
  {
    text: "OOP",
    value: 2,
  },
  {
    text: "Figma",
    value: 3,
  },
  {
    text: "Agine (Kanban, Scram",
    value: 2,
  },
];

export const content1: ContentType = {
  title: /*"Core Skills"*/ "collocations",
  itemsArr: skillsArr,
};
export const content2: ContentType = {
  title: "Emerging Technologies",
  itemsArr: otherSkills,
};
export const content3: ContentType = {
  title: /*"Core Skills"*/ "collocations",
  itemsArr: skillsArr,
};
export const content4: ContentType = {
  title: "Emerging Technologies",
  itemsArr: otherSkills,
};
