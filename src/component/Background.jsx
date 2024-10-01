import React from "react";

function Background() {
  return (
    <>
      <div className="fixed h-full w-screen z-[2]">
        <div className="absolute top-[5%] w-full py-10 text-zinc-600 flex justify-center">
          Qasim_Alii
        </div>
        <h1 className="absolute text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tight font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
