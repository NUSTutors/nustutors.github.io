import React, { useState } from "react";

export default function Poster() {
  const [usePNG, setUsePNG] = useState(true);

  const toggleUsePNG = () => {
    setUsePNG(!usePNG);
  };

  return (
    <div>
      <h1 className={"px-8 pt-8 text-left text-3xl font-bold leading-relaxed"}>
        Project Poster
      </h1>
      <p className={"px-8 py-3 text-left"}>This is our project poster.</p>
      <div className={"mx-8 my-2 flex flex-row items-center"}>
        <button
          className={
            "grow-0 rounded-md border-2 bg-blue-500 px-2 py-2 text-white hover:bg-blue-600" +
            " focus:ring-2" +
            " focus:ring-blue-600 focus:ring-opacity-50"
          }
          onClick={toggleUsePNG}
        >
          View as {usePNG ? "SVG" : "PNG"}
        </button>
      </div>

      <div className={"aspect-[1/1.38] w-full max-w-5xl px-8 pb-0 pt-4"}>
        {usePNG ? (
          <img src="/final/5732.png" alt="Liftoff Poster" />
        ) : (
          <img src="/final/5732.svg" alt="Liftoff Poster" />
        )}
      </div>
    </div>
  );
}
