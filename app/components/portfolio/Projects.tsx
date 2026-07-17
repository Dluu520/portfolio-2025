"use client";
import React, { useState } from "react";
import Image from "next/image";
import { trackEvent } from "@/app/lib/analytics/utils";

type Project = {
  name: string;
  image?: string | null;
  summary: string;
  detailedDescription: string;
  demo?: string;
  github?: string;
  videoDemoUrl?: string;
  state: number;
  tags?: string[];
  category?: string;
};

const projects: Project[] = [
  {
    name: "Employee Management System",
    image: "/projects/employeeAPI.png",
    summary:
      "A full-stack employee dashboard with CRUD workflows, search, and API-driven data management.",
    detailedDescription:
      "Built with Next.js and React, this project manages employee records through a responsive UI and MongoDB-backed API. It includes CRUD actions, filtering, and searchable employee records for practical internal-use workflows.",
    demo: "https://employees-management-platform.vercel.app/",
    github: "https://github.com/Dluu520/employee-mangagement/tree/master",
    state: 1,
    tags: ["Next.js", "React", "MongoDB", "REST API"],
    category: "Full Stack",
  },
  {
    name: "Fashionista",
    image: "/projects/fashionista.png",
    summary:
      "A polished landing page experience focused on visual storytelling and modern UI design.",
    detailedDescription:
      "This frontend project highlights animation, responsive layouts, and Tailwind styling in a clean, cinematic presentation. It demonstrates strong design sensibility and polished user experience implementation.",
    demo: "https://fashionista-dong-luu.vercel.app/",
    github:
      "https://github.com/Dluu520/Frontend---Business-Landing-Page/tree/master",
    state: 1,
    tags: ["React", "Tailwind", "UI Design", "Animation"],
    category: "Frontend",
  },
  {
    name: "Personal Trainer",
    image: "/projects/p-trainer.png",
    summary:
      "A Shopify-inspired landing page built to reflect thoughtful UI/UX collaboration and layout structure.",
    detailedDescription:
      "This project was designed as a UI-focused exercise in translating a modern storefront experience into a responsive web interface. It emphasizes layout balance, spacing, and conversion-oriented presentation.",
    demo: "https://p-trainer.vercel.app/",
    github:
      "https://github.com/Dluu520/Frontend---Fitness-Landing-Page/tree/master",
    state: 1,
    tags: ["Next.js", "React", "Tailwind", "UI/UX"],
    category: "Frontend",
  },
  {
    name: "Second Brain",
    image: null,
    summary:
      "An evolving personal knowledge and project hub for organizing ideas, notes, and future learning resources.",
    detailedDescription:
      "Second Brain is a work-in-progress system designed to centralize notes, planning, and project thinking. It is being shaped as a long-term tool for better organization, reflection, and productivity.",
    github: "n/a",
    state: 0,
    tags: ["Planning", "Productivity", "Next.js", "In Progress"],
    category: "Productivity",
  },
  {
    name: "Agilify",
    image: "/projects/crm.png",
    summary:
      "A responsive planning platform focused on collaboration, task tracking, and workflow clarity.",
    detailedDescription:
      "Agilify brings together project planning, team coordination, and streamlined task management in one experience. It is designed to support efficient project execution with a professional, scalable interface.",
    github: "https://github.com/Dluu520/agilify",
    state: 0,
    tags: ["Next.js", "MongoDB", "SaaS", "Collaboration"],
    category: "Full Stack",
  },
];

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Selected Work
          </p>
          <h1 className="text-3xl font-bold underline decoration-blue-500 underline-offset-8 sm:text-4xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:mx-0">
            A collection of web applications and interfaces focused on clean
            design, practical functionality, and steady growth as a developer.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((prj, index) => (
            <article
              key={index}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-800/80 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-500/70"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                {prj.image ? (
                  <Image
                    src={prj.image}
                    alt={prj.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-600/80 via-slate-800 to-slate-950 p-6 text-center">
                    <div>
                      <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100">
                        In Progress
                      </div>
                      <p className="text-sm text-slate-200">
                        Preview coming soon
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
                        prj.state
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-amber-500/15 text-amber-300"
                      }`}
                    >
                      {prj.state ? "Live" : "In Progress"}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      {prj.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {prj.name}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300">
                    {prj.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {prj.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-600 bg-slate-700/70 px-2.5 py-1 text-[11px] font-medium text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openModal(prj)}
                    className="w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        project={selectedProject}
      />
    </section>
  );
}

function Modal({
  isOpen,
  closeModal,
  project,
}: {
  isOpen: boolean;
  closeModal: () => void;
  project: Project | null;
}) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-2xl sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-blue-400">
              {project.category}
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-white">
              {project.name}
            </h2>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${
              project.state
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-amber-500/15 text-amber-300"
            }`}
          >
            {project.state ? "Live" : "In Progress"}
          </span>
        </div>

        {project.image ? (
          <div className="relative mb-4 h-56 overflow-hidden rounded-2xl bg-slate-800">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 70vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="mb-4 flex h-56 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/80 via-slate-800 to-slate-950 text-center">
            <p className="max-w-xs text-sm text-slate-200">
              Preview image coming soon while this project is still in progress.
            </p>
          </div>
        )}

        <p className="text-sm leading-7 text-slate-300">
          {project.detailedDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-600 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          {project.state !== 0 && project.demo && (
            <a
              onClick={() =>
                trackEvent(`${project.name}`, {
                  project: project.name,
                })
              }
              href={project.demo}
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Live Demo
            </a>
          )}
          {project.github && project.github !== "n/a" && (
            <a
              onClick={() =>
                trackEvent(`${project.github}`, {
                  project: project.name,
                })
              }
              href={project.github}
              className="rounded-xl border border-slate-600 px-4 py-2.5 text-center text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          )}
          <button
            className="rounded-xl border border-slate-600 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
