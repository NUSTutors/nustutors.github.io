import React, { useState } from "react";

export default function Milestone2() {
  const [usePNG, setUsePNG] = useState(true);

  const toggleUsePNG = () => {
    setUsePNG(!usePNG);
  };

  return (
    <div>
      <p className={"px-8 pt-8 text-left"}>This is our Milestone 2 page!</p>
      <div className={"mt-4 flex flex-row items-center"}>
        <p className={"px-8 py-4 text-left underline"}>
          Updated Project Poster
        </p>
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
          <img src="/ms2/5732.png" alt="Liftoff Poster" />
        ) : (
          <img src="/ms2/5732.svg" alt="Liftoff Poster" />
        )}
      </div>
      <p className={"px-8 py-4 pt-0 text-left underline"}>
        Updated Project Demo Video
      </p>
      <div className={"aspect-video w-full max-w-5xl px-8 py-4"}>
        <video controls width="100%">
          <source src="/ms2/5732.mp4" type="video/mp4" />
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src="/ms2/5732.vtt"
            default
          />
          Video tag not supported.
        </video>
      </div>
    </div>
  );
}
