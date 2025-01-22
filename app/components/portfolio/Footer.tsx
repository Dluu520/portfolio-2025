import React from "react";
import styles from "@/app/ui/footer.module.css";

function Footer() {
  return (
    <div className="snap-center flex flex-col h-auto justify-center items-center bg-gray-400 ">
      <div className="flex w-full h-20  p-4 justify-center gap-10 ">
        <a className="hover:cursor-pointer" href="https://github.com/Dluu520">
          Github
        </a>
        <a
          className="hover:cursor-pointer"
          href="https://www.linkedin.com/in/dong-luu-520/"
        >
          LinkedIn
        </a>
        {/* <a className="hover:cursor-pointer" href="/">
          Portfolio
        </a> */}
      </div>
      <a
        href="/#home"
        className={`${styles.arrowUp} text-black text-lg font-bold mb-10 hover:cursor-pointer`}
      ></a>
    </div>
  );
}

export default Footer;
