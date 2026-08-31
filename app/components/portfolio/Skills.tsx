import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "Mongoose"],
  },
  {
    title: "Data",
    items: ["SQL", "Data Analysis", "Data Cleaning", "Power BI", "Excel"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

function Skills() {
  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
          Skills
        </h2>
        <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
          Core strengths
        </p>
      </div>

      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800/70"
          >
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
