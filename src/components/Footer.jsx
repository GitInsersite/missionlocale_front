import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '/instagram.css'


function Footer() {
  return (
    <>
      <div className="bg-[#252323] px-8 pb-8 pt-8 md:flex xl:px-52">
        <div className="md:w-[30%] pb-4 md:pb-0 ">
          <Link to="" onClick={() => window.scrollTo(0, 0)}>
            <img
              src="/logo1.png"
              alt=""
              className="bg-white rounded-lg mb-6 w-60"
            />
          </Link>
          <p className="text-white text-sm">
            LA MISSION LOCALE DES MUREAUX ACCOMPAGNE LES JEUNES DE 16 À 25 ANS
            DANS LA RECHERCHE D&apos;EMPLOI, DE FORMATION OU D&apos;ALTERNANCE{" "}
          </p>
        </div>
        <div className="md:w-[20%] md:flex md:flex-col md:items-center pb-4 md:pb-0">
          <h2 className="text-white font-bold md:mb-4">ACCÈS RAPIDE</h2>
          <p className="text-white text-sm">
            <Link
              to=""
              className="cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              LA MISSION LOCALE
            </Link>
            <br />
            <Link to="/se-former" onClick={() => window.scrollTo(0, 0)}>SERVICES</Link> <br />
            <Link to="/actualites" onClick={() => window.scrollTo(0, 0)}>ACTUALITÉS</Link> <br />
            <Link to="/ateliers" onClick={() => window.scrollTo(0, 0)}>ATELIERS</Link> <br />
            <Link to="/connexion-entreprise" onClick={() => window.scrollTo(0, 0)}>ENTREPRISES</Link> <br />
            <Link to="/connexion-jeune" onClick={() => window.scrollTo(0, 0)}>JEUNES</Link>
          </p>
        </div>
        <div className="md:w-[20%] md:pr-4 text-white pb-4 md:pb-0">
          <h2 className="text-white font-bold md:mb-4">
            HORAIRES D&apos;OUVERTURE:
          </h2>
          <p className="text-white text-sm md:mb-3">
            DU LUNDI AU VENDREDI <br />
            DE 08H45 À 12H15 ET <br />
            DE 13H30 À 17H30
          </p>
          
          <h2 className="font-bold md:mb-2">NOUS CONTACTER :</h2>
          <h3 className="text-white text-sm md:mb-2">contact@mureaux-mlidf.org</h3>
          <h4 className="text-white text-sm md:mb-3">01.30.91.21.50</h4>
          <div>
            <h2 className="flex items-center font-bold md:mb-3">
              NOUS SUIVRE :
            </h2>
            <div>
 
  <div className="flex items-center space-x-2">
    <a href="https://fr.linkedin.com/in/la-mission-locale-intercommunale-des-mureaux-b403b52b0" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 hover:scale-110 rounded-full p-2 bg-blue-700 text-white">
      <FaLinkedinIn className="text-white" />
    </a>
    <a href="https://www.instagram.com/mlmureaux/?hl=fr" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 hover:scale-110 rounded-full p-2 bg-gradient-to-tr from-pink-700 to-pink-400 text-white">
  <FaInstagram className="text-white" />
</a>

    <a href="https://www.facebook.com/mureauxmlidf/?locale=fr_FR" target="_blank" rel="noopener noreferrer" className="transition-all duration-500 hover:scale-110 rounded-full p-2 bg-blue-800 text-white">
      <FaFacebookF className="text-white" />
    </a>
  </div>
</div>

          </div>
        </div>
        <div className="md:w-[20%] md:pr-4 text-white pb-4 md:pb-0">
         
        

          <h2 className="font-bold md:mb-2">NOUS LOCALISER :</h2>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.0406529566458!2d1.9105878751635066!3d48.9907837913822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6928ec8766197%3A0x4a462aa9e0eb44c3!2s38%20Av.%20Paul%20Raoult%2C%2078130%20Les%20Mureaux!5e0!3m2!1sfr!2sfr!4v1699452035578!5m2!1sfr!2sfr"
              style={{ width: "", height: "" }}
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-100% bg-black py-3 border-t-2 border-gray-500">
        <p className="text-white text-[8px] text-center md:text-xs">
          © 2023 MISSION LOCALE DES MUREAUX - TOUS DROITS RESERVES - INFORMATION
          LEGALES - POLITIQUE DE CONFIDENTIALITE
        </p>
      </div>
    </>
  );
}

export default Footer;
