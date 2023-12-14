import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubmenuOpen1, setSubmenuOpen1] = useState(false);
  const [isSubmenuOpen2, setSubmenuOpen2] = useState(false);
  const [isSubmenuOpen3, setSubmenuOpen3] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu1 = () => {
    setSubmenuOpen1(!isSubmenuOpen1);
  };

  const toggleSubmenu2 = () => {
    setSubmenuOpen2(!isSubmenuOpen2);
  };

  const toggleSubmenu3 = () => {
    setSubmenuOpen3(!isSubmenuOpen3);
  };

  return (
    <div>
      <div className="flex items-center justify-between ml-10 relative">
        <Link to="/">
          <img
            src="./public/logo1.png"
            alt="logo-mission-local"
            className="w-40 h-15"
          />
        </Link>
        <GiHamburgerMenu
          className="w-5 h-5 cursor-pointer"
          onClick={toggleMenu}
        />
      </div>
      {isMenuOpen && (
        <div className="mt-4 ml-10">
          <ul>
            <li className="flex items-center" onClick={toggleSubmenu1}>
              LA MISSION LOCAL <IoIosArrowDown />
            </li>
            {isMenuOpen && isSubmenuOpen1 && (
              <ul className="absolute left-0 mt-2 ml-0 p-2 bg-white shadow">
                <li>
                  <Link to="/nos-missions">Nos missions</Link>
                </li>
                <li>
                  <Link to="/nos-communes">Nos communes</Link>
                </li>
                <li>
                  <Link to="/gouvernance">La gouvernance</Link>
                </li>
                <li>
                  <Link to="/equipe">Notre équipe</Link>
                </li>
              </ul>
            )}
            <li className="flex items-center" onClick={toggleSubmenu2}>
              SERVICES <IoIosArrowDown />
            </li>
            {isMenuOpen && isSubmenuOpen2 && (
              <ul className="absolute left-0 mt-2 ml-0 p-2 bg-white shadow z-50">
                <li>
                  <Link to="/se-former">Se former</Link>
                </li>
                <li>
                  <Link to="/sorienter">S'orienter</Link>
                </li>
                <li>
                  <Link to="/trouver-un-emploi">Trouver un emploi</Link>
                </li>
                <li>
                  <Link to="/etre-accompagne">Etre accompagne</Link>
                </li>
              </ul>
            )}
            <li>
              <Link>ACTUALITES</Link>
            </li>
            <li>
              <Link>ATELIERS</Link>
            </li>
            <li className="flex items-center" onClick={toggleSubmenu3}>
              ENTREPRISES <IoIosArrowDown />
            </li>
            {isMenuOpen && isSubmenuOpen3 && (
              <ul className="absolute left-0 mt-2 ml-0 p-2 bg-white shadow z-50">
                <li>
                  <Link to="/expertise">Notre expertise</Link>
                </li>
                <li>
                  <Link to="/demarche-rse">S'engager dans une démarche RSE</Link>
                </li>
                <li>
                  <Link to="/taxe-apprentissage" >Taxe d'apprentissage</Link>
                </li>
              </ul>
            )}
            <li>
              <Link>CONTACTEZ-NOUS</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
