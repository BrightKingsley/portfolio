"use client";

import { motion } from "framer-motion";
import myPic from "@/assets/images/myPic.png";

import { Wheel3d, Button, WobbleSphere } from "..";
import Media from "react-media";
import { SM } from "@/constants/mediaQueries";
import Image from "next/image";

export default function About({ visible }: { visible: boolean }) {
  return (
    <Media queries={{ small: { maxWidth: SM } }}>
      {(matches) => (
        <>
          <h1>But... Who even is this guy? </h1>
          <div className="flex flex-col items-center justify-center w-full md:pt-0 md:py-16 md:flex-row">
            <div className="flex flex-1 h-full_  w-full_ w-[20rem] h-[30rem] relative items-center justify-center">
              {/* <div className="z-10 w-full h-full absolute_ -top-7">
                <WobbleSphere scale={matches.small ? 2.5 : 2.5} />
              </div> */}
              <div className="bg-main-1 rounded-full overflow-clip w-40 h-40">
                <Image
                  src={myPic}
                  alt=""
                  //COMEBACK
                  fill
                  className=" md:w-[32rem]_ md:h-[32rem]_ md:w-full rounded-full md:h-full object-contain absolute bottom-20 md:bottom-0 md:top-20 inset-0 m-auto z-40"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div>
                <h2
                  className={`${
                    visible ? "after:w-1/2" : " after:w-0"
                  } relative after:inset-0 after:top-full after:mx-auto hover:after:w-1/2 text-4xl font-bold h-underline_ after:absolute after:block after:h-[5px] gradientText after:bg-purple-600 after:w-0 after:rounded-lg w-fit after:transition-all after:duration-[2s]`}
                >
                  About Me
                </h2>
              </div>
              <p className="w-[90%] mx-auto md:mx-0 z-50">
                My name is Bright Kingsley. I am a 19 year old full stack web
                developer, with about two years of experience designing useful
                and approachable user interfaces. I have knowledge in many
                aspects of design best practices and emerging UI development
                techniques. I am skilled at employing frameworks, as well as
                designing customized UI/UX profiles for specific client needs. I
                look forward to connecting and working with like minded tech
                enthusiasts while I learn new things and pick up new skills
                along my wonderful tech journey
              </p>
            </div>
            <div></div>
          </div>
        </>
      )}
    </Media>
  );
}
