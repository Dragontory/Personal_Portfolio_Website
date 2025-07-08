//about
import {
  OhioState,
  OSUEngineering2,
  AILogo,
  CPCLogo,
} from "../assets";

//technologies
import {
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  cpg,
  linux,
  python,
  expressjs,
  solidworks,
  matlab,
  sql

} from "../assets";


//experience
import {
  tca,
  gpt,
  OSUct,
  jpm,
  NASA,
} from "../assets";

//projects
import {
  PersonalPortfolio,
  RobotProject,
  Projects,
} from "../assets";

//profile
import {
  resume,
  personalprofile,
  linkedin,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "The Ohio State University (Honors) ",
    icon: OhioState,
  },
  {
    title: "B.S. in Computer Science and Engineering",
    icon: OSUEngineering2,
  },
  {
    title: "Artificial Intelligence Club",
    icon: AILogo,
  },
  {
    title: "Competitive Programming Club",
    icon: CPCLogo,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C Programming Language",
    icon: cpg,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "ExpressJS",
    icon: expressjs,
  },
  {
    name: "SolidWorks",
    icon: solidworks,
  },
  {
    name: "MatLab",
    icon: matlab,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "JP Morgan",
    icon: jpm,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
      "Corporate Technology :)",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "The National Aeronautics and Space Administration (NASA)",
    icon: NASA,
    iconBg: "#FFFFFF",
    date: "Aug 2024 - Dec 2024",
    points: [
      "IMP ;D"

    ],
  },
  {
    title: "Information Technology Intern",
    company_name: "Tender Care ABA",
    icon: tca,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2024",
    points: [
      "WebDev >.<"

    ],
  },
  {
    title: "Net2Connect - Code For Good 2024",
    company_name: "JP Morgan",
    icon: jpm,
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Hackathon :0"
    ],
  },

  {
    title: "Financial Officer",
    company_name: "OSU Club Tennis",
    icon: OSUct,
    iconBg: "#FFFFFF",
    date: "Aug 2022 - Present",
    points: [
      "Money $_$"
      
    ],
  },
  {
    title: "STEM Tutor",
    company_name: "Grade Potential",
    icon: gpt,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Tutoring :p"
      
    ],
  },
  
];

const projects = [
  {
    name: "ToryYang.com",
    description:
      "Introducing my personal portfolio web application, showcasing my experience, skills, and projects. Leveraging multiple JavaScript libraries and styling techniques to enhance UI/UX design, ensuring a mobile-friendly, user-friendly, and versatile website experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: PersonalPortfolio,
    source_code_link: "https://github.com/Dragontory/",
  },
  {
    name: "FEH Robot Project",
    description:
      "Developed an autonomous robot with a team to complete an obstacle course with given challenges as efficiently as possible. Developed a virtual CAD model, built the physical robot in the machine shop with a limited budget, and coded the robot to maneuver through the course effectively. Click on the top right to learn more!",
    tags: [
      {
        name: "c/c++",
        color: "blue-text-gradient",
      },
      {
        name: "solidworks (CAD)",
        color: "green-text-gradient",
      },
      {
        name: "workshop",
        color: "pink-text-gradient",
      },
    ],
    image: RobotProject,
    source_code_link: "https://u.osu.edu/feh231020h/",
  },
  {
    name: "Other Personal Projects",
    description:
      "Click on the icon in the top right to visit my GitHub! This consists of my additional personal and class projects, ranging from personal projects such as a Python Web Scraper to full stack web applications.",
    tags: [
      {
        name: "react/javascript",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: Projects,
    source_code_link: "https://github.com/Dragontory/",
  },
];

export { services, technologies, experiences, projects, resume, personalprofile, linkedin, github};