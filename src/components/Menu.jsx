import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import DropdownButtonMission from "./DropdownButtonMission";
import DropdownButtonService from "./DropdownButtonService";
import DropdownButtonEntreprise from "./DropdownButtonEntreprise";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubmenuOpen1, setSubmenuOpen1] = useState(false);
  const [isSubmenuOpen2, setSubmenuOpen2] = useState(false);
  const [isSubmenuOpen3, setSubmenuOpen3] = useState(false);

  const isLaptopOrLarger = useMediaQuery({ minWidth: 1024 });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setSubmenuOpen1(false);
    setSubmenuOpen2(false);
    setSubmenuOpen3(false);
  };

  const toggleSubmenu1 = () => {
    setSubmenuOpen1(!isSubmenuOpen1);
    setSubmenuOpen2(false);
    setSubmenuOpen3(false);
  };

  const toggleSubmenu2 = () => {
    setSubmenuOpen2(!isSubmenuOpen2);
    setSubmenuOpen1(false);
    setSubmenuOpen3(false);
  };

  const toggleSubmenu3 = () => {
    setSubmenuOpen3(!isSubmenuOpen3);
    setSubmenuOpen1(false);
    setSubmenuOpen2(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setSubmenuOpen1(false);
    setSubmenuOpen2(false);
    setSubmenuOpen3(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means the effect runs once when the component mounts

  return (
    <div>
      {isLaptopOrLarger ? (
        <div className="flex justify-around xl:mx-28">
          <div>
            <h1>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/logo1.png"
                alt="logo-mission-local"
                className="w-60 h-20"
              />
            </Link>
            </h1>

          </div>
          <div className="flex">
            <ul className="flex items-center text-sm font-semibold">
              <li className="flex items-center mr-4">
                <DropdownButtonMission />
              </li>
              <li className="flex items-center mr-4">
                <DropdownButtonService />
              </li>
              <li className="mr-4">
                <Link
                  to="/actualites"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-[#2696D4]"
                >
                  ACTUALITÉS
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  to="/ateliers"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-[#93C01F]"
                >
                  ATELIERS
                </Link>
              </li>
              <li className="flex items-center mr-4">
                <DropdownButtonEntreprise />
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-[#434446]"
                >
                  CONTACTEZ-NOUS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between md:px-12 relative">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/logo1.png"
                alt="logo-mission-local"
                className="w-60 h-20"
              />
            </Link>
            <GiHamburgerMenu
              className="w-10 h-10 cursor-pointer mr-3"
              onClick={() => toggleMenu()}
            />
          </div>
          {isMenuOpen && (
            <div className="mt-4 ml-10">
              <ul>
                <li className="flex items-center" onClick={toggleSubmenu1}>
                  LA MISSION LOCAL{" "}
                  {isSubmenuOpen1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isSubmenuOpen1 && (
                  <ul className="pl-6">
                    <Link to="/nos-missions" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Nos missions
                      </li>
                    </Link>
                    <Link to="/nos-communes" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Nos communes
                      </li>
                    </Link>
                    <Link to="/gouvernance" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        La gouvernance
                      </li>
                    </Link>
                    <Link to="/equipe" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Notre équipe
                      </li>
                    </Link>
                  </ul>
                )}
                <li className="flex items-center" onClick={toggleSubmenu2}>
                  SERVICES{" "}
                  {isSubmenuOpen2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isSubmenuOpen2 && (
                  <ul className="pl-6">
                    <Link to="/se-former" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Se former
                      </li>
                    </Link>
                    <Link to="/sorienter" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        S&apos;orienter
                      </li>
                    </Link>
                    <Link to="/trouver-un-emploi" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Trouver un emploi
                      </li>
                    </Link>
                    <Link to="/etre-accompagne" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Etre accompagne
                      </li>
                    </Link>
                  </ul>
                )}
                <li>
                  <Link
                    to="/actualites"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      closeMenu();
                    }}
                  >
                    ACTUALITÉS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ateliers"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      closeMenu();
                    }}
                  >
                    ATELIERS
                  </Link>
                </li>
                <li className="flex items-center" onClick={toggleSubmenu3}>
                  ENTREPRISES{" "}
                  {isSubmenuOpen3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </li>
                {isSubmenuOpen3 && (
                  <ul className="pl-6">
                    <Link to="/expertise" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Notre expertise
                      </li>
                    </Link>
                    <Link to="/demarche-rse" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        S&apos;engager dans une démarche RSE
                      </li>
                    </Link>
                    <Link to="/taxe-apprentissage" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Taxe d&apos;apprentissage
                      </li>
                    </Link>
                  </ul>
                )}
                <li>
                  <Link to="/contact" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
                    CONTACTEZ-NOUS
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Menu;
