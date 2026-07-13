import React from "react";
import Image from "next/image";

const certifications = [
  {
    name: "Flutter Mobile Development",
    image: "/certs/Flutter-Mobile-Applications-DevelopmentBadge.png",
    link: "https://www.credly.com/badges/51c9089c-cea8-4ca7-81b1-76b77c440a44/linked_in_profile",
  },
  {
    name: "Workforce Advantage",
    image: "/certs/Workforce-Advantage-Microcredential-Badge.png",
    link: "https://www.credly.com/badges/8a03dc94-9bfd-4b56-a539-585600a8c7b6?source=linked_in_profile",
  },
  {
    name: "Data Analytics Bootcamp",
    image: "/certs/Verified Analytics Bootcamp Certification.png",
    link: "https://github.com/AlexTheAnalyst/Data-Analytics-Bootcamp/blob/main/README.md",
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    image: "/certs/coursera-cert.png",
    link: "https://www.coursera.org/account/accomplishments/verify/PJEZDDL74JUE",
  },
  {
    name: "Prepare Data for Exploration",
    image: "/certs/coursera-cert.png",
    link: "https://www.coursera.org/account/accomplishments/verify/77LL3MRHNBG5",
  },
  {
    name: "Process Data from Dirty to Clean",
    image: "/certs/coursera-cert.png",
    link: "https://www.coursera.org/account/accomplishments/verify/BWX9RPBBHKOX",
  },
];

function Certifications() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-3xl border border-slate-700 bg-slate-900/70 p-6 shadow-lg backdrop-blur sm:p-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Credentials
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Certifications & Professional Links
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800/80 p-3 transition hover:-translate-y-0.5 hover:border-blue-500/70 hover:bg-slate-800"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-600 bg-white">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  sizes="56px"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-white">{cert.name}</p>
                <p className="mt-1 text-xs text-slate-400">View credential</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
