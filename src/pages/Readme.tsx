import React, { useState } from "react";

export default function Readme() {
  return (
    <div>
      <h1 className={"px-8 pt-8 text-left text-3xl font-bold leading-relaxed"}>
        Project README
      </h1>
      <p className={"px-8 py-3 text-left"}>This is our project README.</p>
      <div
        className={
          "mx-4 mb-20 mt-2 aspect-video w-full max-w-5xl border-2 border-gray-300 px-4 py-4"
        }
      >
        <iframe
          title={"Project README PDF"}
          src={"/final/5732.pdf"}
          width="100%"
          height="1000px"
        ></iframe>
      </div>
    </div>
  );
}
