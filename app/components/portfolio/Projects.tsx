import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    name: "Fashionista",
    image: "/fashionista.png",
    description:
      "Showcasing my frontend development skills through the creation of a custom-designed landing page, highlighting my ability to build visually appealing and user-friendly interfaces.",
    demo: "https://fashionista-dong-luu.vercel.app/",
    state: 1,
  },
  {
    name: "East Star",
    image: "/p-trainer.png",
    description:
      "Demonstrating frontend development skills through a design inspired by the user interface and aesthetics found in Shopify.",
    demo: "https://p-trainer.vercel.app/",
    state: 1,
  },
  {
    name: "Agilify",
    image: "/crm.png",
    description:
      "My version of a full-stack application designed to enhance the efficiency of project planning and streamline the production phases.",
    demo: "/#projects",
    state: 0,
  },
];

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-wrap justify-center items-center p-10 md:p-52 gap-10 bg-[linear-gradient(35deg,_#1a202c_50%,_#f5f5f5_50%)]"
    >
      <h1 className="text-4xl underline font-bold text-[#1a202c]">Projects</h1>
      {projects.map((prj, index) => {
        return (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg border border-[#1a202c] bg-white w-full shadow-lg p-4 text-[#1a202c] "
            key={index}
          >
            <Image
              width={200}
              height={200}
              alt=""
              src={prj.image}
              className="w-full col-span-1 h-64 object-cover rounded-lg border border-black"
            ></Image>
            <div className="w-full sm:col-span-2 flex flex-col p-6 justify-between">
              <span
                className={`${
                  prj.state ? `text-green-600` : `text-red-600`
                }text-center`}
              >
                <p
                  className={`${prj.state ? `text-green-600` : `text-red-600`}`}
                >
                  {prj.state ? "Live: " : "In-Progess: "}
                </p>
                {prj.description}
              </span>
              <Link href={prj.demo} className="text-blue-500 text-center">
                Demo
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
