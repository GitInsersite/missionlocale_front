import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

function DropdownButtonConnexion() {
  const {
    isAuthenticated,
    logout,
    name,
    lastname,
    responsible,
    role
  } = useAuth();

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  console.log(responsible)
  console.log(role)

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setDropdownOpen(false);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  const displayText = isAuthenticated
    ? role === "entreprise"
      ? responsible
      : `${name} ${lastname}`
    : "CONNEXION";
    
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
        <FaUser className="mr-2" />
        {displayText}
      </button>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          id="dropdownHover"
          className="z-10 absolute mt-[0,5px] origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow w-fit dark:bg-gray-700"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="text-sm text-white bg-[#252323] flex flex-col">
            <li>
              <Link
                to={isAuthenticated ? role === "entreprise" ? "/espace-entreprise" : "/espace-personnel-jeune" : "/connexion-jeune"}
                onClick={() => window.scrollTo(0, 0)}
                className="block text-left px-4 py-2 hover:bg-[#A4195C] dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {isAuthenticated ? "Mon Espace" : "Espace Jeune"}
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  className="block text-left px-4 py-2 hover:bg-[#F39101] dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Déconnexion
                </button>
              ) : (
                <Link
                  to="/connexion-entreprise"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block text-left px-4 py-2 hover:bg-[#F39101] dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Espace Entreprise
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButtonConnexion;
