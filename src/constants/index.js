import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  udemy,
  sargodhaUni,
  NUML,
  freelancing,
  evogym,
  tic_tac_toe,
  cara,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: " BSc Computer Science",
    company_name: " Sargodha University",
    icon: sargodhaUni,
    iconBg: "#383E56",
    date: "Sept 2016 - Aug 2018",
    points: [
      "Completed a 2-year Bachelor of Science in Computer Science.",
      "Gained proficiency in programming languages such as Java, C++, and Python.",
      "Developed strong problem-solving skills through coursework in algorithms and data structures.",
      "Conducted academic projects in software development and database management.",
    ],
  },
  {
    title: " MSc Computer Science",
    company_name: " NUML Islamabad",
    icon: NUML,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Jan 2022",
    points: [
      "Earned a 2-year Master of Science in Computer Science.",
      "Advanced knowledge in areas such as machine learning, data analysis, and artificial intelligence.",
      "Developed and implemented complex software solutions through hands-on coursework and projects.",
      "Demonstrated proficiency in analyzing complex data sets and implementing solutions using various algorithms and tools.",
    ],
  },
  {
    title: "Freelancing",
    company_name: "freelancing",
    icon: freelancing,
    iconBg: "#383E56",
    date: "Feb 2022 - March 2023",
    points: [
      "Engaging in freelancing exposed me to a variety of projects, each presenting unique challenges, which honed my problem-solving abilities.",
      "  Tackled diverse project challenges, enhancing problem-solving abilities",
      " Translated project requirements into functional and attractive designs",
    ],
  },
  {
    title: "React with TypeScript",
    company_name: "Online courses & Personal Projects",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Built dynamic web applications using components, hooks, and state management.",
      "Developed real-world applications to solidify React and TypeScript expertise",
      " Utilized context API, custom hooks, and React Router for optimized performance.",
      "Enhanced code quality with TypeScript's type-checking and interfaces",
    ],
  },
];

const projects = [
  {
    name: " EVO GYM",
    description:
      "Evo Gym is a personal project I developed, showcasing gym details and available courses for users to explore. Additionally, it features a user-friendly contact page for easy communication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript,",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: evogym,
    source_code_link: "https://github.com/Rabia-Rajput/Gym-typeScript.git",
    link: "https://rabia-rajput.github.io/evo-gym/",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "A web-based Tic-Tac-Toe game, offers an engaging platform for two users to compete head-to-head. With intuitive gameplay and a sleek interface, players can enjoy the timeless classic in a digital format.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tic_tac_toe,
    source_code_link: "https://github.com/Rabia-Rajput/tic-tac-toe.git",
    link: "https://rabia-rajput.github.io/tic-tac-toe/",
  },
  {
    name: "Cara Online Store",
    description:
      "Cara is my personal project, an online clothing store boasting essential pages found in typical ecommerce setups. Users can delve into product details, learn about us, and connect via the contact page.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cara,
    source_code_link: "https://github.com/Rabia-Rajput/ecommerce-website.git",
    link: "https://rabia-rajput.github.io/ecommerce-website/",
  },
];

export { services, technologies, experiences, projects };
