import React from "react";
import Logo from "./logo.png";

export default function Home() {
  return (
    <div>
      <img
        src={Logo}
        alt={"NUSTutors Logo"}
        className={"mx-auto mt-4 aspect-square h-44 md:h-64"}
      />

      <p
        className={
          "mx-4 p-8 pt-0 text-center text-5xl font-bold leading-relaxed"
        }
      >
        Welcome to NUSTutors!
      </p>
      <p className={"mx-4 text-center"}>
        NUSTutors is a comprehensive, one-stop platform for students to find
        qualified tutors that best suit their unique learning style.
      </p>
      <p className={"p-8 text-center italic"}>Coming soon this summer...</p>
    </div>
  );
}
