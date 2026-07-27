import insuranceImg from "../assets/images/insurance-dashboard.png";
import portfolioImg from "../assets/images/portfolio-home.png";

const projects = [
  {
    id: 1,
    featured: true,

    title: "Insurance Policy Management System",

    image: insuranceImg,

    description:
      "A full-stack Insurance Management System built with Spring Boot and React.js. It enables secure policy management, purchases, claims processing, and dashboard analytics using JWT authentication.",

    tech: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
      "Spring Security",
      "REST API",
    ],

    features: [
      "Role-Based Authentication",
      "Policy Purchase",
      "Claim Management",
      "Dashboard Analytics",
      "Responsive UI",
      "Admin Dashboard",
    ],

    github:
      "https://github.com/Alokkumar1706/insurance-policy-management-frontend",

    live: "",
  },

  {
    id: 2,

    featured: false,

    title: "Personal Portfolio",

    image: portfolioImg,

    description:
      "Modern responsive developer portfolio showcasing projects, technical skills, achievements, and contact information with smooth animations.",

    tech: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
    ],

    features: [
      "Responsive Design",
      "Smooth Animations",
      "Dark Theme",
      "Modern UI",
    ],

    github:
      "https://github.com/Alokkumar1706/Alok-portfolio",

    live:
      "https://alok-portfolio-psi-green.vercel.app/",
  },

  {
    id: 3,

    featured: false,

    title: "Banking Transaction Management System",

    image: null,

    description:
      "Console-based Java application demonstrating transaction management using JDBC and MySQL.",

    tech: [
      "Java",
      "JDBC",
      "MySQL",
    ],

    features: [
      "Transaction Management",
      "CRUD Operations",
      "Database Connectivity",
    ],

    github:
      "https://github.com/Alokkumar1706/JDBC-TRANSACTION-MANAGEMENT",

    live: "",
  },

  {
    id: 4,

    featured: false,

    title: "Employee Management System",

    image: null,

    description:
      "Currently under development. A full-stack employee management system with authentication, CRUD operations, search, pagination, and dashboard.",

    tech: [
      "Spring Boot",
      "React",
      "MySQL",
      "JWT",
    ],

    features: [
      "Coming Soon",
    ],

    github: "",

    live: "",
  },
];

export default projects;