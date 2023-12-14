import {  FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function Contact() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image16.png)" }}
      >
        <h1>ETRE ACCOMPAGNE</h1>
      </div>
      <div className=" flex flex-col items-center pt-6 border-red-500 border-2 bg-[#F6F6F6]">
        <div className="border-2 border-red-600 flex flex-col items-center mx-4 bg-white rounded-lg mb-4 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">ADRESSE</h2>
          <p className="text-center mb-2">
            38 AV.PAUL RAOULT, 78130 LES MUREAUX
          </p>
          <p className="mb-2">01 30 91 21 50</p>
          <p className="mb-2">contact@missionlocale-mureaux.org</p>
        </div>
        <div className="border-2 border-red-600 flex flex-col items-center mx-4 bg-white rounded-lg mb-4 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">HEURES D'OUVERTURE</h2>
          <p className="text-center mb-2">
            DU LUNDI AU JEUDI: <br /> 8:45-12:15, 13:30-17:30
          </p>
          <p className="mb-2 text-center">
            LE VENDREDI: <br /> 8:45-12:15, 13:30-17:15
          </p>
        </div>
        <div className="border-2 border-red-600 flex flex-col items-center mx-4 bg-white rounded-lg mb-4 w-[90%]">
          <h2 className="font-semibold text-lg mb-2">
            SUIVEZ-NOUS SUR LES RÉSEAUX
          </h2>
          <div className="flex justify-between w-[80%] mt-2 mb-2">
            <FaLinkedin className="w-10 h-10"/>
            <FaFacebook className="w-10 h-10"/>
            <FaInstagram className="w-10 h-10"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
