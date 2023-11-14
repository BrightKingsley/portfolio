"use client";

import {
  Button,
  WobbleSphere,
  HeroSwitch,
  ReactLogo,
  Rubik,
  Macbook,
  Die3d,
} from "..";
import Marquee from "react-fast-marquee";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

let count = false;
const items = ["Think.", "Build.", "Solve."];

// let current = 1;
export default function Hero() {
  const [current, setCurrent] = useState(1);

  const getCurrentItem = (item: number) => {
    console.log("CURRENT_ITEM", item);
    setCurrent(item);
  };

  const nextText = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1);
    count = !count;
    // getCurrentItem(current);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextText();
    }, 2500);
    return () => clearTimeout(timeout);
  }, [count]);

  let model = <Rubik />;
  if (current === 0) {
    model = <Rubik />;
  }

  if (current === 1) {
    model = <ReactLogo />;
  }
  if (current === 2) {
    model = <Die3d />;
  }

  return (
    <div className="flex flex-col-reverse gap-12 md:gap-0 md:flex-row w-[90%] bg-gradient mx-auto h-full !z-20">
      <div className="flex items-center justify-center flex-1 text-left">
        <div className="h-fit">
          {/* <HeroSwitch getCurrentItem={getCurrentItem} /> */}

          <div className="relative text-5xl container mx-auto leading-[3.6rem] md:leading-[5rem] font-bold text-center md:text-left inline-block z-10">
            <h1
              className={`${
                current === 0
                  ? "heroText  after:top-0 after:left-0 after:absolute after:inline-block after:bg-clip-text  after:content-['Think.'] after:w-full"
                  : "text-grey-1 after:w-0"
              } inline-block `}
            >
              Think.
            </h1>{" "}
            <h1
              className={`${
                current === 1
                  ? "heroText  after:top-0 after:left-0 after:absolute after:inline-block after:bg-clip-text  after:content-['Build.'] after:w-full"
                  : "text-grey-1 after:w-0"
              } inline-block`}
            >
              Build.
            </h1>{" "}
            <h1
              className={`${
                current === 2
                  ? "heroText  after:top-0 after:left-0 after:absolute after:inline-block after:bg-clip-text  after:content-['Solve!'] after:w-full"
                  : "text-grey-1 after:w-0"
              } inline-block`}
            >
              Solve!
            </h1>{" "}
            {/* <h1 className={`${"text-grey-1"} inline-block`}>{items[current]}</h1> */}
          </div>

          <p className="text-center md:text-left relative z-10">
            Empower your brand and reward your customers with our services
          </p>
          <div className="mx-auto sm:mx-0 w-fit mt-4 relative z-10">
            <Button animate={true} color="purple">
              Work with me
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 relative z-10 flex items-center justify-center">
        <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-main-2 flex items-center justify-center hover:cursor-grab active:cursor-grabbing">
          {model}
        </div>
      </div>
    </div>
  );
}

/**
 
<div className="w-96 h-96 rounded-full bg-purple-400">
						<Ipad />
					</div> 
 */
