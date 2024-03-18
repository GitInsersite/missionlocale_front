import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import '/instagram.css'


function Footer() {
  return (
    <>
      <div>
        <div className="bg-[#252323] px-8 pb-8 pt-8 md:flex xl:px-52 justify-between">
          <div className="md:w-[30%] overflow-x-auto md:pr-4 text-white pb-4 mr-4 md:pb-0">
            <ul className=" pr-8 text-start text-white text-sm">
              <li className="text-white text-sm md:mb-2">
                <Link to="" onClick={() => window.scrollTo(0, 0)}>
                  <img
                    src="/logo1.png"
                    alt="logo mission locale des Mureaux"
                    className="bg-white rounded-lg mb-6 w-60 h-auto"
                  />
              </Link>
              </li>
              {/* <li class="text-sm">
                La MISSION LOCALE
                DES MUREAUX
                ACCOMPAGNE LES
                JEUNES DE 16 À 25 ANS<br />
                DANS LA RECHERCHE
                D&apos;EMPLOI, DE
                FORMATION OU
                D&apos;ALTERNANCE
              </li> */}
            </ul>
          </div>
          
          <div className="md:w-[20%] md:pr-4 text-white pb-4 mb-2 md:pb-0">
            <ul className="text-start text-white text-sm">
              <li><h2 className="justify-start text-white font-bold mb-2 md:mb-4">ACCÈS RAPIDE</h2></li>
              <li><Link to="/"className="cursor-pointer"onClick={() => window.scrollTo(0, 0)}>Mission Locale</Link></li>
              <li><Link to="/se-former" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
              <li><Link to="/actualites" onClick={() => window.scrollTo(0, 0)}>Actualités</Link></li>
              <li><Link to="/ateliers" onClick={() => window.scrollTo(0, 0)}>Ateliers</Link></li>
              <li><Link to="/connexion-entreprise" onClick={() => window.scrollTo(0, 0)}>Entreprises</Link></li>
              <li><Link to="/connexion-jeune" onClick={() => window.scrollTo(0, 0)}>Jeunes</Link></li>
            </ul>
          </div>

          <div className="md:w-[20%] md:pr-4 text-white pb-4 mb-2 md:pb-0">
            <ul  className="text-start text-white text-sm">
              <li><h2 className="justify-start text-white font-bold mb-2  md:mb-4">HORAIRES D&apos;OUVERTURE</h2></li>
              <li>Du Lundi au Vendredi</li>
              <li>De 08H45 à 12H15</li>
              <li>De 13H30 à 17H30</li>
            </ul>
          </div>

          <div className="md:w-[20%] md:pr-4 text-white pb-4 mb-2 md:pb-0">
            <ul  className="text-start text-white text-sm">
              <li><h2 className="font-bold md:mb-2">NOUS CONTACTER</h2></li>
              <li className="text-white text-sm md:mb-2">
                <a href="mailto:contact@mureaux-mlidf.org" className="text-white">contact@mureaux-mlidf.org</a>
                </li>
              <li className="text-white text-sm md:mb-3">
                <a href="tel:01-30-91-21-50" className="text-white">01.30.91.21.50</a>
              </li>
            </ul>
            
            <ul   className=" mt-2 text-start text-white text-sm">
              <li>
                  <h2  className="font-bold md:mb-2">NOUS SUIVRE :</h2>
                </li>
              <li>
                <div className="flex items-center space-x-4 my-2">
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
              </li>
            </ul>
          </div>

          <div className="md:w-[20%] md:pr-4 text-white pb-4 mb-2 md:pb-0">
            <ul className="text-start text-white text-sm">
              <li>
                <h2 className="font-bold md:mb-2">NOUS LOCALISER</h2></li>
              <li>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.0406529566458!2d1.9105878751635066!3d48.9907837913822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6928ec8766197%3A0x4a462aa9e0eb44c3!2s38%20Av.%20Paul%20Raoult%2C%2078130%20Les%20Mureaux!5e0!3m2!1sfr!2sfr!4v1699452035578!5m2!1sfr!2sfr"
                  style={{ width: "", height: "" }}
                  className=" my-4  mr-8 rounded-lg mb-6 sm:min-w-1/4 sm:max-w-1/2 md:w-full"
                ></iframe>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-100% bg-black py-3 border-t-2 border-gray-500">
          <p className="text-white text-[8px] text-center md:text-xs">
            © 2023 MISSION LOCALE DES MUREAUX - TOUS DROITS RESERVES - <Link to="/info-legale">INFORMATION
              LEGALES</Link> - <Link to="/politique-confidentialite">POLITIQUE DE CONFIDENTIALITE</Link>
          </p>
        </div>
      </div>

    </>
  );
}

export default Footer;
