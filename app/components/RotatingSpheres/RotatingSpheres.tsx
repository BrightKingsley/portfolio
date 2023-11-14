export default function RotatingSpheres() {
  return (
    <>
      {/* <div className="animation-container"> */}
      {/* <div className="animation-container-child"> */}
      <div className="top-0 left-0 animation-axis animate-rotate-anticlockwise-60 animation-axis-1">
        <div className="animation-wrapper h-[60rem] animation-wrapper-1">
          <div className="animation h-[60rem] w-[60rem] animation-1 flex items-center justify-center">
            1
          </div>
        </div>
      </div>
      <div className="top-0 !z-40 right-0 animation-axis animate-rotate-anticlockwise-40 animation-axis-2">
        <div className="animation-wrapper h-[35rem] animation-wrapper-2">
          <div className="animation h-[8rem] w-[8rem] md:h-[10rem] md:w-[10rem] animation-2 flex items-center justify-center">
            2
          </div>
        </div>
      </div>
      <div className="animation-axis animation-axis-3 animate-rotate-clockwise-60">
        <div className="animation-wrapper h-[70rem] animation-wrapper-3 bg-green-400">
          <div className="animation h-[15rem] w-[15rem] md:h-[30rem] md:w-[30rem] animation-3 flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <div className="animation-axis right-0 animation-axis-4 !animate-rotate-clockwise-60">
        <div className="animation-wrapper h-[40rem] animation-wrapper-4 bg-green-400">
          <div className="animation h-[30rem] w-[30rem] animation-4 flex items-center justify-center">
            4
          </div>
        </div>
      </div>
      <div className="animation-axis animation-axis-5">
        <div className="animation-wrapper h-[40rem] animation-wrapper-5">
          <div className="animation h-[10rem] w-[10rem] animation-5 flex items-center justify-center">
            5
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
