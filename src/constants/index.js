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
  meta,
  sargodhaUni,
  NUML ,
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
    title: " BSc Computer Science (2 years)",
    company_name: " Sargodha University",
    icon: sargodhaUni,
    iconBg: "#383E56",
    date: "Sept 2016 - Aug 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: " MSc Computer Science (2 years)",
    company_name: " NUML Islamabad",
    icon: NUML,
    iconBg: "#E6DEDD",
    date: "Feb 2019 - Jan 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      " Interacting directly with clients cultivated my communication and collaboration skills, as I translated their visions into functional and captivating frontend designs.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: " EVO GYM",
    description:
     'Evo Gym is a personal project I developed, showcasing gym details and available courses for users to explore. Additionally, it features a user-friendly contact page for easy communication.' ,
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Cara Online Store",
    description:
      "Cara is my personal project, an online clothing store boasting essential pages found in typical ecommerce setups. Users can delve into product details, learn about us, and seamlessly connect via the contact page",
    tags: [
      {
        name: "njavascript",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
