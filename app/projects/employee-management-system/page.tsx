import Image from "next/image";
import Link from "next/link";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Mongoose",
  "REST API",
  "Tailwind CSS",
];

const highlights = [
  "Employee CRUD operations",
  "Employee search and filtering",
  "MongoDB-backed data storage",
  "Responsive dashboard layout",
  "Frontend/backend integration",
  "Practical internal tooling workflow",
];

export default function EmployeeManagementCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="rounded-full border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
          >
            ← Back to Portfolio
          </Link>
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Complete
          </span>
        </div>

        <header className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg backdrop-blur sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Featured project
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Employee Management System
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            A business-oriented CRM and employee management application designed
            for customer management, scheduling workflows, search and filtering,
            authentication, reusable UI components, and database-backed
            operations.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://employees-management-platform.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/Dluu520/employee-mangagement/tree/master"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
            >
              GitHub Repository
            </a>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/80 p-4 shadow-lg">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-800">
              <Image
                src="/projects/employeeAPI.png"
                alt="Employee Management System dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              This project focuses on business-facing employee and customer
              management in a responsive dashboard interface. It supports common
              internal workflows such as creating records, updating information,
              managing schedules, and filtering data through a practical,
              end-to-end application experience.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">What I Built</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Challenges</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                <span>
                  Designing a simple but usable data model for employee records.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                <span>
                  Connecting frontend forms with API-driven backend updates
                  cleanly.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                <span>
                  Ensuring the dashboard remained responsive while handling
                  search and list updates.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                <span>
                  Keeping data operations predictable and maintainable across
                  CRUD flows.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">
              What I Learned
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              This project strengthened my understanding of full-stack
              application flow, database-backed CRUD patterns, and the
              importance of consistent frontend and backend communication. It
              also reinforced how thoughtful UX and practical data handling can
              combine into a useful business management tool.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Links</h2>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="https://employees-management-platform.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Dluu520/employee-mangagement/tree/master"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-slate-600 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
