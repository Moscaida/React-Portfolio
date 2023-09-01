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
  carrent,
  jobit,
  tripguide,
  threejs,
  correlation,
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
    title: "3D Printer",
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
    title: "Fulfillment Associate",
    company_name: "Integrity Staffing Solutions",
    icon: aerotek,
    iconBg: "#383E56",
    date: "Dec 2013 - Apr 20214",
    points: [
      "Successfully trained over 60 new hires in tasks including packing, picking, problem-solving, and B.O.D operations.",
      "Led two crucial leadership roles in the B.O.D (Box on Demand) team, adeptly problem-solving OB barriers during Amazon's busiest business months of 2016.",
      "Started as an enthusiastic temp, excelling in all assigned tasks and roles with a goal to secure permanent employment with Amazon.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };