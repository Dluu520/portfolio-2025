"use client";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center px-6 py-16"
    >
      <div className="flex w-full max-w-2xl flex-col items-center rounded-3xl border border-slate-700 bg-slate-900/80 p-8 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s Work Together
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
          I&apos;m currently looking for opportunities in software development,
          QA, IT, and data-related roles. I&apos;d welcome the chance to
          connect, discuss projects, and learn more about your team.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:dong.luu520@gmail.com"
            className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/dong-luu-fl/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Dluu520"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            GitHub
          </a>
          <a
            href="/Dong_Luu_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
