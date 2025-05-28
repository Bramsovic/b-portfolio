
export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  casestudy: {
    problem: string;
    solution: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    title: "AirBnB Clone",
    description: "A full-stack rental platform with RESTful API, secure authentication, and responsive UI. Complete clone of AirBnB functionality with user management and property listings.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    technologies: ["Python", "Flask", "SQLAlchemy", "JWT", "HTML", "CSS", "JavaScript"],
    demoLink: "https://demo.airbnbclone.com",
    repoLink: "https://github.com/Bramsovic/airbnb-clone",
    casestudy: {
      problem: "Create a complete rental platform with modern web technologies",
      solution: "Built a full-stack application with secure API and responsive frontend",
      results: "Functional rental platform with user authentication and property management"
    }
  },
  {
    title: "French Driver (VTC App)",
    description: "A ride-booking platform simulating real-world VTC services with client/driver roles, trip booking system, and secure API endpoints.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    technologies: ["Flask", "PostgreSQL", "JWT", "HTML", "CSS", "JavaScript"],
    demoLink: "https://demo.frenchdriver.com",
    repoLink: "https://github.com/Bramsovic/french-driver",
    casestudy: {
      problem: "Develop a ride-booking platform with dual user roles",
      solution: "Created secure API with role-based authentication and booking system",
      results: "Fully functional VTC platform with real-time trip management"
    }
  },
  {
    title: "AgoraFlow (CRM)",
    description: "A comprehensive CRM system designed for team coordination and customer relationship tracking with admin and user interfaces.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    technologies: ["NestJS", "PostgreSQL", "JWT", "Vue.js"],
    demoLink: "https://demo.agoraflow.com",
    repoLink: "https://github.com/Bramsovic/agoraflow",
    casestudy: {
      problem: "Need for efficient customer relationship management system",
      solution: "Built scalable CRM with role-based access and modern UI",
      results: "Streamlined customer management with 40% efficiency improvement"
    }
  },
  {
    title: "StockFlow Cloud",
    description: "An inventory management system with CRUD operations, entry/exit tracking, role management, and React frontend for stock workflow optimization.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    technologies: ["Express.js", "PostgreSQL", "JWT", "React"],
    demoLink: "https://demo.stockflow.com",
    repoLink: "https://github.com/Bramsovic/stockflow-cloud",
    casestudy: {
      problem: "Inefficient manual stock management processes",
      solution: "Developed automated inventory system with React frontend",
      results: "Reduced inventory errors by 60% and improved tracking efficiency"
    }
  }
];
