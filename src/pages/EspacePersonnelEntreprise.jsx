import { Link } from "react-router-dom";

function EspacePersonnelEntreprise() {
  return (
    <div id="infoSection">
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold sm:h-16 md:h-28 lg:h-40 xl:h-52"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image14.png)" }}
      >
        <h1 className="md:text-3xl">ESPACE ENTREPRISE</h1>
      </div>
      <div className="flex flex-col items-center bg-[#F6F6F6] md:px-32">
        <h2 className="font-bold text-black text-lg mb-4 mt-4 md:text-2xl">
          <span className="border-b-2 border-[#F29200] pb-[0.5px]">
            INFORMATIONS
          </span>{" "}
          PERSONNELLES
        </h2>
        <div className="flex flex-col w-64 h-48 rounded-3xl mt-4 mb-6 p-4 bg-white md:w-[360px]">
          <p className="font-bold mb-2">Entreprise :</p>
          <p className="font-bold mb-2">Numéro SIRET :</p>
          <p className="font-bold mb-2">Interlocuteur :</p>
          <p className="font-bold mb-2">Téléphone :</p>
          <p id="offreSection" className="font-bold">Adresse mail :</p>
        </div>
      </div>
      <h2 className="font-bold text-black text-lg bg-white text-center md:text-2xl">
        DEPOSER LES OFFRES D'EMPLOI
      </h2>
      <div className="flex flex-col items-center bg-[#F6F6F6]">
        <div className="flex flex-col w-64 h-36 rounded-3xl p-4 md:w-[360px]">
          <p className="pb-3">
            Ce service vous permet de déposer vos offres d'emploi
          </p>
          <Link className="bg-[#F29200] text-white py-1 p-2 rounded-md mb-8 font-semibold w-56 text-center">
            ENVOYER UN DOCUMENT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EspacePersonnelEntreprise;
