import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
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
            <Link to="/">
              <img
                src="/public/logo1.png"
                alt="logo-mission-local"
                className="w-60 h-20"
              />
            </Link>
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
                <Link to="/actualites">ACTUALITES</Link>
              </li>
              <li className="mr-4">
                <Link to="/ateliers">ATELIERS</Link>
              </li>
              <li className="flex items-center mr-4">
                <DropdownButtonEntreprise />
              </li>
              <li>
                <Link to="/contact">CONTACTEZ-NOUS</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between ml-10 relative">
            <Link to="/">
              <img
                src="/public/logo1.png"
                alt="logo-mission-local"
                className="w-40 h-15"
              />
            </Link>
            <GiHamburgerMenu
              className="w-5 h-5 cursor-pointer mr-3"
              onClick={() => toggleMenu()}
            />
          </div>
          {isMenuOpen && (
            <div className="mt-4 ml-10">
              <ul>
                <li className="flex items-center" onClick={toggleSubmenu1}>
                  LA MISSION LOCAL <IoIosArrowDown />
                </li>
                {isSubmenuOpen1 && (
                  <ul className="pl-6">
                    <Link to="/nos-missions" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Nos missions
                      </li>
                    </Link>
                    <Link to="/nos-communes" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Nos communes
                      </li>
                    </Link>
                    <Link to="/gouvernance" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        La gouvernance
                      </li>
                    </Link>
                    <Link to="/equipe" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Notre équipe
                      </li>
                    </Link>
                  </ul>
                )}
                <li className="flex items-center" onClick={toggleSubmenu2}>
                  SERVICES <IoIosArrowDown />
                </li>
                {isSubmenuOpen2 && (
                  <ul className="pl-6">
                    <Link to="/se-former" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Se former
                      </li>
                    </Link>
                    <Link to="/sorienter" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        S'orienter
                      </li>
                    </Link>
                    <Link to="/trouver-un-emploi" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Trouver un emploi
                      </li>
                    </Link>
                    <Link to="/etre-accompagne" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Etre accompagne
                      </li>
                    </Link>
                  </ul>
                )}
                <li>
                  <Link to="/actualites" onClick={() => closeMenu()}>
                    ACTUALITES
                  </Link>
                </li>
                <li>
                  <Link to="/ateliers" onClick={() => closeMenu()}>
                    ATELIERS
                  </Link>
                </li>
                <li className="flex items-center" onClick={toggleSubmenu3}>
                  ENTREPRISES <IoIosArrowDown />
                </li>
                {isSubmenuOpen3 && (
                  <ul className="pl-6">
                    <Link to="/expertise" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Notre expertise
                      </li>
                    </Link>
                    <Link to="/demarche-rse" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        S'engager dans une démarche RSE
                      </li>
                    </Link>
                    <Link to="/taxe-apprentissage" onClick={() => closeMenu()}>
                      <li className="border-b-2 py-2 text-[#646765]">
                        Taxe d'apprentissage
                      </li>
                    </Link>
                  </ul>
                )}
                <li>
                  <Link to="/contact" onClick={() => closeMenu()}>
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
