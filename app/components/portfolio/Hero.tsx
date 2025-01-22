import Image from "next/image";
import React from "react";
import styles from "@/app/ui/hero.module.css";

function Hero() {
  return (
    <div className={` snap-center ${styles.hero} `}>
      <div className=" bg-cyan-900/80 absolute h-full w-full" id="home" />
      {/* <Image
          src={
            "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={1500}
          height={100}
          alt="Hero Image"
        /> */}
      <div className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center flex flex-col items-center w-full p-20 gap-4">
        <h1 className=" text-4xl md:text-8xl underline ">Dong Luu</h1>
        <h3 className="text-lg md:text-2xl ">Software Engineer</h3>
        <a href="Dong_Luu_Resume.pdf" download="Dong_Luu_Resume.pdf">
          <button className="text-center text-sm border-2 p-2 rounded-lg  hover:cursor-pointer ">
            Download Resume
          </button>
        </a>
        <a href="mailto:dongluudev@gmail.com" className="font-bold">
          <button className="text-center text-sm border-2 p-2 rounded-lg  hover:cursor-pointer">
            Contact me
          </button>
        </a>
      </div>
      <a
        href="#about"
        className="absolute bottom-[0%] left-[50%] translate-y-[-50%] translate-x-[-50%]  animate-bounce "
      >
        <span className={`${styles.triangleDown}`}></span>
      </a>
    </div>
  );
}

export default Hero;
