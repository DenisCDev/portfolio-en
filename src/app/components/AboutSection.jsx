"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

// Data for each tab
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Spring Boot</li>
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Computer Science</li>
        <em>Virtual Cruzeiro do Sul University</em>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <Link href='https://www.coursera.org/account/accomplishments/certificate/8GTWGD9JR77J' target="_blank" className="text-white hover:text-yellow-500"><li>User Experience (UX) Design Fundamentals - Google</li></Link>
        <Link href='https://www.cloudskillsboost.google/public_profiles/18698d44-e14f-4338-b6b3-6e015b323d41/badges/1696274' target="_blank" className="text-white hover:text-yellow-500"><li>Google Cloud Essentials - Google</li></Link>
        <Link href='https://empresas.descomplica.com.br/#/certificado/7e3cd356-2012-41f5-b715-a6af58e7b08a' target="_blank" className="text-white hover:text-yellow-500"><li>Design Thinking, UX, and Agile Methodologies - Nubank</li></Link>
        <Link href='https://drive.google.com/file/d/1P8PAad_ZuuSwVQUzEm1r04tOMSxQjVts/view' target="_blank" className="text-white hover:text-yellow-500"><li>Discover Conectar Track - Rocketseat</li></Link>
        <Link href='https://drive.google.com/file/d/1ZChCvEEHDa_bgfFw091uZ7jau2ghUCk7/view' target="_blank" className="text-white hover:text-yellow-500"><li>Back-end Developer - Tech4me</li></Link>
      </ul>
    ),
  },
];

// About section component
const AboutSection = () => {
  // State variables for tab and transition
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // Function to handle tab change
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // JSX for the about section
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a front-end developer passionate about creating innovative solutions. Currently pursuing a degree in Computer Science, constantly seeking to enhance my technical skills and apply them to challenging projects. I have experience in web development, with a track record of modernizing legacy systems and creating effective solutions. I am an efficient communicator and work well in collaborative teams. Always eager to learn and open to new challenges.
          </p>
          <div className="flex flex-row justify-start mt-8">
            {/* Rendering tab buttons */}
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          {/* Rendering tab content based on selected tab */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

// Exporting the AboutSection component as default
export default AboutSection;
