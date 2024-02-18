"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "IntLab",
    description: "Design studio website",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://intlabs.com.br/",
    previewUrl: "https://intlabs.com.br/",
  },
  {
    id: 2,
    title: "Verve",
    description: "Jazz-themed coffee website",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://verve-cafe.netlify.app/",
    previewUrl: "https://verve-cafe.netlify.app/",
  },
  {
    id: 3,
    title: "React List",
    description: "List creator using react",
    image: "/images/projects/4-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/DenisCDev/ListaDePresencaReact",
    previewUrl: "https://listapresencareact.netlify.app/",
  },
  {
    id: 4,
    title: "API RPG Node Express",
    description: "RPG character registration API",
    image: "/images/projects/4.png",
    tag: ["All", "API"],
    gitUrl: "https://github.com/DenisCDev/nodejsexpress-api",
    previewUrl: "https://github.com/DenisCDev/nodejsexpress-api",
  },
  {
    id: 5,
    title: "API PC Java Spring Boot",
    description: "Computer registration API with part specification",
    image: "/images/projects/5.png",
    tag: ["All", "API"],
    gitUrl: "https://github.com/DenisCDev/API-RegistroDeComputadores",
    previewUrl: "https://github.com/DenisCDev/API-RegistroDeComputadores",
  },
  {
    id: 6,
    title: "React Native Car Rental App",
    description: "Luxury car rental application",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/DenisCDev/reactnative-car-app",
    previewUrl: "https://github.com/DenisCDev/reactnative-car-app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="API"
          isSelected={tag === "API"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
