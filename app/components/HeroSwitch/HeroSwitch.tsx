"use client";

import React, { useEffect, useState } from "react";

const items = ["Think.", "Build.", "Solve."];

let count = false;

export default function HeroSwitch({ getCurrentItem }) {
  const [current, setCurrent] = useState(1);
  const nextText = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
    count = !count;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextText();
    }, 2500);
    // getCurrentItem(current);
    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <>
      <div className="text-5xl container mx-auto leading-[3.6rem] md:leading-[5rem] font-bold text-center md:text-left inline-block">
        <h1
          className={`${
            current === 0
              ? "heroText  after:top-0 after:left-0 after:absolute after:inline-block after:bg-clip-text  after:content-['Think.'] after:w-full"
              : "text-white after:w-0"
          } inline-block `}
        >
          Think.
        </h1>{" "}
        <h1
          className={`${
            current === 1
              ? "heroText  after:top-0 after:left-0 after:absolute after:inline-block after:bg-clip-text  after:content-['Build.'] after:w-full"
              : "text-white after:w-0"
          } inline-block`}
        >
          Build.
        </h1>{" "}
        <h1
          className={`${
            current === 2
              ? "heroText  after:top-0 after:left-0 after:absolute after:inline-block after:bg-clip-text  after:content-['Solve.'] after:w-full"
              : "text-white after:w-0"
          } inline-block`}
        >
          Solve
        </h1>{" "}
        {/* <h1 className={`${"text-white"} inline-block`}>{items[current]}</h1> */}
      </div>
    </>
  );
}
