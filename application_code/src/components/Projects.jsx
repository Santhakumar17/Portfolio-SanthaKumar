import React from "react";
import { motion } from "framer-motion";
import { RxExternalLink } from "react-icons/rx";

const projectsData = [
  {
    image: "/portfolio_png.png",
    title: "Portfolio",
    description: [
      "This project is a portfolio website, with a modern and responsive design",
      "Containerized the application with Docker and managed services using Docker Compose.",
      "Hosted on AWS EC2, ensuring high availability and scalability.",
      "Configured Nginx as the web server for efficient content delivery.",
      "Implemented CI/CD pipeline using GitHub Actions for automated deployment.",
      "Ensured consistent and reliable deployments with version control integration.",
      "The website showcases my skills, projects, and experience in a user-friendly manner.",
      "for infrastructure as code, I utilized Terraform to manage and provision AWS resources.",
      "for configuration management, I used Ansible to automate the setup and deployment of the application.",
    ],
    technologies: [
      "Docker and Docker Compose",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
      "CI/CD",
    ],
    link: "https://sandy-eat-curious.vercel.app/",
  },
  
  /*
  {
    image: "/Disney-Clone.png",
    title: "Disney Plus Clone",
    description: [
      "This project is a Disney Plus Clone developed using React and Tailwind CSS, offering a seamless user experience.",
      "Integrated with Firebase for backend services, including Google Login authentication for secure access.",
      "Features smooth animations and transitions for an engaging user interface.",
      "Utilizes Disney images and content to mimic the authentic Disney Plus experience.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Tailwind",
      "Firebase Auth",
    ],
    link: "https://sandy-disney.vercel.app/",
  },
  {
    image: "/Weather-App.png",
    title: "Sandy Weather App",
    description: [
      "This is a responsive weather application developed using React and Tailwind CSS, leveraging the OpenWeatherMap free API to provide real-time weather updates",
      "Displays temperature, humidity, wind speed, and weather conditions for any location worldwide.",
      "Allows users to search for weather details by city name.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind"],
    link: "https://the-sandy-weather.vercel.app/",
  },
  */
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCards = () => {
  return (
    <div className="flex flex-col items-center min-h-screen md:justify-start justify-center gap-40 px-5 md:px-14">
      {projectsData.map((project) => (
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center md:flex-row md:text-left gap-10 md:gap-20">
            <div className="md:w-1/3 w-full flex place-content-center">
              <a href={project.link} target="_blank">
                <img
                  className="rounded-md w-[600px] shadow-xl hover:scale-110 duration-500"
                  src={project.image}
                  alt="Project Image"
                />
              </a>
            </div>
            <div className="flex flex-col gap-5 md:px-10 md:w-2/3 w-full">
              <h1 className="text-2xl font-medium flex items-center justify-center md:justify-start gap-5">
                {project.title}
                <a
                  href={project.link}
                  target="_blank"
                  className="font-medium cursor-pointer"
                >
                  <RxExternalLink />
                </a>
              </h1>
              <ul className="list-disc pl-10 list-outside">
                {project.description.map((desc) => (
                  <li>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {project.technologies.map((tech) => (
                  <span className="shadow-2xl border-2 border-white py-2 px-5 rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center pt-20 justify-center gap-16 lg:px-14"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <ProjectCards />
    </div>
  );
};

export default Projects;
