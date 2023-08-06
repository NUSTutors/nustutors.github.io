import React, { useState } from "react";

export default function Video() {
  return (
    <div>
      <h1 className={"px-8 pt-8 text-left text-3xl font-bold leading-relaxed"}>
        Project Video
      </h1>
      <p className={"px-8 py-3 text-left"}>This is our project video.</p>
      <div className={"aspect-video w-full max-w-5xl px-8 py-4"}>
        <video controls width="100%">
          <source src="/final/5732.mp4" type="video/mp4" />
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src="/final/5732.vtt"
            default
          />
          Video tag not supported.
        </video>
      </div>
    </div>
  );
}
