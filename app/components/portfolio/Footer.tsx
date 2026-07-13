import React from "react";
import Certifications from "./Certification";
import Image from "next/image";

function Footer() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/Dluu520",
      icon: "/skills/github.png",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/dong-luu-fl/",
      icon: "/linkedIn.png",
    },
  ];

  return (
    <footer className="flex flex-col items-center px-4 py-8 text-white sm:px-6 lg:px-8">
      <Certifications />

      <div className="mt-2 flex w-full max-w-5xl flex-wrap items-center justify-center gap-3">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 transition hover:-translate-y-0.5 hover:border-blue-500/70 hover:bg-slate-800"
          >
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white p-1">
              <Image
                src={social.icon}
                alt={social.name}
                fill
                sizes="32px"
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-slate-200">
              {social.name}
            </span>
          </a>
        ))}
      </div>

      <p className="px-4 py-10 text-center text-sm text-slate-400 lg:px-8 lg:py-14">
        This portfolio and all its contents are © 2025 Dong Luu. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
