import { Link } from "react-router-dom";

function EspacePersonnelEntreprise() {
  return (
    <div>
      <div
        className="bg-image bg-cover bg-center h-12 flex justify-center items-center text-white font-bold"
        style={{ backgroundImage: "url(/public/MicrosoftTeams-image14.png)" }}
      >
        <h1>ESPACE ENTREPRISE</h1>
      </div>
      <div className="flex flex-col items-center bg-[#F6F6F6] border border-red-600">
        <h2 className="font-bold text-black text-lg mb-4 mt-4">
          <span className="border-b-2 border-[#F29200] pb-[0.5px]">
            INFORMATIONS
          </span>{" "}
          PERSONNELLES
        </h2>
        <div className="flex flex-col w-64 h-48 rounded-3xl mt-4 mb-6 p-4 bg-white border border-blue-600">
          <p className="font-bold mb-2">Entreprise :</p>
          <p className="font-bold mb-2">Numéro SIRET :</p>
          <p className="font-bold mb-2">Interlocuteur :</p>
          <p className="font-bold mb-2">Téléphone :</p>
          <p className="font-bold">Adresse mail :</p>
        </div>
      </div>
      <h2 className="font-bold text-black text-lg bg-white text-center">
        <span className="border-b-2 border-[#F29200] pb-[0.5px]">DEPOSER</span>{" "}
        LES OFFRES D'EMPLOI
      </h2>
      <div className="flex flex-col items-center bg-[#F6F6F6] border border-red-600">
        <div className="flex flex-col w-64 h-36 rounded-3xl p-4">
          <p className="pb-3">
            Ce service vous permet de déposer vos offres d'emploi
          </p>
          <Link className="bg-[#F29200] text-white py-1 p-2 rounded-md mb-8 font-semibold w-[100%] text-center">
            ENVOYER UN DOCUMENT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EspacePersonnelEntreprise;
