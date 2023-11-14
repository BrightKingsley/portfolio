"use client";

import { ArrowRight } from "../Icons/Icons";

const Button = ({
  animate,
  arrow,
  children,
  color,
  variant,
  className,
  onClick,
}: {
  children: React.ReactNode;
  variant?: "rounded" | "rounded-full" | "rounded-md";
  color?: "purple" | "white" | "green";
  arrow?: boolean;
  animate?: boolean;
  className?: string;
  onClick?: Function;
}) => {
  return (
    <button
      onClick={() => onClick && onClick()}
      className={`  ${
        color === "green"
          ? "bg-drawrGreen border-[2px] border-lightGray rounded-md shadow-btnGreen hover:scale-[1.02	] active:shadow-none text-white"
          : color === "purple"
          ? "bg-gradient-to-r from-main-1 to-main-3 cursor-pointer hover:shadow-lg hover:shadow-main-2/80 active:shadow-none active:scale-75 transition-all duration-150 text-white"
          : color === "white"
          ? "bg-white text-gray-700 hover:scale-110 active:bg-gray-300 transition-all duration-150"
          : "bg-none text-gray-800 font-normal"
      } ${variant === "rounded" ? "rounded-full" : "rounded-md"} ${
        animate && "animate-bounce"
      } whitespace-nowrap  px-8 py-[8px] z-20 font-bold flex items-center justify-center gap-4 border border-1 border-main-1 ${className} `}
    >
      {children} {arrow && <ArrowRight color={arrow} />}
    </button>
  );
};

export default Button;

// (96, 162, 13,1) "
