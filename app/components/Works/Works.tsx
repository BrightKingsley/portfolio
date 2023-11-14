"use client";

import projectsList from "@/data/projects-list.json";
import { motion } from "framer-motion";
import rewards from "../../../assets/landing/Players win cool rewards illustration.png";
import funAndGames from "../../../assets/landing/Fun and exciting games illustration.png";

import { Wheel3d } from "..";
import Button from "../Button";

import Media from "react-media";
import { SM } from "@/constants/mediaQueries";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LinkIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function Works() {
  const { projects } = projectsList;
  const { push } = useRouter();

  return (
    // <Media queries={{ small: { maxWidth: SM } }}>
    //   {(matches) => (
    //     <div className="flex w-full text-center md:text-left flex-col md:flex-row items-center gap-24 md:py-24 px-12">
    //       <div className="flex-1 space-y-10">
    //         <h2 className="gradientText text-5xl leading-[4rem] font-bold">
    //           Fun and exciting games!
    //         </h2>
    //         <motion.p
    //           initial={{ y: 100, opacity: 0 }}
    //           whileInView={{ y: 0, opacity: 1 }}
    //           viewport={{ amount: 1 }}
    //           transition={{ duration: 1 }}
    //           className="md:w-[80%] text-lg"
    //         >
    //           Ready to take your raffle draws to the next level? Add a spin of
    //           fun with our exciting games Spin the Wheel and 777 Spin Keep your
    //           customers engaged and boost your brand with these customizable and
    //           branded games. Sign up now to host your own raffle draws and let
    //           the fun begin
    //         </motion.p>
    //         <div className="w-fit mx-auto md:mx-0">
    //           <Button animate color="purple">
    //             <p className="text-white text-lg">Play now!</p>
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    // </Media>
    <div className="!z-50 bg-green-400_">
      <div className="w-full h-full !z-50">
        <h2
          className={`mx-auto sm:mx-0
            "after:w-1/2" " after:w-0_"
           relative after:inset-0 after:top-full after:mx-auto hover:after:w-1/2 text-4xl font-bold h-underline_ after:absolute after:block after:h-[5px] gradientText after:bg-main-1 after:w-0 after:rounded-lg w-fit after:transition-all after:duration-[2s]`}
        >
          My works
        </h2>
        <p>
          Well, I've worked on a number of projects ranging from fully
          functional e-commerce sites, realtime chat applications to todos,
          tic-tac-toe, and our beloved calculator. I lost some of my earlier
          projects due to a hard drive failure which prompted me to learn
          <strong>git/github</strong> and <strong>version control</strong>
        </p>
      </div>
      <div className="flex w-full h-screen px-12 !z-50 py-8">
        <Media queries={{ small: { maxWidth: SM } }}>
          {(matches) => (
            <div className="relative group py-4 md:py-0 w-screen flex flex-col h-full rounded-lg overflow-clip">
              <Swiper
                direction={matches.small ? "vertical" : "horizontal"}
                autoplay={{
                  reverseDirection: true,
                  pauseOnMouseEnter: true,
                  waitForTransition: true,
                  delay: 1000,
                }}
                className="w-full h-full bg-main-1 z-10"
                // breakpoints={{
                //   640: {
                //     slidesPerView: 1,
                //   },
                //   768: {
                //     slidesPerView: 2,
                //   },
                //   1024: {
                //     slidesPerView: 4,
                //   },
                // }}
              >
                {projects.map((project) => (
                  <SwiperSlide key={Math.random()}>
                    <div className="relative flex flex-col hover:!cursor-grab active:!cursor-grabbing">
                      <div className="absolute bg- top-64 mx-4">
                        <h2 className="text-4xl text-main-1 font-bold">
                          {project.name}
                        </h2>
                        <p>{project["short-desccription"]}</p>
                      </div>
                      <div className="bg-slate-300 flex-1">
                        <img
                          src={project.images[1]}
                          alt="project"
                          //   width={500}
                          //   height={400}
                          //   fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h2>{project.name}</h2>
                        <p>{project["short-desccription"]}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute z-10 bottom-0 left-0 w-full bg-main-1 group-hover:translate-y-0 translate-y-full transition-all duration-100 p-2">
                <div className="flex divide-x-2 divide-white p-2">
                  <Link
                    target="_blank"
                    className="flex-1 flex items-center justify-center"
                    href={"https://github.com"}
                  >
                    <LinkIcon className="w-8 h-8 fill-white" />
                  </Link>
                  <Link
                    target="_blank"
                    className="flex-1 flex items-center justify-center"
                    href={"https://github.com"}
                  >
                    <LinkIcon className="w-8 h-8 fill-white" />
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/projects"}
                    color="purple"
                    className="mx-2 md:w-1/2 md:mx-auto bg-gradient-to-r from-main-1 to-main-3 cursor-pointer hover:shadow-lg hover:shadow-main-2/80 active:shadow-none active:scale-95 transition-all duration-150 text-white px-8 py-[8px] z-20 font-bold flex items-center justify-center gap-4 rounded-md"
                  >
                    view all projects
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Media>
      </div>
    </div>
  );
}
