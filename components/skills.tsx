import Image from "next/image";
import React from "react";

const skills = [
  {
    icon: "/html.png",
    name: "HTML",
    description: "Semantic markup language for web pages.",
  },
  {
    icon: "/css.png",
    name: "CSS",
    description: "Styling language for designing web pages.",
  },
  {
    icon: "/javascript.png",
    name: "JavaScript",
    description: "Programming language for web development.",
  },
  {
    icon: "/react.png",
    name: "React",
    description: "JavaScript library for building user interfaces.",
  },
  {
    icon: "/nodejs.png",
    name: "Node.js",
    description: "JavaScript runtime environment for server-side development.",
  },
  {
    icon: "/nextjs.png",
    name: "Next.js",
    description: "React fullstack framework for building production-ready applications.",
  },
];

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col mt-2 items-center gap-y-8 py-8">
        <h1 className="text-6xl text-sky-400 font-bold">Skills</h1>
    <div className="flex flex-wrap mt-12 justify-center gap-8">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="max-w-xs bg-gray-900 shadow-lg shadow-sky-800 rounded-lg overflow-hidden"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-24 h-24 mx-auto mt-4 "
          />
          <div className="px-6 py-4">
            <h3 className="text-sky-600 text-xl font-semibold">
              {skill.name}
            </h3>
            <p className="text-sky-300 mt-2">{skill.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
