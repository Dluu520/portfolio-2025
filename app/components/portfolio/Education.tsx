import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg backdrop-blur sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Education
          </p>
          <h2 className="mt-3 text-3xl font-bold underline decoration-blue-500 underline-offset-8 sm:text-4xl">
            University of Central Oklahoma
          </h2>
        </div>

        <div className="space-y-3 text-center sm:text-left">
          <p className="text-2xl font-semibold text-white">
            Bachelor of Science — Computer Science
          </p>
          <p className="text-base text-slate-300">Graduated May 8, 2026</p>
          <p className="text-sm leading-7 text-slate-300 sm:text-base">
            University of Central Oklahoma education and project experience have
            supported my interest in software development, software quality
            assurance, and data-focused problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
