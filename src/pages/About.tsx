import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { Link } from "react-router-dom";

const orbitalMilestones = [
  {
    title: "Liftoff",
    path: "/liftoff",
  },
  {
    title: "Milestone 2",
    path: "/milestone2",
  },
  {
    title: "Milestone 3",
    path: "/milestone3",
  },
];

function About() {
  return (
    <div>
      <p className={"px-8 pt-8 text-left"}>
        NUSTutors is built under the module,{" "}
        <a
          className={"items-center text-blue-700 underline"}
          href={"https://orbital.comp.nus.edu.sg/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          CP2106: Independent Software Development
        </a>{" "}
        (a.k.a Orbital).
      </p>

      <p className={"pl-8 pt-4 text-xl font-bold"}>Built by</p>
      <table className={"table-auto"}>
        <tbody>
          <tr>
            <td className={"pl-8 pt-4"}>Li Jiakai</td>
            <td className={"pl-8 pt-4"}>
              <a
                href={"https://github.com/jiakai-17"}
                className={"flex items-center text-blue-700 underline"}
                target="_blank"
                rel="noopener noreferrer"
              >
                @jiakai-17 <HiExternalLink className="ml-1" />
              </a>
            </td>
          </tr>
          <tr>
            <td className={"pl-8 pt-4"}>Lim Jun Hui Alan</td>
            <td className={"pl-8 pt-4"}>
              <a
                href={"https://github.com/freshcabbage123"}
                className={"flex items-center text-blue-700 underline"}
                target="_blank"
                rel="noopener noreferrer"
              >
                @freshcabbage123 <HiExternalLink className="ml-1" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className={"mt-8 pl-8 pt-4 text-xl font-bold"}>Advised by</p>
      <table className={"table-auto"}>
        <tbody>
          <tr>
            <td className={"pl-8 pt-4"}>Koh Wen Jie</td>
            <td className={"pl-8 pt-4"}>
              <a
                href={"https://github.com/kohwenjie"}
                className={"flex items-center text-blue-700 underline"}
                target="_blank"
                rel="noopener noreferrer"
              >
                @kohwenjie <HiExternalLink className="ml-1" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <p className={"mt-8 pl-8 pt-4 text-xl font-bold"}>Orbital Milestones</p>
      <ul>
        {orbitalMilestones.map((milestone) => (
          <li className={"pl-8 pt-4"} key={milestone.title}>
            <Link to={milestone.path} className={"text-blue-600 underline"}>
              {milestone.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default About;
