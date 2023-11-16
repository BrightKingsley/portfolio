import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1> Not Found</h1>

      <Link href={"/"}>to home</Link>
      {/* <div className="book mx-auto relative rounded-br-md rounded-tr-md bg- h-24 w-16 ">
          <div className="page w-full h-full absolute z-40 transition-all duration-500 bg-blue-400 page-1" style={{transform:"rotateZ(2px)"}}/>
          <div className="page w-full h-full absolute z-30 transition-all duration-150 bg-slate-400 page-2" style={{transform:"rotateZ(2px)"}}/>
          <div className="page w-full h-full absolute z-20 transition-all duration-200 bg-slate-400 page-3" style={{transform:"rotateZ(2px)"}}/>
          <div className="page w-full h-full absolute z-10 transition-all duration-300 bg-slate-400 page-4" style={{transform:"rotateZ(2px)"}}/>
        </div> */}
    </div>
  );
}
