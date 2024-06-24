import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Project",
    href: "#project",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact Me",
    href: "#contact",
  },

];

const LandingNavbar = () => {
  return (
    <div className="flex flex-row p-2 bg-gray-900 items-center justify-items-center justify-center gap-x-8 text-md font-semibold drop-shadow-lg">
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="p-2 rounded-lg">
          <h2 className="text-sky-400">{link.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default LandingNavbar;
