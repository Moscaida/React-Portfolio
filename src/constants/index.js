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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  integrity,
  shopify,
  amazon,
  aerotek,
  nissan,
  carrent,
  jobit,
  tripguide,
  threejs,
  correlation,
  landingpage,
  blockchain,
  artificial,
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
    title: "Blockchain Developer",
    icon: backend,
  },
  {
    title: "3D Printing",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Bilingual Sales Consultant",
    company_name: "Midway Nissan",
    icon: nissan,
    iconBg: "#383E56",
    date: "Apr 2012 - Aug 2012",
    points: [
      "Expertly engage with diverse clientele, utilizing fluency in multiple languages to enhance communication and understanding.",
      "Assertively showcase and demonstrate vehicle features, leveraging bilingual skills to cater to a broader range of customers.",
      "Strategically negotiate and finalize deals, ensuring optimal satisfaction for both English and non-English speaking clients.",
      "Relentlessly pursue ongoing education on car specifications and market trends, delivering unparalleled service to all linguistic demographics.",
    ],
  },
  {
    title: "Solar Panel Installer",
    company_name: "Aerotek",
    icon: aerotek,
    iconBg: "#383E56",
    date: "Dec 2012 - Nov 2013",
    points: [
      "Efficiently mount and secure solar panels on roofs, ground mounts, or other structures following specified design plans.",
      "Wire and connect solar panels to inverters, batteries, and the electrical grid, ensuring safe and functional system operations.",
      "Conduct routine inspections, maintenance tasks, and repairs to optimize system performance and longevity.",
      " Adhere to safety protocols and local electrical codes, and collaborate with electricians or engineers to ensure successful installations.",
    ],
  },
  {
    title: "Fulfillment Associate",
    company_name: "Integrity Staffing Solutions",
    icon: integrity,
    iconBg: "#E6DEDD",
    date: "Dec 2013 - Apr 20214",
    points: [
      "Successfully trained over 60 new hires in tasks including packing, picking, problem-solving, and B.O.D operations.",
      "Led two crucial leadership roles in the B.O.D (Box on Demand) team, adeptly problem-solving OB barriers during Amazon's busiest business months of 2016.",
      "Started as an enthusiastic temp, excelling in all assigned tasks and roles with a goal to secure permanent employment with Amazon.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Development Apprentice",
    company_name: "Correlation One",
    icon: correlation,
    iconBg: "#383E56",
    date: "Apr 2023 - Sep 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Administrative Support IV",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#E6DEDD",
    date: "Apr 2014 - Present",
    points: [
      "Demonstrated leadership capabilities as Central Dock Team Lead, proactively addressing barriers faced by ship clerks, finding innovative solutions, and effectively managing escalations.",
      "Played a key role in launching Central Dock's operations at MQY1, Amazon's first Gen 11 site, by establishing AR Dock standard work and implementing best practices.",
      "Successfully applied knowledge from AR dock across six new launch sites, effectively establishing sort allocations, layout, and streamlined communication with cross-functional teams.",
      "Streamlined break coverage for Central Dock leads, TLs, and AMs by creating a centralized break schedule quip, simplifying operations as the organization expanded to over 20 sites.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Landing Page",
    description:
      "Created landing page from beginning of Software Developement Apprenctionship with Correlation One",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: landingpage,
    source_code_link: "https://github.com/Moscaida/Correlation-One-Portfolio-Project",
  },
  {
    name: "Blockchain Application",
    description:
      "This is a work in progress, building a web 3.0 application using Cranq",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: blockchain,
    source_code_link: "https://github.com/Moscaida",
  },
  {
    name: "AI-Powered 3D Website",
    description:
      "Work in progress, buidling an app that generates customizable 3D T-Shirt designs using DALLE AI and a downloadable result model image.",
    tags: [
      {
        name: "threeJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: artificial,
    source_code_link: "https://github.com/Moscaida",
  },
];

export { services, technologies, experiences, testimonials, projects };