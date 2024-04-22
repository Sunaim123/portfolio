import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    postgresql,
    sequelize,
    materialui,
    git,
    meta,
    shopify,
    smg,
    smartshop,
    phonics,
    threejs,
    nextjs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experiences",
    },
    {
      id: "technologies",
      title: "Technologies",
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
      title: "Front-end Developer",
      icon: web,
    },
  
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Administrator",
      icon: creator,
    },
    {
      title: "Web Designer",
      icon: mobile,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next JS",
      icon: nextjs,
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
      name: "Git",
      icon: git,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "Sequelize",
      icon: sequelize,
    },
    {
      name: "Material ui",
      icon: materialui,
    },
    
  ];
  
  const experiences = [
  
    {
      title: "Web Developer",
      company_name: "Freelance",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2021 - Aug 2023",
      points: [
        "Developing and designing web applications using HTML, CSS, and Bootstrap.",
        "Collaborating with UI/UX designers and other team members to create visually appealing and user-friendly websites.",
        "Ensuring responsive design and cross-browser compatibility for a seamless user experience.",
        "Implementing Bootstrap components and CSS styles to enhance website aesthetics and functionality.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Interack Solutions",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Present",
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
      name: "Stock My Goods",
      description:
        "Return management application helps businesses efficiently handle product returns, providing an online platform for customers to initiate return requests.",
      tags: [
        {
          name: "next_js",
          color: "blue-text-gradient",
        },
        {
          name: "postgre_sql",
          color: "green-text-gradient",
        },
        {
          name: "material_ui",
          color: "pink-text-gradient",
        },
      ],
      image: smg,
      source_code_link: "https://github.com/",
    },
    {
      name: "Smart Shop",
      description:
        "A web-based smart shop integrates multiple websites, allowing users to browse and purchase products from various online stores within a unified platform.",
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
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: smartshop,
      source_code_link: "https://github.com/",
    },
    {
      name: "Phonics",
      description:
        "A web based point of sale system, A solution that enables business to manage inventory, and analyze sales data efficiently at the point of purchase.",
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
      image: phonics,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };