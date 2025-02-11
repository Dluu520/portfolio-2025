import React from "react";
import Link from "next/link";
import Certifications from "./Certification"; // Import the Certifications component
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-gray-900 text-white">
      {/* Certifications Section */}
      <Certifications />
      {/* Social Links */}
      <div className="flex w-full h-20 p-4 justify-center gap-10">
        <a
          href="https://github.com/Dluu520"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src="/skills/github.png"
            alt="github"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105  bg-white"
          />{" "}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm text-white text-center font-semibold">
              Github
            </span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/dong-luu-fl/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src="/linkedin.png"
            alt="linkedin"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm text-white text-center font-semibold">
              LinkedIn
            </span>
          </div>
        </a>
      </div>
      {/* Back to Top Arrow */}
      <p className="p-10 lg:p-32">
        This portfolio and all its contents are © 2025 Dong Luu. All rights
        reserved.
      </p>

      {/* <Link
        href="/#home"
        className={`${styles.arrowUp}  text-lg font-bold mb-10 hover:cursor-pointer text-[#1a202c]`}
      ></Link> */}
    </footer>
  );
}

export default Footer;
