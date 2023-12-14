import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-slate-700 px-8 pb-8 pt-8">
        <div>
          <img
            src="./public/logo1.png"
            alt=""
            className="bg-white rounded-lg mb-6"
          />
          <p className="text-white text-xs">
            LA MISSION LOCALE DES MUREAUX ACCOMPAGNE LES JEUNES DE 16 A 25 ANS
            DANS LA RECHERCHE D'EMPLOI, DE FORMATION OU D'AlTERNANCE{" "}
          </p>
        </div>
        <div>
          <h2 className="text-white mt-6 font-bold">ACCES RAPIDE</h2>
          <p className="text-white text-xs">
            <Link to="/">LA MISSION LOCALE</Link><br />
            <Link to="/se-former">SERVICES</Link> <br />
            <Link to="/actualites">ACTUALITES</Link> <br />
            <Link to="/ateliers">ATELIERS</Link> <br />
            <Link to="/">ENTREPRISES</Link> <br />
            <Link to="/">JEUNES</Link>
          </p>
        </div>
        <div>
          <h2 className="text-white mt-6 font-bold">HORAIRES D'OUVERTURE:</h2>
          <p className="text-white text-xs">
            DU LUNDI AU VENDREDI <br />
            DE 08H45 A 12H15 ET <br />
            DE 13H30 A 17H30
          </p>
        </div>
        <div className="text-white text-xs mt-6 font-bold">
          <div>
            <h2 className="flex items-center">
              NOUS SUIVRE:
              <Link>
                <FaLinkedinIn className=" text-white ml-2" />
              </Link>
              <Link>
                <FaFacebookF className=" text-white ml-2"/>
              </Link>
              <Link>
              <FaInstagram className=" text-white ml-2"/>
              </Link>
            </h2>
          </div>
          <h2>NOUS CONTACTER</h2>
          <h2>NOUS LOCALISER</h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.0406529566458!2d1.9105878751635066!3d48.9907837913822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6928ec8766197%3A0x4a462aa9e0eb44c3!2s38%20Av.%20Paul%20Raoult%2C%2078130%20Les%20Mureaux!5e0!3m2!1sfr!2sfr!4v1699452035578!5m2!1sfr!2sfr"
              style={{ width: "100%", height: "150px" }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-100% bg-black py-3 border-t-2 border-gray-500">
        <p className="text-white text-[8px] text-center">
          © 2023 MISSION LOCALE DES MUREAUX - TOUS DROITS RESERVES - INFORMATION
          LEGALES - POLITIQUE DE CONFIDENTIALITE
        </p>
      </div>
    </>
  );
}

export default Footer;
