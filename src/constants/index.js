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
  shopify,
  carrent,
  jobit,
  tripguide,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Incident Manager",
    icon: web,
  },
  {
    title: "Problem Solveing",
    icon: mobile,
  },
  {
    title: "Incident LifeCycle ",
    icon: backend,
  },
  {
    title: "Team Leadership",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Front office manager",
    company_name: "Huawei GNOC",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Oct 2023 - Present",
    points: [
    ],
  },
  {
    title: "Incident manager,Radio access network engineer",
    company_name: "ERICSSON",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Oct 2023",
    points: [
      "Work As Incident Manager From'December 2020' To 'October 2023'.",
      "Work As Radio Access Network Engineer From'July 2019' To 'December 2020'.",
    ],
  },
  {
    title: "Incident Management Specialist",
    company_name: "ORANGE",
    icon: shopify,
    iconBg: "#383E56",
    date: "Mar 2019 - Jul 2019",
    points: [
    ],
  },
  {
    title: "Drive Test Engineer",
    company_name: "MAG Consulting",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2017 - Nov 2018",
    points: [
      "NOIKA Integration project",
      "Huawei integration project",
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
