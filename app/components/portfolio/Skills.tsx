import Image from "next/image";
import React, { useState } from "react";

type SkillTab = "development" | "analytics";

function Skills() {
  const [activeTab, setActiveTab] = useState<SkillTab>("development");

  const developmentSkills = [
    { name: "Next.js", img: "/skills/nextjs.png" },
    { name: "React", img: "/skills/react.png" },
    { name: "TypeScript", img: "/skills/typescript.png" },
    { name: "JavaScript", img: "/skills/javascript.png" },
    { name: "Node.js", img: "/skills/nodejs.png" },
    { name: "Express.js", img: "/skills/express.png" },
    { name: "MongoDB", img: "/skills/mongodb.png" },
    { name: "Mongoose", img: "/skills/mongoose.png" },
    { name: "REST APIs", img: "/skills/restapi.png" },
    { name: "Tailwind CSS", img: "/skills/tailwind.png" },
    { name: "Git", img: "/skills/git.png" },
    { name: "HTML5", img: "/skills/html.png" },
    { name: "CSS3", img: "/skills/css.png" },
  ];

  const analyticsSkills = [
    { name: "SQL", detail: "Queries & joins" },
    { name: "BigQuery", detail: "Data prep" },
    { name: "Excel", detail: "Data cleanup" },
    { name: "Data Cleaning", detail: "Cleaning & shaping" },
    { name: "Data Visualization", detail: "Dashboards & insights" },
    { name: "Google Sheets", detail: "Reporting" },
  ];

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 py-1">
        <div>
          <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
            Skills
          </h2>
          <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Development + Analytics
          </p>
        </div>

        <div className="flex rounded-full bg-slate-100 p-1 dark:bg-slate-800">
          <button
            type="button"
            onClick={() => setActiveTab("development")}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              activeTab === "development"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            Development
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("analytics")}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              activeTab === "analytics"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            Data Analyst
          </button>
        </div>
      </div>

      {activeTab === "development" ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {developmentSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 rounded-xl border border-blue-500/70 bg-slate-900 p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              <Image
                width={32}
                height={32}
                src={skill.img}
                alt={skill.name}
                className="h-7 w-7 shrink-0"
              />
              <p className="text-xs font-medium text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {analyticsSkills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-800/70"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {skill.name}
              </p>
              <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
