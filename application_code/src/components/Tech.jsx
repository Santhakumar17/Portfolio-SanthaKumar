import React from "react";
import {
  BiLogoGit,
  BiLogoDocker,
  BiLogoAws,
  BiLogoGoogleCloud,
  BiLogoGithub
} from "react-icons/bi";
import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiAnsible,
  SiHelm,
  SiGitlab,
  SiBitbucket
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <motion.div
      id="tech"
      className="flex flex-col overflow-hidden items-center justify-center min-h-screen gap-20"
    >
      <motion.h1
        className="title text-3xl md:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        DevOps Technologies
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-wrap gap-10 w-full items-center justify-center"
      >
        {/* CI/CD Tools */}
        <motion.div className="tech-box">
          <h1 className="text-xl font-[500] underline">CI/CD Tools</h1>
          <motion.div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <SiGithubactions className="tech text-black" />
              <p>GitHub Actions</p>
            </div>
            <div className="flex flex-col items-center">
              <SiJenkins className="tech text-red-600" />
              <p>Jenkins</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Containerization & Orchestration */}
        <motion.div className="tech-box">
          <h1 className="text-xl font-[500] underline">
            Containerization & Orchestration
          </h1>
          <motion.div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <BiLogoDocker className="tech text-blue-500" />
              <p>Docker</p>
            </div>
            <div className="flex flex-col items-center">
              <SiKubernetes className="tech text-blue-400" />
              <p>Kubernetes</p>
            </div>
            <div className="flex flex-col items-center">
              <SiHelm className="tech text-purple-600" />
              <p>Helm</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Infrastructure as Code */}
        <motion.div className="tech-box">
          <h1 className="text-xl font-[500] underline">Infrastructure and Configuration</h1>
          <motion.div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <SiTerraform className="tech text-purple-500" />
              <p>Terraform</p>
            </div>
            <div className="flex flex-col items-center">
              <SiAnsible className="tech text-red-500" />
              <p>Ansible</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Monitoring & Logging */}
        <motion.div className="tech-box">
          <h1 className="text-xl font-[500] underline">Monitoring & Logging</h1>
          <motion.div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <SiPrometheus className="tech text-orange-500" />
              <p>Prometheus</p>
            </div>
            <div className="flex flex-col items-center">
              <SiGrafana className="tech text-yellow-500" />
              <p>Grafana</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Version Control */}
        <motion.div className="tech-box">
          <h1 className="text-xl font-[500] underline">Version Control</h1>
          <motion.div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <BiLogoGit className="tech text-black" />
              <p>Git</p>
            </div>
            <div className="flex flex-col items-center">
              <BiLogoGithub className="tech text-black" />
              <p>GitHub</p>
            </div>
            <div className="flex flex-col items-center">
              <SiGitlab className="tech text-orange-500" />
              <p>GitLab</p>
            </div>
            <div className="flex flex-col items-center">
              <SiBitbucket className="tech text-blue-500" />
              <p>Bitbucket</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cloud Platforms */}
        <motion.div className="tech-box">
          <h1 className="text-xl font-[500] underline">Cloud Platforms</h1>
          <motion.div className="flex items-center gap-10">
            <div className="flex flex-col items-center">
              <BiLogoAws className="tech text-orange-500" />
              <p>AWS</p>
            </div>
            <div className="flex flex-col items-center">
              <VscAzure className="tech text-blue-500" />
              <p>Azure</p>
            </div>
            <div className="flex flex-col items-center">
              <BiLogoGoogleCloud className="tech text-blue-400" />
              <p>GCP</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Tech;