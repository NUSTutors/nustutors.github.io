import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiExternalLink, HiMenu } from "react-icons/hi";

function Navbar() {
  // used for the elements of navbar
  const classPageLi =
    "max-h-14 border-b-2 border-stone-400 w-full sm:w-auto sm:border-r-2 sm:border-b-0";
  const classTitleLink =
    "flex p-3 px-4 w-full text-2xl hover:bg-gray-600 hover:text-gray-50";
  const classPageLink = "flex p-3.5 hover:bg-gray-600 hover:text-gray-50";
  const activeClassPageLink = "flex p-3.5 bg-gray-500 text-gray-50";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Set initial state based on window size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={
        "sm:flex-no-wrap flex w-screen flex-wrap items-center justify-between bg-white text-lg"
      }
    >
      <div className="w-full sm:flex sm:justify-between">
        <div className="flex w-full items-center justify-between border-b-2 border-stone-400 bg-gray-300 sm:w-auto sm:border-b-0 sm:border-r-2">
          <Link to={"/"} className={classTitleLink}>
            NUSTutors
          </Link>
          <div className="sm:hidden">
            <button type="button" className="p-2" onClick={toggleMenu}>
              <HiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <ul
          className={`${isMenuOpen ? "flex" : "hidden"}
            "sm:items-center" w-full flex-col bg-gray-300 sm:flex-row sm:content-center`}
        >
          <li className={classPageLi}>
            <Link
              to={"about"}
              className={`${
                isActive("about") ? activeClassPageLink : classPageLink
              }`}
            >
              About
            </Link>
          </li>
          <li className={classPageLi}>
            <Link
              to={"liftoff"}
              className={`${
                isActive("liftoff") ? activeClassPageLink : classPageLink
              }`}
            >
              Liftoff
            </Link>
          </li>
          <li className={classPageLi}>
            <Link
              to={"milestone2"}
              className={`${
                isActive("milestone2") ? activeClassPageLink : classPageLink
              }`}
            >
              Milestone 2
            </Link>
          </li>
          <li className={classPageLi}>
            <Link
              to={"milestone3"}
              className={`${
                isActive("milestone3") ? activeClassPageLink : classPageLink
              }`}
            >
              Milestone 3
            </Link>
          </li>
          <li className={classPageLi}>
            <Link
              to="https://github.com/NUSTutors"
              target="_blank"
              rel="noopener noreferrer"
              className={classPageLink}
            >
              GitHub <HiExternalLink className="ml-1" />
            </Link>
          </li>
          <li className={classPageLi}>
            <Link
              to="https://app.nustutors-dev.duckdns.org"
              target="_blank"
              rel="noopener noreferrer"
              className={classPageLink}
            >
              Demo <HiExternalLink className="ml-1" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
