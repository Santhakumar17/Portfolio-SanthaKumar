import React from "react";
import { motion } from "framer-motion";
import moment from "moment";

const Experience = () => {
  const startDate = moment("2023-07-03");
  const currentDate = moment();

  const calculateExperience = () => {
    const startDate = moment("2023-07-03");
    const currentDate = moment();

    const years = currentDate.diff(startDate, "years");
    startDate.add(years, "years");

    const months = currentDate.diff(startDate, "months");
    startDate.add(months, "months");

    const days = currentDate.diff(startDate, "days");

    return `${years} years ${months} months ${days} days`;
  };

  return (
    <div
      id="experience"
      className="flex flex-col items-center min-h-screen justify-center gap-20 px-10 sm:px-20 md:px-40 pt-20 w-full"
    >
      <motion.h1
        className="title text-3xl md:text-4xl bg-gradient-to-w from-white-400 via-white-500 to-white-500 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h1>

      <div className="flex flex-col gap-10 border-2 shadow-lg shadow-white text-black items-center justify-center w-full p-10 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/softsuave_logo1.jpg"
            className="w-20 h-20 p-5 bg-white rounded-3xl shadow-lg"
            alt=""
          />
          <div className="flex flex-col text-center md:text-left font-medium">
            <p className="text-xl md:text-2xl">Network and System Administrator</p>
            <p className="text-base md:text-lg">
              Soft Suave Technologies Pvt Ltd, Chennai
            </p>
            <p className="text-sm md:text-base">
              Jul 2023 - Present ({calculateExperience()})
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <ul className="list-disc list-inside flex flex-col gap-5">
            <li>
              Implemented and managed CI/CD pipelines to streamline 
              and automate the software deployment process.
            </li>
            <li>
              Automated infrastructure provisioning and configuration using Infrastructure as Code (IaC) tools, 
              such as Terraform and Ansible.
            </li>
            <li>
              Monitored and maintained system performance, security, and availability to ensure continuous uptime.
            </li>
            <li>
              Collaborated closely with development teams to streamline code deployments 
              and ensure smooth operations across environments.
            </li>
            <li>
              Managed and optimized cloud infrastructure on platforms like AWS, GCP, and
              Azure to support scalable and efficient operations.
            </li>
            <li>
              Ensured system scalability, reliability, 
              and high availability through proactive maintenance and monitoring.
            </li>
            <li>
              Troubleshot and resolved complex issues across development, staging, 
              and production environments, minimizing downtime and improving the user experience.
            </li>
            <li>
              Integrated containerization technologies like Docker and Kubernetes to enhance application portability and simplify deployment workflows.
            </li>
            <li>
              Implemented centralized logging and monitoring solutions using tools like Prometheus, Grafana, and ELK stack to ensure observability and faster incident response.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;