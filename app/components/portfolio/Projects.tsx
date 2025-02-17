import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Employee Management System",
    image: "/projects/employeeAPI.png",
    description:
      "Employee Management System: A Next.js and React app with MongoDB backend, and utilizing public API for simulation. Features CRUD operations, search/filter by ID, name, position, or department. RESTful API integration for seamless data management.",
    demo: "https://employees-restful-api-example.vercel.app/",
    state: 1,
  },
  {
    name: "Fashionista",
    image: "/projects/fashionista.png",
    description:
      "Frontend Showcase: A Next.js and React app highlighting CSS and Tailwind skills. Features dynamic UI, and responsive design. Demonstrates modern frontend development techniques.",
    demo: "https://fashionista-dong-luu.vercel.app/",
    state: 1,
  },
  {
    name: "East Star",
    image: "/projects/p-trainer.png",
    description:
      "Shopify-Inspired Landing page: A frontend-focused project using Next.js and React, showcasing CSS and Tailwind skills. Features a clean, and responsive design of Shopify's template.",
    demo: "https://p-trainer.vercel.app/",
    state: 1,
  },

  {
    name: "Agilify",
    image: "/projects/crm.png",
    description:
      "Project Planner Pro: A full-stack app built with Next.js, React, and MongoDB to streamline project planning and production. Features task management, team collaboration, and real-time updates for enhanced efficiency.",
    demo: "/#projects",
    state: 0,
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center p-8  gap-8 text-white"
    >
      <h1 className="text-4xl font-bold underline decoration-blue-500">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((prj, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={prj.image}
                alt={prj.name}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col p-6 flex-grow justify-between">
              <span
                className={`text-sm font-semibold ${
                  prj.state ? "text-green-400" : "text-yellow-400"
                }`}
              >
                {prj.state ? "Live" : "In Progress"}
              </span>
              <p className="mt-2 text-gray-200">{prj.description}</p>

              <div className="mt-4 flex justify-center">
                <Link
                  href={prj.demo}
                  className={`px-4 py-2 rounded-lg ${
                    prj.state
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-gray-500 cursor-not-allowed"
                  } text-white transition-colors duration-300`}
                  target={prj.state ? "Live" : undefined}
                  rel={prj.state ? "noopener noreferrer" : undefined}
                >
                  {prj.state ? "View Demo" : "Coming Soon"}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
