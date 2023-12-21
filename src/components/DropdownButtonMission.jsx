import React, { useState } from "react";
import { Link } from "react-router-dom";

const DropdownButtonMission = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <div
      className="relative inline-block text-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id="dropdownHoverButton"
        className="font-semibold text-center inline-flex items-center"
        onClick={handleDropdownToggle}
        type="button"
      >
        LA MISSION LOCAL
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownHover"
          className="z-10 absolute mt-[1px] origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col items-start">
            <li>
              <Link
                to="/nos-missions"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Nos mission
              </Link>
            </li>
            <li>
              <Link
                to="/nos-communes"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Nos communes
              </Link>
            </li>
            <li>
              <Link
                to="/gouvernance"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                La gouvernance
              </Link>
            </li>
            <li>
              <Link
                to="/equipe"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Notre équipe
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownButtonMission;
