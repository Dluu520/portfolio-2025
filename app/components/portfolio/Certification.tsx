import React from "react";
import Image from "next/image";

const certifications = [
  {
    name: "Flutter Mobile Development",
    image: "/Flutter-Mobile-Applications-DevelopmentBadge.png",
    link: "https://www.credly.com/badges/51c9089c-cea8-4ca7-81b1-76b77c440a44/linked_in_profile",
  },
  {
    name: "Workforce Advantage",
    image: "/Workforce-Advantage-Microcredential-Badge.png",
    link: "https://www.credly.com/badges/8a03dc94-9bfd-4b56-a539-585600a8c7b6?source=linked_in_profile",
  },
  {
    name: "Data Analytics Bootcamp Certification of Completion",
    image: "/Verified Analytics Bootcamp Certification.png",
    link: "https://github.com/AlexTheAnalyst/Data-Analytics-Bootcamp/blob/main/README.md",
  },
];

function Certifications() {
  return (
    <section className="w-full p-8 bg-gray-900">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Certifications
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full h-40 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={cert.image}
              alt={cert.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-sm text-white text-center font-semibold">
                {cert.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
