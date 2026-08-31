import React from "react";
import Skills from "./Skills";
import Image from "next/image";

function AboutMe() {
  const focusAreas = [
    "Software Quality Assurance",
    "Software Development",
    "Full-Stack Web Apps",
    "SQL & Data Analytics",
  ];

  return (
    <section
      id="about"
      className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-12"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 lg:gap-6">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold underline decoration-blue-500 underline-offset-8 sm:text-4xl">
            About
          </h1>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="flex flex-col justify-center rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 sm:p-7">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <Image
                src="/headshot.jpg"
                alt="Dong Luu"
                width={220}
                height={220}
                className="h-32 w-32 rounded-full border-4 border-blue-500 object-cover shadow-lg sm:h-40 sm:w-40 lg:h-44 lg:w-44"
              />

              <div className="flex-1 text-center sm:text-left">
                <p className="text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg sm:leading-8">
                  Recent Bachelor of Science graduate with prior professional
                  experience in full-stack web development and a technical
                  customer-support background. I enjoy building dependable
                  business applications and solving real-world workflow
                  problems.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-4">
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base sm:leading-8">
                I&apos;m interested in software quality assurance, software
                development, and data analytics roles where technical problem
                solving, troubleshooting, communication, and attention to detail
                are valued. My work spans frontend development, backend APIs,
                database-backed systems, and practical business functionality.
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-3 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 sm:p-4 lg:h-full">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
