import bgRoulette from "../../../assets/landing/roulette.png";
import { Card, Die3d, Testimonial } from "..";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  return (
    <>
      <p>I'm goint to be honest, I</p>
      <div className="flex items-center justify-center overflow-x-hidden">
        <Marquee gradient={false} className="bg-[#dcccda33] backdrop-blur-sm">
          <div className="flex flex-col py-2">
            <div className="py-1 w-full h-full flex items-center justify-between gap-4">
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center  justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center mr-4">
                {" "}
                works{" "}
              </div>
            </div>
            <div className="py-4 w-full h-full flex items-center justify-between gap-4">
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center  justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center">
                works{" "}
              </div>
              <div className="w-52 bg-slate-300 h-28 rounded-2xl flex items-center justify-center mr-4">
                works{" "}
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}
