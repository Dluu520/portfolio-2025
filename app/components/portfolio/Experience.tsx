import React from "react";

const experiences = [
  {
    period: "2023–2024",
    position: "Full-Stack Web Developer",
    employer: "Good Greek Moving & Storage",
    type: "Professional Experience",
    bullets: [
      "Built and maintained full-stack business web applications using React, Next.js, TypeScript, Node.js, MongoDB, Mongoose, and Tailwind CSS.",
      "Developed and maintained a CRM system for customer management, scheduling, and operational workflows.",
      "Built reusable React components and responsive interfaces to improve consistency and usability across the application.",
      "Designed and implemented REST APIs, database schemas, and Mongoose models for application data.",
      "Implemented authentication and application functionality while troubleshooting front-end, backend, and database issues.",
      "Worked in a two-person Agile development environment, participating in sprint planning, code reviews, and collaborative development using Git.",
    ],
  },
  {
    period: "2020–2023",
    position: "Techceptionist / Student Technology Support",
    employer: "LXStudios Inc.",
    type: "IT Support",
    bullets: [
      "Provided technology and operational support while assisting users and staff in a customer-facing environment.",
      "Troubleshot technology-related issues, identified problems, and communicated practical solutions to users with varying levels of technical knowledge.",
      "Worked through UCO's student-worker program, gaining experience supporting technology in a professional environment.",
      "Shadowed field technicians to gain exposure to on-site technical service, troubleshooting, equipment, and field-support workflows.",
    ],
  },
  {
    period: "2024–Present",
    position: "Quick Service Associate / Server",
    employer: "Universal Orlando Resort",
    type: "Operations & Service",
    bullets: [
      "Worked in a high-volume operational environment requiring accuracy, reliability, teamwork, and effective communication.",
      "Followed established procedures, managed multiple priorities, and resolved customer and operational issues while maintaining professional service.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="flex min-h-screen items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Professional Background
          </p>
          <h2 className="mt-3 text-3xl font-bold underline decoration-blue-500 underline-offset-8 sm:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.position}
              className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg backdrop-blur"
            >
              <div className="mb-4 flex flex-col gap-3 border-b border-slate-700 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                    {exp.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {exp.position}
                  </h3>
                  <p className="mt-1 text-base text-slate-300">
                    {exp.employer}
                  </p>
                </div>
                <span className="inline-flex w-fit rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-200">
                  {exp.type}
                </span>
              </div>

              <ul className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                {exp.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
