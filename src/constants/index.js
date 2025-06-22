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
      "Develop NASA’s inventory management program for the International Space Station using JavaScript, React, and Python/Django to deliver responsive UIs and seamlessly integrate NASA’s API and authentication system",
      "Restructure MySQL database architecture by implementing efficient indexing, normalization, and optimized queries, resulting in a 30% increase in data entry efficiency and overall database performance",
      "Utilize Postman for API testing and Docker for containerized development, ensuring robust communication between front-end and back-end components while facilitating smooth deployment processes",
      "Collaborate with senior engineers to incorporate industry best practices in CI/CD pipelines using Jenkins, GitLab, and Kubernetes, ensuring continuous integration, delivery, and scalability",

    ],
  },
  {
    title: "Information Technology Intern",
    company_name: "Tender Care ABA",
    icon: tca,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2024",
    points: [
      "Engineered and maintained the company website using React, Redux, and HTML/CSS, enhancing the user interface, optimizing site performance, and increasing web traffic by 25%",
      "Integrated RESTful APIs to streamline data flow between the front-end and back-end systems, perform regular debugging and code optimization to ensure system reliability and responsiveness",
      "Monitored, serviced, and resolved technical issues, implementing preventive measures to avoid recurrent problems",
      "Optimized client acquisition and communication processes by automating workflow and improving user interaction",

    ],
  },
  {
    title: "Net2Connect - Code For Good 2024",
    company_name: "JP Morgan",
    icon: jpm,
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Built a full-stack web app for Netcare Access using PostgreSQL, Express, React, and Node.js, parsing EHR and financial data to provide streamlined access through a user-friendly platform",
      "Developed a query-based chatbot for intuitive data requests, enabling natural language searches, filtering, and targeted data retrieval",
      "Designed dynamic dashboards with real-time visualizations, customized insights, and predictive analytics for enhanced decision-making and interactive data exploration",
      "Implemented secure authentication and export features for compliance and data sharing, enabling comprehensive report generation and accessible, actionable insights",
    ],
  },

  {
    title: "Financial Officer",
    company_name: "OSU Club Tennis",
    icon: OSUct,
    iconBg: "#FFFFFF",
    date: "Aug 2022 - Present",
    points: [
      "Generated financial models to project and allocate a budget of over $10,000, leading to a 20% increase in funds and improved expense management, while also optimizing resource allocation and reducing unnecessary expenditures",
      "Worked closely with board members in strategic planning, regularly communicating financial updates and facilitating discussions to ensure fiscal responsibility and transparency",
      
    ],
  },
  {
    title: "STEM Tutor",
    company_name: "Grade Potential",
    icon: gpt,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Provided weekly tutoring sessions to multiple students, covering a range of STEM subjects and topics including Computer Science, Math, and Biology",
      "Developed customized lesson plans tailored to each student's learning style and academic needs, resulting in measurable improvements in student performance",
      "Cultivated strong relationships with students and parents through personalized attention and effective communication, fostering a supportive learning environment",
      
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