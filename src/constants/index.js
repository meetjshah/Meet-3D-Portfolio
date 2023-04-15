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
    mysql,
    angular,
    mongodb,
    git,
    python,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    cns,
    IUB,
    Waaree,
    carrent,
    jobit,
    tripguide,
    threejs,
    Speedyrent,
    CNS_Spokebric,
    aws,
    aws_tech,
    portfolio
    
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
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
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
      name: "angular",
      icon: angular,
    },
    {
      name: "mysql",
      icon: mysql,
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
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    // {
    //   name: "aws_tech",
    //   icon: aws_tech,
    // },
  ];
  
  const experiences = [
    {
      title: "Angular Developer",
      company_name: "CyberInfrastructure for Network Science Center(CNS)",
      icon: cns,
      iconBg: "#383E56",
      date: "June 2022 - December 2022",
      points: [
        "Designed a portal for a NSF-funded biomedical visualization project which displayed detailed analysis in form of graphs for biomedical researchers.",
        "Developed behavioral components and handled state management using NGXS improving flow of components by 15%.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
        "Collaborated with a team of 10 members and generated storybooks using Angular which isolated components and escalated development speed by 20%."
      ],
    },
    {
      title: "Graduate Teaching Assistant",
      company_name: "Indiana University - Bloomington",
      icon: IUB,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - May 2022",
      points: [
        "Served as a graduate teaching assistant for the course Software Engineering-I and helped students build websites with complex functionalities like Chatbot, Maps, Voice Recognition.",
        "Assisted professor in articulating course structure into multiple stages which refined clarity of project requirements by 30%.",
        "Mentored students in planning various stages of project which reduced product delivery time by 15%.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Waaree Energies Ltd",
      icon: Waaree,
      iconBg: "#383E56",
      date: "Nov 2020 - Mar 2021",
      points: [
        "Engineered a full stack website that provided centralized access by housing and compiling data into single branch database improving speed of query search by 30%.",
        "Developed a client-setup system from scratch, reducing manual efforts by 20%.",
        "Incorporated feedback mechanism using service rating portal which reduced customer grievance rate by 40%.",
        "Improved the visual layout using HTML5/CSS, Bootstrap and Material UI which resulted in rise in client interest and interaction on website by 40-50%.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Meet proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Meet does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Meet optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const certifications = [
    {
      name: "AWS Cloud Quest: Cloud Practitioner",
      description:
        "This certification consisted of 12 real-life scenarios which required critical thinking to provide most efficient cloud solutions using amazon web services.",
      tags: [
        {
          name: "aws",
          color: "blue-text-gradient",
        },
        {
          name: "cloud",
          color: "green-text-gradient",
        },
        {
          name: "amazonwebservices",
          color: "pink-text-gradient",
        },
      ],
      image: aws,
      source_code_link: "https://www.credly.com/badges/9369af57-527b-4745-bea6-9895c0163a66/public_url",
    },
  ]

  const projects = [
    {
      name: "Speedy Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution using ChatBot and Voice Recognition.",
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
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: Speedyrent,
      source_code_link: "https://github.com/meetjshah/Speedy_Rent",
    },
    {
      name: "Portfolio",
      description:
        "A portfolio website which I developed to demonstrate my skills, experiences, projects using Next.js, Framer Motion, Tailwind CSS, React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind-css",
          color: "pink-text-gradient",
        },
        {
          name: "nextjs",
          color: "orange-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/meetjshah/meet-portfolio",
    },
    {
      name: "Spoke Bric",
      description:
        "A biomedical visualization project which has dashboard panels for showing statistical graph analysis of research papers for biomedical researchers in an efficient way which highlights important parts of research.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: CNS_Spokebric,
      source_code_link: "",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects, certifications };