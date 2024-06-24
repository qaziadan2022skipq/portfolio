'use client'

import Image from "next/image";

const projects = [
  {
    image: "/project1.jpg",
    name: "Scholar Buddy Web Extension",
    description:
      "Built with React, Redux, Node.js, Express, MongoDB, Tailwindcss.",
    href: "https://www.rachel.app",
  },
  {
    image: "/project2.jpg",
    name: "AI SaaS Web App",
    description:
      "Built with Typescript, Nextjs14, MongoDB, React, Tailwind CSS, Stripe.",
    href: "https://www.rachel.app",
  },
  {
    image: "/project3.jpg",
    name: "Rachel AI SaaS Web App",
    description:
      "Built with Typescript, Nextjs14, MongoDB, React, Tailwind CSS, Stripe.",
    href: "https://www.rachel.app",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div id="project" className="flex flex-col mt-2 items-center gap-y-8 py-8">
      <h1 className="text-6xl text-sky-400 font-bold">Projects</h1>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {projects.map((project) => (
          <div
            key={project.name}
            className="max-w-md bg-gray-900 shadow-lg shadow-sky-800 rounded-lg transition duration-300 ease-in-out hover:scale-110 overflow-hidden"
            onClick={() => {
              const url = project.href;
              return window.location.href = url;
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              width={450}
              height={294}
              className=" object-cover"
            />
            <div className="px-6 py-6 mt-6">
              <h3 className="text-sky-600 text-xl font-semibold">
                {project.name}
              </h3>
              <p className="text-sky-300 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
