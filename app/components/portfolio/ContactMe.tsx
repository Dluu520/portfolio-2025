/* eslint-disable */
"use client";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center px-6 py-16"
    >
      <div className="flex w-full max-w-xl flex-col items-center rounded-3xl border border-slate-700 bg-slate-900/80 p-8 text-center shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s connect
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
          Feel free to reach out for collaborations, opportunities, or just to
          say hello.
        </p>

        <a
          href="mailto:dong.luu520@gmail.com"
          className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
