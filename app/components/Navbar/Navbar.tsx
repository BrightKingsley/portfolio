"use client";

import { useState } from "react";
import NavLink from "@/utils/NavLink";
import Image from "next/image";
/* background: linear-gradient(
    100.19deg,
    #4309f3 -3.28%,
    rgba(184, 85, 174, 0.64) 125.97%
); */
export default function Navbar() {
  const [navToggled, setNavToggled] = useState(false);
  const gradient =
    "bg-[linear-gradient(100.19deg,_#4309f3_-3.28%,_rgba(184,_85,_174,_0.64)_125.97%)]";
  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="absolute w-full py-2  z-50 top-0 overflow-x-clip">
      {/* add in backdrop filter here */}
      <nav className="container mx-auto px-3 backdrop-blur-md  transition-all  duration-300 md:shadow-none">
        <div className="flex relative justify-between items-center w-full z-20">
          <button
            className="block md:hidden space-y-1 group"
            onClick={() => setNavToggled(!navToggled)}
          >
            <div
              className={`flex gap-0.5 transition-all duration-300 ${
                navToggled ? "translate-x-2" : "translate-x-0"
              }`}
            >
              <div className={`${gradient} h-1 w-1 rounded-full`} />
              <div className={`${gradient} h-1 w-6 rounded-lg`} />
            </div>
            <div className="flex gap-0.5">
              <div className={`${gradient} h-1 w-1 rounded-full`} />
              <div className={`${gradient} h-1 w-6 rounded-lg`} />
            </div>
            <div
              className={`flex gap-0.5 transition-all duration-300 ${
                navToggled ? "-translate-x-2" : "translate-x-0"
              }`}
            >
              <div className={`${gradient} h-1 w-1 rounded-full`} />
              <div className={`${gradient} h-1 w-6 rounded-lg`} />
            </div>
          </button>
          <div className="md:w-fit flex justify-center w-full">
            <div className="md:w-36 w-28">
              {/* <Image
                src={navBrand}
                alt="Drawr"
                className="h-full w-full"
                width={60}
                height={60}
              /> */}
            </div>
          </div>
          <ul className="hidden ml-auto justify-center  items-center gap-14 md:flex">
            {links.map((link, index) => (
              <NavLink href={link.href} key={index}>
                {({ isActive }) => (
                  <div className={`${isActive && " bg-main-1"}`}>
                    {link.href}
                  </div>
                )}
              </NavLink>
            ))}
          </ul>
          {/* <div className="flex items-center gap-2">
            <button className="font-medium hover:shadow-lg hover:shadow-drawrPurple/50 rounded-md text-gray-700 md:py-2.5 md:px-6 transition-all duration-300 py-1 px-2">
              Login
            </button>
            <button className="font-medium bg-purple-600 hover:bg-purple-600/50 hover:shadow-lg hover:shadow-drawrPurple/50 rounded-md text-white hover:text-gray-900 md:py-2.5 md:px-6 transition-all duration-300 py-1 px-2">
              signUp
            </button>
          </div> */}
        </div>
        <div
          className={`${
            navToggled ? "dropdown" : "hidden"
          } relative md:hidden block mt-2 bg-red-400`}
        >
          <div className="space-y-1">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-1 group">
                <div
                  className={`h-1 w-1 ${gradient} rounded-full group-hover:h-9 transition-all duration-300`}
                />
                <NavLink
                  href={link.href}
                  className="rounded-lg cursor-pointer hover:bg-loginPurple/50 w-full p-2"
                >
                  {({ isActive }) => <div>{link.name}</div>}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
