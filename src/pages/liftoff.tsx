import React from "react";

function liftoffPage() {
  return (
    <div>
      <p className={"px-8 pt-8 text-left"}>This is our liftoff page!</p>
      <p className={"px-8 py-4 text-left underline"}>Project Poster</p>
      <div className={"aspect-[1/1.38] w-full max-w-5xl px-8 pb-0 pt-4"}>
        <img src="/liftoff/5732.png" alt="Liftoff Poster" />
      </div>
      <p className={"px-8 py-4 pt-0 text-left underline"}>Project Video</p>
      <div className={"aspect-video w-full max-w-5xl px-8 py-4"}>
        <video controls width="100%">
          <source src="/liftoff/5732.mp4" type="video/mp4" />
          Video tag not supported.
        </video>
      </div>
    </div>
  );
}

export default liftoffPage;
