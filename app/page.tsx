import { buttonStyle } from "@/utils/constants";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="w-[90%] h-full mx-auto items-center flex flex-col-reverse md:flex-row justify-between_">
        <div className="flex-1 space-y-3">
          <h1 className="text-5xl font-bold font-mona">Bright Kingsley</h1>
          <p className="capitalize">Creative Software Developer...</p>
          <div className="flex items-center gap-3 mt-16">
            <Link
              href={"projects"}
              className={`flex items-center justify-between gap-3 ${buttonStyle(
                "filled",
                "primary"
              )}`}
            >
              Projects
              <span className="hidden group-hover:block animate-bounce-right">
                <ArrowRightIcon className="w-6 h-6 hidden" />
              </span>
            </Link>
            <Link
              href={"about"}
              className={`flex items-center justify-between gap-3 ${buttonStyle(
                "filled",
                "primary"
              )}`}
            >
              About
              <span className="hidden group-hover:block animate-bounce-right">
                <ArrowRightIcon className="w-6 h-6" />
              </span>
            </Link>
            <Link
              href={"contact"}
              className={`flex items-center justify-between gap-3 ${buttonStyle(
                "filled",
                "primary"
              )}`}
            >
              Contact
              <span className="hidden group-hover:block animate-bounce-right">
                <ArrowRightIcon className="w-6 h-6 hidden" />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-[30rem] h-[30rem] rounded-full relative flex items-center bg-white justify-center shadow-md">
            <div className="absolute w-[120%] shrink-0">
              <Image
                src="/codingg.gif"
                alt="developer coding on laptop"
                width={1080}
                height={1080}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
