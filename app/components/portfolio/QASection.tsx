import React from "react";

const qaChecks = [
  {
    title: "Create employee",
    expected:
      "Employee is created successfully when required fields are valid.",
  },
  {
    title: "Missing required field",
    expected: "Validation message appears and submission is blocked.",
  },
  {
    title: "Edit employee",
    expected: "Updated information is reflected in the record and UI.",
  },
  {
    title: "Delete employee",
    expected: "Employee record is removed and the list is refreshed.",
  },
  {
    title: "Invalid API request",
    expected: "The application returns an appropriate error response.",
  },
];

function QASection() {
  return (
    <section className="flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl rounded-3xl border border-slate-700 bg-slate-900/80 p-6 shadow-lg backdrop-blur sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Quality & Reliability
          </p>
          <h2 className="mt-3 text-3xl font-bold underline decoration-blue-500 underline-offset-8 sm:text-4xl">
            QA & Testing Mindset
          </h2>
        </div>

        <p className="mx-auto max-w-3xl text-center text-sm leading-7 text-slate-300 sm:text-base">
          I approach application work with a validation-first mindset, checking
          forms, API behavior, and workflow consistency so that features are
          dependable and user-friendly.
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
          <table className="min-w-full divide-y divide-slate-700 text-left text-sm text-slate-200">
            <thead className="bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold">Test case</th>
                <th className="px-4 py-3 font-semibold">Expected result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700 bg-slate-900/60">
              {qaChecks.map((check) => (
                <tr key={check.title}>
                  <td className="px-4 py-3 font-medium text-white">
                    {check.title}
                  </td>
                  <td className="px-4 py-3 text-slate-300">{check.expected}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default QASection;
